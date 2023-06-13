const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Feo caso, feo caso, chale xdxd')
    alert('En otras noticias, te quiero muchísimo y me gusta demasiado pasar tiempo contigo e ir conociéndote <333')
    alert('Eres una gran persona a la cual admiro(está era la palabra que buscaba xd) demasiado, gracias por seguir aquí y alegrar mis días <<')
    alert('gracias por todo dvd ^^')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})
