import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import './language-selection.css';

const supportedLanguages = {
    en: 'English',
    hr: 'Hrvatski'
};

export function LanguageSelection() {
    const { i18n } = useTranslation();
    
    // TODO turn this into a button that opens a dropdown
    return (
        <div>
            {Object.entries(supportedLanguages).map(([languageCode, languageName]) => (
            <Button className="languageButton" key={languageCode} type="submit" onClick={() => i18n.changeLanguage(languageCode)}>
                {languageName}
            </Button>
            ))}
        </div>
    );
}