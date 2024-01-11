import React, { useState, useEffect } from "react";

function Sidebar() {
  const [discoveredItems, setDiscoveredItems] = useState([]);

  useEffect(() => {
    const fetchDiscoveredItems = async () => {
      try {
        const response = await fetch(
          "https://api.apilayer.com/spotify/artist_discovered_on?id=2w9zwq3AktTeYYMuhMjju8",
          {
            method: "GET",
            headers: {
              apikey: "pNuqcMO7UzIvLV5bnpRgE74gtWI2n1Gfsd",
              // apikey: "pNuqcMO7UzIvLV5bnpRgE74gtWI2n1Gf",
            },
          }
        );
        const result = await response.json();
        const discoveredItems =
          result.data.artist.relatedContent.discoveredOn.items;
        setDiscoveredItems(discoveredItems);
        console.log("Discovered Items:", discoveredItems);
        console.log("@@ API", result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDiscoveredItems();
  }, []);

  const topSidebarData = [
    { name: "Home", path: "/images/home.png" },
    { name: "Search", path: "/images/search.png" },
    { name: "Your Library", path: "/images/library.png" },
  ];

  const bottomSidebarData = [
    { name: "Create Playlist", path: "/images/Library_S.png" },
    { name: "Liked Songs", path: "/images/liked.png" },
  ];

  return (
    <div className="bg-black w-full h-screen text-white">
      <div>
        <div className="pt-16 pl-8">
          {topSidebarData.map((item) => (
            <button
              className="text-white flex items-center gap-4 pb-4"
              key={item.name}
            >
              <img src={item.path} alt={item.name} className="pr-5" />
              <span>{item.name}</span>
            </button>
          ))}
        </div>
        <div className="pl-8 pt-10">
          {bottomSidebarData.map((item) => (
            <button
              className="text-white flex items-center gap-4 pb-4"
              key={item.name}
            >
              <img src={item.path} alt={item.name} className="pr-5 " />
              <span>{item.name}</span>
            </button>
          ))}
        </div>
        <hr className="mx-8" />
      </div>
      <div className="overflow-y-hidden items-start gap-2 flex flex-col pl-8 pt-5">
        {discoveredItems.map((item) => (
          <span
            style={{
              color: "#B3B3B3",
              fontFamily: "Circular Std",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: "450",
              lineHeight: "normal",
              overflowY:"hidden"
            }}
            key={item.name}
          >
            {item.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
