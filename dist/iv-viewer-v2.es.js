(function(){"use strict";try{if(typeof document<"u"){var A=document.createElement("style");A.appendChild(document.createTextNode('@font-face{font-family:iconfont;src:url(data:font/woff2;base64,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) format("woff2"),url(data:font/woff;base64,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) format("woff"),url(data:font/ttf;base64,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AAYAEAD9AAMAAQQJAAoAVgENAAMAAQQJAAsAJgFjQ3JlYXRlZCBieSBpY29uZm9udGljb25mb250UmVndWxhcmljb25mb250aWNvbmZvbnRWZXJzaW9uIDEuMGljb25mb250R2VuZXJhdGVkIGJ5IHN2ZzJ0dGYgZnJvbSBGb250ZWxsbyBwcm9qZWN0Lmh0dHA6Ly9mb250ZWxsby5jb20AQwByAGUAYQB0AGUAZAAgAGIAeQAgAGkAYwBvAG4AZgBvAG4AdABpAGMAbwBuAGYAbwBuAHQAUgBlAGcAdQBsAGEAcgBpAGMAbwBuAGYAbwBuAHQAaQBjAG8AbgBmAG8AbgB0AFYAZQByAHMAaQBvAG4AIAAxAC4AMABpAGMAbwBuAGYAbwBuAHQARwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABzAHYAZwAyAHQAdABmACAAZgByAG8AbQAgAEYAbwBuAHQAZQBsAGwAbwAgAHAAcgBvAGoAZQBjAHQALgBoAHQAdABwADoALwAvAGYAbwBuAHQAZQBsAGwAbwAuAGMAbwBtAAACAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsBAgEDAQQBBQEGAQcBCAEJAQoBCwEMAAVlcnJvcgRwbGF5BWNsb3NlBmRlbGV0ZQRsZWZ0BXJpZ2h0B3hpYXlpYnUJc2hhbmd5aWJ1DnNvdXN1b2JpYW54aWFvDHNvdXN1b2ZhbmdkYQAA) format("truetype")}.iconfont[data-v-e320911a]{font-family:iconfont!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-close[data-v-e320911a]:before{content:""}.icon-delete[data-v-e320911a]:before{content:""}.icon-left[data-v-e320911a]:before{content:""}.icon-right[data-v-e320911a]:before{content:""}.icon-right-rotating[data-v-e320911a]:before{content:""}.icon-left-rotating[data-v-e320911a]:before{content:""}.icon-zoom[data-v-e320911a]:before{content:""}.icon-minimize[data-v-e320911a]:before{content:""}.icon-play[data-v-e320911a]:before{content:""}.icon-error[data-v-e320911a]:before{content:""}.nav-bar[data-v-e320911a]{position:absolute;bottom:0;height:50px;width:100%;background-color:#00000080;display:flex;align-items:center;justify-content:center}.nav-bar .iv-list[data-v-e320911a]{box-sizing:content-box;height:50px;margin:0;padding:0;overflow:hidden;display:flex;align-items:center}.nav-bar .iv-list .video-thumbnail[data-v-e320911a]{height:50px;width:100%;display:flex;align-items:center;justify-content:center;background-color:#00000080}.nav-bar .iv-list .video-thumbnail .icon-play[data-v-e320911a]{color:#fff}.nav-bar .iv-list .error[data-v-e320911a]{display:flex;align-items:center;justify-content:center;height:50px;width:100%;background-color:#fff}.nav-bar .iv-list .error .icon-error[data-v-e320911a]{color:red}.nav-bar .iv-list .active[data-v-e320911a]{opacity:1}.nav-bar .iv-list>li[data-v-e320911a]{cursor:pointer;height:50px;overflow:hidden;width:30px;transition:opacity .15s;opacity:.4}.nav-bar .iv-list img[data-v-e320911a]{height:50px;width:auto}@font-face{font-family:iconfont;src:url(data:font/woff2;base64,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) format("woff2"),url(data:font/woff;base64,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) format("woff"),url(data:font/ttf;base64,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AAYAEAD9AAMAAQQJAAoAVgENAAMAAQQJAAsAJgFjQ3JlYXRlZCBieSBpY29uZm9udGljb25mb250UmVndWxhcmljb25mb250aWNvbmZvbnRWZXJzaW9uIDEuMGljb25mb250R2VuZXJhdGVkIGJ5IHN2ZzJ0dGYgZnJvbSBGb250ZWxsbyBwcm9qZWN0Lmh0dHA6Ly9mb250ZWxsby5jb20AQwByAGUAYQB0AGUAZAAgAGIAeQAgAGkAYwBvAG4AZgBvAG4AdABpAGMAbwBuAGYAbwBuAHQAUgBlAGcAdQBsAGEAcgBpAGMAbwBuAGYAbwBuAHQAaQBjAG8AbgBmAG8AbgB0AFYAZQByAHMAaQBvAG4AIAAxAC4AMABpAGMAbwBuAGYAbwBuAHQARwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABzAHYAZwAyAHQAdABmACAAZgByAG8AbQAgAEYAbwBuAHQAZQBsAGwAbwAgAHAAcgBvAGoAZQBjAHQALgBoAHQAdABwADoALwAvAGYAbwBuAHQAZQBsAGwAbwAuAGMAbwBtAAACAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsBAgEDAQQBBQEGAQcBCAEJAQoBCwEMAAVlcnJvcgRwbGF5BWNsb3NlBmRlbGV0ZQRsZWZ0BXJpZ2h0B3hpYXlpYnUJc2hhbmd5aWJ1DnNvdXN1b2JpYW54aWFvDHNvdXN1b2ZhbmdkYQAA) format("truetype")}.iconfont[data-v-b747cad8]{font-family:iconfont!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-close[data-v-b747cad8]:before{content:""}.icon-delete[data-v-b747cad8]:before{content:""}.icon-left[data-v-b747cad8]:before{content:""}.icon-right[data-v-b747cad8]:before{content:""}.icon-right-rotating[data-v-b747cad8]:before{content:""}.icon-left-rotating[data-v-b747cad8]:before{content:""}.icon-zoom[data-v-b747cad8]:before{content:""}.icon-minimize[data-v-b747cad8]:before{content:""}.icon-play[data-v-b747cad8]:before{content:""}.icon-error[data-v-b747cad8]:before{content:""}.viewer-warp[data-v-b747cad8]{position:fixed;top:0;right:0;bottom:0;left:0}.viewer-warp .mask[data-v-b747cad8]{position:fixed;width:100%;height:100%;top:0;left:0;opacity:.5;background:#000}.viewer-warp .viewer-btn[data-v-b747cad8]{position:absolute;z-index:2;display:flex;align-items:center;justify-content:center;border-radius:50%;opacity:.6;cursor:pointer;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;user-select:none;background-color:#000}.viewer-warp .viewer-btn.viewer-btn__close[data-v-b747cad8]{top:40px;right:40px;width:40px;height:40px;color:#fff}.viewer-warp .iconfont[data-v-b747cad8]{font-size:20px}.viewer-warp .viewer-btn__prev[data-v-b747cad8],.viewer-warp .viewer-btn__next[data-v-b747cad8]{top:50%;width:44px;height:44px;font-size:24px;color:#fff;background-color:#606266;border-color:#fff}.viewer-warp .viewer-btn__prev[data-v-b747cad8]{transform:translateY(-50%);left:40px}.viewer-warp .viewer-btn__next[data-v-b747cad8]{transform:translateY(-50%);right:40px;text-indent:2px}.viewer-warp .viewer-actions__bar[data-v-b747cad8]{left:50%;bottom:60px;transform:translate(-50%);width:282px;height:44px;padding:0 23px;background-color:#606266;border-color:#fff;border-radius:22px}.viewer-warp .viewer-actions__bar .viewer-actions__inner[data-v-b747cad8]{width:100%;height:100%;text-align:justify;cursor:default;font-size:23px;color:#fff;display:flex;align-items:center;justify-content:space-around}.viewer-warp .viewer-actions__bar .viewer-actions__inner .iconfont[data-v-b747cad8]{cursor:pointer}.viewer-warp .viewer-content[data-v-b747cad8]{width:100%;height:100%;display:flex;justify-content:center;align-items:center}.viewer-warp .viewer-content .viewer-video[data-v-b747cad8]{z-index:1;height:80%}.viewer-fade-enter-active[data-v-b747cad8]{animation:viewer-fade-in-b747cad8 .3s}.viewer-fade-leave-active[data-v-b747cad8]{animation:viewer-fade-out-b747cad8 .3s}.errorText[data-v-b747cad8]{color:#fff;z-index:1}@keyframes viewer-fade-in-b747cad8{0%{transform:translate3d(0,-20px,0);opacity:0}to{transform:translateZ(0);opacity:1}}@keyframes viewer-fade-out-b747cad8{0%{transform:translateZ(0);opacity:1}to{transform:translate3d(0,-20px,0);opacity:0}}')),document.head.appendChild(A)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const o = (s) => {
  try {
    const t = new URL(s).pathname, i = t.substring(t.lastIndexOf("/") + 1), n = i.lastIndexOf(".");
    return n > 0 && n < i.length - 1 ? i.substring(n + 1).toLowerCase() : "";
  } catch (e) {
    return console.error("无效的 URL:", e), "";
  }
};
function c(s, e, t, i, n, r, x, _) {
  var a = typeof s == "function" ? s.options : s;
  return e && (a.render = e, a.staticRenderFns = t, a._compiled = !0), r && (a._scopeId = "data-v-" + r), {
    exports: s,
    options: a
  };
}
const d = {
  name: "NavBar",
  components: {},
  props: {
    urlList: {
      type: Array,
      default: () => []
    },
    currentIndex: {
      type: Number,
      default: 0
    },
    imageTypes: {
      type: Array,
      default: () => []
    },
    videoTypes: {
      type: Array,
      default: () => []
    },
    defaultImgTypes: {
      type: Array,
      default: () => []
    },
    defaultVideoTypes: {
      type: Array,
      default: () => []
    },
    zIndex: {
      type: Number,
      default: 1e4
    }
  },
  data() {
    return {};
  },
  methods: {
    loadImg(s) {
      if (this.$refs[`img-${s}`]) {
        const e = this.$refs[`img-${s}`][0].width;
        console.log("width", e), this.$refs[`img-${s}`][0].style.transform = `translateX(-${(e - 30) / 2}px)`;
      }
    },
    select(s) {
      this.$emit("select", s);
    },
    isImg(s) {
      if (s) {
        const e = this.imageTypes.map((n) => n.toLowerCase()), t = Array.from(
          new Set(this.defaultImgTypes.concat(e))
        ), i = o(s);
        return t.includes(i);
      } else
        return !1;
    },
    isVideo(s) {
      if (s) {
        const e = this.videoTypes.map((n) => n.toLowerCase()), t = Array.from(
          new Set(this.defaultVideoTypes.concat(e))
        ), i = o(s);
        return t.includes(i);
      } else
        return !1;
    }
  }
};
var f = function() {
  var e = this, t = e._self._c;
  return t("div", { staticClass: "nav-bar", style: { "z-index": e.zIndex + 1 } }, [t("ul", { staticClass: "iv-list" }, e._l(e.urlList, function(i, n) {
    return t("li", { key: i, class: [e.currentIndex === n ? "active" : ""], on: { click: function(r) {
      return e.select({ index: n, url: i });
    } } }, [e.isImg(i) ? t("img", { ref: `img-${n}`, refInFor: !0, attrs: { src: i, alt: `file-${n}` }, on: { load: function(r) {
      return e.loadImg(n);
    } } }) : e.isVideo(i) ? t("div", { staticClass: "video-thumbnail" }, [t("i", { staticClass: "iconfont icon-play" })]) : t("div", { staticClass: "error" }, [t("i", { staticClass: "iconfont icon-error" })])]);
  }), 0)]);
}, u = [], m = /* @__PURE__ */ c(
  d,
  f,
  u,
  !1,
  null,
  "e320911a"
);
const p = m.exports, h = {
  name: "IVViewer",
  components: {
    NavBar: p
  },
  props: {
    urlList: {
      type: Array,
      default: () => []
    },
    currentIndex: {
      type: Number,
      default: 0
    },
    imageTypes: {
      type: Array,
      default: () => []
    },
    videoTypes: {
      type: Array,
      default: () => []
    },
    visible: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    zIndex: {
      type: Number,
      default: 1e4
    }
  },
  data() {
    return {
      loading: !1,
      index: this.currentIndex,
      defaultImgTypes: ["jpg", "png", "jpeg"],
      defaultVideoTypes: ["mp4"],
      transform: {
        scale: 1,
        deg: 0,
        offsetX: 0,
        offsetY: 0,
        enableTransition: !1
      }
    };
  },
  watch: {
    index: {
      handler: function() {
        this.reset();
      }
    },
    urlList: {
      handler(s) {
        s.length === 0 && this.close();
      },
      deep: !0
    },
    visible(s) {
      s ? this.$emit("open") : this.$emit("close");
    }
  },
  computed: {
    isSingle() {
      return this.urlList.length <= 1;
    },
    isFirst() {
      return this.index === 0;
    },
    isLast() {
      return this.index === this.urlList.length - 1;
    },
    currentFile() {
      return this.urlList[this.index];
    },
    imgStyle() {
      const { scale: s, deg: e, offsetX: t, offsetY: i, enableTransition: n } = this.transform;
      return {
        transform: `scale(${s}) rotate(${e}deg)`,
        transition: n ? "transform .3s" : "",
        "margin-left": `${t}px`,
        "margin-top": `${i}px`,
        "max-height": "100%",
        "max-width": "100%",
        "z-index": this.zIndex + 1
      };
    }
  },
  mounted() {
  },
  methods: {
    navSelect(s) {
      this.index = s.index;
    },
    maskClick() {
      this.$emit("close");
    },
    close() {
      this.$emit("close");
    },
    deleteFile() {
      const s = this.urlList.filter((e) => this.currentFile !== e);
      this.$emit("delete", {
        index: this.index,
        url: this.currentFile,
        fileList: s
      }), this.index > 0 ? this.index = this.index - 1 : this.index = 0;
    },
    isImg(s) {
      if (s) {
        const e = this.imageTypes.map((n) => n.toLowerCase()), t = Array.from(
          new Set(this.defaultImgTypes.concat(e))
        ), i = o(s);
        return t.includes(i);
      } else
        return !1;
    },
    isVideo(s) {
      if (s) {
        const e = this.videoTypes.map((n) => n.toLowerCase()), t = Array.from(
          new Set(this.defaultVideoTypes.concat(e))
        ), i = o(s);
        return t.includes(i);
      } else
        return !1;
    },
    reset() {
      this.transform = {
        scale: 1,
        deg: 0,
        offsetX: 0,
        offsetY: 0,
        enableTransition: !1
      };
    },
    prev() {
      if (this.isFirst) return;
      const s = this.urlList.length;
      this.index = (this.index - 1 + s) % s;
    },
    next() {
      if (this.isLast) return;
      const s = this.urlList.length;
      this.index = (this.index + 1) % s;
    },
    handleImgLoad() {
      this.loading = !1;
    },
    handleImgError(s) {
      this.loading = !1, s.target.alt = "加载失败";
    },
    handleActions(s, e = {}) {
      if (this.loading) return;
      const { zoomRate: t, rotateDeg: i, enableTransition: n } = {
        zoomRate: 0.2,
        rotateDeg: 90,
        enableTransition: !0,
        ...e
      }, { transform: r } = this;
      switch (s) {
        case "zoomOut":
          r.scale > 0.2 && (r.scale = parseFloat(
            (r.scale - t).toFixed(3)
          ));
          break;
        case "zoomIn":
          r.scale = parseFloat((r.scale + t).toFixed(3));
          break;
        case "clocelise":
          r.deg += i;
          break;
        case "anticlocelise":
          r.deg -= i;
          break;
      }
      r.enableTransition = n;
    }
  }
};
var y = function() {
  var e = this, t = e._self._c;
  return t("transition", { attrs: { name: "viewer-fade" } }, [e.visible ? t("div", { staticClass: "viewer-warp", style: { "z-index": e.zIndex } }, [t("div", { staticClass: "mask", style: { "z-index": e.zIndex }, on: { click: function(i) {
    return i.target !== i.currentTarget ? null : e.maskClick.apply(null, arguments);
  } } }), t("span", { staticClass: "viewer-btn viewer-btn__close", style: { "z-index": e.zIndex + 1 }, on: { click: e.close } }, [t("i", { staticClass: "iconfont icon-close" })]), e.isSingle ? e._e() : [t("span", { staticClass: "viewer-btn viewer-btn__prev", style: { "z-index": e.zIndex + 1 }, on: { click: e.prev } }, [t("i", { staticClass: "iconfont icon-left" })]), t("span", { staticClass: "viewer-btn viewer-btn__next", style: { "z-index": e.zIndex + 1 }, on: { click: e.next } }, [t("i", { staticClass: "iconfont icon-right" })])], t("div", { staticClass: "viewer-btn viewer-actions__bar", style: { "z-index": e.zIndex + 2 } }, [t("div", { staticClass: "viewer-actions__inner" }, [t("i", { staticClass: "iconfont icon-zoom", on: { click: function(i) {
    return e.handleActions("zoomOut");
  } } }), t("i", { staticClass: "iconfont icon-minimize", on: { click: function(i) {
    return e.handleActions("zoomIn");
  } } }), t("i", { staticClass: "iconfont icon-left-rotating", on: { click: function(i) {
    return e.handleActions("anticlocelise");
  } } }), t("i", { staticClass: "iconfont icon-right-rotating", on: { click: function(i) {
    return e.handleActions("clocelise");
  } } }), e.readonly ? e._e() : t("i", { staticClass: "iconfont icon-delete", on: { click: e.deleteFile } })])]), t("div", { staticClass: "viewer-content" }, [e.isImg(e.currentFile) ? t("img", { ref: "img", style: e.imgStyle, attrs: { src: e.currentFile }, on: { load: e.handleImgLoad, error: e.handleImgError } }) : e.isVideo(e.currentFile) ? t("video", { ref: "video", staticClass: "viewer-video", style: e.imgStyle, attrs: { controls: "", src: e.currentFile } }) : t("p", { staticClass: "errorText", style: { "z-index": e.zIndex + 1 } }, [e._v(" 无效的URL ")])]), t("NavBar", { attrs: { urlList: e.urlList, currentIndex: e.index, imageTypes: e.imageTypes, videoTypes: e.videoTypes, defaultImgTypes: e.defaultImgTypes, defaultVideoTypes: e.defaultVideoTypes, zIndex: e.zIndex }, on: { select: e.navSelect } })], 2) : e._e()]);
}, g = [], v = /* @__PURE__ */ c(
  h,
  y,
  g,
  !1,
  null,
  "b747cad8"
);
const l = v.exports;
l.install = function(s) {
  s.component(l.name, l);
};
export {
  l as default
};
