import React, { useEffect } from 'react';
import { useState } from 'react';

import { useGetCountries } from '../../services/countries.service';
import { Card } from '../Card';
import { Pagination } from '../Pagination';
import { SearchInput } from '../SearchInput';

export const CardList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchValue, setSearchValue] = useState<string>('');
  const { data, isLoading, isError } = useGetCountries();

  const itemsPerPage = 5;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const filteredData = searchValue
    ? data?.countries.filter((country) =>
        country.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    : data?.countries;

  const totalItems = data?.countries.length || 0;
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    localStorage.setItem('currentPage', pageNumber.toString());
  };

  useEffect(() => {
    const savedPage = localStorage.getItem('currentPage');
    if (savedPage) {
      setCurrentPage(parseInt(savedPage));
    }
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <div className="flex justify-between h-full">
      <div className="ml-10 mr-14 pr-4 container mx-auto">
        <h1 className="text-white text-6xl font-bold underline pt-14 ml-18 mb-10">
          Country sheet
        </h1>

        {filteredData?.slice(startIndex, endIndex).map((country) => (
          <Card
            key={country.code}
            code={country.code}
            name={country.name}
            native={country.native}
            phone={country.phone}
            languages={country.languages}
          />
        ))}
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(totalItems / itemsPerPage)}
          onPageChange={handlePageChange}
        />
      </div>
      <div className="bg-card shadow-lg p-12 flex flex-col  w-312">
        <h2 className="text-white text-2xl font-bold underline pt-6 ml-18 mb-10">
          Filters
        </h2>
        <div className="container">
          <SearchInput setSearchValue={setSearchValue} />
        </div>
      </div>
    </div>
  );
};
