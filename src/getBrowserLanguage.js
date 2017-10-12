/**
 * Get browser language.
 *
 * @return {String} langKey
 */
const getBrowserLanguage = () => {
  const first = window.navigator.languages
    ? window.navigator.languages[0]
    : null;

  const lang = first ||
    window.navigator.language ||
    window.navigator.browserLanguage ||
    window.navigator.userLanguage;

  return lang;
};

export default getBrowserLanguage;
