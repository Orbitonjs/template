import { getPages } from './utils.mjs'
import { relative } from 'path';
import { config } from "./webpack.common.mjs";
import { GenerateSW } from "workbox-webpack-plugin"


const pages = getPages('./src/pages')
const HTMLPages = []

pages.map((page) => {
  const pageNameWithExt = relative("./src/pages", page)
  const pageName = pageNameWithExt.slice(0, pageNameWithExt.length - 3)
  HTMLPages.push(pageName)
})

config.plugins.push(
  new GenerateSW({
    // these options encourage the ServiceWorkers to get in there fast
    // and not allow any straggling "old" SWs to hang around
    clientsClaim: true,
    skipWaiting: true,
    chunks: HTMLPages
  })
)
export default {
  mode: "production",
  ...config
}
