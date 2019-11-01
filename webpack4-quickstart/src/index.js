import _ from 'lodash'

import 'assets/css/style.css'
import 'assets/css/style.scss'

function createDomElement() {
  var dom = document.createElement('div')
  dom.innerHTML = _.join(['Hello', 'world'], '')
  dom.className = 'hello'
  return dom
}

document.body.appendChild(createDomElement())
