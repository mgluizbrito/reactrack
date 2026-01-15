
import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['server.ts'],
    format: ['cjs'],     // Output CommonJS
    outDir: 'dist',
    clean: true,
    sourcemap: false,
    noExternal: [        // Bundle these because this is a server app, not a library
        'express',
        'cors',
        'dotenv',
        'cookie-parser',
        'mongoose',
        'jsonwebtoken',
        'nodemailer',
        'bcryptjs'
    ],
    target: 'node18',
    shims: true          // Polyfill __dirname and __filename for ESM-interop
});
