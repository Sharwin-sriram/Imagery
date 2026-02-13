import unsplash from "../config/unsplash.js";

async function Extractor(data, ToSend) {
  data.forEach((dat) => {
    const { id, alt_description, urls, links, likes, user } = dat;
    const newData = {
      id,
      alt_description,
      image_urls: urls,
      download: links,
      likes,
      user_data: user,
    };
    ToSend.push(newData);
  });
}

export async function getHomePageImages(req, res) {
  try {
    const page = req.query.page;
    const count = req.query.count || 20;
    const response = await unsplash.get(
      `/photos?page=${page}&per_page=${count}`,
    );
    const ToSend = [];
    const data = response.data;
    await Extractor(data, ToSend);
    res.status(200).json(ToSend);
  } catch (er) {
    console.log("Error in getHomePageImages Controller", er);
    return res.status(501).json({ message: "Internal Server Error" });
  }
}

export async function getSearchResults(req, res) {
  try {
    const { query } = req.params;
    const page = req.query.page || 1;
    const response = await unsplash.get(
      `/search/photos?query=${query}&page=${page}`,
    );
    const data = response.data;
    const toSend = [];
    const { total_pages, results } = data;
    toSend.push(total_pages);
    Extractor(results, toSend);
    res.status(200).json(toSend);
  } catch (er) {
    console.log("Error in getSearchResults Controller", er);
    return res.status(501).json({ message: "Internal Server Error" });
  }
}
