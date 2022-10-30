const esbuild = require('esbuild');

const outdir = './build/';


(async function () {

    const outfile = outdir + 'index.js';
    await esbuild.build({
        entryPoints: [`./src/example/index.tsx`],
        bundle: true,
        minify: false,
        treeShaking: true,
        target: 'es6',
        outfile: outfile,
        define: {'process.env.NODE_ENV': "\"development\""},
        loader: {
            '.json': 'text'
        }
    });

})();
