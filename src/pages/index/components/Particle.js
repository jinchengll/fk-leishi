function applyProperties(target, properties) {
    for (var key in properties) {
    target.style[key] = properties[key];
    }
}
import Stars from '../../../assets/image/stars.png' 
export function Particle() {
  this.character = `<img src=${Stars} width='12' height='12'>`;
  this.lifeSpan = 120; //ms
  this.initialStyles = {
    "position": "fixed",
    "display": "inline-block",
    "top": "0px",
    "left": "0px",
    "pointerEvents": "none",
    "touch-action": "none",
    "z-index": "10000000",
    "will-change": "transform"
  };

  // Init, and set properties
  this.init = function (x, y,direction,up) {
    console.log(direction,up)
    this.velocity = {
      x: direction * 0.8 + Math.random() * 0.4,
      y: 1
    };
    // if(up){
    //   if(direction){
    //     this.position = { x: x, y: y  };
    //   }else{
    //     this.position = { x: x + 100, y: y + 100  };
    //   }
    // }else{
    //   // up -1
    //   if(direction){
    //     this.position = { x:  x + 50, y: y+ 30 };
    //   }else{
    //     this.position = { x: x, y: y };
    //   }
      
    // }
    this.position = { x: x + 10, y: y + 20 };

    this.element = document.createElement('view');
    this.element.innerHTML = this.character;
    applyProperties(this.element, this.initialStyles);
    this.update();

    document.querySelector('.particle').appendChild(this.element);
  };

  this.update = function () {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.lifeSpan--;

    this.element.style.transform = "translate3d(" + this.position.x + "px," + this.position.y + "px, 0) scale(" + (this.lifeSpan / 120) + ")";
  }

  this.die = function () {
    this.element.parentNode.removeChild(this.element);
  }

}