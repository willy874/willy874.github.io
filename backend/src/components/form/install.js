// import PhotoFrame from './image-upload/photo-frame'
import InputBox from './input-box/index.vue'
import TextareaBox from './textarea-box/index.vue'
import ErrorMessage from './error-message'

const FromInstall = {
  install(Vue) {
    // Vue.component('photo-frame', PhotoFrame)
    Vue.component('InputBox', InputBox)
    Vue.component('TextareaBox', TextareaBox)
    Vue.component('ErrorMessage', ErrorMessage)
  },
}

export default FromInstall
