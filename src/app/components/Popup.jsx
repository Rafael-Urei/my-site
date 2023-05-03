import { useState } from "react";
import styles from '../page.module.css';
import { IoLogoJavascript as Js, IoLogoHtml5 as Html, IoLogoCss3 as Css } from 'react-icons/io'

export default function Popup({ name, Element }) {
    const [showName, setShowName] = useState(false);
  
    const showPopup = (name) => {
      setShowName(!showName);
    };

    console.log('renderizei')
  
    return (
        <div className={styles.popup_container}>
            { name === 'JavaScript' &&
                <>
                    <Js onClick={() => showPopup(name)} className={styles.language} />
                    {showName ? <p className={styles.language_descr}>{name}</p> : null}
                </>
            }

            { name === 'HTML' &&
                <>
                    <Html onClick={() => showPopup(name)} className={styles.language} />
                    {showName ? <p className={styles.language_descr}>{name}</p> : null}
                </>
            }

            { name === 'CSS' &&
                <>
                    <Css onClick={() => showPopup(name)} className={styles.language} />
                    {showName ? <p className={styles.language_descr}>{name}</p> : null}
                </>
            }
        </div>
    );
  };