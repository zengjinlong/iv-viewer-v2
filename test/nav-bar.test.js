import { describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Vue from 'vue'
import NavBar from '../src/components/nav-bar.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('NavBar', () => {
  it('renders duplicate urls without duplicate key warnings', () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    try {
      mount(NavBar, {
        propsData: {
          urlList: ['same.jpg', 'same.jpg', 'other.mp4'],
          currentIndex: 0,
          defaultImgTypes: ['jpg', 'png', 'jpeg'],
          defaultVideoTypes: ['mp4'],
        },
      })

      expect(errorSpy).not.toHaveBeenCalledWith(
        expect.stringContaining('Duplicate keys detected')
      )
    } finally {
      errorSpy.mockRestore()
    }
  })
})
