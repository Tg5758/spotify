import React from "react";
// import { MENU } from "../dummy";

function Sidebar({discoveredItems}) {
 

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
      <div className="overflow-y-hidden items-start gap-2 flex flex-col pl-8 pt-5" style={{
        height: "calc(100vh - 365px)",
        overflowY: "scroll",
        display: "flex",
        flexDirection: "column"
      }}>
        {discoveredItems.map((item) => (
          <p className="items-start"
            style={{
              color: "#B3B3B3",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: "450",
              lineHeight: "normal",
              textAlign:"left"
              // overflowY:"hidden "
            }}
            key={item.name}
          >
            {item.name}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
