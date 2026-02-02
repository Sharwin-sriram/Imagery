import unsplash from "../config/unsplash.js";

export async function getHomePageImages(req, res) {
  try {
    const response = await unsplash.get(`/photos`, {});
    const data = response.data;
    const ToSend = [];
    data.forEach((dat) => {
      const { id, alt_description, urls, links, likes, user } = dat;
      const newData = {
        id,
        description: alt_description,
        image_urls: urls,
        download: links,
        likes,
        user_data: user,
      };
      ToSend.push(newData);
    });
    console.log(ToSend.length);
    res.status(200).json(ToSend);
  } catch (er) {
    console.log("Error in getHomePageImages Controller:", er);
  }
}
