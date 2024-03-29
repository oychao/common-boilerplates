import babel from '@rollup/plugin-babel';

export default {
  input: './index.js',
  output: [
    {
      file: 'bin/bundle.js',
      format: 'es',
      name: 'helloUmd'
    }
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ],
  external: ['fs', 'path', 'jsonfile']
};
