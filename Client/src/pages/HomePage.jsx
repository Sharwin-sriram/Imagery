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
          ? await api.get(`/?page=${page}`)
          : await api.get(`/${query}&?page=${page}`);
      console.log(response);
      const data = response.data;
      setImages(data);
    } catch (er) {
      console.log("Error while fetching", er.message);
    }
  };

  useEffect(() => {
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
      columnsCountBreakPoints={{ 250: 1, 350: 2, 500: 2, 700: 3, 900: 4 }}
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
