import React from "react";
// import { useData } from "./context/DataContext";
import { PLAYLISTDATA } from "./dummy";

function PlayList() {
  const playListData = PLAYLISTDATA;
  //   const { playListData } = useData();

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
  return (
    <>
      <div className="flex m-10 flex-row">
        <div>
          <img src={playListData.images[1].url} alt={playListData.name} />
        </div>
        <div className="text-white pl-8 pt-20 ">
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
    </>
  );
}

export default PlayList;
