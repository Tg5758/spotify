// import { useEffect, useState } from "react";
// // import { useQuery } from "react-query";
// // import axios from "axios";

// const useApi = (options = {}) => {
//   const [discoveredItems, setDiscoveredItems] = useState([]);

//   useEffect(() => {
//     const fetchDiscoveredItems = async () => {
//       try {
//         const response = await fetch(
//           "https://api.apilayer.com/spotify/user_profile?id=nocopyrightsound",
//           {
//             method: "GET",
//             headers: {
//               apikey: "pNuqcMO7UzIvLV5bnpRgE74gtWI2n1Gf",
//             },
//           }
//         );
//         const result = await response.json();
//         const discoveredItems = result;
//           // result.data.artist.relatedContent.discoveredOn.items;
//         setDiscoveredItems(discoveredItems);
//         console.log("Discovered Items:", discoveredItems);
//         console.log("@@ API", result.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchDiscoveredItems();
//   }, []);
  
//   console.log("discoveredItems",discoveredItems)
// };

// export default useApi;
