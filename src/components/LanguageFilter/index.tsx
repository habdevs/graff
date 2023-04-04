import React from 'react';

interface Props {
  languages: Array<{ name: string }>;
  selectedLanguages: string[];
  handleLanguageChange: (language: string) => void;
}

export const LanguageFilter: React.FC<Props> = ({
  languages,
  selectedLanguages,
  handleLanguageChange,
}) => {
  const uniqueLanguages: string[] = Array.from(
    new Set(languages.flatMap((language) => language.name))
  );

  return (
    <div className="language-filter__wrapper">
      <label>
        Show countries that use:
        <select
          value=""
          onChange={(event) => handleLanguageChange(event.target.value)}
        >
          <option value="">All languages</option>
          {uniqueLanguages.map((language, index) => (
            <option key={index} value={language}>
              {language}
            </option>
          ))}
        </select>
      </label>
      <ul>
        {uniqueLanguages.map((language, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                checked={selectedLanguages.includes(language)}
                onChange={() => handleLanguageChange(language)}
              />
              {language}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
