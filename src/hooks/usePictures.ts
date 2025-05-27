import { useState, useEffect } from 'react';

const UNSPLASH_ACCESS_KEY: string = import.meta.env
  .VITE_UNSPLASH_ACCESS_KEY as string;
const COLLECTION_ID: string = '8485489';

interface UnsplashPicture {
  description: string;
  urls: { raw: string };
  user: { name: string };
}

interface Picture {
  url: string;
  alt: string;
}

export const usePictures = (): Picture[] => {
  // State to store the list of pictures
  const [pictures, setPictures] = useState<Picture[]>([]);

  useEffect(() => {
    const fetchPictures = async (): Promise<void> => {
      try {
        // Fetching the Unsplash API
        console.log(UNSPLASH_ACCESS_KEY);
        const response = await fetch(
          `https://api.unsplash.com/collections/${COLLECTION_ID}/photos?client_id=${UNSPLASH_ACCESS_KEY}&per_page=20`
        );
        // Retrieving the list of pictures
        const data: UnsplashPicture[] = await response.json();
        const formattedPictures: Picture[] = data.map(
          (photo: UnsplashPicture) => ({
            url: `${photo.urls.raw}&w=2560&h=1440&fit=crop`, // 1440p resolution
            alt: `${photo.description} by ${photo.user.name}`,
          })
        );
        setPictures(formattedPictures);
      } catch (error) {
        console.error('Error fetching pictures:', error);
      }
    };

    fetchPictures();
  }, []);

  return pictures;
};
