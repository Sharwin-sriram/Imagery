import Primary from "@ui/button/Primary";
import { useTheme } from "@hooks/useTheme";
import style from "@styles/Header.module.css";

function Header() {
  const [theme, themeToggle] = useTheme();
  const size = 24;
  return (
    <header>
      <div className={style.leftSection}>
        <h1>Imagery</h1>
      </div>
      <div className={style.SearchBox}>
        <input type="text" id="search" placeholder=" " required />
        {/* TODO: Typewriter effect try anything... dogs... cats... cars... anything... */}
        <label htmlFor="search">try anything...</label>
      </div>
      <div className={style.switchMode}>
        {theme === "light" ? (
          <Primary
            onClick={themeToggle}
            icon={"iconamoon:mode-light-light"}
            size={size}
          />
        ) : (
          <Primary
            onClick={themeToggle}
            icon={"iconamoon:mode-dark-light"}
            size={size}
          />
        )}
      </div>
    </header>
  );
}

export default Header;
