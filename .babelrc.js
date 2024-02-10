//.babelrc
const presets = [
    "@babel/preset-env",
    [
        "minify",
        {
            builtIns: false,
            evaluate: false,
            mangle: false,
        },
    ],
];

const plugins = [];

module.exports = {
    presets,
    plugins,
};
