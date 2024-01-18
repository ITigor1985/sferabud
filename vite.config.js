import posthtml from "@vituum/vite-plugin-posthtml";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { defineConfig } from "vite";
import { resolve } from "path";

// export default {
//   plugins: [posthtml()],
//   base: "/sferabud/",
// };

export default defineConfig(() => {
  return {
    plugins: [
      posthtml(),
      ViteImageOptimizer({
        /* pass your config */
        png: {
          // https://sharp.pixelplumbing.com/api-output#png
          quality: 70,
        },
        jpeg: {
          // https://sharp.pixelplumbing.com/api-output#jpeg
          quality: 70,
        },
        jpg: {
          // https://sharp.pixelplumbing.com/api-output#jpeg
          quality: 70,
        },
      }),
    ],
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, "index.html"),
          login: resolve(__dirname, "login/index.html"),
        },
      },
    },
    base: "/sferabud/",
  };
});
