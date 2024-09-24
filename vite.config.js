import {defineConfig} from "vite";
import autoprefixer from "autoprefixer";

export default defineConfig(
    {
        css: {
            devSourcemap: true,
            postcss:{
                plugins:[
                    autoprefixer({})
                ]
            }
        },
    }
);