export default function ({
                             modalClass, dataConsultation, consultationModalId,
                             dataOrder, orderModalId, thanksModalId, productTitleClass, productCardClass, modalClose
                         }) {
    if (!modalClass || !dataConsultation || !consultationModalId ||
    !dataOrder || !orderModalId || !thanksModalId || !productTitleClass || !productCardClass || !modalClose) {
        console.error('Один или несколько селекторов не найдены.');
        return;
    }
    const modal = document.querySelector(modalClass),
        consultationBtn = document.querySelectorAll(`[${dataConsultation}]`),
        body = document.querySelector('body'),
        consultationModal = document.getElementById(consultationModalId),
        orderModal = document.getElementById(orderModalId),
        thanksModal = document.getElementById(thanksModalId),
        orderBtn = document.querySelectorAll(`[${dataOrder}]`),
        modalCloseBtn = document.querySelectorAll(modalClose);

    consultationBtn.forEach(el => {
        el.addEventListener('click', showModalConsultation);
    });

    orderBtn.forEach(el => {
        el.addEventListener('click', (e) => {
            showModalOrder(e);
        });
    })

    orderModal.addEventListener('submit', (e) => {
        showModalThanks();
    });

    modal.addEventListener('click', (e) => {
        const target = e.target
        if (target === modal) closeModal()
    });

    modalCloseBtn.forEach(el => {
        el.addEventListener('click', closeModal)
    })

    function showModalConsultation() {
        body.classList.add('show-modal');
        modal.classList.remove('hidden');
        consultationModal.classList.remove('hidden');
    }

    function showModalOrder(e) {
        const target = e.target,
            orderName = target.closest(productCardClass).querySelector(productTitleClass);
        orderModal.querySelector('.modal__title-small').innerText = orderName.innerText;
        body.classList.add('show-modal');
        modal.classList.remove('hidden');
        orderModal.classList.remove('hidden');
    }

    function showModalThanks() {
        orderModal.classList.add('hidden');
        thanksModal.classList.remove('hidden');

    }

    function closeModal() {
        body.classList.remove('show-modal');
        modal.classList.add('hidden');
        consultationModal.classList.add('hidden');
    }
}