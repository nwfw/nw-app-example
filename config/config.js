exports.config = {
    appInfo: {
        name: 'Fe app',
        description: 'fe app',
    },
    wrapper: {
        appFile: './app/js/app'
    },
    appConfig: {
        appSubFiles: [],
        mainComponent: 'app-main',
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

        componentMapping: {
            'app-window': {
                name: 'app-window',
                components: {}
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
        componentModules: {
            component: [
                {
                    moduleName: 'nw-tessel-components',
                    parentComponent: 'app-window'
                },
                {
                    moduleName: 'canvas-playground',
                    parentComponent: 'app-window'
                },
                {
                    moduleName: 'nw-app-test',
                    parentComponent: 'app-window'
                }
            ],
            globalComponent: [],
            modalComponent: [
                {
                    moduleName: 'nw-app-test',
                    parentComponent: 'app-window'
                }
            ]
        },

        systemHelperDirectories: [],
        helperDirectories: ['./app/js/helper/'],

        hasTrayIcon: true,
        trayData: {
            title: 'Fe app',
            icon: 'app/images/tray-icon.png',
            alticon: 'app/images/tray-icon-alternate.png',
            menus: [
                {
                    label: 'Edit configuration',
                    tooltip: 'Edit configuration',
                    type: 'normal',
                    method: 'appConfig.openConfigEditorHandler',
                    children: [
                        {
                            label: 'Debug log configuration',
                            tooltip: 'Debug log configuration',
                            type: 'normal',
                            method: 'helpers.debugHelper.openDebugConfigEditor',
                        },
                        {
                            label: 'User messages configuration',
                            tooltip: 'User messages configuration',
                            type: 'normal',
                            method: 'helpers.userMessageHelper.openUserMessageConfigEditor',
                        }
                    ]
                },
                {
                    label: 'Main view',
                    tooltip: 'Main view',
                    type: 'normal',
                    method: 'noop',
                    children: [
                        {
                            label: 'app-main',
                            tooltip: 'App main',
                            type: 'normal',
                            method: 'app.setMainView',
                        },
                        {
                            label: 'app-test',
                            tooltip: 'App test',
                            type: 'normal',
                            method: 'app.setMainView',
                        },
                        {
                            label: 'tessel-main',
                            tooltip: 'Tessel main',
                            type: 'normal',
                            method: 'app.setMainView',
                        },
                        {
                            label: 'canvas-playground',
                            tooltip: 'Canvas playground',
                            type: 'normal',
                            method: 'app.setMainView',
                        },
                    ]
                },
                {
                    label: 'Separator',
                    tooltip: 'Separator',
                    type: 'separator',
                    method: 'noop'
                },
                {
                    label: 'Close window',
                    tooltip: 'Close window',
                    type: 'normal',
                    method: 'exitApp'
                }
            ]
        },

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
                                label: 'About app',
                                method: 'showAppInfo',
                                shortcut: {
                                    key: '?',
                                    modifiers: {
                                        // ctrl: true
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
                                    key: 'q',
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
    allowLanguageChange: true,
    autoAddLabels: true,

    configData: {
        vars: {
        }
    },

    themeModules: ['nw-themes'],

    liveCss: true,
    compileCss: true,

    debug: {
        debugToFile: false,
        forceDebug: {
            App: false,
        },
    },

    userMessages: {
        userMessagesToFile: false,
        forceUserMessages: {
            App: false,
        }
    },


    windowCloseTimeoutDuration: 15000,
    windowReloadTimeoutDuration: 15000,

};