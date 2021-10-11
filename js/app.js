
window.onload = function () {
    var el = document.getElementById('preload');
    //console.log(el);
    el.style.opacity = 0;

    setTimeout(() => el.style.display = 'none', 2000);

};

// const mainImgOne = document.querySelectorAll('.img-preview-one');
// const mainImgThree = document.querySelectorAll('.img-preview-three');
// // console.log(mainImg);

// const sliderBoxOne = document.querySelector('.slider-one');
// const sliderBoxThree = document.querySelector('.slider-three');

const slider = document.querySelectorAll('.slider');


console.log(slider);
// console.log(slide);
let count = 0;

slider.forEach((slide) => {
    slide.addEventListener('click', (e) => {

        const imgGrp = e.target.parentElement.previousElementSibling.children;

        console.log(imgGrp.length);
        const imgGrpArray = Array.from(imgGrp);
        // imgGrpArray.forEach((i) => {
        //     i.classList.remove('img-active');
        // })
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

// sliderBoxThree.addEventListener('click', (e) => {

//     if (e.target.classList.contains('prevbtn')) {
//         mainImgThree.forEach(function (i) {
//             i.classList.remove('img-active');
//         })
//         // console.log(e.target);
//         // console.log(count, mainImg.length);
//         count--;
//         if (count === -1) {
//             count = 2;
//         }
//         mainImgThree[count].classList.add('img-active');
//     }
//     if (e.target.classList.contains('nextbtn')) {
//         mainImgThree.forEach(function (i) {
//             i.classList.remove('img-active');
//         })
//         // console.log(e.target);
//         count++;
//         if (count === mainImgThree.length) {
//             count = 0;
//         }
//         mainImgThree[count].classList.add('img-active');
//     }

// });
