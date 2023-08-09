import React, { useState } from "react";
import HeroSearchForm2Mobile from "./HeroSearchForm2Mobile";
import HeroSearchForm2RealEstateMobile from "./HeroSearchForm2RealEstateMobile";
import { PathName } from "routers/types";
import { useLocation } from "react-router-dom";
import { useSearchParams } from "../../contexts/search";

const PAGES_REAL_ESTATE: PathName[] = [
  "/home-2",
  "/listing-real-estate",
  "/listing-real-estate-map",
];

const HeroSearchForm2MobileFactory = () => {
  const { searchParams, setSearchParams } = useSearchParams(); // Get setSearchParams from context
  const pathname = useLocation().pathname;

  if (PAGES_REAL_ESTATE.includes(pathname as PathName)) {
    return (
      <HeroSearchForm2RealEstateMobile
        onSearch={(values) => {
          console.log(values)
          setSearchParams({ ...searchParams, ...values }); // Update the search parameters in context
        }} // Pass the handleSearch function as a callback
      />
    );
  }

  return <HeroSearchForm2Mobile />;
};

export default HeroSearchForm2MobileFactory;
