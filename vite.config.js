import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, "index.html"),
                cv: resolve(__dirname, "cv/index.html"),
                projects: resolve(__dirname, "projects/index.html"),
                bit_abode: resolve(__dirname, "projects/bit-abode/index.html"),
                cycling_safety_vest: resolve(__dirname, "projects/cycling-safety-vest/index.html")
            },
        },
    },
    server: {
        cors: true,
    },
})