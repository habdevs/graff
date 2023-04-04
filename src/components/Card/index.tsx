import React from 'react';
import { Link } from 'react-router-dom';

import { ICardProps } from '../../interface';

export const Card: React.FC<ICardProps> = ({
  code,
  name,
  native,
  phone,
  languages,
}) => {
  const languagesString = languages.map((language) => language.name).join(', ');

  return (
    <Link
      to={{
        pathname: `/country/${name}`,
      }}
    >
      <div className="bg-card rounded-lg shadow-lg p-4 mb-4 max-h-1384 max-h-130">
        <h2 className="text-tex text-lg font-medium">{name}</h2>
        <p className="text-tex text-sm text-gray-500">Code: {code}</p>
        <p className="text-tex text-sm text-gray-500">Native: {native}</p>
        <p className="text-tex text-sm text-gray-500">Phone: {phone}</p>
        <p className="text-tex text-sm text-gray-500">
          Languages: {languagesString}
        </p>
      </div>
    </Link>
  );
};
