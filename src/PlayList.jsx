import React from "react";
// import { useData } from "./context/DataContext";
import { PLAYLISTDATA } from "./dummy";
import PlayListTable from "./component/PlayListTable";

function PlayList() {
  const playListData = PLAYLISTDATA;
    // const { playListData } = useData();

  const convertMillisecondsToHoursAndMinutes = (milliseconds) => {
    const seconds = milliseconds / 1000;
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return { hours, minutes };
  };

  const totalDurationMilliseconds = playListData.tracks.items.reduce(
    (accumulator, currentTrack) => {
      return accumulator + currentTrack.track.duration_ms;
    },
    0
  );

  const { hours, minutes } = convertMillisecondsToHoursAndMinutes(
    totalDurationMilliseconds
  );

  const playListImg = [
    { name: "play", path: "/images/play.png",height:"72px" },
    { name: "like", path: "/images/like.png", height:"42px" },
    { name: "download", path: "/images/download.png" , height:"42px"},
    { name: "threeDots", path: "/images/threeDots.png" , height:"33px"},
  ];
  return (
    <>
      <div className="flex p-10  flex-col ">
        <div className="flex flex-row">
          <div className="pb-8">
            <img src={playListData.images[1].url} alt={playListData.name} />
          </div>
          <div className="text-white pl-8 pt-20  ">
            <p className="text-base">PUBLIC PLAYLIST</p>
            <p className="text-8xl">{playListData.name}</p>
            <p className="text-xl">
              {playListData.owner.display_name}{" "}
              <span className="opacity-75">and more</span>{" "}
            </p>
            <div className="flex flex-row items-center">
              <p className="text-lg">
                <span className="opacity-75"> Made for </span>
                {playListData.owner.id}
              </p>
              <p className="h-2 w-2 rounded-lg bg-white mx-2"></p>
              <p className="opacity-75">{playListData.tracks.total} songs,</p>
              <p className="opacity-75">
                {hours} hr and {minutes} min
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between pt-8" >
          <div className="flex flex-row gap-4 items-center justify-center">
              {playListImg.map((item)=>(
                <img src={item.path} alt={item.name} style={{height:item.height,width:item.height}} />
                ))}
          </div>
          <div className="flex flex-row gap-4 items-center justify-center">
                <img src="/images/search.png" alt="Search" style={{height:"23px",width:"23px"}} />
                <p className="text-white text-lg">Customer Order</p>
                <img src="/images/down.png" alt="DownSide" style={{height:"16px",width:"16px"}} />
          </div>
        </div>
        <div >
          <PlayListTable/>
        </div>
      </div>
    </>
  );
}

export default PlayList;
