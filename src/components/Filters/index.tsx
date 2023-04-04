// import React, { useState } from 'react';

// import { useGetCountries } from '../../services/countries.service';
// import { Card } from '../Card';

// export const Filters: React.FC = () => {
//   const [searchText, setSearchText] = useState<string>('');
//   const { data, isLoading, isError } = useGetCountries();

//   const handleSearchInputChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     setSearchText(event.target.value);
//   };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (isError) {
//     return <div>Error loading data</div>;
//   }

//   const filteredCountries = data?.countries.filter((country) => {
//     const searchRegex = new RegExp(searchText, 'gi');
//     return searchRegex.test(country.name);
//   });

//   return (
//     <div className="ml-10">
//       <h1 className="text-white text-3xl font-bold underline pt-14 ml-18 mb-10">
//         Country sheet
//       </h1>
//       <div>
//         <label>
//           Search:
//           <input
//             type="text"
//             value={searchText}
//             onChange={handleSearchInputChange}
//           />
//         </label>
//       </div>
//       {filteredCountries?.map((country) => (
//         <Card
//           key={country.code}
//           code={country.code}
//           name={country.name}
//           native={country.native}
//           phone={country.phone}
//           languages={country.languages}
//         />
//       ))}
//     </div>
//   );
// };
