let mainCourseSelected = '';
let sodaSelected = '';
let desertSelected = '';

let nameMainCouseSelected;
let priceMainCouseSelected;
let nameSodaSelected;
let nameDesertSelected;
let priceDesertSelected;

function foodSelector(item) {
    if (!mainCourseSelected) {
        item.classList.add('selecionado');
    } else {
        const lastItemChoosed = document.querySelector('.prato .selecionado');
        lastItemChoosed.classList.remove('selecionado');
        item.classList.add('selecionado');
    }

    mainCourseSelected = item;

    activeFinishButton();
}

function sodaSelector(item) {
    if (!sodaSelected) {
        item.classList.add('selecionado');
    } else {
        const lastItemChoosed = document.querySelector('.bebida .selecionado');
        lastItemChoosed.classList.remove('selecionado');
        item.classList.add('selecionado');
    }

    sodaSelected = item;

    activeFinishButton();
}

function desertSelector(item) {
    if (!desertSelected) {
        item.classList.add('selecionado');
    } else {
        const lastItemChoosed = document.querySelector('.sobremesa .selecionado');
        lastItemChoosed.classList.remove('selecionado');
        item.classList.add('selecionado');
    }

    desertSelected = item;

    activeFinishButton();
}

function activeFinishButton() {
    const ismainCourseSelected = !mainCourseSelected.isEmpty;
    const issodaSelected = !sodaSelected.isEmpty;
    const isdesertSelected = !desertSelected.isEmpty;

    if (ismainCourseSelected && issodaSelected && isdesertSelected) {
        const buttonUnfinishedOrder = document.querySelector('.botao-pedido-inacabado');
        buttonUnfinishedOrder.classList.add('inativo');

        const buttonFinishedOrder = document.querySelector('.botao-pedido-finalizado');
        buttonFinishedOrder.classList.remove('inativo');
    }
}

function activateOverlay() {
    const overlay = document.querySelector('.overlay-finish-order');
    overlay.classList.remove('inativo');

    const item1 = overlay.querySelector('.item:nth-child(1)');
    nameMainCouseSelected = mainCourseSelected.querySelector('.nome').textContent;
    priceMainCouseSelected = mainCourseSelected.querySelector('.valor').textContent;
    item1.querySelector('.name').textContent = nameMainCouseSelected;
    item1.querySelector('.price').textContent = priceMainCouseSelected;

    const item2 = overlay.querySelector('.item:nth-child(2)');
    nameSodaSelected = sodaSelected.querySelector('.nome').textContent;
    priceSodaSelected = sodaSelected.querySelector('.valor').textContent;
    item2.querySelector('.name').textContent = nameSodaSelected;
    item2.querySelector('.price').textContent = priceSodaSelected;

    const item3 = overlay.querySelector('.item:nth-child(3)');
    nameDesertSelected = desertSelected.querySelector('.nome').textContent;
    priceDesertSelected = desertSelected.querySelector('.valor').textContent;
    item3.querySelector('.name').textContent = nameDesertSelected;
    item3.querySelector('.price').textContent = priceDesertSelected;

    const total = Number(priceMainCouseSelected.replace(',','.'))+Number(priceSodaSelected.replace(',','.'))+Number(priceDesertSelected.replace(',','.'));
    overlay.querySelector('.total .price').textContent = total.toFixed(2).toString().replace('.',',');
}

function deactivateOverlay() {
    const overlay = document.querySelector('.overlay-finish-order');
    overlay.classList.add('inativo');
}

function goToWhatsApp() {
    const costumerName = prompt('Digite seu nome, por favor: ');
    const costumerAdress = prompt('Digite seu endereço, por favor: ');
}