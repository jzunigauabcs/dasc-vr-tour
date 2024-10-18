AFRAME.registerComponent('hotspots', {
    init: function() {
        const el = this.el;
        el.addEventListener('reloadspot', function(e) {
            const currentSpotGroup = document.querySelector(`#${e.detail.currentSpot}`);
            currentSpotGroup.setAttribute('scale', '0 0 0');
            const newspotgroup = document.querySelector(`#${e.detail.newspot}`);
            newspotgroup.setAttribute("scale", "1 1 1");
        });
    }
});
