<template>
  <div @click="clickBtn" class="navbtn" :class="{ active: open }">
    <div class="navbtn__line top-line"></div>
    <div class="navbtn__line center-line"></div>
    <div class="navbtn__line bottom-line"></div>
  </div>
</template>
<script>
export default {
  name: 'Navbtn',
  data() {
    return {
      open: false,
    }
  },
  emits: {
    btnClick: () => true,
  },
  methods: {
    clickBtn() {
      this.open = !this.open
      this.$emit('btnClick', this.open)
    },
  },
}
</script>
<style lang="scss" scoped>
.navbtn {
  width: 25px;
  height: 20px;
  position: relative;
  cursor: pointer;
  .navbtn__line {
    background-color: currentColor;
    position: absolute;
    left: 0;
    right: 0;
  }
  .top-line {
    top: 0;
    height: 16%;
    transition: height 300ms ease;
  }
  .bottom-line {
    bottom: 0;
    height: 18%;
    transition: height 300ms ease;
  }
  .center-line {
    will-change: clip-path;
    top: 0;
    bottom: 0;
    clip-path: polygon(
      50% 50%,
      0 50%,
      0 42%,
      50% 42%,
      100% 42%,
      100% 50%,
      50% 50%,
      100% 50%,
      100% 58%,
      50% 58%,
      0 58%,
      0 50%
    );
    transition: clip-path 300ms linear;
  }
  &.active {
    .center-line {
      clip-path: polygon(
        40% 50%,
        10% 10%,
        20% 0%,
        50% 40%,
        80% 0%,
        90% 10%,
        60% 50%,
        90% 90%,
        80% 100%,
        50% 60%,
        20% 100%,
        10% 90%
      );
    }
    .top-line,
    .bottom-line {
      height: 0;
    }
  }
}
</style>
