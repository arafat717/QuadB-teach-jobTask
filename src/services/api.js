export const fetchShows = async () => {
  try {
    const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
    const data = await response.json();
    return data.map((item) => ({
      id: item.show.id,
      name: item.show.name,
      premiered: item.show.premiered,
      runtime: item.show.runtime,
      language: item.show.language,
      image: item.show.image,
    }));
  } catch (error) {
    throw new Error("Error fetching shows");
  }
};

export const fetchShowDetails = async (id) => {
  try {
    const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const data = await response.json();
    return {
      id: data.id,
      name: data.name,
      summary: data.summary,
    };
  } catch (error) {
    throw new Error("Error fetching show details");
  }
};
