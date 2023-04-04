import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useGetCountries } from '../../services/countries.service';
import { ICountry } from '../../interface';

interface ICardParams {
  name: string;
  code: string;
  [key: string]: string | undefined;
}

export const CardPage: React.FC = () => {
  const { name } = useParams<ICardParams>();
  const { data } = useGetCountries();
  const [countryData, setCountryData] = useState<ICountry | undefined>(
    undefined
  );

  useEffect(() => {
    if (data) {
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const country = data.countries.find((country) => country.name === name);
      if (country) {
        setCountryData(country);
      }
    }
  }, [data, name]);

  if (!countryData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-white">{countryData.name}</h1>
      <p className="text-tex text-sm text-gray-500">Code: {countryData.code}</p>
      <p className="text-tex text-sm text-gray-500">
        Native: {countryData.native}
      </p>
      <p className="text-tex text-sm text-gray-500">
        Phone: {countryData.phone}
      </p>
      <p className="text-tex text-sm text-gray-500">
        Languages:{' '}
        {countryData.languages.map((language) => language.name).join(', ')}
      </p>
    </div>
  );
};
