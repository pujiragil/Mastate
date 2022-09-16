// cores
import { useState } from "react"
import { useRouter } from "next/router"
import Image from "next/image"

// packages
import { Flex, Box, Text, Icon } from "@chakra-ui/react"
import { BsFilter } from "react-icons/bs"

// components
import SearchFilters from "../components/SearchFilters"
import Property from "../components/Property"

// assets
import noResult from "../assets/images/noresult.svg"

export default function Search() {
  const [searchFilters, setSearchFilters] = useState(false)
  const router = useRouter()

  return (
    <Box>
      <Flex
        cursor="pointer"
        background="gray.100"
        borderBottom="1px"
        borderColor="gray.200"
        padding="2"
        fontWeight="black"
        fontSize="large"
        justifyContent="center"
        alignItems="center"
        onClick={() => setSearchFilters((prevFilters) => !prevFilters)}
      >
        <Text>Search Property By Filters</Text>
        <Icon paddingLeft="2" width="7" as={<BsFilter />} />
      </Flex>
      {searchFilters && <SearchFilters />}
      <Text fontSize="2xl" padding="4" fontWeight="bold">
        Properties {router.query.purpose}
      </Text>
      <Flex flexWrap="wrap">
        {[].map(property => <Property property={property} key={property.id} />)}
      </Flex>
      {[].length === 0 && (
        <Flex justifyContent="center" alignItems="center" flexDirection="column" marginTop="5" marginBottom="5">
          <Image src={noResult} alt="no result"/>
          <Text fontSize="2xl" marginTop="3">No Results Found</Text>
        </Flex>
      )}
    </Box>
  )
}