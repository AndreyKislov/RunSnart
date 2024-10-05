export default function ({sectionClass, itemClass}) {
    const section = document.querySelector(sectionClass),
        items = document.querySelectorAll(itemClass);

    window.addEventListener('scroll', showItems);

    function showItems() {
        items.forEach(item => {
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight - 60) {
                item.classList.remove('invisible');
            }
            if(!Array.from(items).some(item => item.classList.contains('invisible'))){
                window.removeEventListener('scroll', showItems);
            }
        })
    }
}