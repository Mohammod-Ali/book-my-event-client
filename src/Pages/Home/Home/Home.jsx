import React, { useState } from "react";
import Search from "../Search/Search";
import FeaturedEvent from "../FeaturedEvent/FeaturedEvent";

const Home = () => {
  const [search, setSearch] = useState("");

  const searchHandle = (e) => {
    e.preventDefault();
    // setSearch(e.target.name.value)
    fetch(`http://localhost:5000/events/?search=${e.target.name.value}`)
      .then((res) => res.json())
      .then((data) => setSearch(data));
    e.target.reset();
  };
  return (
    <div>
      <Search searchHandle={searchHandle}></Search>
      <FeaturedEvent search={search}></FeaturedEvent>
    </div>
  );
};

export default Home;
