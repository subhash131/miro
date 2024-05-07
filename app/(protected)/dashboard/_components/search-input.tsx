"use client";

import React, { useEffect, useState, ChangeEvent } from "react";
import qs from "query-string";
import { Search } from "lucide-react";
import { useDebounceValue } from "usehooks-ts";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";

const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [debounceValue] = useDebounceValue(value, 500);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: "/dashboard",
        query: {
          search: debounceValue,
        },
      },
      { skipEmptyString: true, skipNull: true }
    );
    router.push(url);
  }, [debounceValue, router]);

  return (
    <div className="w-full relative">
      <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground h-4 w-4 " />
      <Input
        className="w-full max-w-[516px] pl-9 outline-none focus:outline-none"
        placeholder="search"
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};

export default SearchInput;
