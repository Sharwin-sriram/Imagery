import Primary from "@/ui/button/Primary";
import { useTheme } from "@hooks/useTheme";
import style from "@styles/Header.module.css";
import { useState } from "react";

function Header() {
  const [theme, themeToggle] = useTheme();
  return (
    <header>
      <div className={style.leftSection}>
        <h1>Imagery</h1>
      </div>
      <div className={style.SearchBox}>
        <input type="text" id="search" placeholder=" " required />
        {/* TODO: Typewriter effect dogs... cats... cars... anything... */}
        <label htmlFor="search">try anything...</label>
      </div>
      <div className={style.switchMode}>
        <Primary content={"switch"} onClick={themeToggle} />
      </div>
    </header>
  );
}

export default Header;
