export default function ({btnPrevSelector, btnNextSelector, sliderInnerSelector, dotsSelector}) {
    const prev = document.querySelector(btnPrevSelector),
        next = document.querySelector(btnNextSelector),
        sliderInner = document.querySelector(sliderInnerSelector),
        dots = document.querySelector(dotsSelector);


    let currentIndex = 0;
    let slideCount = sliderInner.childElementCount;
    let startX;

    if (!prev || !next || !sliderInner) {
        console.error('Один или несколько селекторов не найдены.');
        return;
    }

    createDots(slideCount);

    next.addEventListener('click', () => {
        switchSlide(++currentIndex);
    });
    prev.addEventListener('click', () => {
        switchSlide(--currentIndex);
    });

    dots.addEventListener('click', (e) => {
        const target = e.target;
        if (target.hasAttribute('data-index')) {
            switchSlide(target.getAttribute('data-index'))
        }
    });
    window.addEventListener('resize', () => {
        switchSlide(currentIndex);
    });

    function createDots(slideCount, currentIndex = 0) {
        if (slideCount !== dots.childElementCount) {
            dots.innerHTML = ''
            for (let i = 0; i < slideCount; i++) {
                dots.innerHTML += `<li data-index="${i}"></li>`;
            }
        }

        for (let i = 0; i < slideCount; i++) {
            dots.children[i].classList.remove('slider__dots-active');
        }
        dots.children[currentIndex].classList.add('slider__dots-active');

    }

    function switchSlide(necessaryIndex) {
        let slideWidth = sliderInner.offsetWidth;
        slideCount = sliderInner.childElementCount;
        currentIndex = necessaryIndex;
        if (currentIndex >= slideCount) {
            currentIndex = 0
        }
        if (currentIndex < 0) {
            currentIndex = slideCount - 1;
        }
        sliderInner.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        createDots(slideCount, currentIndex);
    }


    sliderInner.addEventListener('touchend', (e) => {
        console.log(e)
        const dif = e.changedTouches[0].clientX - startX;
            if(dif > 50){
                console.log(dif)
                switchSlide(--currentIndex)
            } else if(dif < 0 && dif < -50) {
                switchSlide(++currentIndex)
                console.log(dif)
            }
        });
    sliderInner.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    })
}