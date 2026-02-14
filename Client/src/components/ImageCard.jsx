import style from "@styles/ImageCard.module.css";

export default ({
  id,
  description,
  download,
  image_urls = {},
  likes,
  user_data,
  onClick,
}) => {
  const { full = undefined, raw, regular, small, small_s3, thumb } = image_urls;
  return (
    <div className={style.ImageCard} onClick={(e) => onClick(e)}>
      <img src={small} alt="" id={id} />
      {/* <div className={style.description}>{description}</div> */}
    </div>
  );
};
