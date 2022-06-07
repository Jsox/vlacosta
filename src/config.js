export const MAPBOX_API = process.env.MAPBOX;

// ROOT PATH AFTER LOGIN SUCCESSFUL
export const PATH_AFTER_LOGIN = '/'; // as '/dashboard/app'

// LAYOUT
// ----------------------------------------------------------------------

export const HEADER = {
  MOBILE_HEIGHT: 64,
  MAIN_DESKTOP_HEIGHT: 88,
  DASHBOARD_DESKTOP_HEIGHT: 92,
  DASHBOARD_DESKTOP_OFFSET_HEIGHT: 92 - 32,
};

export const NAVBAR = {
  BASE_WIDTH: 260,
  DASHBOARD_WIDTH: 280,
  DASHBOARD_COLLAPSE_WIDTH: 88,
  //
  DASHBOARD_ITEM_ROOT_HEIGHT: 48,
  DASHBOARD_ITEM_SUB_HEIGHT: 40,
  DASHBOARD_ITEM_HORIZONTAL_HEIGHT: 32,
};

export const ICON = {
  NAVBAR_ITEM: 22,
  NAVBAR_ITEM_HORIZONTAL: 20,
};

// SETTINGS
// ----------------------------------------------------------------------

export const cookiesExpires = 3;

export const cookiesKey = {
  themeMode: 'themeMode',
  themeDirection: 'themeDirection',
  themeColorPresets: 'themeColorPresets',
  themeLayout: 'themeLayout',
  themeStretch: 'themeStretch',
};

export const defaultSettings = {
  themeMode: 'dark',
  themeDirection: 'ltr',
  themeColorPresets: 'default',
  themeLayout: 'horizontal',
  themeStretch: false,
};

export const CONFIG = {
  SITE_NAME_SHORT: 'VlaCosta',
  SITE_NAME: 'Фотограф в Новороссийске',
};

export const MAIN_ROUTES = {
  PHOTOSESSIONS: 'photosessions',
  TAGS: 'tags',
  PRICES: 'prices',
  ABOUT: 'about-us',
  CONTACT: 'contacts',
  AUTHORS: 'authors'
};

export const CONTACTS = {
  PHONE: {
    TEXT: '+7(964)932-35-93',
    LINK: 'tel:+79649323593'
  },
  EMAIL: {
    TEXT: 'admin@vlacosta.ru',
    LINK: 'mailto:admin@vlacosta.ru',
  }
}