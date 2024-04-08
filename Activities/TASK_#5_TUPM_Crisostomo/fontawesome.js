import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

// Make sure to add the specific icon styles you want to use
library.add(fas)

export default function ({ app }) {
  // Register the FontAwesomeIcon component globally
  app.component('font-awesome-icon', FontAwesomeIcon)
}
