import { useState } from "react";
import style from "@/styles/Header.module.css";

function Header() {
  return (
    <header>
      <div className={style.leftSection}>
        <h1>Imagery</h1>
      </div>

      <button className={style.Logout}></button>
    </header>
  );
}

export default Header;
