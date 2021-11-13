
window.onload = function () {
    var el = document.getElementById('preload');
    //console.log(el);
    el.style.opacity = 0;

    setTimeout(() => el.style.display = 'none', 2000);

};

const slider = document.querySelectorAll('.slider');


console.log(slider);
// console.log(slide);
let count = 0;

slider.forEach((slide) => {
    slide.addEventListener('click', (e) => {

        const imgGrp = e.target.parentElement.previousElementSibling.children;

        console.log(imgGrp.length);
        const imgGrpArray = Array.from(imgGrp);

        if (e.target.classList.contains('prevbtn')) {
            imgGrpArray.forEach((i) => {
                i.classList.remove('img-active');
            })
            count--;
            if (count === -1) {
                count = 2;
            }
            imgGrpArray[count].classList.add('img-active');
        }
        if (e.target.classList.contains('nextbtn')) {
            imgGrpArray.forEach((i) => {
                i.classList.remove('img-active');
            });
            count++;
            if (count === imgGrp.length) {
                count = 0;
            }
            imgGrpArray[count].classList.add('img-active');
        }

    });
});

