import Train from "./train-stations.json";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import { Box } from "@mui/material";
import TableForm from "./TableForm";
import SearchForm from "./Search";
import { useEffect, useState } from "react";

const LeafLet = dynamic(() => import("../../atoms/Leaflet"), {
  ssr: false,
});
const Index = () => {
  const [filteredList, setFilteredList] = useState(Train);
  const [filterCity, setFilterCity] = useState("");

  const filterByCity = (city) => {
    if (!city) return Train;
    const lowerQuery = city.toLowerCase();

    return Train.filter((item) => item.city.toLowerCase().includes(lowerQuery));
  };

  useEffect(() => {
    setFilteredList(filterByCity(filterCity));
  }, [filterCity]);

  return (
    <>
      <Box
        sx={{
          //boxShadow: ' rgb(100 100 111 / 9%) 0px 7px 29px 0px',
          width: "100%",
          minHeight: "90px",
          borderRadius: 2,
          marginBottom: 5,
          border: "1px solid #c1c1c1a8",
        }}
      >
        <SearchForm
          onSearchItem={(name) => {
            setFilterCity(name);
          }}
        />
      </Box>
      <Box
        sx={{
          //boxShadow: ' rgb(100 100 111 / 9%) 0px 7px 29px 0px',
          width: "100%",
          minHeight: "90px",
          borderRadius: 2,
          marginBottom: 5,
          border: "1px solid #c1c1c1a8",
        }}
      >
        <LeafLet locations={filteredList}></LeafLet>
      </Box>
      <Box
        sx={{
          //boxShadow: ' rgb(100 100 111 / 9%) 0px 7px 29px 0px',
          width: "100%",
          minHeight: "90px",
          borderRadius: 2,
          marginBottom: 5,
          border: "1px solid #c1c1c1a8",
        }}
      >
        <TableForm rows={filteredList} />
      </Box>
    </>
  );
};

export default Index;
