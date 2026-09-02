window.eelib = {
    leftBtn: 'nav',
};

window.eelib.pages = [
    {
        id: 'home',
        title: 'Main',
        description: 'General Elements',
        icon: 'img/ui/home.svg',
        active: true,
        btns: [
            ['search'],
        ],
    },
    {
        id: 'demo',
        title: 'Demo',
        icon: 'img/ui/text.svg',
        btns: [
            ['search'],
            ['add'],
        ],
        subcategories: ['all', 'horizontal', 'vertical', 'special'],
        subpages: [
            'media',
            'tables',
        ],
        subpagesmode: 'default',
    },
    {
        id: 'buttons',
        title: 'Buttons',
        icon: 'img/ui/edit.svg',
    },
    {
        id: 'about',
        title: 'About',
        icon: 'img/ui/user.svg',
        leftBtn: 'none',
        btns: [
            ['search'],
            ['add'],
            ['test', 'img/ui/code'],
        ],
        subpages: [
            'seek',
        ],
        subpagesmode: 'modal',
    },
    {
        id: 'seek',
        title: 'SeekBar',
        icon: 'img/ui/spliter.svg',
        subcategories: ['all', 'horizontal', 'vertical', 'special'],
        leftBtn: 'back',
    },
    {
        id: 'media',
        title: 'Медиа',
        icon: 'img/ui/image.svg',
        leftBtn: 'back',
    },
    {
        id: 'tables',
        title: 'Таблицы',
        icon: 'img/ui/list/list.svg',
        leftBtn: 'back',
    },
    {
        id: 'settings',
        title: 'Настройки',
        icon: 'img/ui/settings.svg',
        noBottom: true,
    },
]

window.eelib.translations = {}

window.eelib.settingsConfig = {
    storageKey: 'appSettings',
    defaultSettings: {
        weather: {
            town: '',
            location: [0, 0],
            unit: "C",
            background: false,
            pageBackground: false,
            },
        clock: {
            clockFormat: "24",
            showSeconds: false,
            showDate: true,
            dateFormat: "DDMMYYYY",
            timeZone: "local",
            showDayOfWeek: true,
            leadingZero: true,
            amPm: false,
            showYear: true,
            monthAsText: false,
            dateSeparator: "/",
            jucheCalendar: false,
        }
    },
    schema: {
        clock: {
        title: "Clock",
        items: [
            {
                type: "select",
                key: "clockFormat",
                label: "Clock Format",
                options: { "12": "12-hour", "24": "24-hour" }
            },
            { type: "toggle", key: "showSeconds", label: "Show Seconds" },
            { type: "toggle", key: "showDate", label: "Show Date" }
        ]
        },
        weather: {
        title: "Weather",
        items: [
            { type: "toggle", key: "background", label: "Weather Background" },
            { type: "toggle", key: "pageBackground", label: "Page Background" }
        ]
        }
    },
    onChange: (settings) => {
        // Вызывается при любом изменении настроек
        if (typeof updateTimeDisplay === 'function') {
        updateTimeDisplay();
        }
    }
}