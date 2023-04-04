import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { CardList } from './components/CardList';
import { CardPage } from './components/CardPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<CardList />} />
          <Route path="/country/:name" element={<CardPage />} />
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} />
      </React.Fragment>
    </QueryClientProvider>
  );
}

export default App;
