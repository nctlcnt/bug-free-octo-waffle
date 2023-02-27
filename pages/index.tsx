import React from 'react'
import { LeftComponent, RightComponent, Layout } from '../components'

export default () => {
  return <Layout left={<LeftComponent />} right={<RightComponent />} isHome />
}
