import {defineConfig} from "vite";
import autoprefixer from "autoprefixer";
import {imagetools} from "vite-imagetools";
import viteSvgPlugin from "vite-plugin-svgo";

export default defineConfig(
    {
        plugins:[
            imagetools(),
            viteSvgPlugin()
        ],
        css: {
            devSourcemap: true,
            postcss:{
                plugins:[
                    autoprefixer({})
                ]
            }
        },
        build:{
            sourcemap: true,
            rollupOptions:{
                input: "./index.html",
            },
            terserOptions:{
                compress: {
                    drop_console: true,
                }
            },
            assetsInlineLimit: 4096
        }
    }
);