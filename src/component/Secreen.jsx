import React from "react";
import { useData } from "../context/DataContext";
import MainComponent from "./MainComponent";
import PlayList from "../PlayList";
import Header from "./Header";

function Screen({ discoveredItems, setDiscoveredItems }) {
  const { page,theme } = useData();

  const getContent = () => {
    if (page === "home")
      return (
        <MainComponent
          setDiscoveredItems={setDiscoveredItems}
          discoveredItems={discoveredItems}
        />
      );

    if (page === "playlist") return <PlayList />;

    return <p>404 Not Found!</p>
  };

  return (
    <div className="flex flex-col w-full" style={{background:theme || 'none'}}>
      <div>
        {" "}
        <Header />
      </div>
      <div>{getContent()}</div>
      {/* <Card /> */}
    </div>
  );
}

export default Screen;
