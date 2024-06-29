import React, { createContext, useState, useContext, ReactNode } from 'react';

interface SearchContextProps {
    filter: string;
    setFilter: React.Dispatch<React.SetStateAction<string>>
  }

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export const SearchProvider = ({ children } : { children: ReactNode }) => {
  const [filter, setFilter] = useState('');

  return (
    <SearchContext.Provider value={{ filter, setFilter }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
