import React, { useContext } from 'react'

import { context } from 'dumi/theme'

// @ts-ignore
import DefaultLayout from 'dumi-theme-default/es/layout'
// @ts-ignore
import MobileLayout from 'dumi-theme-mobile/es/layouts'

const SakinaLayout: React.FC = (props: any) => {

  const conf = useContext(context)
  const isMobile = Boolean(conf.meta?.iphone)

  if (isMobile) {
    return <MobileLayout {...props} />
  }

  return (
    <DefaultLayout {...props} />
  )
}

export default SakinaLayout
