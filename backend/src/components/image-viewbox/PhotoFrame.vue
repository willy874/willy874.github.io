<template>
  <div class="photo-frame" @click.stop="resetSelect">
    <Draggable v-model="ImageModelList" v-if="model.length" @change="dragSort" class="photo-frame__container">
      <template v-for="(image, index) in model">
        <div
          class="photo-frame__container__item"
          v-if="!image.deleted"
          :key="image.uuid"
          @click.stop="clickImageItem($event, index)"
          @dragover="dragover($event, image, index)"
          @drop="dropFileInput($event, image, index)"
        >
          <div
            class="photo-frame__container__item__block"
            :class="{ 'photo-frame__container__item__block--active': isActive(image) }"
          >
            <ImageBox
              :src="image"
              :default-image="defaultImage"
              display="background"
              class="photo-frame__container__item__block__image"
            />
            <div
              class="photo-frame__container__item__block__close"
              v-html="closeIcon"
              @click.stop="deleteImage($event, image)"
            ></div>
            <form class="photo-frame__container__item__block__form" @click.stop>
              <div class="photo-frame__container__item__block__form__title">
                <input
                  v-model="image.image_title"
                  type="text"
                  class="photo-frame__container__item__block__form__title__input"
                  placeholder="標題文字"
                  @change="changeModel($event, image)"
                />
              </div>
              <div class="photo-frame__container__item__block__form__alt">
                <input
                  v-model="image.image_alt"
                  type="text"
                  class="photo-frame__container__item__block__form__alt__input"
                  placeholder="描述文字"
                  @change="changeModel($event, image)"
                />
              </div>
            </form>
          </div>
          <input
            class="photo-frame__container__item__input"
            type="file"
            ref="input"
            @change="changeFileInput($event, image, index)"
          />
        </div>
      </template>
    </Draggable>
    <div class="photo-frame__container" v-else>
      <div
        class="photo-frame__container__item photo-frame__container__item--create"
        @dragover="dragover"
        @drop="dropFileInput"
      >
        <div class="photo-frame__container__item__block" @click="clickCreateImage('create')">
          <div
            class="photo-frame__container__item__block__image"
            :style="{ backgroundImage: `url(${uploadImage})` }"
          ></div>
        </div>
        <input
          class="photo-frame__container__item__input"
          type="file"
          multiple="true"
          ref="create"
          @change="changeFileInput"
        />
      </div>
    </div>
    <div class="photo-frame__fixed-bar">
      <div
        class="photo-frame__fixed-bar__plus"
        v-if="model.length"
        v-html="plusIcon"
        @click.stop="clickCreateImage('plus')"
      >
        <input
          class="photo-frame__container__item__plus__input"
          type="file"
          multiple="true"
          ref="plus"
          @change="changeFileInput"
        />
      </div>
      <div
        class="photo-frame__fixed-bar__trash"
        v-if="selecteList.length"
        v-html="trashIcon"
        @click.stop="clearAll"
      ></div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import { v4 as uuid } from 'uuid'
import Draggable from 'vuedraggable'
import { ImageModel } from '@/models'
import { FileName } from '@/utility'
import defaultImage from './default-image.jpg'
import addIcon from './add.svg'

const plusIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 448" fill="currentColor">
<path d="m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0"/>
</svg>`
const closeIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 365.696 365.696" fill="currentColor">
<path d="m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0"/>
</svg>`
const trashIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 5112" fill="currentColor">
<path d="m424 64h-88v-16c0-26.467-21.533-48-48-48h-64c-26.467 0-48 21.533-48 48v16h-88c-22.056 0-40 17.944-40 40v56c0 8.836 7.164 16 16 16h8.744l13.823 290.283c1.221 25.636 22.281 45.717 47.945 45.717h242.976c25.665 0 46.725-20.081 47.945-45.717l13.823-290.283h8.744c8.836 0 16-7.164 16-16v-56c0-22.056-17.944-40-40-40zm-216-16c0-8.822 7.178-16 16-16h64c8.822 0 16 7.178 16 16v16h-96zm-128 56c0-4.411 3.589-8 8-8h336c4.411 0 8 3.589 8 8v40c-4.931 0-331.567 0-352 0zm313.469 360.761c-.407 8.545-7.427 15.239-15.981 15.239h-242.976c-8.555 0-15.575-6.694-15.981-15.239l-13.751-288.761h302.44z"/>
<path d="m256 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z"/>
<path d="m336 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z"/>
<path d="m176 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z"/>
</svg>`

export default {
  name: 'PhotoFrame',
  components: {
    Draggable,
  },
  model: {
    prop: 'model',
    event: 'update',
  },
  props: {
    model: {
      type: Array,
      validator: function (value) {
        const valid = value.every((m) => m instanceof ImageModel)
        if (valid) return valid
        throw new Error('[Component PhotoFrame]: Is v-model must be a ImageModel collection.')
      },
    },
    selecteList: {
      type: Array,
      default: () => [],
    },
    fileLength: {
      type: Number,
      default: 10,
    },
    fileLimit: {
      type: Number,
      default: 0,
    },
    fileType: {
      type: [Array, RegExp, String],
      default: () => {
        return 'image'
      },
    },
    defaultImage: {
      type: String,
      default: defaultImage,
    },
    uploadImage: {
      type: String,
      default: addIcon,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      plusIcon,
      closeIcon,
      trashIcon,
      ImageModelList: [],
    }
  },
  created() {
    this.ImageModelList = this.model.map((image) => {
      image.uuid = uuid()
    })
    this.model.sort((a, b) => a.sort - b.sort)
  },
  methods: {
    clickCreateImage(inputName) {
      this.$refs[inputName].click()
    },
    clickImageItem(e, index) {
      if (e.ctrlKey) {
        const model = this.model[index]
        if (this.selecteList.includes(model)) {
          const index = this.selecteList.indexOf(model)
          this.selecteList.splice(index, 1)
        } else {
          this.selecteList.push(model)
        }
      } else {
        this.$refs.input[index].click()
      }
    },
    resetSelect() {
      this.selecteList.splice(0)
    },
    isActive(item) {
      return this.selecteList.includes(item)
    },
    checkFileLength(fileList) {
      if (fileList.length + this.model.length > this.fileLength) {
        alert('上傳檔案數量超過上限')
        return true
      }
    },
    checkFileLimit(fileList) {
      if (this.fileLimit) {
        if (fileList.every((f) => this.fileLimit < f.size)) {
          alert('上傳檔案大小不得超過' + this.fileLimit + ' bytes')
          return true
        }
      }
    },
    checkFileType(fileList) {
      if (this.fileType) {
        if (typeof this.fileType === 'string' && fileList.some((f) => !new RegExp(this.fileType).test(f.type))) {
          alert('上傳檔案類型必須為 ' + this.fileType)
          return true
        }
        if (this.fileType instanceof RegExp && fileList.some((f) => !this.fileType.test(f.type))) {
          alert('上傳檔案類型必須為 ' + this.fileType.toString())
          return true
        }
        if (
          this.fileType instanceof Array &&
          this.fileType.some((fileType) => {
            if (this.fileType instanceof RegExp) {
              return fileList.some((f) => !fileType.test(f.type))
            } else {
              return fileList.some((f) => !new RegExp(fileType).test(f.type))
            }
          })
        ) {
          alert('上傳檔案類型必須為 ' + this.fileType.join('、'))
          return true
        }
      }
    },
    changeFileInput(e, image, index) {
      const fileList = [...e.target.files]
      this.imageUpload(fileList, index)
    },
    imageUpload(fileList, imageIndex) {
      // 沒有圖片就不動作
      if (fileList.length === 0) {
        return
      }
      // 判斷檔案數量
      if (this.checkFileLength(fileList)) {
        return
      }
      // 判斷檔案大小
      if (this.checkFileLimit(fileList)) {
        return
      }
      // 判斷檔案類型
      if (this.checkFileType(fileList)) {
        return
      }
      // 建立 ImageModel
      this.resetSelect(0)
      fileList
        .map((f, index) => {
          const filename = new FileName(f.name)
          const image = new ImageModel({
            id: 0,
            uuid: uuid(),
            name: f.name,
            image_name: filename.name,
            image_ext: filename.ext,
            created_at: dayjs().format('YYYY/MM/DD HH:mm:ss'),
            updated_at: dayjs().format('YYYY/MM/DD HH:mm:ss'),
            size: f.size,
            type: f.type,
            sort: 99999,
            image_blob: fileList[index],
            edited: true,
          })
          return image
        })
        .forEach((image) => {
          if (fileList.length === 1 && (imageIndex || imageIndex === 0)) {
            this.model[imageIndex].set(image)
          } else {
            this.model.push(image)
          }
          const reader = new FileReader()
          reader.onload = (e) => {
            image.image_base64 = e.target.result
          }
          reader.readAsDataURL(image.image_blob)
        })
      this.model.forEach((image, index) => {
        image.sort = index
      })
      this.model.sort((a, b) => a.sort - b.sort)
    },
    deleteImage(e, image) {
      image.deleted_at = dayjs().format('YYYY-MM-DD HH:mm:ss')
      image.deleted = true
    },
    changeModel(e, image) {
      image.updated_at = dayjs().format('YYYY-MM-DD HH:mm:ss')
      image.edited = true
    },
    clearAll() {
      this.model.forEach((image) => {
        if (this.selecteList.includes(image)) {
          const index = this.model.indexOf(image)
          this.model.splice(index, 1)
        }
      })
      this.resetSelect(0)
    },
    dragover(e, image, index) {
      e.preventDefault()
      e.stopPropagation()
      // console.log('dragover', e)
    },
    dropFileInput(e, image, index) {
      e.preventDefault()
      e.stopPropagation()
      const fileList = [...e.dataTransfer.files]
      this.imageUpload(fileList, index)
    },
    dragSort({ moved }) {
      this.model[moved.newIndex].set({
        sort: moved.oldIndex,
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      }).edited = true
      this.model[moved.oldIndex].set({
        sort: moved.newIndex,
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      }).edited = true
      this.model.sort((a, b) => a.sort - b.sort)
    },
  },
}
</script>

<style lang="scss" scoped>
.photo-frame {
  position: relative;
  &__container {
    display: flex;
    flex-wrap: wrap;
    &__item {
      padding: 0.5rem;
      max-width: 50%;
      flex: 0 0 50%;
      @media (min-width: 576px) {
        max-width: 33.333%;
        flex: 0 0 33.333%;
      }
      @media (min-width: 992px) {
        max-width: 25%;
        flex: 0 0 25%;
      }
      @media (min-width: 1400px) {
        max-width: 20%;
        flex: 0 0 20%;
      }
      &__block {
        margin: auto;
        max-width: 200px;
        border: 1px solid #ccc;
        cursor: pointer;
        border-radius: 0.5rem;
        position: relative;
        &.photo-frame__container__item__block--active {
          box-shadow: 0 0 0 0.25rem rgba(93, 162, 207, 0.7);
        }
        &__image {
          padding-top: 100%;
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
        }
        &__close {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
          width: 2.5rem;
          height: 2.5rem;
          color: #dc3545;
          border-radius: 50%;
          padding: 0.6rem;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s;
          background-color: #eee;
          &:hover {
            background-color: #ddd;
          }
        }
        &__form {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 0.125rem 0;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s;
          input {
            display: block;
            width: 100%;
            height: calc(1.5em + 0.75rem + 2px);
            padding: 0.375rem 0.75rem;
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5;
            color: #495057;
            background-color: #fff;
            background-clip: padding-box;
            border: 1px solid #ced4da;
            border-radius: 0.25rem;
            transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
            &:focus {
              background-color: #fff;
              border-color: #3075a3;
              outline: 0;
              box-shadow: 0 0 0 0.2rem rgb(93 162 207 / 50%);
            }
            &::placeholder {
              text-align: center;
              color: #ccc;
            }
          }
          &__title {
            padding: 0.125rem 1rem;
            &__input {
            }
          }
          &__alt {
            padding: 0.125rem 1rem;
            &__input {
            }
          }
        }
        &:hover .photo-frame__container__item__block__close {
          opacity: 1;
          pointer-events: auto;
        }
        &:hover .photo-frame__container__item__block__form {
          opacity: 1;
          pointer-events: auto;
        }
      }
      &__input {
        position: absolute;
        opacity: 0;
        pointer-events: none;
      }
    }
    .photo-frame__container__item--create {
      position: relative;
      .photo-frame__container__item__block {
        border: 1px solid #ddd;
        cursor: pointer;
        &:hover {
          background-color: #eee;
        }
        &__image {
          opacity: 0.3;
          background-size: 60%;
        }
      }
    }
  }
  &__fixed-bar {
    position: absolute;
    right: 0;
    bottom: 0.25rem;
    display: flex;
    &__trash {
      margin: 0 0.25rem;
      width: 2rem;
      height: 2rem;
      cursor: pointer;
      color: #dc3545;
    }
    &__plus {
      margin: 0 0.25rem;
      width: 2rem;
      height: 2rem;
      cursor: pointer;
      color: #28a745;
      &__input {
        position: absolute;
        opacity: 0;
        pointer-events: none;
      }
    }
  }
}
</style>
