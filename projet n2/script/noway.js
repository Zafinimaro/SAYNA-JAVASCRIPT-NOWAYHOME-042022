let liste = document.querySelectorAll(' ul li a');

 for (let i=0; i < liste.length; i++) {

     let li = liste[i];

     li.addEventListener('mouseover', function () {
        li.style.textDecoration='line-through';
      });
   li.addEventListener('mouseout', function () {
    li.style.textDecoration='none';

  });
 }



// animation sur le boutton
let button = document.getElementsByClassName('btn');

for (let i=0; i < button.length; i++) {

    let btn = button[i];

    btn.addEventListener('mouseover', function () {

    let arrierePlan = window.getComputedStyle(btn).getPropertyValue('background-color');
        if (arrierePlan=='rgb(255, 255, 255)') {
            btn.style.backgroundColor='inherit';
            btn.style.color='white';
            btn.style.border=' 3px solid white'
        } else {
            btn.style.backgroundColor='white';
            btn.style.color=' #b11313';
            btn.style.border=' 3px solid white'
        }

     });
     btn.addEventListener('mouseout', function () {

        let arrierePlan = window.getComputedStyle(btn).getPropertyValue('background-color');
        if (arrierePlan=='rgb(255, 255, 255)') {
            btn.style.backgroundColor='inherit';
            btn.style.color='white';
            btn.style.border=' 3px solid white'
        } else {
            btn.style.backgroundColor='white';
            btn.style.color=' #b11313';
            btn.style.border=' 3px solid white'
        }

     });
}
// zoom acive
let 
// fade in 

let ratio = .1;

let options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
  }

 let handelIntersect = function (entries , observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
        } 
    })
 }
let observer = new IntersectionObserver(handelIntersect, options);
observer.observe(document.querySelector('.fade'));