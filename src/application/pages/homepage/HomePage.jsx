import React from 'react';
import SearchFilter from "./searchFilter/SearchFilter";
import bgImg from "../../../assets/homepage-bgImg.jpg";

const HomePage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
      className="bg-cover h-[600px] bg-center pt-[50px]"
    >
      <SearchFilter />
    </div>
  );
}

export default HomePage;
