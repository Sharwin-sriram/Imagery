import { useState } from "react";
import style from "@styles/Header.module.css";

function Header() {
  const SwitchThemes = () => {};
  const [darkmode, setDarkmode] = useState(false);

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
        <button onClick={SwitchThemes}></button>
      </div>
    </header>
  );
}

export default Header;
