export const DEFAULT_IMAGE_TYPES = ['jpg', 'png', 'jpeg']
export const DEFAULT_VIDEO_TYPES = ['mp4']

/**
 * 从给定路径中提取文件扩展名，兼容远程 URL 和本地相对路径。
 * @param path - 媒体文件路径或 URL
 * @returns 小写文件扩展名；没有扩展名时返回空字符串
 */
export const getFileExtension = (path) => {
  if (!path) return ''

  const pathname = String(path).split(/[?#]/)[0]
  const filename = pathname.substring(pathname.lastIndexOf('/') + 1)
  const lastDotIndex = filename.lastIndexOf('.')

  if (lastDotIndex <= 0 || lastDotIndex === filename.length - 1) {
    return ''
  }

  return filename.substring(lastDotIndex + 1).toLowerCase()
}

export const normalizeTypes = (...typeGroups) =>
  Array.from(
    new Set(
      typeGroups
        .flat()
        .filter(Boolean)
        .map((type) => String(type).toLowerCase())
    )
  )

export const isFileType = (path, defaultTypes = [], customTypes = []) => {
  const extension = getFileExtension(path)
  if (!extension) return false

  return normalizeTypes(defaultTypes, customTypes).includes(extension)
}

export const isImageFile = (
  path,
  customTypes = [],
  defaultTypes = DEFAULT_IMAGE_TYPES
) => isFileType(path, defaultTypes, customTypes)

export const isVideoFile = (
  path,
  customTypes = [],
  defaultTypes = DEFAULT_VIDEO_TYPES
) => isFileType(path, defaultTypes, customTypes)

export const removeByIndex = (list, index) => {
  if (!Array.isArray(list)) return []

  return list.filter((_, itemIndex) => itemIndex !== index)
}
