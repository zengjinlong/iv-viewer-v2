import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Viewer from '../src/components/viewer.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

const createViewer = (propsData = {}) =>
  shallowMount(Viewer, {
    propsData: {
      visible: true,
      urlList: ['same.jpg', 'same.jpg', 'other.jpg'],
      currentIndex: 1,
      ...propsData,
    },
    stubs: {
      NavBar: true,
    },
  })

describe('IVViewer', () => {
  it('emits update:visible when viewer requests close', () => {
    const wrapper = createViewer()

    wrapper.vm.close()

    expect(wrapper.emitted('update:visible')).toEqual([[false]])
    expect(wrapper.emitted('close')).toHaveLength(1)
  })

  it('emits close once when parent syncs visible after viewer requests close', async () => {
    const wrapper = createViewer()

    wrapper.vm.close()
    await wrapper.setProps({ visible: false })

    expect(wrapper.emitted('close')).toHaveLength(1)
  })

  it('deletes only the current index when duplicate urls exist', () => {
    const wrapper = createViewer()

    wrapper.vm.deleteFile()

    expect(wrapper.emitted('delete')[0][0]).toEqual({
      index: 1,
      url: 'same.jpg',
      fileList: ['same.jpg', 'other.jpg'],
    })
  })
})
