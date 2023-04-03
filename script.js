let mainCourseSelected = '';
let sodaSelected = '';
let desertSelected = '';

let nameMainCouseSelected;
let priceMainCouseSelected;
let nameSodaSelected;
let nameDesertSelected;
let priceDesertSelected;
let totalPrice;

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
    const isMainCourseSelected = !mainCourseSelected.isEmpty;
    const isSodaSelected = !sodaSelected.isEmpty;
    const isDesertSelected = !desertSelected.isEmpty;

    if (mainCourseSelected && sodaSelected && desertSelected) {
        const buttonUnfinishedOrder = document.querySelector('.botao-finalizar-pedido button');
        buttonUnfinishedOrder.textContent = 'Finalizar pedido';
        buttonUnfinishedOrder.style.background = 'rgb(31, 182, 31)';
        buttonUnfinishedOrder.removeAttribute("disabled");
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

    totalPrice = Number(priceMainCouseSelected.replace(',','.'))+Number(priceSodaSelected.replace(',','.'))+Number(priceDesertSelected.replace(',','.'));
    totalPrice = totalPrice.toFixed(2).toString().replace('.',',');
    overlay.querySelector('.total .price').textContent = totalPrice;
}

function deactivateOverlay() {
    const overlay = document.querySelector('.overlay-finish-order');
    overlay.classList.add('inativo');
}

function goToWhatsApp() {
    const costumerName = prompt('Digite seu nome, por favor: ');
    const costumerAdress = prompt('Digite seu endereço, por favor: ');
    const whatsAppMessage = ['Olá, gostaria de fazer o pedido:'+
                            '\n- Prato: ' + nameMainCouseSelected+
                            '\n- Bebida: ' + nameSodaSelected+
                            '\n- Sobremesa: ' + nameDesertSelected+
                            '\nTotal: R$ ' + totalPrice+
                            '\n\nNome: ' + costumerName +
                            '\nEndereço: ' + costumerAdress];

    const whatsAppMessageEnconded = window.encodeURIComponent(whatsAppMessage);
    
    const whatsLink = 'https://wa.me/5519999999999?text=' + whatsAppMessageEnconded;

    window.open(whatsLink);
}