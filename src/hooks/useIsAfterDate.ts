import { isAfter } from "date-fns";
import { useEffect, useState } from "react";

export function useIsAfterDate() {
  const [isAfterDate, setIsAfterDate] = useState(false);

  function verifyIsAfter() {
    // today is bigger than 04/18/2022
    return isAfter(new Date(), new Date("2023-04-18"))
  }

  useEffect(() => {
    setIsAfterDate(verifyIsAfter());
  }, [])

  return {
    isAfterDate
  }
}