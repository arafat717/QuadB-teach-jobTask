import { useState, useEffect } from "react";
import ShowList from "../components/ShowList";
import { fetchShows } from "../services/api";
import Loading from "../components/Loading";

const HomeScreen = () => {
  const [shows, setShows] = useState([]);
  console.log(shows);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShowsData = async () => {
      try {
        const data = await fetchShows();
        setShows(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching shows:", error);
        setLoading(false);
      }
    };
    fetchShowsData();
  }, []);

  return (
    <div className="px-10 py-5">
      <h1 className="text-center text-6xl mb-10">Show List </h1>
      {loading ? <Loading></Loading> : <ShowList shows={shows} />}
    </div>
  );
};

export default HomeScreen;
