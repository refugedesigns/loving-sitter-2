import React, { useState } from "react"

import { Days } from "../../interface/user"
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Avatar,
  Button,
  Rating,
  Input,
  Pagination,
  TextField,
} from "@mui/material"
import { HiLocationMarker, HiPencil, HiOutlineX } from "react-icons/hi"

interface Props {
  fullName: string
  profilePhoto?: string
  availabilityDays?: string[] | [] 
  city?: string
  about?: string
  id: string
}

const DogsitterDetailCard: React.FC<Props> = ({fullName, profilePhoto, availabilityDays, city, about}) => {
  const [writeReview, setWriteReview] = useState<boolean>(false)
  const [ratingValue, setRatingValue] = useState<number | null>(null)
  

  return (
    <Card className="max-w-3xl relative mb-10 mx-auto xl:mx-0 xl:w-[60%]">
      <CardMedia
        component="img"
        height="300"
        image="https://api.lorem.space/image/car?w=300&h=150"
        alt="user background image"
      />
      <Avatar src={profilePhoto} className="w-28 h-28 absolute m-auto left-0 right-0 top-64 border-4 border-white border-solid" />
      <CardContent className="mt-10 flex flex-col p-8">
        <Box className="mx-auto p-4 w-max flex flex-col items-center">
          <Typography className="font-semibold" variant="h5">
            {fullName}
          </Typography>
          <Box className="flex my-4 space-x-2">
            <HiLocationMarker className="w-6 h-6 text-red-500" />
            <Typography className="tracking-wider text-gray-400">
              {city}
            </Typography>
          </Box>
          <Box className="flex space-x-2">
            <Typography>Availability: </Typography>
            <Box className="flex space-x-2">
              {availabilityDays?.map((day, index) => (
                <Typography key={index}>{day}</Typography>
              ))}
            </Box>
          </Box>
        </Box>
        <Box className="my-4">
          <Typography className="font-semibold" variant="h5">
            About Me:
          </Typography>
          <Typography>{about}</Typography>
        </Box>

        <Box className="flex justify-end mb-4">
          {!writeReview ? (
            <Button
              onClick={() => setWriteReview(true)}
              className="py-2"
              variant="contained"
              startIcon={<HiPencil />}
            >
              Write a Review
            </Button>
          ) : (
            <Button
              onClick={() => setWriteReview(false)}
              className="py-2"
              variant="contained"
              startIcon={<HiOutlineX />}
            >
              Close
            </Button>
          )}
        </Box>
        {writeReview && (
          <Box className="flex flex-col">
            <TextField
              className="border rounded-lg p-2"
              fullWidth
              multiline
              minRows={5}
            />
            <Button className="py-2 w-max self-center my-4" variant="contained">
              Submit
            </Button>
          </Box>
        )}
        <Box>
          <Box>
            <Box className="flex items-center space-x-4">
              <Avatar src={profilePhoto} className="w-14 h-14" />
              <Typography className="font-semibold text-xl">
                {fullName}
              </Typography>
            </Box>
            <Box className="flex my-4 space-x-2">
              <Typography>Rating:</Typography>
              <Rating
                name="simple-controlled"
                value={ratingValue}
                onChange={(event, newValue) => {
                  setRatingValue(newValue)
                }}
              />
            </Box>
          </Box>
          <Typography className="underline tracking-wider mb-4" variant="h6">
            Ratings and Reviews(0)
          </Typography>
          <Pagination className="mx-auto w-max" count={10} showLastButton />
        </Box>
      </CardContent>
    </Card>
  )
}

export default DogsitterDetailCard
