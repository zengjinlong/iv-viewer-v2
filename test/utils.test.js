import { describe, expect, it, vi } from 'vitest'
import {
  getFileExtension,
  isImageFile,
  isVideoFile,
  removeByIndex,
} from '../src/utils'

describe('media utilities', () => {
  it('normalizes extensions from remote and local paths', () => {
    expect(getFileExtension('https://example.com/a/PHOTO.JPG?size=large')).toBe(
      'jpg'
    )
    expect(getFileExtension('public/1.jpeg#preview')).toBe('jpeg')
  })

  it('returns an empty extension without logging for unsupported paths', () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    expect(getFileExtension('https://example.com/file-without-extension')).toBe(
      ''
    )
    expect(errorSpy).not.toHaveBeenCalled()

    errorSpy.mockRestore()
  })

  it('recognizes default and custom media types case-insensitively', () => {
    expect(isImageFile('public/photo.PNG')).toBe(true)
    expect(isImageFile('public/photo.webp', ['webp'])).toBe(true)
    expect(isVideoFile('https://example.com/movie.MP4?token=1')).toBe(true)
    expect(isVideoFile('https://example.com/movie.mov', ['mov'])).toBe(true)
  })

  it('removes only the item at the requested index', () => {
    expect(removeByIndex(['same.jpg', 'same.jpg', 'other.jpg'], 1)).toEqual([
      'same.jpg',
      'other.jpg',
    ])
  })
})
