const SLIDE_CHANGE_TIME = 5000;
const slider_inner = document.querySelector('.slider-inner');
const slider_items = Array.from(slider_inner.children);
const slider_nav = document.querySelector('.slider-nav');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dotsArray = Array.from(slider_nav.children);
var wasRecentlyMoved = false;

slider_inner.style.width = slider_items.length*100 + '%';

const moveToSlide = (targetSlide) => {
    
    /* Section that move indeed the slides and update the active one */
    const targetIndex = slider_items.findIndex( item => item === targetSlide);
    slider_inner.style.transform = 'translateX(-'+ targetIndex*100/slider_items.length +'%)';
    slider_inner.querySelector('.active').classList.remove('active');
    targetSlide.classList.add('active');

    /* Section that updates dots */
    const currentDot = slider_nav.querySelector('.current');
    currentDot.classList.remove('current');
    dotsArray[targetIndex].classList.add('current');

    /* Section that hides next or prev buttons when needed */
    if (targetIndex === slider_items.length-1)
        nextBtn.classList.add('is-hidden');
    else
        nextBtn.classList.remove('is-hidden');
    
    if (targetIndex === 0)
        prevBtn.classList.add('is-hidden');
    else
        prevBtn.classList.remove('is-hidden');

    wasRecentlyMoved = true;

};

autoMoveSlide = () => {  
    if (wasRecentlyMoved === false){
        const currentSlide = slider_inner.querySelector('.active');
        const nextSlide = slider_inner.querySelector('.active').nextElementSibling;
        
        if (currentSlide === slider_items[slider_items.length - 1])
            moveToSlide(slider_items[0]);
        else
            moveToSlide(nextSlide);
    }
    wasRecentlyMoved = false;
    
}

nextBtn.addEventListener('click', () => {  
    const nextSlide = slider_inner.querySelector('.active').nextElementSibling;
    moveToSlide(nextSlide);
});

prevBtn.addEventListener('click', () => { 
    const prevSlide = slider_inner.querySelector('.active').previousElementSibling;
    moveToSlide(prevSlide);
});

slider_nav.addEventListener('click', event => {
    targetDot = event.target.closest('button');  /* Identifies the dot that were clicked on */
    if(!targetDot) return; /* Prevents from clicking on the div */

    const targetIndex =  dotsArray.findIndex( dot => dot === targetDot );
    const targetSlide = slider_items[targetIndex];
    moveToSlide(targetSlide);
    
});

setInterval(autoMoveSlide,SLIDE_CHANGE_TIME);
