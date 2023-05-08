require('esbuild')
    .build({
        entryPoints: ['./src/index.tsx'],
        bundle: true,
        sourcemap: true,
        platform: 'browser',
        format: 'esm',
        splitting: true,
        minify: true,
        // platform: 'node',
        loader: {
            '.js': 'jsx',
            '.ts': 'tsx',
        },
        outdir: 'public/dist',
    })
    .then(() => console.log('⚡ Done'))
    .catch(() => process.exit(1));
