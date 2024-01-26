const color = document.querySelector(".color")

function geraCorAleatoria() {
  let h = Math.floor(Math.random() * 354); // gera um número aleatório entre 0 e 354
  let s = 85
  let l = 54
  return `hsl(${h},${s}%,${l}%)`; // retorna a cor no formato HSL
}
addEventListener('click', e => {
  if (e.target.classList.contains('btn-gerar')) {
    mudaCor()
  }
  if (e.target.classList.contains('btn-copiar')) {
    copiaCor()
  }
})
function mudaCor() {
  let elements = document.querySelectorAll('.color'); // substitua '.color' pelo seletor do seu elemento
  let cor = geraCorAleatoria();
  elements.forEach((element) => {
    element.style.backgroundColor = cor;
  });
}

function copiaCor() {
  let elements = document.querySelectorAll('.color'); // substitua '.color' pelo seletor do seu elemento
  let backgrounds = []
  let i = 1
  elements.forEach(element => {
    let style = getComputedStyle(element);
    let backgroundColor = style.backgroundColor;
    backgrounds += ` ${i} - ${backgroundColor}\n`
    i++
  })

  copiaParaTransferencia(backgrounds)
  
}

function copiaParaTransferencia(text){

  let textToCopy = text; // substitua por seu próprio texto
    navigator.clipboard.writeText(textToCopy).then(function () {
    console.log('Copiado para a área de transferência com sucesso!');
    })
}