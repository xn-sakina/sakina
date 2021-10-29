const test = require('tape')
const fs = require('fs-extra')
const path = require('path')
const execa = require('execa')
const chalk = require('chalk')
const { ESLint } = require('eslint')
const outputDirPath = path.resolve(__dirname, './output')

const log = (msg) => console.log(chalk.yellow(msg))
const TEST_FILENAME = 'a.ts'

const OUTPUT = {
  recommended: path.resolve(outputDirPath, './recommended.json'),
  react: path.resolve(outputDirPath, './react.json'),
}

const CONFIG = {
  recommended: path.resolve(__dirname, './rc-recommended.js'),
  react: path.resolve(__dirname, './rc-react.js'),
}

// 1. ensure output dir
const ensureOutputDir = () => {
  const isExist = fs.existsSync(outputDirPath)
  if (!isExist) {
    fs.mkdirSync(outputDirPath)
  }
}
log(`ensure output dir...`)
ensureOutputDir()

// 2. build
const execCommand = (command) => {
  execa.commandSync(command, { stdio: 'inherit', shell: true })
}
const execEslintPrint = (configFilePath, outputPath) => {
  execCommand(
    `eslint --no-eslintrc -c ${configFilePath} --print-config ${TEST_FILENAME} > ${outputPath}`
  )
}
log(`output rebuild...`)
execCommand(`pnpm build`)

// 3. print config for check
const checkEslintConfig = async (configFilePath, outputFilePath, t) => {
  execEslintPrint(configFilePath, outputFilePath)
  const eslint = new ESLint({
    useEslintrc: false,
    overrideConfigFile: configFilePath,
  })
  const result = await eslint.calculateConfigForFile(TEST_FILENAME)
  const outputConfig = fs.readJSONSync(outputFilePath)
  t.equal(JSON.stringify(result), JSON.stringify(outputConfig))
  t.end()
}

test('output config: recommended (test/output/recommended.json)', async (t) => {
  await checkEslintConfig(CONFIG.recommended, OUTPUT.recommended, t)
})

test('output config: react (test/output/react.json)', async (t) => {
  await checkEslintConfig(CONFIG.react, OUTPUT.react, t)
})

// 4.format test
const source = `
const     a="b";;;;
const b  =()=>{}
`
const expect = `
const a = 'b'
const b = () => {}
`
test('format test: check the code is formatted as expected', async (t) => {
  const eslint = new ESLint({
    useEslintrc: false,
    overrideConfigFile: CONFIG.recommended,
    fix: true,
  })
  const lintResult = await eslint.lintText(source.trim())
  t.equal(lintResult[0].output.trim(), expect.trim())
  t.end()
})
