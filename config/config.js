exports.config = {
    appInfo: {
        name: 'Fe app',
        description: 'fe app',
    },
    appConfig: {
        appFile: './app/js/app',
        appSubFiles: [],
        mainComponent: 'app-main',
        initCssFiles: [
            '/app/css/config.css',
        ],
        cssFiles: [
            '/app/css/fonts.css',
            '/app/css/style.css'
        ],
        overrideCssFiles: [],

        initJsFiles: [],
        jsFiles: [],

        debugCssFiles: [],
        debugJsFiles: [],

        componentMapping: {},

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
                    moduleName: 'canvas-playground',
                    parentComponent: 'app-main'
                },
                {
                    moduleName: 'nw-app-test',
                    parentComponent: 'app-main'
                }
            ],
            globalComponent: [],
            modalComponent: [
                {
                    moduleName: 'nw-app-test'
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
                                        alt: true
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
        debugToFile: true,
        forceDebug: {
            App: false,
        },
    },

    userMessages: {
        userMessagesToFile: true,
        forceUserMessages: {
            App: false,
        }
    },

    windowCloseTimeoutDuration: 15000,
    windowReloadTimeoutDuration: 15000,
};