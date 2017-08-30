# nw-app-example #
Example app for node-webkit (nwjs) framework [nwfw/nw-skeleton](https://github.com/nwfw/nw-skeleton "nw-skeleton")

<table width="100%" align="center" border="0">
<tr>
<td width="20%">

| [Top](#nw-app-example) | [Usage](#usage) |
|:---:|:---:|
| [Features](#features) | [Documentation](#documentation) |
| [Components](#components) | [App state](#app-state) |
| [App data](#app-data) | [User data](#user-data) |
| [Mixed context](#mixed-context) | [Clipboard](#clipboard) | [Base classes](#base-classes) | [CSS config files](#css-config-files) |
| [Easy extending](#easy-extending) | [Internationalization](#internationalization) | [Logging](#logging) |
| [Themes](#themes) | [Controlled initialization / shutdown](#controlled-initialization--shutdown) | [Menus / tray](#menus--tray) | [Configuration](#configuration) | [Resetting configuration and / or data](#resetting-configuration-and--or-data) |

</td>
<td valign="center">

![Example app screenshot](https://gist.githubusercontent.com/jazziebgd/8b07f06bc6ef9057a590fbdcd002f905/raw/nw-app-example-window.png "Example app screenshot")

</td>
</tr>
</table>

## Basic info ##
This example application shows some of core framework functionalities such as local component overrides and components and/or themes as modules. It relies on themes from [nw-themes](https://github.com/nwfw/nw-themes "nw-themes") module. It has two 'main' components:
  * [nw-app-test](https://github.com/nwfw/nw-app-test "nw-app-test") - A test component that allows you to experiment with built-in framework functionailties
  * [nw-canvas-playground](https://github.com/nwfw/nw-canvas-playground "nw-canvas-playground") - An example _async_ component that renders a drawing in `<canvas>` HTML element and allows you to play around with it.
Each component has its own storage and config namespace. Also, __app-main__ component from nw-skeleton is overriden here so it shows interface to pick between __nw-app-test__ and __nw-canvas-playground__ components.

<div align="right"><a href="#nw-app-example">▲ top</a></div>

## Usage ##
 - Install [git](https://git-scm.com/downloads "git"), [node.js](https://nodejs.org/en/download/ "node.js") and [nwjs.io](https://nwjs.io/downloads/ "nwjs.io") if you don't have those already installed
 - Clone [this repository](https://github.com/nwfw/nw-app-example "nw-app-example") - `git clone https://github.com/nwfw/nw-app-example.git`
 - Execute `npm install`
 - Run with `nw .` (Mac/Linux) or `nw.exe .` (Windows)

For more info, help and howto refer to [nw-skeleton wiki](https://github.com/nwfw/nw-skeleton/wiki "nw-skeleton wiki")

<div align="right"><a href="#nw-app-example">▲ top</a></div>

## Features ##
  * Main framework features:
    * I18N (internationalization) with integrated translating and language editing system
    * Mac/windows/linux support
    * Transparent / frameless window support
    * Integrated, overridable window controls and menus
    * [Configurable](#configuration) keyboard shortcuts
    * Desktop notifications
    * Application notifications
    * Cancellable application operations functionality with optional progress bar indicator
    * [Configurable](#configuration) application tray icon and menus
    * [Configurable](#configuration) application (window) menus
    * User data saving in localStorage
    * Persistent window position/width/height between sessions
    * Custom icons/app info with [nwjs-builder-phoenix](https://github.com/evshiron/nwjs-builder-phoenix "nwjs-builder-phoenix") or nwjs building tool of your choice
  * Frontend (UI) features:
    * Built-in modal dialog functionality with callbacks
    * Frontend application and Vue components structure completely [configurable](#configuration) through [config file](#configuration) with components-as-modules option and async component support.
    * All framework Vue components can be overriden simply by creating dirs/files with same names in applications that use the framework.
    * Support for [configurable](#configuration) Vue.js mixins, filters, directives etc.
    * Theme support with live theme switching and optional themes as node modules
    * [Configurable](#configuration) external css/js resource loading
    * Optional separate debug window for maximum readability
  * Other framework features:
    * __ES2016__ ready (async/await, arrow functions, classes etc.)
    * Most styles can be changed through CSS variables
    * Optional CSS compiling (postcss)
    * Optional live CSS reloading when debug is on
    * Logging:
      * Debug messages (with stack traces, [configurable](#configuration) message levels and grouping in console)
      * Per-class [configurable](#configuration) debug output
      * User messages  (with stack traces and [configurable](#configuration) message levels)
      * Per-class [configurable](#configuration) user message output
      * Exporting debug/user messages to JSON files for later analysis
      * Log viewer for saved user/debug logs
  * Planned framework features for the future:
    * [ ] Remote (binary and non-binary) js loading
    * [ ] Automatic updates
    * [ ] [Configurable](#configuration) command-line parameters

<div align="right"><a href="#nw-app-example">▲ top</a></div>

## Documentation ##
You can see online generated documentation for nw-skeleton framework [here](https://nwfw.github.io/nw-skeleton-documentation/ "nw-skeleton documentation") and online generated documentation for nw-app-example [here](https://nwfw.github.io/nw-app-example-documentation/ "nw-app-example documentation")

To generate documentation locally, run `npm run doc` in application directory which will generate documentation in './doc'

<div align="right"><a href="#nw-app-example">▲ top</a></div>

## Components ##
Vue.js components are organized in directories:
  * __global__ - for global components
  * __app__ - for "regular" components
  * __modal__ - for modal-dialog components (those will also be registered as global)

<div align="center">

| ![System window-controls component](https://gist.githubusercontent.com/jazziebgd/8b07f06bc6ef9057a590fbdcd002f905/raw/window-controls-and-menu.png "System window-controls component") |
|:---:|
| System window-controls component |

</div>

Components can also be loaded as external npm modules. Each component can have its state file that gets merged with app state data. System will also automatically load css files with same name as the component. If necessary, component configuration can include any number of custom css files.

<div align="right"><a href="#nw-app-example">▲ top</a></div>

## App state ##
All data for the app is stored under single appState object so components and other code can easily share data. Separate file for application data is provided since that data structure varies from app to app.

<div align="right"><a href="#nw-app-example">▲ top</a></div>

## App data ##
Stored in separate file, this object is to be used as temporary current app instance storage.

<div align="right"><a href="#nw-app-example">▲ top</a></div>

## User data ##
This object can easily be saved or loaded via localStorage helper in order to preserve data for next sessions

<div align="right"><a href="#nw-app-example">▲ top</a></div>

## Mixed context ##
Using nwjs.io mixed node/browser context, you can easily work with filesystem, network, websockets or DOM from single Vue component or javascript class.

<div align="right"><a href="#nw-app-example">▲ top</a></div>

## Clipboard ##
Clipboard helper makes it easy to cut/copy/paste text without having to rely on OS support - works same on all platforms (Win, Mac, Linux)

<div align="right"><a href="#nw-app-example">▲ top</a></div>

## Base classes ##
Base classes (all system objects extend them) contain all necessary methods and properties for easy coding such as translations, easy helper access, logging and notifying user whether through application or desktop notifications (enabled in nwjs.io by default). There are three of them:
  * [BaseClass](https://nwfw.github.io/nw-skeleton-documentation/appWrapper.BaseClass.html "BaseClass") - main base class that contains common methods for extended classes. This one should not be extended directly, instead one of the classes below are used when creating new classes.
  * [AppBaseClass](https://nwfw.github.io/nw-skeleton-documentation/appWrapper.AppBaseClass.html "AppBaseClass") - base class for application classes (i.e. ones that run in node/browser context)
  * [MainBaseClass](https://nwfw.github.io/nw-skeleton-documentation/mainScript.MainBaseClass.html "MainBaseClass") - base class for main script classes (i.e. ones that run in main nwjs.io script context)

<div align="right"><a href="#nw-app-example">▲ top</a></div>

## CSS config files ##
All themes as well as system itself contain config CSS files that declare CSS variables that can be used in all CSS files - changing appearance and UX is wasy as setting the CSS variable to desired value

<div align="right"><a href="#nw-app-example">▲ top</a></div>

## Easy extending ##
Using configuration variable `appConfig.mainComponent`, you can easily configure what will be base view for your app. Since components themselves can extend configuration through their componentState file (or using separate config file for npm-module components) you can even override main component from component configuration itself.

<div align="right"><a href="#nw-app-example">▲ top</a></div>

## Internationalization ##
Using simple JS objects for language definitions and internationalization, it is easy to adapt the app for all user needs. With auto-scan and auto-clear (auto-trim) functionality, adding new or removing unneeded translations and/or languages is easy and requires no coding or programming skills.

<div align="right"><a href="#nw-app-example">▲ top</a></div>

## Logging ##
With [configurable](#configuration) message levels (defaults are debug, info, warning and error) debugging and filtering debug logs is easy. Logs can be saved in JSON format for later analysis, and each log message can contain stack trace for easier bug fixing.

<div align="center">

| ![Separate debug window](https://gist.githubusercontent.com/jazziebgd/8b07f06bc6ef9057a590fbdcd002f905/raw/separate-app-debug-window.png "Separate debug window") |
|:---:|
| Separate debug window |

</div>

Both user messages and debug logs can be configured to be automatically saved as files for later analysis as well.

<div align="right"><a href="#nw-app-example">▲ top</a></div>

## Themes ##
Each theme can contain config css file that overrides system css config. In addition, you can define your own css files that will be loaded beside system ones, override system css files set css file loading order etc. You can even set your own js files that will be included into application `<head>` tag if theme requires them.
By setting a single flag `liveCss` in configuration file, you can enable live CSS reloading to make styling easier. Live CSS reload works with or without CSS compiling, but only when debug is enabled.

<div align="right"><a href="#nw-app-example">▲ top</a></div>

## Controlled initalization / shutdown ##
Application will wait for certain flags in `appState` to be set before it presents its window to the user.
Each of the main JS classes can have async `initialize` and `finalize` methods that will be called upon application initialization or finalization. In addition, they can also have async `shutdown` method that will be automatically called before application closes.

<div align="right"><a href="#nw-app-example">▲ top</a></div>

## Menus / Tray ##
You can easily configure application menus using just [config file](#configuration) variables `hasAppMenu` and `menuData`.

<div align="center">

| ![Tray icon and menu example](https://gist.githubusercontent.com/jazziebgd/8b07f06bc6ef9057a590fbdcd002f905/raw/app-tray-menu.png "Tray icon and menu example") |
|:---:|
| Tray icon and menu example |

</div>

Tray support w/icons is also available and fully [configurable](#configuration) through configuration file variables `hasTrayIcon` and `trayData`.

<div align="right"><a href="#nw-app-example">▲ top</a></div>

## Modal dialogs ##

<div align="center">

| ![Modal language editor](https://gist.githubusercontent.com/jazziebgd/8b07f06bc6ef9057a590fbdcd002f905/raw/modal-dialog-example.png "Modal language editor") |
|:---:|
| Modal language editor |

</div>

Easily extendable and highly [configurable](#configuration), modal dialog components can be used for all types of tasks - from loading/saving files to displaying warnings / queries on app closing. Modal dialogs can display app notifications and progress bar if needed, since modal mask can obscure those important UI elements. You can set callbacks for 'onBeforeOpen', 'onOpen', 'onBeforeClose', 'onClose', 'onCancel' and 'onConfirm' events.

<div align="right"><a href="#nw-app-example">▲ top</a></div>

## Configuration ##
Almost all application aspects can be controlled through configuration. Configuration variables are explained in [JSDoc documentation](https://nwfw.github.io/nw-skeleton-documentation/global.html#AppWrapperConfig).
Default configuration file looks like:
```javascript
{
    main: {
        debug: {
            enabled: true,
            debugToWindow: false,
            debugLevel: 2,
            displayTimestamps: true,
            debugToFile: true,
            saveStacksToFile: true,
            debugToFileAppend: false,
            debugLogFilename: './app/var/log/main-debug.log',
        },
    },
    wrapper: {
        appFile: './node_modules/nw-skeleton/app-wrapper/js/app',

        themeBaseDir: './node_modules/nw-skeleton/app-wrapper/css/themes',

        componentCodeRegex: /\.js$/,
        componentDirectories: {
            component: ['./node_modules/nw-skeleton/app-wrapper/components/app/'],
            globalComponent: ['./node_modules/nw-skeleton/app-wrapper/components/global/', './node_modules/nw-skeleton/app-wrapper/components/form'],
            modalComponent: ['./node_modules/nw-skeleton/app-wrapper/components/modal/']
        },

        systemHelperDirectories: ['./node_modules/nw-skeleton/app-wrapper/js/helper/system/'],
        helperDirectories: ['./node_modules/nw-skeleton/app-wrapper/js/helper/'],

        mixinRoot: './node_modules/nw-skeleton/app-wrapper/js/mixin/',
        mixinExtensionRegex: /\.js$/,

        directiveRoot: './node_modules/nw-skeleton/app-wrapper/js/directive/',
        directiveExtensionRegex: /\.js$/,

        filterRoot: './node_modules/nw-skeleton/app-wrapper/js/filter/',
        filterExtensionRegex: /\.js$/,

        translationExtensionRegex: /\.i18n\.js$/,
        translationsRoot: './app/data/translations/',

        componentMapping: {
            'app-window': {
                name: 'app-window',
                components: {
                    'app-header': {
                        name: 'app-header',
                        components: {
                            'window-controls': {
                                name: 'window-controls',
                                components: {
                                    'theme-select': {
                                        name: 'theme-select'
                                    },
                                    'language-select': {
                                        name: 'language-select'
                                    }
                                }
                            },
                        }
                    },
                    'app-main': {
                        name: 'app-main'
                    },
                    'app-footer': {
                        name: 'app-footer',
                    }
                }
            }
        },
    },

    minPauseDuration: 10,
    shortPauseDuration: 100,
    mediumPauseDuration: 250,
    longPauseDuration: 700,
    longerPauseDuration: 1000,

    cancelOperationTimeout: 30000,

    appConfig: {
        appFile: null,
        appSubFiles: [],
        mainComponent: 'app-main',
        tmpDataDir: './app/var',
        showInitializationStatus: true,
        showInitializationProgress: true,

        themeBaseDir: './app/css/themes',

        cssCompiledFile: '/app/var/css/dist.css',
        initCssFiles: [
            '/node_modules/nw-skeleton/app-wrapper/css/config.css',
        ],
        cssFiles: [
            '/node_modules/nw-skeleton/app-wrapper/css/fonts.css',
            '/node_modules/nw-skeleton/app-wrapper/css/layout.css',
            '/node_modules/nw-skeleton/app-wrapper/css/style.css',
            '/node_modules/nw-skeleton/app-wrapper/css/transitions.css'
        ],
        overrideCssFiles: [],

        initJsFiles: [],
        jsFiles: [
            '/node_modules/nw-skeleton/app-wrapper/js/lib/ext/vue.js'
        ],

        debugCssFiles: [
            '/node_modules/nw-skeleton/app-wrapper/css/debug.css'
        ],

        debugJsFiles: [],

        componentMapping: {},
        componentModules: {
            component: [],
            globalComponent: [],
            modalComponent: []
        },

        mixinRoot: './app/js/mixin/',

        directiveRoot: './app/js/directive/',
        directiveExtensionRegex: /\.js$/,

        disableRightClick: true,

        hasAppMenu: false,
        menuData: {
            editMenu: {
                menuItem: {
                    label: 'Edit',
                    method: 'noop'
                },
                children: [
                    // {
                    //     menuItem: {
                    //         label: 'Undo',
                    //         method: 'helpers.clipboardHelper.undo',
                    //         shortcut: {
                    //             key: 'z',
                    //             modifiers: {
                    //                 ctrl: true
                    //             }
                    //         }
                    //     }
                    // },
                    // {
                    //     menuItem: {
                    //         label: 'Redo',
                    //         method: 'helpers.clipboardHelper.redo',
                    //         shortcut: {
                    //             key: 'z',
                    //             modifiers: {
                    //                 ctrl: true,
                    //                 shift: true
                    //             }
                    //         }
                    //     }
                    // },
                    {
                        menuItem: {
                            type: 'separator'
                        },
                        children: []
                    },
                    {
                        menuItem: {
                            label: 'Cut',
                            method: 'helpers.clipboardHelper.cut',
                            shortcut: {
                                key: 'x',
                                modifiers: {
                                    ctrl: true
                                }
                            }
                        }
                    },
                    {
                        menuItem: {
                            label: 'Copy',
                            method: 'helpers.clipboardHelper.copy',
                            shortcut: {
                                key: 'c',
                                modifiers: {
                                    ctrl: true
                                }
                            }
                        }
                    },
                    {
                        menuItem: {
                            label: 'Paste',
                            method: 'helpers.clipboardHelper.paste',
                            shortcut: {
                                key: 'v',
                                modifiers: {
                                    ctrl: true
                                }
                            }
                        }
                    },
                    {
                        menuItem: {
                            label: 'Select all',
                            method: 'helpers.clipboardHelper.selectAll',
                            shortcut: {
                                key: 'a',
                                modifiers: {
                                    ctrl: true
                                }
                            }
                        }
                    }
                ]
            }
        },
        hasTrayIcon: false,
        trayData: {},
        allowFullscreen: true,
        hideFullscreenHeader: true,
        hideFullscreenFooter: true,
        windowConfig: {
            left: null,
            top: null,
            width: null,
            height: null,
            fullscreen: false,
        },
    },

    configData: {
        uneditableConfig: [],
        editableConfig: [],
        noReloadConfig: [],
        reloadConfig: [],
        ignoreUserConfig: [
            'appConfig.menuData',
            'appConfig.componentMapping',
            'appConfig.appSubFiles',
            'userMessages.forceUserMessages',
            'debug.forceDebug',
            'appInfo',
            'currentLanguage',
            'currentLanguageName',
            'currentLocale',
        ],
        defaultVar: {
            editable: true,
            reload: true,
            control: 'text'
        },
        vars: {
            app: {
                editable: false,
                reload: true
            },
            appConfig: {
                editable: true,
                reload: false
            },
            logDir: {
                editable: false,
                reload: true
            },
            varDir: {
                editable: false,
                reload: true
            },
            'debug.debugMessagesFilename': {
                editable: false,
                reload: true
            },
            'userMessages.userMessagesFilename': {
                editable: false,
                reload: true
            },
            'userMessages.userMessageLevel': {
                editable: true,
                reload: false,
                type: 'string',
                control: 'select',
                controlData: {
                    items: {
                        1: 'debug',
                        2: 'info',
                        3: 'warning',
                        4: 'error'
                    }
                }
            },
            'debug.debugLevel': {
                editable: true,
                reload: false,
                type: 'string',
                control: 'select',
                controlData: {
                    items: {
                        1: 'debug',
                        2: 'info',
                        3: 'warning',
                        4: 'error'
                    }
                }
            },
            'debug.enabled': {
                editable: true,
                reload: false
            },
            'debug.hideDebug': {
                editable: true,
                reload: false
            },
            'logger.messageLevels': {
                editable: false,
                reload: true
            },
            windowWidth: {
                editable: false,
                reload: false
            },
            windowHeight: {
                editable: false,
                reload: false
            },
            componentMapping: {
                editable: false,
                reload: true
            },
            theme: {
                editable: true,
                reload: false
            },
            currentLanguage: {
                editable: true,
                reload: false,
                type: 'string',
                control: 'select',
                controlData: {
                    items: {
                        'en-US': 'English',
                        'sr-Latn-RS': 'Srpski',
                        'sr-Cyrl-RS': 'Српски',
                    }
                }
            },
            currentLocale: {
                editable: true,
                reload: false,
                type: 'string',
                control: 'select',
                controlData: {
                    items: {
                        'en-US': 'English',
                        'sr-Latn': 'Srpski',
                        'sr-Cyrl': 'Српски',
                    }
                }
            },
            'debug.messagesExpanded': {
                editable: true,
                reload: false
            },
            'userMessages.messagesExpanded': {
                editable: true,
                reload: false
            },
            'debug.displayTimestamps': {
                editable: true,
                reload: false
            },
            'userMessages.displayTimestamps': {
                editable: true,
                reload: false
            },
            'debug.forceDebug': {
                editable: false,
                reload: true
            },
            'userMessages.forceUserMessages': {
                editable: false,
                reload: false
            },
            compileCss: {
                editable: true,
                reload: false
            },
            liveCss: {
                editable: true,
                reload: false
            },
        }
    },

    varDir: './app/var',
    logDir: './app/var/log',

    currentLanguageName: 'English',
    currentLanguage: 'en-US',
    currentLocale: 'en',
    allowLanguageChange: true,
    autoAddLabels: true,

    themeModules: [],
    theme: 'dark',
    allowThemeChange: true,

    liveCss: false,
    compileCss: false,

    appNotifications: {
        userMessageDuration: 3000,
        duration: 5000,
    },
    logger: {
        messageLevels: {
            'debug': 1,
            'info': 2,
            'warning': 3,
            'error': 4
        },
    },
    userMessages: {
        animateMessages: true,
        hideUserMessages: false,
        userMessageLevel: 3,
        maxVisibleUserMessages: 200,
        maxUserMessages: 5000,
        userMessagesToFile: true,
        saveStacksToFile: true,
        userMessagesToFileAppend: false,
        userMessagesFilename: './app/var/log/user-messages.log',
        messagesExpanded: false,
        displayTimestamps: true,
        forceUserMessages: {
            AppConfig: false,
            AppNotificationsHelper: false,
            AppOperationHelper: false,
            AppTemplates: false,
            AppTranslations: false,
            AppWrapper: false,
            ClipboardHelper: false,
            ComponentHelper: false,
            DebugHelper: false,
            FileManager: false,
            FormatHelper: false,
            HtmlHelper: false,
            KeyboardHelper: false,
            MenuHelper: false,
            ModalHelper: false,
            StaticFilesHelper: false,
            StorageHelper: false,
            StyleHelper: false,
            ThemeHelper: false,
            UserDataHelper: false,
            UserMessageHelper: false,
            UtilHelper: false,
            WindowManager: false,
            WrapperApp: false
        }
    },
    debug: {
        animateMessages: true,
        hideDebug: false,
        enabled: true,
        usage: false,
        usageInterval: 500,
        usageGraphs: false,
        usageHistoryCount: 1000,
        debugToFile: true,
        saveStacksToFile: true,
        debugToFileAppend: false,
        debugMessagesFilename: './app/var/log/debug-messages.log',
        messagesExpanded: false,
        displayTimestamps: true,
        devTools: true,
        alwaysTrace: false,
        debugLevel: 3,
        maxVisibleDebugMessages: 200,
        maxDebugMessages: 5000,
        debugGroupsCollapsed: false,
        passToMain: false,
        debugWindowFile: './node_modules/nw-skeleton/app-wrapper/template/debug.html',
        forceDebug: {
            AppConfig: false,
            AppNotificationsHelper: false,
            AppOperationHelper: false,
            AppTemplates: false,
            AppTranslations: false,
            AppWrapper: false,
            ClipboardHelper: false,
            ComponentHelper: false,
            DebugHelper: false,
            FileManager: false,
            FormatHelper: false,
            HtmlHelper: false,
            KeyboardHelper: false,
            MenuHelper: false,
            ModalHelper: false,
            StaticFilesHelper: false,
            StorageHelper: false,
            StyleHelper: false,
            ThemeHelper: false,
            UserDataHelper: false,
            UserMessageHelper: false,
            UtilHelper: false,
            WindowManager: false,
            WrapperApp: false
        },
    },

    windowCloseTimeoutDuration: 15000,
    windowReloadTimeoutDuration: 15000,

    windowWidth: null,
    windowHeight: null,

};
```

Configuration values can be easily changed by overriding them your app `config.js` file.

<div align="right"><a href="#nw-app-example">▲ top</a></div>

## Resetting configuration and / or data ##
There are three built-in command line parameters for cleaning up saved data:
  - `resetConfig` - resets (deletes) saved configuration
    - Command line
      - `nw . resetConfig` (Mac/Linux)
      - `nw.exe . resetConfig` (Windows)
  - `resetData` - resets (deletes) saved user data
    - Command line
      - `nw . resetData` (Mac/Linux)
      - `nw.exe . resetData` (Windows)
  - `resetAll` - resets (deletes) both user data _and_ saved configuration
    - Command line
      - `nw . resetAll` (Mac/Linux)
      - `nw.exe . resetAll` (Windows)