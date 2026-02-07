import { Icon } from "@iconify/react";
import style from "@styles/ui.module.css";

export default ({ content, icon, size, onClick }) => {
  return (
    <button className={style.btn_primary} onClick={onClick}>
      <Icon icon={icon} width={size} height={size} />
      {content}
    </button>
  );
};
