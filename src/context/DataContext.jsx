import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { PLAYLIST } from "../dummy";

const DataContext = createContext();
const THEME_BLUE = 'linear-gradient(180deg, #3333A3 5.09%, #121212 33.4%)'
const TRACK_DEFAULT_THEME = 'linear-gradient(180deg, #DEF628 5.09%, #121212 43.28%)'
const TRACK_THEME = ['linear-gradient(180deg, #DEF628 5.09%, #121212 43.28%)','linear-gradient(180deg, #A34284 5.09%, #121212 43.28%)','linear-gradient(180deg, #6EA6EA 5.09%, #121212 43.28%)','linear-gradient(180deg, #604EC1 5.09%, #121212 43.28%)']
const isLive = false;

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [playListData, setPlayListData] = useState(null);
  const [error, setError] = useState(null);
  const [page, setPage] = useState("home");
  const [playListId, setPlayListId] = useState("");
  const [theme, setTheme] = useState(THEME_BLUE);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.apilayer.com/spotify/user_profile?id=nocopyrightsound",
        {
          method: "GET",
          headers: {
            apikey: "pNuqcMO7UzIvLV5bnpRgE74gtWI2n1Gf",
          },
        }
      );
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error.message);
    }
  };

  const getPlayListData = async () => {
    if (!playListId) return null;

    try {
      const response = await fetch(
        // `https://api.apilayer.com/spotify/playlist_tracks?id=${playListId}`,
        `https://api.apilayer.com/spotify/playlist?id=${playListId}`,
        {
          method: "GET",
          headers: {
            apikey: "pNuqcMO7UzIvLV5bnpRgE74gtWI2n1Gf",
          },
        }
      );
      const result = await response.json();
      setPlayListData(result);
    } catch (error) {
      setError(error.message);
    }
  };


  useEffect(() => {
    if (page === "home") {
      setTheme(THEME_BLUE)
      isLive ? fetchData() : setData(PLAYLIST);
    }

    if (page === "playlist") {
      // setTheme( TRACK_DEFAULT_THEME)
      setTheme(TRACK_THEME[0])
      isLive ? getPlayListData() : setPlayListData(PLAYLIST);
    }
  }, [page]);

  const finalData = useMemo(() => {
    if (page === "home") {
      return data;
    }

    if (page === "playlist") {
      return playListData;
    }
  }, [data, page, playListData]);

  if (finalData === null) {
    return <p>trigger api...</p>;
  }

  return (
    <>
      <DataContext.Provider
        value={{
          data,
          error,
          page,
          playListId,
          playListData,
          theme,
          setPage,
          setPlayListId,
          setPlayListData,
        }}
      >
        {children}
      </DataContext.Provider>
    </>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
