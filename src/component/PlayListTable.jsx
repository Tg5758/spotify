import React, { memo, useEffect, useRef, useState } from "react";
// import { useData } from '../context/DataContext';
import { PLAYLISTTRACKS } from "../dummy";

function PlayListTable() {
  // const {playListId} = useData();
  const audioElementRef = useRef(null);
  const [tracks, setTracks] = useState();
  const [error, setError] = useState("");
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const playListData = PLAYLISTTRACKS.items;

  const fetchData = async () => {
    try {
      const response = await fetch(
        // `https://api.apilayer.com/spotify/playlist_tracks?id=${playListId}`,
        {
          method: "GET",
          headers: {
            apikey: "pNuqcMO7UzIvLV5bnpRgE74gtWI2n1Gf",
          },
        }
      );
      const result = await response.json();
      setTracks(result);
    } catch (error) {
      setError(error.message);
    }
  };

  const playNextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % playListData.length);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const audioElement = audioElementRef.current;
    audioElement.addEventListener("ended", playNextSong);

    return () => {
      audioElement.removeEventListener("ended", playNextSong);
    };
  }, [currentSongIndex, playListData]);

  useEffect(() => {
    const audioElement = audioElementRef.current;
    const previewUrl = playListData[currentSongIndex]?.track?.preview_url;
    audioElement.src = previewUrl;
    audioElement.currentTime = 0;

    if (previewUrl) {
      audioElement.play();
    }
  }, [currentSongIndex, playListData]);

  const timeConvert = (songTimes) => {
    const totalSeconds = Math.floor(songTimes / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return { minutes, seconds };
  };

  const handleRowClick = (index) => {
    setCurrentSongIndex(index);

    const audioUrl = playListData[index]?.audioUrl;
    if (audioUrl) {
      const audio = new Audio(audioUrl);
      audio.play();
    }
  };

  return (
    <>
      <div className="flex flex-col">
        <audio id="audioElement" ref={audioElementRef} controls>
          <source
            src={playListData[currentSongIndex]?.track?.preview_url}
            type="audio/mp3"
          />
          Your browser does not support the audio element.
        </audio>
        {playListData[currentSongIndex]?.audioUrl}
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 ">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                      #
                    </th>
                    <th className="py-3 text-start text-xs font-medium text-gray-500 uppercase">
                      TITLE
                    </th>
                    <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                      ALBUM
                    </th>
                    <th className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">
                      DATE ADDED
                    </th>
                    <th className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase flex justify-end">
                      <img src="/images/clock.png" alt="clock" />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {playListData.map((item, index) => {
                    const isSelected = currentSongIndex === index;
                    const songName = item.track.name;
                    const albumType = item.track.album.album_type;
                    const artistName = item.track.album.artists[0].name;
                    const songImages = item.track.album.images[2].url;
                    const songTimes = item.track.duration_ms;
                    const { minutes, seconds } = timeConvert(songTimes);
                    const addedDate = item.added_at;
                    const dateObject = new Date(addedDate);
                    const formattedDate =
                      dateObject.toLocaleDateString("en-US");

                    return (
                      <tr
                        key={index}
                        onClick={() => handleRowClick(index)}
                        style={{
                          cursor: "pointer",
                        }}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          {isSelected ? (
                            <img
                              className="w-7 h-7 "
                              src="/gif/secound.gif"
                              alt="gif"
                            />
                          ) : (
                            index + 1
                          )}
                        </td>
                        <td className="px-0 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          <div className="flex flex-row">
                            <img
                              style={{ height: "52px", width: "52px" }}
                              src={songImages}
                              alt={songName}
                            />

                            <div className="flex flex-col ml-2">
                              <span
                                style={{
                                  color: isSelected ? "#65D36E" : "#f0f0f0",
                                }}
                              >
                                {songName}
                              </span>
                              <span className="opacity-75">{artistName}</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          {albumType}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 text-right">
                          {formattedDate}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 text-right">
                          {minutes}:{seconds}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(PlayListTable);
