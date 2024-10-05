export default function (upClass){
    const upBtn = document.querySelector(upClass);

    document.addEventListener('scroll', (e)=>{
        if(window.scrollY > 500){
            upBtn.classList.remove('invisible');
        }else {
            upBtn.classList.add('invisible');
        }
    })
}