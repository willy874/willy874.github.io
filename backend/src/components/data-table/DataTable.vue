<template>
  <div class="datatable">
    <div class="datatable__container">
      <div class="datatable__container__table">
        <div class="datatable__container__head">
          <div class="datatable__table__tr">
            <div
              class="datatable__table__th"
              v-for="table in tables"
              :key="table.id"
              :style="{
                textAlign: table.align,
                ...widthType(table.width),
                ...table.columnStyle,
                ...table.headStyle,
              }"
            >
              <div class="datatable__table__th__block">
                {{ table.title }}
              </div>
            </div>
          </div>
        </div>
        <div class="datatable__container__body">
          <div v-for="(data, index) in listData.data" class="datatable__table__tr" :key="data.id">
            <div
              class="datatable__table__td"
              v-for="table in tables"
              :key="table.id"
              :style="{
                textAlign: table.align,
                ...widthType(table.width),
                ...table.columnStyle,
                ...table.bodyStyle,
              }"
            >
              <div
                v-if="typeof table.field === 'object' && table.field.render"
                :is="table.field"
                v-bind="{ listIndex: index, listData, ...table.props }"
              ></div>
              <div
                v-else
                class="datatable__table__td__block"
                :style="{ webkitLineClamp: table.lineClamp || 2 }"
                v-html="content(table.field, index, listData)"
              ></div>
            </div>
          </div>
        </div>
        <div class="datatable__container__foot" v-if="$slots.footer">
          <div class="datatable__table__tr">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { v4 as uuid } from 'uuid'
import { ListModel } from '@/models'
import Draggable from 'vuedraggable'

/**
 * @type {Tables}
 * @property {Number} id
 * @property {String} align
 * @property {String} width
 * @property {String|Function|VueComponent} field
 * @property {Number} lineClamp
 * @property {Style} headStyle
 * @property {Style} columnStyle
 * @property {Style} bodyStyle
 *
 * @param {Array<Tables>} tables
 * @param {ListModel} listData
 */
export default {
  props: {
    tables: {
      type: Array,
      default: () => [],
    },
    listData: {
      type: ListModel,
      default: () => new ListModel(),
    },
  },
  data() {
    return {}
  },
  created() {
    this.tables.forEach((item) => {
      item.id = uuid()
    })
  },
  computed: {
    sortList() {
      return this.listData.data.map((model) => {
        return {
          id: model.id,
        }
      })
    },
  },
  methods: {
    widthType(width) {
      switch (true) {
        case width === 'grow':
          return { flexGrow: 1, flexShrink: 1 }
        case /%|rem|px/.test(width):
          return { width }
        default:
          return { width: 0 }
      }
    },
    content(field, index, listData) {
      if (typeof field === 'string') {
        return listData.data[index][field]
      }
      if (typeof field === 'function') {
        return field(listData.data, index)
      }
      return ''
    },
    draggableChanged(e) {
      this.$emit('draggableChanged', e)
    },
  },
  components: {
    Draggable,
  },
}
</script>

<style lang="scss" scoped>
.datatable {
  display: flex;
  position: relative;
  flex-grow: 1;
  &__container {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    &__table {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border: 1px solid #eee;
      border-radius: 0.5rem;
      overflow: auto;
      &::-webkit-scrollbar {
        width: 5px;
        height: 10px;
      }
      &::-webkit-scrollbar-track {
        background: #ccc;
      }
      &::-webkit-scrollbar-thumb {
        background: #999;
        border-radius: 0.5rem;
      }
      &::-webkit-scrollbar-button {
        width: 0;
        height: 0;
      }
      &::-webkit-scrollbar-corner {
        background: #555;
        width: 5px;
        height: 5px;
        border-radius: 50%;
      }
      &::-webkit-scrollbar-track-piece {
        background: #eee;
      }
    }
    &__head {
      position: sticky;
      top: 0;
      left: 0;
      right: 0;
      z-index: 10;
      flex-shrink: 0;
      background-color: #f6f6f6;
      .datatable__table__tr {
        border-bottom: 2px solid #999;
      }
    }
    &__body {
      position: relative;
      flex-grow: 1;
      flex-shrink: 1;
      .datatable__table__tr {
        &:last-of-type {
          border: 0;
        }
        &:hover {
          background-color: #f6f6f6;
        }
      }
    }
    &__foot {
      background-color: #f6f6f6;
      position: sticky;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 10;
      flex-shrink: 0;
      .datatable__table__tr {
        border-top: 2px solid #999;
        border-bottom: 0;
      }
    }
  }
}
.datatable__table {
  &__tr {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
  &__th {
    overflow: hidden;
    flex-shrink: 0;
    &__block {
      width: 100%;
      padding: 0.5rem;
      white-space: nowrap;
      font-weight: bold;
    }
  }
  &__td {
    overflow: hidden;
    flex-shrink: 0;
    color: #343a40;
    &__block {
      width: 100%;
      margin: 0.5rem 0;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      white-space: normal;
    }
  }
}
</style>
