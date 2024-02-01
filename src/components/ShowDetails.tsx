import React from "react";

interface ShowDetails {
  id: number;
  name: string;
  summary: string;
}

interface ShowDetailsProps {
  showDetails: ShowDetails;
}

const ShowDetails: React.FC<ShowDetailsProps> = ({
  showDetails,
}): JSX.Element => {
  return (
    <div className="p-4 border rounded-lg border-black shadow-md text-black bg-white">
      <h2 className="text-3xl font-semibold mb-4">{showDetails.name}</h2>
      <div
        className="text-black"
        dangerouslySetInnerHTML={{ __html: showDetails.summary }}
      />
    </div>
  );
};

export default ShowDetails;
