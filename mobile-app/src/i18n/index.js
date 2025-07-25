import i18n from 'i18n-js';
import { I18nManager } from 'react-native';
import * as Localization from 'expo-localization';

import ar from './ar.json';
import fr from './fr.json';

// Configure translations
i18n.fallbacks = true;
i18n.translations = { ar, fr };

// Initialize language based on device settings
export const initLocalization = (locale) => {
  const selectedLocale = locale || Localization.locale.split('-')[0];
  i18n.locale = selectedLocale;
  I18nManager.forceRTL(selectedLocale === 'ar');
};

export default i18n;
