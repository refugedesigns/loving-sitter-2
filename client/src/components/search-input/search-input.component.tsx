import React, { useState, useRef, useMemo, useCallback } from "react";

import { Button, InputLabel, TextField, Box, Typography } from "@mui/material";
import { DateRange, RangeKeyDict, Range } from "react-date-range";
import addDays from "date-fns/addDays";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file


const SearchInput = () => {
  const [date, setDate] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const handleSelect = (item: RangeKeyDict) => {
    setDate([item.selection]);
  };

  return (
    <Box className="space-y-4 max-w-md mx-auto">
      <Box>
        <InputLabel className="uppercase" htmlFor="location">
          Where
        </InputLabel>
        <TextField fullWidth id="location" />
      </Box>
      <Box className="mx-auto h-[350px]">
        <DateRange
          editableDateInputs={true}
          onChange={handleSelect}
          moveRangeOnFirstSelection={false}
          rangeColors={["#f14140"]}
          ranges={date}
          className="w-full h-full"
        />
      </Box>
      <Button
        variant="contained"
        disableElevation
        className="py-3 w-1/2 whitespace-nowrap"
      >
        Find my dog sitter
      </Button>
    </Box>
  );
};

export default SearchInput;
