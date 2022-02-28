import * as fs from "fs"
import * as path from "path"

export function getPages(dir) {
  const pages = []
  const initDir = fs.readdirSync(dir, {
    encoding: "utf-8",
    withFileTypes: true
  })
  for (const item of initDir) {
    if (item.isFile()) {
      const win32Path = path.join(dir, item.name)
      // Support node 14
      const UnixPath = win32Path.replace(/\\/g, "/")
      pages.push(UnixPath)
    } else {
      const innerPages = getPages(path.join(dir, item.name))
      pages.push(...innerPages)
    }
  }
  return pages
}

