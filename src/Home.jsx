import React, { memo, useEffect, useState } from "react";
import Sidebar from "./component/Sidebar";
import { MENU } from "./dummy";
// import Card from "./component/Card";
import { DataProvider } from "./context/DataContext";
import Screen from "./component/Secreen";

function Home() {
  const [discoveredItems, setDiscoveredItems] = useState([]);

  useEffect(() => {
    const fetchDiscoveredItems = async () => {
      const { data } = MENU;
      setDiscoveredItems(data.artist.relatedContent.discoveredOn.items);
      // try {
      //   const response = await fetch(
      //     "https://api.apilayer.com/spotify/artist_discovered_on?id=2w9zwq3AktTeYYMuhMjju8",
      //     {
      //       method: "GET",
      //       headers: {
      //         apikey: "pNuqcMO7UzIvLV5bnpRgE74gtWI2n1Gf",
      //         // apikey: "pNuqcMO7UzIvLV5bnpRgE74gtWI2n1Gf",
      //       },
      //     }
      //   );
      //   const result = await response.json();
      //   const discoveredItems =
      //     result.data.artist.relatedContent.discoveredOn.items;
      //   setDiscoveredItems(discoveredItems);
      //   console.log("Discovered Items:", discoveredItems);
      //   console.log("@@ API", result.data);
      // } catch (error) {
      //   console.error("Error fetching data:", error);
      // }
    };

    fetchDiscoveredItems();
  }, []);
  const [active, setActive] = "false";
  return (
    <>
      <DataProvider>
        <div className="flex flex-row w-full">
          <div className="w-1/5">
            {" "}
            <Sidebar
              setActive={setActive}
              active={active}
              setDiscoveredItems={setDiscoveredItems}
              discoveredItems={discoveredItems}
            />
          </div>
          <Screen
            setDiscoveredItems={setDiscoveredItems}
            discoveredItems={discoveredItems}
          />
        </div>
      </DataProvider>
    </>
  );
}

export default memo(Home);
