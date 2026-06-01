<template>
  <div class="nav-bar" :style="{ 'z-index': zIndex + 1 }">
    <ul class="iv-list">
      <li
        v-for="(item, index) in urlList"
        :key="`${item}-${index}`"
        :class="[currentIndex === index ? 'active' : '']"
        @click="select({ index, url: item })"
      >
        <img
          :ref="`img-${index}`"
          :src="item"
          :alt="`file-${index}`"
          @load="loadImg(index)"
          v-if="isImg(item)"
        />
        <div v-else-if="isVideo(item)" class="video-thumbnail">
          <i class="iconfont icon-play"></i>
        </div>
        <div v-else class="error">
          <i class="iconfont icon-error"></i>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { isImageFile, isVideoFile } from '../utils'
export default {
  name: 'NavBar',
  components: {},
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
    defaultImgTypes: {
      type: Array,
      default: () => [],
    },
    defaultVideoTypes: {
      type: Array,
      default: () => [],
    },
    zIndex: {
      type: Number,
      default: 10000,
    },
  },
  data() {
    return {}
  },

  methods: {
    loadImg(index) {
      const ref = this.$refs[`img-${index}`]
      const img = Array.isArray(ref) ? ref[0] : ref
      if (!img) return

      const offset = Math.max((img.width - 30) / 2, 0)
      img.style.transform = `translateX(-${offset}px)`
    },
    select(data) {
      this.$emit('select', data)
    },
    isImg(url) {
      return isImageFile(url, this.imageTypes, this.defaultImgTypes)
    },
    isVideo(url) {
      return isVideoFile(url, this.videoTypes, this.defaultVideoTypes)
    },
  },
}
</script>
<style scoped>
@import '../iconfont/index.css';

.nav-bar {
  position: absolute;
  bottom: 0;
  height: 50px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav-bar .iv-list {
  box-sizing: content-box;
  height: 50px;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
}
.nav-bar .iv-list .video-thumbnail {
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
}
.nav-bar .iv-list .video-thumbnail .icon-play {
  color: #fff;
}
.nav-bar .iv-list .error {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 100%;
  background-color: #fff;
}
.nav-bar .iv-list .error .icon-error {
  color: red;
}
.nav-bar .iv-list .active {
  opacity: 1;
}
.nav-bar .iv-list > li {
  cursor: pointer;
  height: 50px;
  overflow: hidden;
  width: 30px;
  transition: opacity 0.15s;
  opacity: 0.4;
}
.nav-bar .iv-list img {
  height: 50px;
  width: auto;
}
</style>
