AFRAME.registerComponent('spot', {
    schema: {
        linkto: {type: 'string', default: ''},
        spotgroup: {type: 'string', default: ''}
    },
    init: function() {
        const el = this.el;
        const data = this.data;

        el.setAttribute('src', '#hotspot');
        el.setAttribute('look-at', '#cam');
        el.addEventListener('click', function(e) {
            const sky = document.querySelector('#sky');
            sky.setAttribute('src', data.linkto);
            const spotComp = document.querySelector('#spots');
            const currentSpot = this.parentElement.getAttribute('id');
            spotComp.emit('reloadspot', {newspot: data.spotgroup, currentSpot: currentSpot})
        })
    }
});
