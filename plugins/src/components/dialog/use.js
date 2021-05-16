import { reactive } from 'vue'
import Dialog from './dialog'

const DialogNative = reactive(new Dialog())

export const useDialog = () => {
  return DialogNative
}
