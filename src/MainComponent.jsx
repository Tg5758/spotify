import React from "react";

const getTime = (time) => {
  const hour = new Date(time).getHours();

  if (hour >= 5 && hour < 12) {
    return "Morning";
  } else if (hour >= 12 && hour < 18) {
    return "Afternoon";
  } else {
    return "Night";
  }
};

function MainComponent({ discoveredItems }) {
  const currentTime = new Date();
  const timeOfDay = getTime(currentTime);

  const handleClickToPlaylist = (id) => {
    console.log(id)

  }

  // const imageUrl = discoveredItems.images.items.sources.url
  return (
    <>
      <div
        style={{
          background: " linear-gradient(180deg, #3333A3 5.09%, #121212 33.4%)",
          height: "calc(100vh - 80px)",
        }}
      >
        <div className="flex flex-col items-start pl-10 text-white">
          <p
            style={{
              fontSize: "39px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal",
              letterSpacing: "-0.39px",
            }}
          >
            Good {timeOfDay}!
          </p>
          <div className="grid-cols-3  flex flex-row flex-wrap">
            {discoveredItems.slice(0, 6).map((item, index) => {
              const {images} = item
              const a = images.items[0]?.sources[0].url || ''
            
            return (
              <div className=" mr-9 ">
                <button
                  className="bg-white flex flex-row  flex-shrink-0 text-black m-3 rounded-md"
                  style={{ width: "450px", height: "82px", background:"#3e3e85" }}onClick={()=> handleClickToPlaylist(item.id)}
                >
                  <img
                  className="rounded-md"
                    style={{ width: "82px" }}
                    src={a}
                    alt={item.name}
                  />
                  {/* <img   src={item.images.url} alt={item.name} /> */}
                  <div className="w-full h-full lowercase flex items-center">
                  <p className="pl-5 text-start text-white text-xl font-bold" key={index}>{item.name}</p>
                  </div>
                </button>
              </div>
            )})}
          </div>
        </div>
      </div>
    </>
  );
}

export default MainComponent;
