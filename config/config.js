exports.config = {
    appInfo: {
        name: 'NW app example',
        description: 'NW app example',
    },
    appConfig: {
        appFile: './app/js/app',
        appSubFiles: [],
        commandParamsMap: [
            {
                name: '--component',
                method: 'setSubcomponent',
                value: true,
                description: 'Sets component main view to parameter value'
            }
        ],
        mainComponent: 'app-main',
        tmpDataDir: './var/data',
        logDir: './var/log',
        dataDir: './data',

        allowFullscreen: true,
        hideFullscreenHeader: true,
        hideFullscreenFooter: true,

        initCssFiles: [],
        cssFiles: [],
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
                    moduleName: 'nw-canvas-playground',
                    parentComponent: 'app-main'
                },
                {
                    moduleName: 'nw-app-test',
                    parentComponent: 'app-main'
                }
            ],
            globalComponent: [
                {
                    moduleName: 'nw-ui'
                }
            ],
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
            title: 'NW app example',
            icon: 'node_modules/nw-skeleton/app-wrapper/images/tray-icon.png',
            alticon: 'node_modules/nw-skeleton/app-wrapper/images/tray-icon-alternate.png',
            menus: [
                {
                    label: 'Show window',
                    tooltip: 'Show window',
                    type: 'normal',
                    method: 'windowManager.focusWindow',
                    children: []
                },
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
                hideWindow: false,
                hideEdit: false
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
                                label: 'Main view',
                                method: 'noop'
                            },
                            children: [
                                {
                                    menuItem: {
                                        label: 'App test',
                                        method: 'app.setSubcomponent:app-test'
                                    },
                                },
                                {
                                    menuItem: {
                                        label: 'Canvas playground',
                                        method: 'app.setSubcomponent:canvas-playground'
                                    },
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

    currentLanguageName: 'Srpski',
    currentLanguage: 'sr-Latn-RS',
    currentLocale: 'sr-Latn',

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