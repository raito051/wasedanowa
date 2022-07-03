var app = new Vue ({
  delimiters: ["[[", "]]"],
  el: '#app',
  mounted() {
    const container = document.querySelector('.container')
    for(var i=0;i<=50; i++){
      const blocks = document.createElement('div');
      blocks.classList.add('blocks');
      container.appendChild(blocks)
    }
    anime({
      targets: '.first-circle ', // 対象を指定
      translateY: [
        {value:350,duration: 1000, delay: 500 },
      ],
      translateX: [
        {value:1000,duration: 1000, delay:5000}
      ],
      easing: 'cubicBezier(.5, .05, .1, .3)'
    });
    anime({
      targets: '.blocks',
      translateX: function(){
        return anime.random(-800,700)
      },
      translateY: function(){
        return anime.random(-300,250)
      },
      scale: function(){
        return anime.random(0.1,0.2,)
      }
    })
    anime({
      targets: '.left-triangle ', // 対象を指定
      translateX: -120,
      duration: 570,
      easing: 'cubicBezier(.5, .05, .1, .3)'
    });
    anime({
      targets: '.bottom-square',
      translateY: 330,
      duration: 1000,
      delay: 700,
      easing: 'cubicBezier(.5, .05, .1, .3)'
    });
    anime({
      targets: '.right-triangle',
      translateX: 300,
      duration: 1000,
      delay: 1800,
      easing: 'cubicBezier(.5, .05, .1, .10)'
    });
    anime({
      targets: '.top-square',
      translateY: -1300,
      duration: 500,
      delay: 2800,
      easing: 'cubicBezier(.5, .05, .1, .3)'
    });
  }
})

ScrollReveal().reveal('.introduction-title', { 
  duration: 800, 
  viewFactor: 0.4, 
  reset: true,   
  origin:'bottom',
  distance: '50px',
});

ScrollReveal().reveal('.introduction-contents-item-1', { 
  duration: 800, 
  viewFactor: 0.4, 
  reset: true,   
  origin:'left',
  distance: '50px',
});

ScrollReveal().reveal('.introduction-contents-item-2', { 
  duration: 800, 
  viewFactor: 0.4, 
  reset: true,   
  origin:'right',
  distance: '50px',
});

ScrollReveal().reveal('.circle-search div h2', { 
  duration: 800, 
  viewFactor: 0.4, 
  reset: true,   
  origin:'bottom',
  distance: '50px',
});

ScrollReveal().reveal('.circle-type-item-list', { 
  duration: 800, 
  viewFactor: 0.4, 
  reset: true,   
  origin:'bottom',
  distance: '50px',
});
