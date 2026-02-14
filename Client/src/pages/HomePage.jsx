import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useEffect, useState } from "react";
import ImageCard from "@/components/ImageCard";
import Header from "@/components/Header";
import style from "@styles/pages/Home.module.css";
import api from "@/lib/api.js";

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
  const [loading, setLoading] = useState(true);

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
      setLoading(false);
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

  const clickHandler = (e) => {
    const currID = e.target.id;
    console.log(currID);
  };

  return !loading ? (
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
              id={id}
              description={description}
              download={download}
              image_urls={image_urls}
              likes={likes}
              user_data={user_data}
              key={id}
              onClick={clickHandler}
            />
          );
        })}
      </Masonry>
    </ResponsiveMasonry>
  ) : (
    <div className={style.loading}>Loading...</div>
  );
}
