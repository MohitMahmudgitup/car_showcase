"use client";

import { SearchManufacturerProps } from "@/app/types";
import Image from "next/image";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
  Transition,
} from "@headlessui/react";
import { Fragment, useState } from "react";
import { manufacturers } from "@/app/contants/";

const SearchManufacturer = ({ manufacturer ,setManufacturer }: SearchManufacturerProps) => {
  const [query, setQuery] = useState("");

  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="search-manufacturer relative"> {/* Make sure the parent is relative */}
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          {/* Combobox Button */}
          <ComboboxButton className="absolute top-[14px] left-4 z-10">
            <Image src="/car-logo.svg" width={20} height={20} alt="Car Logo" />
          </ComboboxButton>

          {/* Combobox Input */}
          <ComboboxInput
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />

          {/* Transition for Options */}
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <ComboboxOptions
              className=" w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto focus:outline-none scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 transition-all duration-200 ease-in-out"
            >
              {filteredManufacturers.length > 0 ? (
                filteredManufacturers.map((item, index) => (
                  <ComboboxOption
                    key={index}
                    value={item}
                    className={({ active }) =>
                      `cursor-pointer relative search-manufacturer__option px-4 py-3 text-sm font-medium transition-colors duration-150 ${
                        active ? "bg-primary-blue text-white" : "text-gray-800 hover:bg-gray-100"
                      }`
                    }
                  >
                    {item}
                  </ComboboxOption>
                ))
              ) : (
                <div className="px-4 py-3 text-sm text-gray-500">
                  No manufacturers found.
                </div>
              )}
            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
