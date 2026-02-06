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
      className="text-sm font-medium uppercase tracking-wider"
    >
      {i18n.language === 'cs' ? 'EN' : 'CZ'}
    </Button>
  );
};

export default LanguageSwitcher;
