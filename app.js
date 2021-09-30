

window.onload = function () {
    var el = document.getElementById('preload');
    //console.log(el);
    el.style.opacity = 0;

    setTimeout(function () { el.style.display = 'none'; }, 2000);

};

const mainImg = document.querySelectorAll('.img-preview');
// console.log(mainImg);

const sliderBox = document.getElementById('slider');

// console.log(sliderBox);
let count = 0;

sliderBox.addEventListener('click', (e) => {
    console.log(e.target);

    if (e.target.classList.contains('prevbtn')) {
        mainImg.forEach(function (i) {
            i.classList.remove('img-active');
        })
        // console.log(e.target);
        // console.log(count, mainImg.length);
        count--;
        if (count === -1) {
            count = 2;
        }
        mainImg[count].classList.add('img-active')
    }
    if (e.target.classList.contains('nextbtn')) {
        mainImg.forEach(function (i) {
            i.classList.remove('img-active');
        })
        // console.log(e.target);
        count++;
        if (count === mainImg.length) {
            count = 0;
        }
        mainImg[count].classList.add('img-active')
    }

})