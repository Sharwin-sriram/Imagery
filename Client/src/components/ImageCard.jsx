import style from "@styles/ImageCard.module.css";

export default ({ description, download, image_urls, likes, user_data }) => {
  const { full, raw, regular, small, small_s3, thumb } = image_urls;
  return (
    <div className={style.ImageCard}>
      <img src={raw} alt="" width={32} height={32}/>
      <div className={style.description}>{description}</div>
    </div>
  );
};
