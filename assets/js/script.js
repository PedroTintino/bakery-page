
var animateText = document.querySelector('.myText')
var animateDuration = animateText.innerHTML.length * 250;

setTimeout(function(){
    document.getElementById('getting-start-btn').style.display = 'block';
}, animateDuration);