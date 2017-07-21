module.exports = {
    plugins: [
        'node_modules/nw-skeleton/app-wrapper/data/jsdoc/plugins/relativelink.js',
    ],
    recurseDepth: 100,
    source: {
        include: [
            './',
        ],
        exclude: [
            './index.js',
            './jsDocConfig.js',
            './.eslintrc.js',
            './node_modules',
            './app/css',
            './app/var',
            './app/js/lib/ext'
        ],
        includePattern: '.+\\.js$',
        excludePattern: '(^|\\/|\\\\)_'
    },
    sourceType: 'module',
    tags: {
        allowUnknownTags: true,
        dictionaries: ['jsdoc']
    },
    templates: {
        cleverLinks: false,
        monospaceLinks: false,
        default: {
            staticFiles: {
                include: [
                    './node_modules/nw-skeleton/app-wrapper/data/jsdoc/static'
                ]
            },
            useLongnameInNav: false,
            includeDate: false,
        },
        menu: {
            defaultsortby: 'longname, version, since',
            modules: {
                show: true
            },
            namespaces: {
                show: true,
                showchildren: true,
                sortby: 'kind'
            },
            classes: {
                show: true,
                showchildren: true,
                sortby: 'kind'
            },
            globals: {
                show: false,
                sortby: 'kind'
            },
            events: {
                show: true,
                sortby: '',
                filtermodule: true
            },
            mixins: {
                show: true
            },
            interfaces: {
                show: true
            },
            tutorials: {
                show: true
            },
            externals: {
                show: true
            }
        }
    },
    opts: {
        template: './node_modules/nw-skeleton/app-wrapper/data/jsdoc/templates/corcules-jsdoc',
        encoding: 'utf8',
        destination: './doc/',
        recurse: true,
    },
    vars: {
        mainTitle: 'nw-skeleton',
    },
};