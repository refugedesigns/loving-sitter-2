import React, { useState, useEffect, useMemo } from "react"

import { useParams, useLocation } from "react-router"
import { Container, Box, Grid, Typography, TextField } from "@mui/material"
import { DatePicker, MobileDatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment"
import addDays from "date-fns/addDays"

import { useSelector } from "react-redux"
import { selectAllDogsiters } from "../../redux/dogsitter/dogsitter.slice"
import { useFetchAllDogsittersQuery } from "../../redux/api"
import { Dogsitter as DogsitterInterface } from "../../interface/user"

import Dogsitter from "../../components/dogsitter/dogsitter.component"
import withLayout from "../../components/hoc/layout-wrapper.component"

const ListingsPage = () => {
  const location = useLocation()
  const params = useMemo(() => {
    return Object.fromEntries(new URLSearchParams(location?.search))
  }, [location.search])
  const [startDate, setStartDate] = useState<Date | null>(new Date())
  const [endDate, setEndDate] = useState<Date | null>(addDays(new Date(), 6))
  const startDay = startDate?.toString().split(" ")[0]
  const endDay = endDate?.toString().split(" ")[0]
  const { data } = useFetchAllDogsittersQuery("")
  const dogsitters = useSelector(selectAllDogsiters) as DogsitterInterface[]
  const [city, setCity] = useState<string>("")
  console.log(dogsitters)
  console.log(startDay, endDay)
  console.log(startDate)
  console.log(dogsitters)

  useEffect(() => {
    if (params.location) {
      setCity(params.location)
      setStartDate(new Date(params.start))
      setEndDate(new Date(params.end))
    }
  }, [params])

  return (
    <>
      <Container
        maxWidth="xl"
        className="pt-28 space-y-5 mx-auto flex flex-col items-center"
      >
        <Typography className="font-semibold" variant="h3">
          Your search result
        </Typography>
        <Box className="px-4 space-y-5  max-w-md  max-auto  md:flex md:space-y-0 md:space-x-4 md:max-w-3xl">
          <TextField
            className="md:w-1/2"
            fullWidth
            hiddenLabel
            placeholder="location"
            value={city}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setCity(event.target.value)
            }}
          />
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <Box className="md:hidden flex space-x-3 items-center justify-center md:w-1/2">
              <MobileDatePicker
                value={startDate}
                onChange={(newValue) => {
                  setStartDate(newValue)
                }}
                renderInput={(params) => <TextField {...params} />}
              />
              <Typography className="text-gray-500">to</Typography>
              <MobileDatePicker
                value={endDate}
                onChange={(newValue) => {
                  setEndDate(newValue)
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </Box>
            <Box className="hidden md:inline-flex space-x-2 items-center">
              <DatePicker
                value={startDate}
                onChange={(newValue) => {
                  setStartDate(newValue)
                }}
                renderInput={(params) => <TextField {...params} />}
              />
              <Typography className="text-gray-500">to</Typography>
              <DatePicker
                value={endDate}
                onChange={(newValue) => {
                  setEndDate(newValue)
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </Box>
          </LocalizationProvider>
        </Box>
      </Container>
      <Container className="py-16">
        <Grid
          className=""
          rowSpacing={3}
          columnSpacing={{ md: 3 }}
          direction="row"
          alignItems="center"
          justifyContent={{ xs: "center", md: "start" }}
          container
        >
          {dogsitters
            ?.filter((dogsitter) => {
              if (!dogsitter.city?.toLocaleLowerCase().includes(city)) {
                return false
              }

              if (!dogsitter.availabilityDays.includes(startDay as string)) {
                return false
              }

              if (!dogsitter.availabilityDays.includes(endDay as string)) {
                return false
              }

              return true
            })
            .map((dogsitter) => (
              <Grid
                key={dogsitter.id}
                className="flex flex-col items-center"
                item
                xs={12}
                md={3}
                lg={3}
              >
                <Dogsitter
                  name={dogsitter.fullName}
                  description={dogsitter.about}
                  price={dogsitter.price}
                  city={dogsitter.city}
                  tags={dogsitter.petSittingCategory}
                  profilePhoto={dogsitter.profilePhoto}
                  dogsitterId={dogsitter.id}
                />
              </Grid>
            ))}
        </Grid>
      </Container>
    </>
  )
}

export default withLayout(ListingsPage)
