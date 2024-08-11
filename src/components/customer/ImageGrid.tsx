import React, { useState, useEffect } from "react";
import { Loader } from "../loader/Loader";
import "./css/ImageGrid.css";

interface UnsplashImage {
  id: string;
  urls: {
    regular: string;
  };
  alt_description: string;
}

const clientId = process.env.REACT_APP_UNSPLASH_KEY;

export default function ImageGrid({ id }: { id: number }) {
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchImages = async (): Promise<void> => {
    setLoading(true);
    if (!clientId) {
      console.error("Unsplash API key is not set");
      return;
    }

    try {
      const response = await fetch(
        `https://api.unsplash.com/photos/random?client_id=${clientId}&count=9`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data: UnsplashImage[] = await response.json();
      setImages(data);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
    const interval = setInterval(fetchImages, 10000);
    return () => clearInterval(interval);
  }, [id]);

  if (loading) return <Loader />;

  return (
    <div className="image-grid">
      {images.map((image) => (
        <img
          key={image.id}
          src={image.urls.regular}
          alt={image.alt_description || "Unsplash random image"}
        />
      ))}
    </div>
  );
}
