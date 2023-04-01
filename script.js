let isMainCourseSelected = false;
let isSodaSelected = false;
let isDesertSelected = false;

function foodSelector(item) {
    if (!isMainCourseSelected) {
        item.classList.add('selecionado');
        isMainCourseSelected = true;
    } else {
        const button = document.querySelector('.prato .selecionado');
        button.classList.remove('selecionado');
        item.classList.add('selecionado');
    }

    activeFinishButton();
}

function sodaSelector(item) {
    if (!isSodaSelected) {
        item.classList.add('selecionado');
        isSodaSelected = true;
    } else {
        const button = document.querySelector('.bebida .selecionado');
        button.classList.remove('selecionado');
        item.classList.add('selecionado');
    }

    activeFinishButton();
}

function desertSelector(item) {
    if (!isDesertSelected) {
        item.classList.add('selecionado');
        isDesertSelected = true;
    } else {
        const button = document.querySelector('.sobremesa .selecionado');
        button.classList.remove('selecionado');
        item.classList.add('selecionado');
    }

    activeFinishButton();
}

function activeFinishButton() {
    if (isMainCourseSelected && isSodaSelected && isDesertSelected) {
        const buttonUnfinishedOrder = document.querySelector('.botao-pedido-inacabado');
        buttonUnfinishedOrder.classList.add('inativo');

        const buttonFinishedOrder = document.querySelector('.botao-pedido-finalizado');
        buttonFinishedOrder.classList.remove('inativo');
    }
}