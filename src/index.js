import React from 'react'
import ReactDom from 'react-dom'

import { App } from './app'

const app = React.createElement(App)

ReactDom.render(app, document.getElementById('root'))
