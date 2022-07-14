import React, { useState } from "react"
import { useNavigate } from "react-router"
import { Button, InputLabel, TextField, Box, Typography } from "@mui/material"
import { DateRange, RangeKeyDict, Range } from "react-date-range"
import addDays from "date-fns/addDays"
import moment from "moment"
import "react-date-range/dist/styles.css" // main style file
import "react-date-range/dist/theme/default.css" // theme css file

const SearchInput = () => {
  const [date, setDate] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 6),
      key: "selection",
    },
  ])
  const [location, setLocation] = useState<string>("")
  const navigate = useNavigate()

  const handleSelect = (item: RangeKeyDict) => {
    setDate([item.selection])
  }

  const handleSubmit = (event: React.FormEvent<HTMLDivElement>) => {
    if(!location) {
      alert("You must type in a location")
      return
    }
    event.preventDefault()
    const start = moment(date[0].startDate).format("YYYY-MM-DD")
    const end = moment(date[0].endDate).format("YYYY-MM-DD")
    console.log(start, end, location)
    navigate(`/dogsitter-listings?location=${location}&start=${start}&end=${end}`)
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      className="space-y-4 max-w-md mx-auto"
    >
      <Box>
        <InputLabel className="uppercase" htmlFor="location">
          Where
        </InputLabel>
        <TextField
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setLocation(event.target.value)
          }}
          size="small"
          fullWidth
          id="location"
        />
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
        type="submit"
      >
        Find my dog sitter
      </Button>
    </Box>
  )
}

export default SearchInput
