import React from "react";
import { Link } from "react-router-dom";

interface Show {
  id: number;
  name: string;
  language: string;
  runtime: number;
  premiered: string;
  image: { medium: string; original: string };
}

interface ShowListProps {
  shows: Show[];
}

const ShowList: React.FC<ShowListProps> = ({ shows }): JSX.Element => {
  return (
    <div className="grid grid-cols-1 gap-6  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {shows.map((show) => (
        <div
          key={show.id}
          className="border rounded-lg overflow-hidden  bg-white border-gray-500"
        >
          <img
            src={show?.image?.medium}
            alt={show.name}
            className="w-full h-40 object-cover"
          />
          <div className="p-4 ">
            <h2 className="text-xl font-semibold">{show.name}</h2>
            <p>
              <span className="text-red-500">Language:</span> {show.language}
            </p>
            <p>
              <span className="text-red-500">Runtime:</span> {show.runtime}{" "}
              minutes
            </p>
            <p>
              <span className="text-red-500">Premiered:</span> {show.premiered}
            </p>
            <button className="bg-purple-500 text-white py-2 px-4 mt-2 rounded hover:bg-purple-600">
              <Link to={`/show/${show.id}`}>{show.name}</Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowList;
