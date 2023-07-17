async function fetchAnimeData() {
  try {
    const response = await fetch('https://kitsu.io/api/edge/trending/anime');
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    const { data } = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch anime data: ${error.message}`);
  }
}

async function fetchAnimeById(id) {
  const url = `https://kitsu.io/api/edge/anime/${id}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    const { data } = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch anime data: ${error.message}`);
  }
}

export { fetchAnimeData, fetchAnimeById };
