var targets = document.querySelectorAll(".puntino");

for (var i = 0; i < targets.length; i++) {

    targets[i].addEventListener('mouseover', function () {
        var toShow = this.children[0];
        toShow.classList.add("show");

        checkImgSize(this);
    }, )

    targets[i].addEventListener('mouseout', function () {
        var toHide = this.children[0];
        toHide.classList.remove("show");
    }, )

}

function checkImgSize(el) {
    var img = el.children[0].children[0];

    var sizes = el.getBoundingClientRect();

    var x = parseFloat(el.style.left);
    var y = parseFloat(el.style.top);

    if (sizes.left < img.width / 2) {
        img.style.left = (img.width / 2) - sizes.left + 'px';
    }
    if (sizes.left + (img.width / 2) > window.innerWidth) {
        img.style.left = -(img.width / 2) + (sizes.right - sizes.left) - (sizes.right - window.innerWidth) + 'px';
    }

    if (sizes.top < img.height / 2) {
        img.style.top = (img.height / 2) - sizes.top + 'px';
    }

    if (sizes.top + (img.height / 2) > window.innerHeight) {
        img.style.top = -(img.height / 2) + (sizes.bottom - sizes.top) - (sizes.bottom - window.innerHeight) + 'px';
    }

}