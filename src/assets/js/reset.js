export default function (){
    const form = document.querySelectorAll('form');
    form.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            e.target.reset();
        })
    })
}