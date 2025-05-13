<template>
  <transition name="viewer-fade">
    <div class="viewer-warp" v-if="visible" :style="{ 'z-index': zIndex }">
      <div
        class="mask"
        @click.self="maskClick"
        :style="{ 'z-index': zIndex }"
      ></div>
      <span
        class="viewer-btn viewer-btn__close"
        @click="close"
        :style="{ 'z-index': zIndex + 1 }"
      >
        <i class="iconfont icon-close"></i>
      </span>
      <template v-if="!isSingle">
        <span
          class="viewer-btn viewer-btn__prev"
          @click="prev"
          :style="{ 'z-index': zIndex + 1 }"
        >
          <i class="iconfont icon-left"></i>
        </span>
        <span
          class="viewer-btn viewer-btn__next"
          @click="next"
          :style="{ 'z-index': zIndex + 1 }"
        >
          <i class="iconfont icon-right"></i>
        </span>
      </template>

      <div
        class="viewer-btn viewer-actions__bar"
        :style="{ 'z-index': zIndex + 2 }"
      >
        <div class="viewer-actions__inner">
          <i class="iconfont icon-zoom" @click="handleActions('zoomOut')"></i>
          <i
            class="iconfont icon-minimize"
            @click="handleActions('zoomIn')"
          ></i>
          <i
            class="iconfont icon-left-rotating"
            @click="handleActions('anticlocelise')"
          ></i>
          <i
            class="iconfont icon-right-rotating"
            @click="handleActions('clocelise')"
          ></i>
          <i
            v-if="!readonly"
            class="iconfont icon-delete"
            @click="deleteFile"
          ></i>
        </div>
      </div>
      <div class="viewer-content">
        <img
          v-if="isImg(currentFile)"
          ref="img"
          :src="currentFile"
          :style="imgStyle"
          @load="handleImgLoad"
          @error="handleImgError"
        />
        <video
          ref="video"
          controls
          v-else-if="isVideo(currentFile)"
          class="viewer-video"
          :style="imgStyle"
          :src="currentFile"
        ></video>
        <p v-else class="errorText" :style="{ 'z-index': zIndex + 1 }">
          无效的URL
        </p>
      </div>
      <NavBar
        :urlList="urlList"
        :currentIndex="index"
        :imageTypes="imageTypes"
        :videoTypes="videoTypes"
        :defaultImgTypes="defaultImgTypes"
        :defaultVideoTypes="defaultVideoTypes"
        :zIndex="zIndex"
        @select="navSelect"
      />
    </div>
  </transition>
</template>

<script lang="ts">
import { getFileExtension } from '../utils'
import NavBar from './nav-bar.vue'
export default {
  name: 'IVViewer',
  components: {
    NavBar,
  },
  props: {
    urlList: {
      type: Array,
      default: () => [],
    },
    currentIndex: {
      type: Number,
      default: 0,
    },
    imageTypes: {
      type: Array,
      default: () => [],
    },
    videoTypes: {
      type: Array,
      default: () => [],
    },
    visible: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    zIndex: {
      type: Number,
      default: 10000,
    },
  },
  data() {
    return {
      loading: true,
      index: 0,
      defaultImgTypes: ['jpg', 'png', 'jpeg'],
      defaultVideoTypes: ['mp4'],
      transform: {
        scale: 1,
        deg: 0,
        offsetX: 0,
        offsetY: 0,
        enableTransition: false,
      },
    }
  },
  watch: {
    currentIndex: {
      handler(newVal) {
        this.index = newVal
      },
      immediate: true,
    },
    index: {
      handler: function () {
        this.reset()
      },
    },
    urlList: {
      handler(val) {
        if (val.length === 0) {
          this.close()
        }
      },
      deep: true,
    },
    visible(val) {
      if (val) {
        this.$emit('open')
      } else {
        this.$emit('close')
      }
    },
  },
  computed: {
    isSingle() {
      return this.urlList.length <= 1
    },
    isFirst() {
      return this.index === 0
    },
    isLast() {
      return this.index === this.urlList.length - 1
    },
    currentFile() {
      return this.urlList[this.index]
    },
    imgStyle() {
      const { scale, deg, offsetX, offsetY, enableTransition } = this.transform
      const style = {
        transform: `scale(${scale}) rotate(${deg}deg)`,
        transition: enableTransition ? 'transform .3s' : '',
        'margin-left': `${offsetX}px`,
        'margin-top': `${offsetY}px`,
        'max-height': '100%',
        'max-width': '100%',
        'z-index': this.zIndex + 1,
      }
      return style
    },
  },
  mounted() {},
  methods: {
    navSelect(data) {
      this.index = data.index
    },
    maskClick() {
      this.$emit('close')
    },
    close() {
      this.$emit('close')
    },
    deleteFile() {
      const fileList = this.urlList.filter((item) => this.currentFile !== item)
      this.$emit('delete', {
        index: this.index,
        url: this.currentFile,
        fileList,
      })
      if (this.index > 0) {
        this.index = this.index - 1
      } else {
        this.index = 0
      }
    },
    isImg(url) {
      if (url) {
        const imagesTypes = this.imageTypes.map((item) => item.toLowerCase())
        const types = Array.from(
          new Set(this.defaultImgTypes.concat(imagesTypes))
        )
        const type = getFileExtension(url)
        return types.includes(type.toLowerCase())
      } else {
        return false
      }
    },
    isVideo(url) {
      if (url) {
        const videoTypes = this.videoTypes.map((item) => item.toLowerCase())
        const types = Array.from(
          new Set(this.defaultVideoTypes.concat(videoTypes))
        )
        const type = getFileExtension(url)
        return types.includes(type.toLowerCase())
      } else {
        return false
      }
    },
    reset() {
      this.transform = {
        scale: 1,
        deg: 0,
        offsetX: 0,
        offsetY: 0,
        enableTransition: false,
      }
    },
    prev() {
      if (this.isFirst) return
      const len = this.urlList.length
      this.index = (this.index - 1 + len) % len
    },
    next() {
      if (this.isLast) return
      const len = this.urlList.length
      this.index = (this.index + 1) % len
    },
    handleImgLoad() {
      this.loading = false
    },
    handleImgError() {
      this.loading = false
    },
    handleActions(action, options = {}) {
      if (this.loading) return
      const { zoomRate, rotateDeg, enableTransition } = {
        zoomRate: 0.2,
        rotateDeg: 90,
        enableTransition: true,
        ...options,
      }
      const { transform } = this
      switch (action) {
        case 'zoomOut':
          if (transform.scale > 0.2) {
            transform.scale = parseFloat(
              (transform.scale - zoomRate).toFixed(3)
            )
          }
          break
        case 'zoomIn':
          transform.scale = parseFloat((transform.scale + zoomRate).toFixed(3))
          break
        case 'clocelise':
          transform.deg += rotateDeg
          break
        case 'anticlocelise':
          transform.deg -= rotateDeg
          break
      }
      transform.enableTransition = enableTransition
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../iconfont/index.css';

.viewer-warp {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  .mask {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.5;
    background: #000;
  }
  .viewer-btn {
    position: absolute;
    z-index: 2;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    opacity: 0.6;
    cursor: pointer;
    box-sizing: border-box;
    user-select: none;
    background-color: #000;
  }
  .viewer-btn.viewer-btn__close {
    top: 40px;
    right: 40px;
    width: 40px;
    height: 40px;
    color: #fff;
  }
  .iconfont {
    font-size: 20px;
  }
  .viewer-btn__prev,
  .viewer-btn__next {
    top: 50%;
    width: 44px;
    height: 44px;
    font-size: 24px;
    color: #fff;
    background-color: #606266;
    border-color: #fff;
  }
  .viewer-btn__prev {
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    left: 40px;
  }
  .viewer-btn__next {
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    right: 40px;
    text-indent: 2px;
  }
  .viewer-actions__bar {
    left: 50%;
    bottom: 60px;
    transform: translateX(-50%);
    width: 282px;
    height: 44px;
    padding: 0 23px;
    background-color: #606266;
    border-color: #fff;
    border-radius: 22px;
    .viewer-actions__inner {
      width: 100%;
      height: 100%;
      text-align: justify;
      cursor: default;
      font-size: 23px;
      color: #fff;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -ms-flex-pack: distribute;
      justify-content: space-around;
      .iconfont {
        cursor: pointer;
      }
    }
  }
  .viewer-content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .viewer-video {
      z-index: 1;
      height: 80%;
    }
  }
}
.viewer-fade-enter-active {
  -webkit-animation: viewer-fade-in 0.3s;
  animation: viewer-fade-in 0.3s;
}
.viewer-fade-leave-active {
  -webkit-animation: viewer-fade-out 0.3s;
  animation: viewer-fade-out 0.3s;
}
.errorText {
  color: #fff;
  z-index: 1;
}
@-webkit-keyframes viewer-fade-in {
  0% {
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@keyframes viewer-fade-in {
  0% {
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@-webkit-keyframes viewer-fade-out {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
}
@keyframes viewer-fade-out {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
}
</style>
