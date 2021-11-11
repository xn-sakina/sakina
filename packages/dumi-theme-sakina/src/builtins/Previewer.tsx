import React, { useContext } from 'react'

import { context } from 'dumi/theme'

// @ts-ignore
import DefaultPreviewer from 'dumi-theme-default/es/builtins/Previewer'
// @ts-ignore
import MobilePreviewer from 'dumi-theme-mobile/es/builtins/Previewer'

const SakinaPreviewer: React.FC = (props: any) => {

  const conf = useContext(context)
  const isMobile = Boolean(conf.meta?.iphone)

  if (isMobile) {
    return <MobilePreviewer {...props} />
  }

  return (
    <DefaultPreviewer {...props} />
  )
}

export default SakinaPreviewer
