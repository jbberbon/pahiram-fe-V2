import {defineConfig} from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    define: {
        "import.meta.vitest": "undefined",
    },
    test: {
        includeSource: ['src/**/*.{js,ts,jsx,tsx}'],
        coverage: {
            reporter: ['text', 'json', 'html'],
        },
        environment: 'jsdom',
    },
})