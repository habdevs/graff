import { useMemo, useState } from 'react';

import { ICountry } from '../interface';

const useLanguageFilter = (countries: ICountry[]) => {
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  // фильтруем страны на основе выбранных языков
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

  // обработчик изменения языка
  const handleLanguageChange = (language: string) => {
    // проверяем, был ли выбранный язык отмечен
    const isSelected = selectedLanguages.includes(language);

    // создаем новый массив выбранных языков
    let newSelectedLanguages: string[];

    if (isSelected) {
      // удаляем язык из списка выбранных, если он был отмечен
      newSelectedLanguages = selectedLanguages.filter(
        (selected) => selected !== language
      );
    } else {
      // добавляем язык в список выбранных, если он был снят по отметке
      newSelectedLanguages = [...selectedLanguages, language];
    }

    // обновляем массив выбранных языков
    setSelectedLanguages(newSelectedLanguages);
  };

  return { filteredCountries, selectedLanguages, handleLanguageChange };
};

export default useLanguageFilter;
