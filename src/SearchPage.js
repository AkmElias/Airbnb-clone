import React from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays . 26 agust to 30 agust . 2 guest</p>
        <h1>Stays nearby</h1>

        <Button variant="outlined">Cancelation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and Beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR8eIhvlzqtrppOVWLt8bNc8852c8KLTqcG8Q&usqp=CAU"
        location="Private room in center of London"
        title="Stay at this spacious Edwardian House"
        description="! guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen . Free parking . Washing Machine"
        star={4.73}
        price="$30 / night"
        total="$117 total"
      />
      <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKgq0p7G0Sg6NtyA9s6twXCtD-uCP3GOBnqQ&usqp=CAU"
        location="Private room in center of London"
        title="Stay at this spacious Edwardian House"
        description="! guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen . Free parking . Washing Machine"
        star={4.5}
        price="$30 / night"
        total="$117 total"
      />

      <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTV_EnUyxCcHG6jKrmnLZXCuOpa3_xzlkLi_g&usqp=CAU"
        location="Private room in center of London"
        title="5 star Luxury Apartment"
        description="! guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen . Free parking . Washing Machine"
        star={4.3}
        price="$90 / night"
        total="$400 total"
      />

      <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5Wk-c_pxUjNXHftH2Ol_aap43rx4o2DZxKw&usqp=CAU"
        location="Private room in center of London"
        title="30 mins to Oxford Street, Excel London"
        description="! guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen . Free parking . Washing Machine"
        star={4.1}
        price="$35 / night"
        total="$320 total"
      />
    </div>
  );
}

export default SearchPage;
