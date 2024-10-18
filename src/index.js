import './style.css';
import 'aframe';
import './components/hotspot';
import './components/spot';
import './assets/images/info-icon.png';
import './assets/images/IMG_1.JPG';
import './assets/images/IMG_2.JPG';
import './assets/images/IMG_3.JPG';
import './assets/images/IMG_4.JPG';
import './assets/images/IMG_5.JPG';
import './assets/images/IMG_6.JPG';
import './assets/images/IMG_7.JPG';
import './assets/images/IMG_8.JPG';
import './assets/images/IMG_9.JPG';
import './assets/images/IMG_10.JPG';
import './assets/images/IMG_11.JPG';
import './assets/images/IMG_12.JPG';
import './assets/images/IMG_13.JPG';
import './assets/images/IMG_14.JPG';
import './assets/images/IMG_15.JPG';
import './assets/images/IMG_16.JPG';
import './assets/images/IMG_17.JPG';
import './assets/images/IMG_18.JPG';

const init = function() {
    const sky = document.querySelector('#sky');
    sky.addEventListener('materialtextureloaded', () => {
        sky.setAttribute('visible', true);
    })
}

document.addEventListener('DOMContentLoaded', init);
//window.addEventListener('load',);
