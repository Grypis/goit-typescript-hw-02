import axios from "axios";

const API_KEY = "mbpxi9B4ycQIekqztiUMKO1XdeKGkV5diviFv8fNfPo";
const per_page = 15;
axios.defaults.baseURL = "https://api.unsplash.com/";

export interface Photo {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  alt_description: string;
}

interface PhotosResponse {
  results: Photo[];
  total: number;
  total_pages: number;
}

async function getPhotos(query: string, page: number): Promise<PhotosResponse> {
  const params = {
    per_page,
    query,
    orientation: "landscape",
    page,
    client_id: API_KEY,
  };
  try {
    const response = await axios.get<PhotosResponse>(`search/photos/`, {
      params,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching photos:", error);
    throw error;
  }
}

export default getPhotos;
