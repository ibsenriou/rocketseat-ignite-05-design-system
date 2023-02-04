/// <reference types="vite/client" />

import react from '@vitejs/plugin-react'
import { define } from 'vite'

export default defineConfig({
  pluguins: [react()],
})