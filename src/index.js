import './style.css';
import 'aframe';
import './components/hotspot';
import './components/spot';
import './assets/images/info-icon.png';
import './assets/images/IMG_1.webp';
import './assets/images/IMG_2.webp';
import './assets/images/IMG_3.webp';
import './assets/images/IMG_4.webp';
import './assets/images/IMG_5.webp';
import './assets/images/IMG_6.webp';
import './assets/images/IMG_7.webp';
import './assets/images/IMG_8.webp';
import './assets/images/IMG_9.webp';
import './assets/images/IMG_10.webp';
import './assets/images/IMG_11.webp';
import './assets/images/IMG_12.webp';
import './assets/images/IMG_13.webp';
import './assets/images/IMG_14.webp';
import './assets/images/IMG_15.webp';
import './assets/images/IMG_16.webp';
import './assets/images/IMG_17.webp';
import './assets/images/IMG_18.webp';
import './assets/images/dasc.png';
import './assets/images/gatoSalvaje2024.png';
import './assets/images/salir.png';

const init = function() {
    const sky = document.querySelector('#sky');
    sky.addEventListener('materialtextureloaded', () => {
        sky.setAttribute('visible', true);
    })
}

AFRAME.registerComponent('visibilidad', {
    init: function () {
        const openImage = document.querySelector('#open');
        const hsp1Image = document.querySelector('#hsp1-image');
        const closeButton = hsp1Image.querySelector('#close');

        openImage.addEventListener('mouseenter', () => {
            openImage.setAttribute('visible', 'false');
            hsp1Image.setAttribute('visible', 'true');
        });

        closeButton.addEventListener('mouseenter', () => {
            openImage.setAttribute('visible', 'true');
            hsp1Image.setAttribute('visible', 'false');
        });
    }
});

document.addEventListener('DOMContentLoaded', init);
//window.addEventListener('load',);
