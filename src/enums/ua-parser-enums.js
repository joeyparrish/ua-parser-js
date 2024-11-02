///////////////////////////////////////////////
/*  Enums for UAParser.js v2.0.0-rc.1
    https://github.com/faisalman/ua-parser-js
    Author: Faisal Salman <f@faisalman.com>
    AGPLv3 License */
//////////////////////////////////////////////

/*jshint esversion: 6 */ 

const Browser = Object.freeze({
    '2345_EXPLORER': '2345Explorer',
    '360': '360 Browser',
    ALIPAY: 'Alipay',
    AMAYA: 'Amaya',
    ANDROID: 'Android Browser',
    ARORA: 'Arora',
    AVANT: 'Avant',
    AVAST: 'Avast Secure Browser',
    AVG: 'AVG Secure Browser',
    BAIDU: 'Baidu Browser',
    BASILISK: 'Basilisk',
    BLAZER: 'Blazer',
    BOLT: 'Bolt',
    BOWSER: 'Bowser',
    BRAVE: 'Brave',
    CAMINO: 'Camino',
    CHIMERA: 'Chimera',
    CHROME: 'Chrome',
    CHROME_HEADLESS: 'Chrome Headless',
    CHROME_MOBILE: 'Mobile Chrome',
    CHROME_WEBVIEW: 'Chrome WebView',
    CHROMIUM: 'Chromium',
    COBALT: 'Cobalt',
    COC_COC: 'Coc Coc',
    CONKEROR: 'Conkeror',
    DILLO: 'Dillo',
    DOLPHIN: 'Dolphin',
    DORIS: 'Doris',
    DRAGON: 'Dragon',
    DUCKDUCKGO: 'DuckDuckGo',
    EDGE: 'Edge',
    EPIPHANY: 'Epiphany',
    FACEBOOK: 'Facebook',
    FALKON: 'Falkon',
    FIREBIRD: 'Firebird',
    FIREFOX: 'Firefox',
    FIREFOX_FOCUS: 'Firefox Focus',
    FIREFOX_MOBILE: 'Mobile Firefox',
    FIREFOX_REALITY: 'Firefox Reality',
    FENNEC: 'Fennec',
    FLOCK: 'Flock',
    FLOW: 'Flow',
    GO: 'GoBrowser',
    GOOGLE_SEARCH: 'GSA',
    HELIO: 'Helio',
    HEYTAP: 'HeyTap',
    HUAWEI: 'Huawei Browser',
    ICAB: 'iCab',
    ICE: 'ICE Browser',
    ICEAPE: 'IceApe',
    ICECAT: 'IceCat',
    ICEDRAGON: 'IceDragon',
    ICEWEASEL: 'IceWeasel',
    IE: 'IE',
    INSTAGRAM: 'Instagram',
    IRIDIUM: 'Iridium',
    IRON: 'Iron',
    JASMINE: 'Jasmine',
    KONQUEROR: 'Konqueror',
    KAKAO: 'KakaoTalk',
    KHTML: 'KHTML',
    K_MELEON: 'K-Meleon',
    KLAR: 'Klar',
    KLARNA: 'Klarna',
    KINDLE: 'Kindle',
    LENOVO: 'Smart Lenovo Browser',
    LIEBAO: 'LBBROWSER',
    LINE: 'Line',
    LINKEDIN: 'LinkedIn',
    LINKS: 'Links',
    LUNASCAPE: 'Lunascape',
    LYNX: 'Lynx',
    MAEMO: 'Maemo Browser',
    MAXTHON: 'Maxthon',
    MIDORI: 'Midori',
    MINIMO: 'Minimo',
    MIUI: 'MIUI Browser',
    MOZILLA: 'Mozilla',
    MOSAIC: 'Mosaic',
    NAVER: 'Naver',
    NETFRONT: 'NetFront',
    NETSCAPE: 'Netscape',
    NETSURF: 'Netsurf',
    NOKIA: 'Nokia Browser',
    OBIGO: 'Obigo',
    OCULUS: 'Oculus Browser',
    OMNIWEB: 'OmniWeb',
    OPERA: 'Opera',
    OPERA_COAST: 'Opera Coast',
    OPERA_MINI: 'Opera Mini',
    OPERA_MOBI: 'Opera Mobi',
    OPERA_TABLET: 'Opera Tablet',
    OPERA_TOUCH: 'Opera Touch',
    OVI: 'OviBrowser',
    PALEMOON: 'PaleMoon',
    PHANTOMJS: 'PhantomJS',
    PHOENIX: 'Phoenix',
    PICOBROWSER: 'Pico Browser',
    POLARIS: 'Polaris',
    PUFFIN: 'Puffin',
    QQ: 'QQBrowser',
    QQ_LITE: 'QQBrowserLite',
    QUARK: 'Quark',
    QUPZILLA: 'QupZilla',
    REKONQ: 'rekonq',
    ROCKMELT: 'Rockmelt',
    SAFARI: 'Safari',
    SAFARI_MOBILE: 'Mobile Safari',
    SAILFISH: 'Sailfish Browser',
    SAMSUNG: 'Samsung Internet',
    SEAMONKEY: 'SeaMonkey',
    SILK: 'Silk',
    SKYFIRE: 'Skyfire',
    SLEIPNIR: 'Sleipnir',
    SLIMBOAT: 'SlimBoat',
    SLIMBROWSER: 'SlimBrowser',
    SLIMJET: 'Slimjet',
    SNAPCHAT: 'Snapchat',
    SOGOU_EXPLORER: 'Sogou Explorer',
    SOGOU_MOBILE: 'Sogou Mobile',
    SWIFTFOX: 'Swiftfox',
    TESLA: 'Tesla',
    TIKTOK: 'TikTok',
    TIZEN: 'Tizen Browser',
    TWITTER: 'Twitter',
    UC: 'UCBrowser',
    UP: 'UP.Browser',
    VIVALDI: 'Vivaldi',
    VIVO: 'Vivo Browser',
    W3M: 'w3m',
    WATERFOX: 'Waterfox',
    WEBKIT: 'WebKit',
    WECHAT: 'WeChat',
    WEIBO: 'Weibo',
    WHALE: 'Whale',
    WOLVIC: 'Wolvic',
    YANDEX: 'Yandex'

    // TODO : test!
});

const BrowserType = Object.freeze({
    CRAWLER: 'crawler',
    CLI: 'cli',
    EMAIL: 'email',
    FETCHER: 'fetcher',
    INAPP: 'inapp',
    MEDIAPLAYER: 'mediaplayer',
    MODULE: 'module'
});

const CPU = Object.freeze({
    '68K': '68k',
    ARM : 'arm',
    ARM_64: 'arm64',
    ARM_HF: 'armhf',
    AVR: 'avr',
    AVR_32: 'avr32',
    IA64: 'ia64',
    IRIX: 'irix',
    IRIX_64: 'irix64',
    MIPS: 'mips',
    MIPS_64: 'mips64',
    PA_RISC: 'pa-risc',
    PPC: 'ppc',
    SPARC: 'sparc',
    SPARC_64: 'sparc64',
    X86: 'ia32',
    X86_64: 'amd64'
});

const Device = Object.freeze({
    CONSOLE: 'console',
    DESKTOP: 'desktop',
    EMBEDDED: 'embedded',
    MOBILE: 'mobile',
    SMARTTV: 'smarttv',
    TABLET: 'tablet',
    WEARABLE: 'wearable',
    XR: 'xr'
});

const Vendor = Object.freeze({
    ACER: 'Acer',
    ALCATEL: 'Alcatel',
    APPLE: 'Apple',
    AMAZON: 'Amazon',
    ARCHOS: 'Archos',
    ASUS: 'ASUS',
    ATT: 'AT&T',
    BENQ: 'BenQ',
    BLACKBERRY: 'BlackBerry',
    DELL: 'Dell',
    ESSENTIAL: 'Essential',
    FACEBOOK: 'Facebook',
    FAIRPHONE: 'Fairphone',
    GEEKSPHONE: 'GeeksPhone',
    GENERIC: 'Generic',
    GOOGLE: 'Google',
    HP: 'HP',
    HTC: 'HTC',
    HUAWEI: 'Huawei',
    INFINIX: 'Infinix',
    ITEL: 'itel',
    JOLLA: 'Jolla',
    KOBO: 'Kobo',
    LENOVO: 'Lenovo',
    LG: 'LG',
    MEIZU: 'Meizu',
    MICROSOFT: 'Microsoft',
    MOTOROLA: 'Motorola',
    NEXIAN: 'Nexian',
    NINTENDO: 'Nintendo',
    NOKIA: 'Nokia',
    NOTHING: 'Nothing',
    NVIDIA: 'Nvidia',
    ONEPLUS: 'OnePlus',
    OPPO: 'OPPO',
    OUYA: 'Ouya',
    PALM: 'Palm',
    PANASONIC: 'Panasonic',
    PEBBLE: 'Pebble',
    PICO: 'Pico',
    POLYTRON: 'Polytron',
    REALME: 'Realme',
    RIM: 'RIM',
    ROKU: 'Roku',
    SAMSUNG: 'Samsung',
    SHARP: 'Sharp',
    SIEMENS: 'Siemens',
    SONY: 'Sony',
    SPRINT: 'Sprint',
    TCL: 'TCL',
    TECHNISAT: 'TechniSAT',
    TECNO: 'Tecno',
    TESLA: 'Tesla',
    ULEFONE: 'Ulefone',
    VIVO: 'Vivo',
    VODAFONE: 'Vodafone',
    XBOX: 'Xbox',
    XIAOMI: 'Xiaomi',
    ZEBRA: 'Zebra',
    ZTE: 'ZTE',

    // TODO : test!
});

const Engine = Object.freeze({
    AMAYA: 'Amaya',
    ARKWEB: 'ArkWeb',
    BLINK: 'Blink',
    EDGEHTML: 'EdgeHTML',
    FLOW: 'Flow',
    GECKO: 'Gecko',
    GOANNA: 'Goanna',
    ICAB: 'iCab',
    KHTML: 'KHTML',
    LIBWEB: 'LibWeb',
    LINKS: 'Links',
    LYNX: 'Lynx',
    NETFRONT: 'NetFront',
    NETSURF: 'NetSurf',
    PRESTO: 'Presto',
    TASMAN: 'Tasman',
    TRIDENT: 'Trident',
    W3M: 'w3m',
    WEBKIT: 'WebKit'
});

const OS = Object.freeze({
    AIX: 'AIX',
    AMIGA_OS: 'Amiga OS',
    ANDROID: 'Android',
    ANDROID_X86: 'Android-x86',
    ARCH: 'Arch',
    BADA: 'Bada',
    BEOS: 'BeOS',
    BLACKBERRY: 'BlackBerry',
    CENTOS: 'CentOS',
    CHROME_OS: 'Chrome OS',
    CHROMECAST: 'Chromecast',
    CONTIKI: 'Contiki',
    DEBIAN: 'Debian',
    DEEPIN: 'Deepin',
    DRAGONFLY: 'DragonFly',
    ELEMENTARY_OS: 'elementary OS',
    FEDORA: 'Fedora',
    FIREFOX_OS: 'Firefox OS',
    FREEBSD: 'FreeBSD',
    FUCHSIA: 'Fuchsia',
    GENTOO: 'Gentoo',
    GHOSTBSD: 'GhostBSD',
    GNU: 'GNU',
    HAIKU: 'Haiku',
    HARMONYOS: 'HarmonyOS',
    HP_UX: 'HP-UX',
    HURD: 'Hurd',
    IOS: 'iOS',
    JOLI: 'Joli',
    KAIOS: 'KaiOS',
    LINPUS: 'Linpus',
    LINSPIRE: 'Linspire',
    LINUX: 'Linux',
    MACOS: 'macOS',
    MAEMO: 'Maemo',
    MAGEIA: 'Mageia',
    MANDRIVA: 'Mandriva',
    MANJARO: 'Manjaro',
    MEEGO: 'MeeGo',
    MINIX: 'Minix',
    MINT: 'Mint',
    MORPH_OS: 'Morph OS',
    NETBSD: 'NetBSD',
    NETRANGE: 'NetRange',
    NETTV: 'NetTV',
    NINTENDO: 'Nintendo',
    OPENHARMONY: 'OpenHarmony',
    OPENBSD: 'OpenBSD',
    OPENVMS: 'OpenVMS',
    OS2: 'OS/2',
    PALM: 'Palm',
    PC_BSD: 'PC-BSD',
    PCLINUXOS: 'PCLinuxOS',
    PICO: 'Pico',
    PLAN9: 'Plan9',
    PLAYSTATION: 'PlayStation',
    QNX: 'QNX',
    RASPBIAN: 'Raspbian',
    REDHAT: 'RedHat',
    RIM_TABLET_OS: 'RIM Tablet OS',
    RISC_OS: 'RISC OS',
    SABAYON: 'Sabayon',
    SAILFISH: 'Sailfish',
    SERENITYOS: 'SerenityOS',
    SERIES40: 'Series40',
    SLACKWARE: 'Slackware',
    SOLARIS: 'Solaris',
    SUSE: 'SUSE',
    SYMBIAN: 'Symbian',
    TIZEN: 'Tizen',
    UBUNTU: 'Ubuntu',
    UNIX: 'Unix',
    VECTORLINUX: 'VectorLinux',
    WATCHOS: 'watchOS',
    WEBOS: 'WebOS',
    WINDOWS: 'Windows',
    WINDOWS_MOBILE: 'Windows Mobile',
    WINDOWS_PHONE: 'Windows Phone',
    XBOX: 'Xbox',
    ZENWALK: 'Zenwalk'

    // TODO : test!
});

module.exports = { 
    Browser,
    BrowserType, 
    CPU, 
    Device, 
    Vendor,
    Engine,
    OS
};