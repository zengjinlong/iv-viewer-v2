<template>
  <div class="nav-bar" :style="{ 'z-index': zIndex + 1 }">
    <ul class="iv-list">
      <li
        v-for="(item, index) in urlList"
        :key="index"
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
import { getFileExtension } from '../utils'
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
      if (this.$refs[`img-${index}`]) {
        const width = this.$refs[`img-${index}`][0].width
        console.log('width', width)
        this.$refs[`img-${index}`][0].style.transform =
          `translateX(-${(width - 30) / 2}px)`
      }
    },
    select(data) {
      this.$emit('select', data)
    },
    isImg(url) {
      if (url) {
        const imagesTypes = this.imageTypes.map((item) => item.toLowerCase())
        const types = Array.from(
          new Set(this.defaultImgTypes.concat(imagesTypes))
        )
        const type = getFileExtension(url)
        return types.includes(type)
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
        return types.includes(type)
      } else {
        return false
      }
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
