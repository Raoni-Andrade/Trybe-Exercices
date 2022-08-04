const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function prevencao(event){
    event.preventDefault();
}

HREF_LINK.addEventListener('click', prevencao);

INPUT_CHECKBOX.addEventListener('click', prevencao);

INPUT_TEXT.addEventListener('keypress', (evento) => {
    const a = evento.key;
    if (a !== 'a') {
        evento.preventDefault();
    }
});


A tag fildset é utilizada para agrupar um conjunto de campos de um formulário, que estão interligados. Já a legend serve para adicionar uma legenda ao grupo de elementos com objetivo de descrever do que se tratam os campos.
