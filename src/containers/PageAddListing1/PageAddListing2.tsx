import { MapPinIcon } from "@heroicons/react/24/solid";
import LocationMarker from "components/AnyReactComponent/LocationMarker";
import Label from "components/Label/Label";
import GoogleMapReact from "google-map-react";
import React, { FC, useState } from "react";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import Input from "shared/Input/Input";
import Select from "shared/Select/Select";
import CommonLayout from "./CommonLayout";
import FormItem from "./FormItem";

export interface PageAddListing2Props { }

const PageAddListing2: FC<PageAddListing2Props> = () => {
  const [country, setCountry] = useState<any>("");
  const [street, setStreet] = useState<any>("");
  const [roomNumber, setRoomNumber] = useState<any>("");
  const [city, setCity] = useState<any>("");
  const [state, setState] = useState<any>("");
  const [postalCode, setPostalCode] = useState<any>("");

  return (
    <CommonLayout
      index="02"
      nextHref="/add-listing-3"
      backtHref="/add-listing-1"
    >
      <>
        <h2 className="text-2xl font-semibold">Your place location</h2>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        {/* FORM */}
        <div className="space-y-8">
          <ButtonSecondary>
            <MapPinIcon className="w-5 h-5 text-neutral-500 dark:text-neutral-400" />
            <span className="ml-3">Use current location</span>
          </ButtonSecondary>
          {/* ITEM */}
          <FormItem label="Country/Region">
            <Select onChange={(e) => { setCountry(e.target.value); console.log(e.target.value) }} >
              <option value="Viet Nam">Viet Nam</option>
              <option value="Thailand">Thailand</option>
              <option value="France">France</option>
              <option value="Barcelona">Barcelona</option>
              <option value="Jappan">Jappan</option>
              <option value="Korea">Korea</option>
              <option value="...">...</option>
            </Select>
          </FormItem>
          <FormItem label="Street">
            <Input placeholder="..." onChange={(e) => { setStreet(e.target.value); console.log(e.target.value) }} />
          </FormItem>
          <FormItem label="Room number (optional)">
            <Input onChange={(e) => { setRoomNumber(e.target.value); console.log(e.target.value) }} />
          </FormItem>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-5">
            <FormItem label="City">
              <Input onChange={(e) => { setCity(e.target.value); console.log(e.target.value) }} />
            </FormItem>
            <FormItem label="State">
              <Input onChange={(e) => { setState(e.target.value); console.log(e.target.value) }} />
            </FormItem>
            <FormItem label="Postal code">
              <Input onChange={(e) => { setPostalCode(e.target.value); console.log(e.target.value) }} />
            </FormItem>
          </div>
          <div>
            <Label>Detailed address</Label>
            <span className="block mt-1 text-sm text-neutral-500 dark:text-neutral-400">
              1110 Pennsylvania Avenue NW, Washington, DC 20230
            </span>
            <div className="mt-4">
              <div className="aspect-w-5 aspect-h-5 sm:aspect-h-3">
                <div className="rounded-xl overflow-hidden">
                  <GoogleMapReact
                    bootstrapURLKeys={{
                      key: "AIzaSyAGVJfZMAKYfZ71nzL_v5i3LjTTWnCYwTY",
                    }}
                    yesIWantToUseGoogleMapApiInternals
                    defaultZoom={15}
                    defaultCenter={{
                      lat: 55.9607277,
                      lng: 36.2172614,
                    }}
                  >
                    <LocationMarker lat={55.9607277} lng={36.2172614} />
                  </GoogleMapReact>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </CommonLayout>
  );
};

export default PageAddListing2;
