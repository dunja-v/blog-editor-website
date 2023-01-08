import { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import './language-selection.css';

const supportedLanguages = {
    en: 'English',
    hr: 'Hrvatski'
};

export function LanguageSelection() {
    const { i18n } = useTranslation();
    const currentLanguage = i18n.language;

    const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
        i18n.changeLanguage(event.target.value)
    }
    
    return (
        <select name="language" className="languageSelection-dropdown" value={currentLanguage} onChange={handleLanguageChange}>
            {Object.entries(supportedLanguages).map(([languageCode, languageName]) => (
                <option value={languageCode} key={languageCode}>
                    {languageName}
                </option>
            ))}
        </select>
    );
}