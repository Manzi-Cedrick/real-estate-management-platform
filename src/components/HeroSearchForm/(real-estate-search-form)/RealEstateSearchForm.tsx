import React, { FC, useState, useEffect } from "react";
import LocationInput from "../LocationInput";
import PriceRangeInput from "./PriceRangeInput";
import PropertyTypeSelect from "./PropertyTypeSelect";

export interface RealEstateSearchFormProps {
  onSearch: (params: object) => void;
}

const RealEstateSearchForm: FC<RealEstateSearchFormProps> = ({ onSearch }) => {
  const [params, setparams] = useState({
    location: "",
    type: [] as string[],
    price: [] as number[],
  });
  const [click, setclick] = useState(false);
  useEffect(() => {
    if (click) {
      onSearch(params);
    }
    setclick(false);
  }, [click]);

  const renderForm = () => {
    return (
      <form className="w-full relative xl:mt-8 flex flex-col lg:flex-row lg:items-center rounded-3xl lg:rounded-full shadow-xl dark:shadow-2xl bg-white dark:bg-neutral-800 divide-y divide-neutral-200 dark:divide-neutral-700 lg:divide-y-0">
        <LocationInput
          searchFunction={(bool) => {
            setclick(bool);
          }}
          searchKey={(searchLocation) => {
            setparams((prev) => ({ ...prev, location: searchLocation }));
          }}
          className="flex-[1.5]"
        />

        <div className="self-center border-r border-slate-200 dark:border-slate-700 h-8"></div>
        <PropertyTypeSelect
          propertyType={(types) => {
            console.log(types, "__________");
            setparams((prev) => ({ ...prev, type: [...prev.type, ...types] }));
          }}
        />
        <div className="self-center border-r border-slate-200 dark:border-slate-700 h-8"></div>
        <PriceRangeInput
          priceRange={(pricenums) => {
            setparams((prev) => ({ ...prev, price: pricenums }));
          }}
          searchFunction={(bool) => {
            setclick(bool);
          }}
        />
      </form>
    );
  };

  return renderForm();
};

export default RealEstateSearchForm;
