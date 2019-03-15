function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }


const decos = document.querySelectorAll('.deco-grid div svg')


decos.forEach(deco => {
  anime({
    targets: deco,
    delay: (deco,index) => anime.random(500,1500),
    duration: (deco,index) => anime.random(300,800),
    loop:false,
    easing:`easeInOutSine`,
    direction:`alternate`,
    opacity:1,
    autoplay:true
  })
  anime({
    targets: deco,
    delay: (deco, index)=> anime.random(1300,3000),
    duration: (deco,index) => anime.random(2000,3000),
    scale: (deco, index) => anime.random(0.7,1.2),
    loop:true,
    easing:`easeInOutSine`,
    direction:`alternate`,
    autoplay:true
  })
})