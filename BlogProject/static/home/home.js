var app = new Vue ({
  delimiters: ["[[", "]]"],
  el: '#app',
  mounted() {
    const container = document.querySelector('.container')
    for(var i=0;i<=10; i++){
      const blocks = document.createElement('div');
      blocks.classList.add('blocks');
      container.appendChild(blocks);
    }
    anime({
      targets: '.left-triangle ', // 対象を指定
      translateX: -500,
      duration: 570,
      easing: 'cubicBezier(.5, .05, .1, .3)',
      rotate:45,
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
      translateX: 170,
      duration: 1000,
      delay: 1800,
      rotate:-45,
      easing: 'cubicBezier(.5, .05, .1, .10)'
    });
    anime({
      targets: '.top-square',
      translateY: -1300,
      duration: 500,
      delay: 2800,
      easing: 'cubicBezier(.5, .05, .1, .3)'
    });
  },
})

var circle_search = new Vue ({
  delimiters: ["[[", "]]"],
  el: '#circle-search-container',
  mounted() {
    const container = document.querySelector('.circle-search-container')
    for(var i=0;i<=20; i++){
      const circle_search_blocks = document.createElement('div');
      circle_search_blocks.classList.add('circle-search-blocks');
      container.appendChild(circle_search_blocks);
    }
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

function animateBlocks (){
  anime({
    targets: '.blocks',
    translateX: function(){
      return anime.random(-800,700)
    },
    translateY: function(){
      return anime.random(-500,250)
    },
    scale: function(){
      const random_scale = Math.random(0,30)
      return random_scale
    },
    duration:function(){
      return anime.random(3000,5000)
    },
    delay: anime.stagger(100),
    complete: animateBlocks,
  });
}

function animateBlocks_circleSearch (){
  anime({
    targets: '.circle-search-blocks',
    translateX: function(){
      return anime.random(-800,700)
    },
    translateY: function(){
      return anime.random(-1000,340)
    },
    scale: function(){
      const random_scale = Math.random(0,30)
      return random_scale
    },
    duration:function(){
      return anime.random(5000,8000)
    },
    delay: function(){
      return anime.random(100,5000)
    },
    complete: animateBlocks_circleSearch,
    easing: 'cubicBezier(.5, .05, .1, .3)',
  });
}

animateBlocks_circleSearch ()
animateBlocks();
