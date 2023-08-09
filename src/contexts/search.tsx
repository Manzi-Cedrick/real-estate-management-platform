import React, { createContext, useContext, useState } from "react";

// Define the shape of the search parameters
interface SearchParams {
  location: string;
  type: string[];
  price: number[];
}

// Define the shape of the context
interface SearchParamsContextValue {
  searchParams: SearchParams;
  setSearchParams: React.Dispatch<React.SetStateAction<SearchParams>>;
}

// Create the context
const SearchParamsContext = createContext<SearchParamsContextValue | undefined>(
  undefined
);

// Create a provider component to wrap around the components that need access to the search parameters
export const SearchParamsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    location: "",
    type: [],
    price: [],
  });

  const value: SearchParamsContextValue = {
    searchParams,
    setSearchParams,
  };

  return (
    <SearchParamsContext.Provider value={value}>
      {children}
    </SearchParamsContext.Provider>
  );
};

// Custom hook to access the search parameters
export const useSearchParams = () => {
  const context = useContext(SearchParamsContext);
  if (context === undefined) {
    throw new Error(
      "useSearchParams must be used within a SearchParamsProvider"
    );
  }
  return context;
};
