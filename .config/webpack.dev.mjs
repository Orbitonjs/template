
import { config } from "./webpack.common.mjs";

export default {
  mode: "development",
  devServer: {
    static: './static/public',
    //https: true,
  },
  ...config
}
