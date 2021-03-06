var starCount = 100;
var stars = [];

window.onresize = shiftStars;

function generateStars() {
  for (i = 0; i < starCount; i++) {
    var dimensions = Math.floor(3 + (Math.random() * 3));
    var halfDim = Math.ceil(dimensions / 2);
  
    var starDiv = document.createElement('div');
  
    starDiv.style.width = dimensions + 'px';
    starDiv.style.height = dimensions + 'px';
    starDiv.style.borderRadius = `${halfDim}px ${halfDim}px ${halfDim}px ${halfDim}px`;
    starDiv.style.marginLeft = `${Math.floor(Math.random() * window.innerWidth)}px`;
    starDiv.style.marginTop = `${Math.floor(Math.random() * window.innerHeight)}px`;
    starDiv.style.opacity = `${Math.random()}`;
  
    starDiv.setAttribute('class', 'star');
  
    stars.push(starDiv);
    document.querySelector('.hide-overflow').appendChild(starDiv);
  }
}

function shiftStars() {
  for (i = 0; i < stars.length; i++) {
    stars[i].style.marginLeft = `${Math.floor(Math.random() * window.innerWidth)}px`;
    stars[i].style.marginTop = `${Math.floor(Math.random() * window.innerHeight)}px`;
  }
}

function randomValues() {
  anime({
    targets: '.star',
    translateX: function() { return anime.random(-10, 10); },
    translateY: function() { return anime.random(-10, 10); },
    opacity: function() { return anime.random(0, 1) },
    scale: function() { return anime.random(0.5, 1.5) },
    easing: 'easeInOutQuad',
    delay: function() { return anime.random(200, 800) },
    endDelay: function() { return anime.random(200, 800) },
    duration: function() { return anime.random(500, 1000) },
    complete: randomValues
  });
}

generateStars();
randomValues();
