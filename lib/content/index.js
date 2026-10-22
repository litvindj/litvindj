import en from './services-en';
import pl from './services-pl';
import ru from './services-ru';

const ALL = { en, pl, ru };

export const normLang = (l) => (['pl', 'ru'].includes(l) ? l : 'en');
export const getServicesContent = (lang) => ALL[normLang(lang)];
