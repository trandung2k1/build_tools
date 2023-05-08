const esbuild = require('esbuild');
const colors = require('colors');
const context = async () => {
    return await esbuild.context({
        entryPoints: ['./src/index.tsx'],
        bundle: true,
        loader: {
            '.js': 'jsx',
            '.ts': 'tsx',
        },
        outdir: 'public/dist',
    });
};
(async () => {
    const port = 3000;
    const data = await context();
    await data.watch();
    await data.serve({
        servedir: 'public',
        port,
        host: 'localhost',
    });
    console.log(colors.green('Server listen on', `http://localhost:${port}/`));
})();
