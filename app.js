const mainImg = document.querySelectorAll('.img-preview');
console.log(mainImg);

const previewBtn = document.getElementById('previewbtn');
// const previewBtn = document.querySelectorAll('.previewbtn');

console.log(previewBtn);

let count = 0;
previewBtn.addEventListener('click', (e) => {
    console.log(e.target);

    if (count === mainImg.length) {
        count = 0;
    }
    console.log(count, mainImg.length);
    mainImg.forEach(function (i) {
        i.classList.remove('img-active');
    })

    // mainImg[count].classList.remove('img-active')
    mainImg[count].classList.add('img-active')
    count++;
    // for (let j = 0; j < mainImg.length; j++) {
    //     mainImg[j].classList.add('img-active');
    // }



})