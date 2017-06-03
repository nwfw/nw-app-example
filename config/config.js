exports.config = {
    appInfo: {
        name: 'Fe app',
        description: 'fe app',
    },
    wrapper: {
        appFile: './app/js/app'
    },
    appConfig: {
        initCssFiles: [
            '/app/css/config.css',
        ],
        cssFiles: [
            '/app/css/fonts.css'
        ],
        overrideCssFiles: [],

        initJsFiles: [],
        jsFiles: [],

        debugCssFiles: [],
        debugJsFiles: [],

        appComponentMapping: {
            'app-main': {
                components: [
                    {
                        name: 'app-start',
                        components: []
                    },
                    {
                        name: 'app-end'
                    }
                ]
            }
        },

        mixinRoot: './app/js/mixin/',
        mixinExtensionRegex: /\.js$/,

        appTemplateExtensionRegex: /\.html$/,
        templateDirectories: {
            template: [
                './app/template/'
            ],
            componentTemplate: [
                './app/template/components/',
                './app/template/components/modal/'
            ]
        },

        appComponentCodeRegex: /\.js$/,
        componentDirectories: {
            component: ['./app/js/components/','./app/js/components/modal'],
            globalComponent: ['./app/js/components/global/'],
            modalComponent: ['./app/js/components/modal/']
        },

        systemHelperDirectories: [],
        helperDirectories: ['./app/js/helper/'],

        menuData: {
            mainItemName: 'app',
            options: {
                hideWindow: true,
                hideEdit: true
            },
            menus: [],
            _menus: [
                {
                    menuItem: {
                        label: 'App',
                        method: 'noop'
                    },
                    children: [
                        {
                            menuItem: {
                                label: 'New',
                                method: 'app.presenter.newPresentationMenuHandler',
                                shortcut: {
                                    key: 'n',
                                    modifiers: {
                                        ctrl: true
                                    }
                                }
                            },
                            children: []
                        },
                        {
                            menuItem: {
                                label: 'Open',
                                method: 'app.presenter.openPresentationMenuHandler',
                                shortcut: {
                                    key: 'o',
                                    modifiers: {
                                        ctrl: true
                                    }
                                }
                            },
                            children: []
                        },
                        {
                            menuItem: {
                                label: 'Edit',
                                method: 'app.presenter.editPresentationMenuHandler',
                                shortcut: {
                                    key: 'e',
                                    modifiers: {
                                        ctrl: true
                                    }
                                }
                            },
                            children: []
                        },
                        {
                            menuItem: {
                                type: 'separator'
                            },
                            children: []
                        },
                        {
                            menuItem: {
                                label: 'Exit',
                                method: 'exitApp',
                                shortcut: {
                                    key: 'x',
                                    modifiers: {
                                        ctrl: true
                                    }
                                }
                            },
                            children: []
                        }
                    ]
                }
            ]
        },
        globalKeyHandlers: [
            {
                event: '_keydown',
                keyCodes: [27],
                handler: 'app.handler',
                stopPropagation: true
            }
        ],
    },

    appInstanceConfig: {},

    currentLanguage: 'sr_RS',
    currentLocale: 'sr-rs',
    allowLanguageChange: false,
    autoAddLabels: true,

    configData: {
        vars: {
        }
    },

    liveCss: true,
    hideDebug: false,
    debug: true,
    devTools: true,
    debugLevel: 3,
    debugLevels: {
        'debug': 1,
        'info': 2,
        'warning': 3,
        'error': 4
    },
    debugGroupsCollapsed: false,

    userMessageLevel: 3,
    maxUserMessages: 1000,
    userMessagesExpanded: false,
    userMessagesToolbarVisible: false,

    windowCloseTimeoutDuration: 15000,
    windowReloadTimeoutDuration: 15000,

    forceDebug: {
    },
    forceUserMessages: {
    }
};