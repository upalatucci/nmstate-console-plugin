import { getI18n, useTranslation } from 'react-i18next';

/**
 * A Hook for using the i18n translation.
 */
export const useNMStateTranslation = () => useTranslation('plugin__nmstate-console-plugin');

/**
 * a function to perform translation to 'plugin__nmstate-console-plugin' namespace
 * @param value string to translate
 */
// skipcq: JS-C1002
export const t = (value: string) => getI18n().t(value, { ns: 'plugin__nmstate-console-plugin' });
