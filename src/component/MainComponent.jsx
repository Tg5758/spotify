import React, { useMemo } from "react";
import { useData } from "../context/DataContext";
import { useNavigate } from "react-router-dom";


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

const PlaylistButton = ({ imageSrc, playlistName, onClick }) => (
  <>
    <div className="mr-9">
      <button
        className="bg-white flex flex-row flex-shrink-0 text-black m-3 rounded-md"
        style={{ width: "450px", height: "82px", background: "#3e3e85" }}
        onClick={onClick}
      >
        <img
          className="rounded-md"
          style={{ width: "82px" }}
          src={imageSrc}
          alt={playlistName}
        />
        <div className="w-full h-full lowercase flex items-center">
          <p className="pl-5 text-start text-white text-xl font-bold">
            {playlistName}
          </p>
        </div>
      </button>
    </div>
  </>
);

function MainComponent() {
  const { data, setPage,setPlayListId,theme } = useData();
  const currentTime = new Date();
  const timeOfDay = getTime(currentTime);
  const navigate = useNavigate()

  const handleClickToPlaylist = (playListId) => {
    setPlayListId(playListId);
    setPage("playlist");
    navigate("/playlist")
  };
  
  const playlists = useMemo(() => {
    const publicPlaylists = data.public_playlists || [];
    const filterPublicPlaylists =
      publicPlaylists.filter((x) => x.image_url && x.name) || [];
    return filterPublicPlaylists.slice(0, 6);
  }, [data]);

  return (
    <div
      style={{
        background: theme,
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
        <div className="grid-cols-3 flex flex-row flex-wrap">
          {playlists.map((item, index) => {
            const { uri, name, image_url = "" } = item;
            const ids = image_url.split(":") || [];
            const path = ids[ids.length - 1];
            const playListId = uri.split(":")[2];

            return (
              <PlaylistButton
                key={index}
                imageSrc={`https://i.scdn.co/image/${path}`}
                playlistName={name}
                onClick={() => handleClickToPlaylist(playListId) }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
