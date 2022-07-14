import React from "react"

import { Card, Avatar, Typography, Box, Divider } from "@mui/material"
import { Link } from "react-router-dom"
import { Star } from "@mui/icons-material"
import { HiLocationMarker } from "react-icons/hi"

interface Props {
  name: string
  description?: string
  tags?: string[]
  price: number | null
  city?: string
  profilePhoto?: string
  dogsitterId: string
}

const Dogsitter: React.FC<Props> = ({
  name,
  description,
  tags,
  price,
  city,
  profilePhoto,
  dogsitterId,
}) => {
  return (
    <Link className="no-underline w-full" to={`/dogsitter/${dogsitterId}`}>
      <Card className="flex space-x-2 max-w-md lg:py-2 lg:block lg:w-full lg:space-x-0 hover:cursor-pointer hover:scale-100">
        <Box className="w-[50%] lg:w-min lg:h-[25%] lg:py-2 lg:mx-auto">
          <Avatar
            src={profilePhoto}
            className="rounded-none w-full h-full lg:rounded-full lg:w-20 lg:h-20"
          />
        </Box>
        <Box className="p-2 space-y-2 lg:mx-auto lg:p-0">
          <Typography className="lg:text-center" variant="h6">
            {name}
          </Typography>
          <Typography
            className="italic px-2 text-gray-500 lg:text-center"
            variant="subtitle2"
          >
            {description?.substring(0, 30)}...
          </Typography>
          <Box className="lg:text-center">
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <Star className="text-yellow-500" key={index} />
              ))}
          </Box>
          <Box className="flex flex-wrap w-[90%] justify-center space-x-2 mx-auto px-2">
            {tags?.map((tag, index) => (
              <Box key={index} className="bg-gray-200 px-2 m-1 whitespace-nowrap rounded-full text-xs hover:cursor-pointer">
                {tag}
              </Box>
            ))}
          </Box>
          <Divider />
          <Box className="flex items-center justify-between lg:p-2">
            <Box className="flex items-center">
              <HiLocationMarker className="h-6 w-6 text-red-500" />
              <Typography className="text-gray-500" variant="subtitle1">
                {city}
              </Typography>
            </Box>
            <Box>
              <Typography className="font-semibold" variant="body1">
                ${price}/hr
              </Typography>
            </Box>
          </Box>
        </Box>
      </Card>
    </Link>
  )
}

export default Dogsitter
