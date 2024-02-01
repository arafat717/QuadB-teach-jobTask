import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ShowDetails from "../components/ShowDetails";
import BookingForm from "../components/BookingForm";
import { fetchShowDetails } from "../services/api";
import Loading from "../components/Loading";

const ShowDetailsScreen = () => {
  const { id } = useParams();
  const [showDetails, setShowDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShowDetailsData = async () => {
      try {
        const data = await fetchShowDetails(id);
        setShowDetails(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching show details:", error);
        setLoading(false);
      }
    };
    fetchShowDetailsData();
  }, [id]);

  return (
    <div>
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="px-10 py-5">
          <ShowDetails showDetails={showDetails} />
          <BookingForm showName={showDetails.name} />
        </div>
      )}
    </div>
  );
};

export default ShowDetailsScreen;
