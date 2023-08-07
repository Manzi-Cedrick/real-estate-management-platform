import NcInputNumber from "components/NcInputNumber/NcInputNumber";
import React, { FC, useState } from "react";
import Select from "shared/Select/Select";
import CommonLayout from "./CommonLayout";
import FormItem from "./FormItem";
import { Value } from "sass";

export interface PageAddListing3Props { }

const PageAddListing3: FC<PageAddListing3Props> = () => {
  const [acreage, setAcreage] = useState<any>("");
  const [guests, setGuests] = useState<number>();
  const [bedroom, setBedroom] = useState<number>();
  const [beds, setBeds] = useState<number>();
  const [bathroom, setBathroom] = useState<number>();
  const [kitchen, setKitchen] = useState<number>();

  return (
    <CommonLayout
      index="03"
      backtHref="/add-listing-2"
      nextHref="/add-listing-4"
    >
      <>
        <h2 className="text-2xl font-semibold">Size of your location</h2>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        {/* FORM */}
        <div className="space-y-8">
          {/* ITEM */}
          <FormItem label="Acreage (m2)">
            <Select onChange={(e) => { setAcreage(e.target.value); console.log(e.target.value) }} >
              <option value="100">100</option>
              <option value="200">200</option>
              <option value="300">300</option>
              <option value="400">400</option>
              <option value="500">500</option>
            </Select>
          </FormItem>
          <NcInputNumber label="Guests" defaultValue={4} onChange={(e) => console.log("Guests : ", e)} />
          <NcInputNumber label="Bedroom" defaultValue={4} onChange={(e) => console.log("Bedroom : ", e)} />
          <NcInputNumber label="Beds" defaultValue={4} onChange={(e) => console.log("Beds : ", e)} />
          <NcInputNumber label="Bathroom" defaultValue={2} onChange={(e) => console.log("Bathroom : ", e)} />
          <NcInputNumber label="Kitchen" defaultValue={2} onChange={(e) => console.log("Kitchen : ", e)} />
        </div>
      </>
    </CommonLayout>
  );
};

export default PageAddListing3;
