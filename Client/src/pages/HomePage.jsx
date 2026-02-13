import { useEffect, useState } from "react";
import Header from "@/components/Header";
import style from "@styles/pages/Home.module.css";
import api from "@/lib/api.js";
import ImageCard from "@/components/ImageCard";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default () => {
  const [query, setQuery] = useState("");
  return (
    <>
      <Header setQuery={setQuery} />
      <section className={style.HomePage}>
        <HomePage query={query} />
      </section>
    </>
  );
};

function HomePage({ query }) {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [length, setLength] = useState(0);

  const uniqueId = new Set();

  const fetchData = async (query = "") => {
    try {
      const response =
        query === ""
          ? await api.get(`/api/?page=${page}`)
          : await api.get(`/api/${query}?&page=${page}`);
      const data = response.data;
      setImages(data);
    } catch (er) {
      console.log("Error while fetching", er);
    }
  };

  useEffect(() => {
    uniqueId.clear();
    fetchData(query);
  }, [query]);

  useEffect(() => {
    if (query !== "") setLength(images[0]);
    console.log(images);
    images.map((image) => {
      if (image === undefined) return null;
      const { id } = image;
      uniqueId.add(id);
    });
  }, [images]);

  useEffect(() => {
    console.log(uniqueId);
  }, [uniqueId]);

  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{ 300: 2, 500: 3, 700: 4, 900: 5 }}
    >
      <Masonry gutter="20px">
        {images.map((image) => {
          if (image === undefined) return null;
          const { id, description, download, image_urls, user_data, likes } =
            image;
          return (
            <ImageCard
              description={description}
              download={download}
              image_urls={image_urls}
              likes={likes}
              user_data={user_data}
              key={id}
            />
          );
        })}
      </Masonry>
    </ResponsiveMasonry>
  );
}
