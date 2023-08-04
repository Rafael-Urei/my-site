import { useState } from "react";
import styles from "../page.module.css";
import {
  IoLogoJavascript as Js,
  IoLogoHtml5 as Html,
  IoLogoCss3 as Css,
} from "react-icons/io";
import { FaReact as React } from "react-icons/fa";

export default function Popup({ name, Element }) {
  const [showName, setShowName] = useState(false);

  const showPopup = (name) => {
    setShowName(!showName);
  };

  return (
    <div className={styles.popup_container}>
      {name === "JavaScript" && (
        <>
          <Js
            onClick={() => showPopup(name)}
            className={styles.language}
            id="lang1"
          />
          {showName ? <p className={styles.language_descr}>{name}</p> : null}
        </>
      )}

      {name === "HTML" && (
        <>
          <Html
            onClick={() => showPopup(name)}
            className={styles.language2}
            id="lang2"
          />
          {showName ? <p className={styles.language_descr}>{name}</p> : null}
        </>
      )}

      {name === "CSS" && (
        <>
          <Css
            onClick={() => showPopup(name)}
            className={styles.language3}
            id="lang3"
          />
          {showName ? <p className={styles.language_descr}>{name}</p> : null}
        </>
      )}

      {name === "React" && (
        <>
          <React
            onClick={() => showPopup(name)}
            className={styles.language4}
            id="lang4"
          />
          {showName ? <p className={styles.language_descr}>{name}</p> : null}
        </>
      )}
    </div>
  );
}
