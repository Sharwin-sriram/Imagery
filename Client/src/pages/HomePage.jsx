import style from "@styles/pages/Home.module.css";
import { useEffect, useState } from "react";
import api from "@/lib/api.js";

export default () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [length, setLength] = useState(0);

  const uniqueId = new Set();

  const fetchData = async (query = "") => {
    try {
      const response =
        query === "" ? await api.get(`/api`) : await api.get(`/api/${query}`);
      const data = response.data;
      setImages(data);
    } catch (er) {
      console.log("Error while fetching", er);
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
      console.log(uniqueId);
    });
  }, [images]);

  return (
    <section className={style.HomePage}>
      <button onClick={() => setQuery("cats")}>CLICK ME</button>
      <div className={style.Grid}>
        {images.map((image, index) => {
          if (query !== "" && index === 0) return null;
        })}
      </div>
    </section>
  );
};
