import { ChevronDownIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";

const StatusDropdown = ({
  included,
  excluded,
  data,
  setData,
  page,
  fetchData,
  query,
  setQuery,
}: any) => {
  const [selectedOption, setSelectedOption] = useState<String>("");

  /* const fetchData = async (
    included: string,
    excluded: string,
    page: number,
    status: string
  ) => {
    const req = await fetch(
      `http://193.123.33.166/genre-recommendation?include=${included}&exclude=${excluded}&page=${page}&status=${status}`
    );
    const newData = await req.json();

    return setData(newData);
  };
*/

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
    if (value === "Airing") {
      setQuery("&status=airing");
    }
    if (value === "Complete") {
      setQuery("&status=complete");
    }
    if (value === "Upcoming") {
      setQuery("&status=upcoming");
    }
  };
  // Wait for query state to update then execute fetch function
  useEffect(() => {
    fetchData(included, excluded, 1, query);
  }, [query]);

  return (
    <div className="w-max relative mb-5">
      <select
        defaultValue={"DEFAULT"}
        onChange={handleChange}
        className="outline-none transition-all duration-300 ease-out bg-gray-50 px-2 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="DEFAULT" disabled>
          Sort by status
        </option>
        <option value="Airing">Airing</option>
        <option value="Complete">Complete</option>
        <option value="Upcoming">Upcoming</option>
      </select>
    </div>
  );
};

export default StatusDropdown;
