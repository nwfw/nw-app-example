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
                name: 'app-main',
                components: {
                    'inspector-json': {
                        name: 'inspector-json'
                    },
                    'app-error': {
                        name: 'app-error',
                        componentCssFiles: ['app-error.css'],
                    },
                    'app-loader': {
                        name: 'app-loader',
                        componentCssFiles: ['app-loader.css'],
                        components: {
                            'app-loader-spinner': {
                                name: 'app-loader-spinner'
                            },
                            'user-messages': {
                                name: 'user-messages',
                                components: {
                                    'user-messages-controls': {
                                        name: 'user-messages-controls'
                                    },
                                    'user-messages-list': {
                                        name: 'user-messages-list'
                                    }
                                }
                            }
                        }
                    },
                    'app-debug': {
                        componentCssFiles: ['app-debug.css'],
                        name: 'app-debug'
                    }
                }
            }
        },

        mixinRoot: './app/js/mixin/',
        mixinExtensionRegex: /\.js$/,

        appComponentCodeRegex: /\.js$/,
        componentDirectories: {
            component: ['./app/components/app/'],
            globalComponent: ['./app/components/global/', './app/components/form'],
            modalComponent: ['./app/components/modal/']
        },

        systemHelperDirectories: [],
        helperDirectories: ['./app/js/helper/'],

        hasAppMenu: true,
        menuData: {
            mainItemName: 'app',
            options: {
                hideWindow: true,
                hideEdit: true
            },
            menus: [
                {
                    menuItem: {
                        label: 'App',
                        method: 'noop'
                    },
                    children: [
                        {
                            menuItem: {
                                label: 'New',
                                method: 'noop',
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
                                method: 'noop',
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
                                method: 'noop',
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
                },
                {
                    menuItem: {
                        label: 'App2',
                        method: 'noop'
                    },
                    children: [
                        {
                            menuItem: {
                                label: 'New2',
                                method: 'noop',
                                shortcut: {
                                    key: 'n',
                                    modifiers: {
                                        ctrl: true,
                                        shift: true
                                    }
                                }
                            },
                            children: [
                                {
                                    menuItem: {
                                        label: 'Open2',
                                        method: 'helpers.utilHelper.noop',
                                        shortcut: {
                                            key: 'o',
                                            modifiers: {
                                                ctrl: true,
                                                shift: true
                                            }
                                        }
                                    },
                                    children: [
                                        {
                                            menuItem: {
                                                label: 'Edit2',
                                                method: 'noop',
                                                shortcut: {
                                                    key: 'e',
                                                    modifiers: {
                                                        ctrl: true,
                                                        shift: true
                                                    }
                                                }
                                            },
                                            children: []
                                        }
                                    ]
                                },
                                {
                                    menuItem: {
                                        type: 'separator'
                                    },
                                    children: []
                                },
                                {
                                    menuItem: {
                                        label: 'Exit2',
                                        method: 'exitApp',
                                        shortcut: {
                                            key: 'x',
                                            modifiers: {
                                                ctrl: true,
                                                shift: true
                                            }
                                        }
                                    },
                                    children: []
                                }
                            ]
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
    compileCss: true,
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
    userMessagesTimestamp: true,
    userMessagesToolbarVisible: false,

    windowCloseTimeoutDuration: 15000,
    windowReloadTimeoutDuration: 15000,

    forceDebug: {
        App: false,
    },
    forceUserMessages: {
        App: false,
    }
};