import { useMemo, useState } from 'react';

import { ICountry } from '../interface';

const useLanguageFilter = (countries: ICountry[]) => {
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  const filteredCountries = useMemo(() => {
    if (selectedLanguages.length === 0) {
      return countries;
    }

    return countries.filter((country) =>
      country.languages.some((language) =>
        selectedLanguages.includes(language.name)
      )
    );
  }, [selectedLanguages, countries]);

  const handleLanguageChange = (language: string) => {
    const isSelected = selectedLanguages.includes(language);

    let newSelectedLanguages: string[];

    if (isSelected) {
      newSelectedLanguages = selectedLanguages.filter(
        (selected) => selected !== language
      );
    } else {
      newSelectedLanguages = [...selectedLanguages, language];
    }

    setSelectedLanguages(newSelectedLanguages);
  };

  return { filteredCountries, selectedLanguages, handleLanguageChange };
};

export default useLanguageFilter;
