const wrapImageUp = document.querySelector('.image-wrapper__up');
const wrapImageDown = document.querySelector('.image-wrapper__down');
const elHtml = document.querySelector('html');
let cssVel = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--size-img'));

class Parallax {
  constructor(block, speed) {
    this.block = block;
    this.img = block.children[0];
    this.speed = speed;
  }

  moveEffect() {
    const positionTop = this.block.getBoundingClientRect().top - window.innerHeight;
    const positionBottom = this.block.getBoundingClientRect().bottom;
    const difference = (this.img.clientHeight - this.block.clientHeight) / 2;

    if (positionTop <= 0 && positionBottom >= 0) {
      let size = parseInt((positionBottom / (positionBottom - positionTop) * 2 - 1) * difference);
      this.img.style.transform = `translateY(${size}px)`;
    }
  };

  check() {
    const speedValue = 1.5;

    if (this.img.style.height <= this.block.clientHeight) {
      this.img.style.height = this.block.clientHeight * (this.speed ?? speedValue) + 'px';
    }
  }

  start() {
    this.check();

    window.addEventListener('DOMContentLoaded', () => {
      this.moveEffect();
    })

    window.addEventListener('scroll', () => {
      this.moveEffect();
    });
  }
}


new Parallax(wrapImageUp, 2).start();
new Parallax(wrapImageDown, 4).start();