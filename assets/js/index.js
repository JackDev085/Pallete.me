const color = document.querySelector(".color")

addEventListener('click', e => {
  if (e.target.classList.contains('btn-gerar')) {
    mudaCor()
  }
  if (e.target.classList.contains('btn-copiar')) {
    copiaCor()
  }
})
function mudaCor() {
  let elements = document.querySelectorAll('.color');
  let h = Math.random()*364; // valor inicial de h
  let s = 90; 
  let l =11; 

  elements.forEach((element, index) => {
    if (index < 5) {
      h -= 3;
    } else {
      h += 3;
    }
    if(index != 0) {
      l += 11;
    }
    if (l > 100 ) l = 100; // garante que o valor de l não ultrapasse 100

    element.style.backgroundColor = `hsl(${h}, ${s}%, ${l}%)`;
  });

  let backgrounds = []; // Inicializa como array vazio
  let i = 0;
  elements.forEach(element => {
    let style = getComputedStyle(element);
    let backgroundColor = style.backgroundColor;
    backgrounds.push(backgroundColor); // Adiciona a cor ao array
    i++;
  });
  aplicaBackground(backgrounds); // Passa o array para a função

  
}
function aplicaBackground(cores) {
  let root = document.documentElement; // obtém o elemento root
  root.style.setProperty('--corBg', cores[0]); // substitua '--nome-da-variavel' pelo nome da sua variável CSS
  root.style.setProperty('--corTxt', cores[8]); // substitua '--nome-da-variavel' pelo nome da sua variável CSS
}

function copiaCor() {
  let elements = document.querySelectorAll('.color');
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
  let textToCopy = text;
    navigator.clipboard.writeText(textToCopy).then(function () {
    alert("Copiado para área de trânsferência")
    })
}