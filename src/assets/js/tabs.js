export function tabs({containerClass, activeTabClass, tabClass, cardClass, hiddenClass, pagesSelector}) {
    const tabs = document.querySelectorAll(tabClass),
        tabsParent = document.querySelector(containerClass),
        cards = document.querySelectorAll(cardClass),
        activeTab = document.querySelector(activeTabClass);

    showElems(activeTab);

    tabsParent.addEventListener('click', (e) => {
        switchTabs(e)
    });

    function showElems(activeElem) {
        const dataAttribute = activeElem.getAttribute('data-filter');
        cards.forEach(card => {
            card.classList.add(hiddenClass.slice(1));
            if (card.getAttribute('data-filter') === dataAttribute) {
                card.classList.remove(hiddenClass.slice(1))
            }
        })
        slideToStart(pagesSelector);
    }

    function switchTabs(event) {
        const target = event.target.closest(tabClass);
        if (target) {
            tabs.forEach((item) => {
                item.classList.remove(activeTabClass.slice(1));
            });
            target.classList.add(activeTabClass.slice(1));
            showElems(target);
        }
    }
    function slideToStart(pagesSelector){
        cards.forEach(card => {
            const pages = card.querySelector(pagesSelector);
            if(pages)
                pages.style.transform = `translateX(0px)`;
        })
    }
}

export function cardSlide({cardClass, containerClass, cardLinkNext, cardLinkPrev, pagesSelector}) {
    const cards = document.querySelectorAll(cardClass),
        cardsParent = document.querySelector(containerClass),
        width = cards[0].offsetWidth - 1.6;


    cardsParent.addEventListener('click', (e) => {
        slidePages(e)
    });

    function slidePages(event) {
        event.preventDefault();
        const target = event.target
        if (target.classList.contains(cardLinkNext.slice(1))) {
            const pages = target.closest(pagesSelector)
            pages.style.transform = `translateX(-${width}px)`;
        } else if (target.classList.contains(cardLinkPrev.slice(1))) {
            const pages = target.closest(pagesSelector)
            pages.style.transform = `translateX(0px)`;
        }
    }
}