import  { Fade } from 'react-awesome-reveal';
import Popup from './Popup'

export default function Languages() {
    return (
        <>
            <Fade cascade duration={2000} delay={2000}>
                <Popup name={'JavaScript'}></Popup>
                <Popup name={'HTML'}></Popup>
                <Popup name={'CSS'}></Popup>
            </Fade>
        </>
    )
};