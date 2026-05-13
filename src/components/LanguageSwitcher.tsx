import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'cs' ? 'en' : 'cs';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="text-sm font-medium uppercase tracking-wider min-h-11 min-w-11"
      aria-label={i18n.language === 'cs' ? 'Switch to English' : 'Přepnout do češtiny'}
    >
      {i18n.language === 'cs' ? 'EN' : 'CZ'}
    </Button>
  );
};

export default LanguageSwitcher;
