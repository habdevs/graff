import axios from 'axios';
import { useQuery } from 'react-query';
import { GraphQLClient, gql } from 'graphql-request';

import { ICountry } from '../interface';

const API_BASE_URL = 'https://countries.trevorblades.com/';

axios.defaults.baseURL = API_BASE_URL;

const graphQLClient = new GraphQLClient(API_BASE_URL);

export function useGetCountries() {
  return useQuery<{ countries: ICountry[] }, Error>(
    'get-countries',
    async () => {
      const getCountryList = await graphQLClient.request<{
        countries: ICountry[];
      }>(gql`
        query {
          countries {
            code
            name
            native
            capital
            currency
            languages {
              name
            }
            continent {
              name
            }
            phone
            emoji
            emojiU
          }
        }
      `);
      return getCountryList;
    },
    { cacheTime: 0 }
  );
}
