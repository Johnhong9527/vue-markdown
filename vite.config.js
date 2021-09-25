const { createVuePlugin } = require("vite-plugin-vue2");
// const copy = require("vite-plugin-copy");
const path = require("path");
const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
    root: "./",
    plugins: [
        createVuePlugin(/*options*/),
        // copy([{ src: "./data.js", dest: "dist/" }]),
    ],
    build: {
        rollupOptions: {
            input: {
                simple: resolve("./src/simple.js"),
                pro: resolve("./src/pro.js"),
                preview: resolve("./src/preview.js"),
            },
            output: {
                entryFileNames: "[name].js",
            },
        },
    },
};
