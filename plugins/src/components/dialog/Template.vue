<template>
  <div class="bg-white p-3 rounded-lg">
    <button class="m-2" type="button" draggable="true" @dragstart="drag" @touchstart="touch" style="cursor: grab">
      我要拖曳
    </button>
    <button class="m-2" type="button" @click="open">多開一個</button>
  </div>
</template>

<script>
import { useDialog } from '@/components/dialog'

const TemplateDialog = {
  name: 'Template',
  props: ['drag', 'touch', 'updated', 'props'],
  setup() {
    const dialog = useDialog()
    return {
      open: () => {
        dialog.popup(TemplateDialog, {})
      },
    }
  },
}

export default TemplateDialog
</script>

<style></style>
