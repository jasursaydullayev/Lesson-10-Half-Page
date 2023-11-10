import React from "react";
import Countries from "../components/Countries";
import Search from "../components/Search";
import Filter from "../components/Filter";

function Home() {
  return (
    <>
      <div className="flex justify-between items-center">
        <Search />
        <Filter/>
      </div>

      <div>
        <Countries />
      </div>
    </>
  );
}

export default Home;
