const wrapImageUp = document.querySelector('.image-wrapper__up');
const wrapImageDown = document.querySelector('.image-wrapper__down');
const elHtml = document.querySelector('html');

class Parallax {
  constructor(block) {
    this.block = block;
    this.img = block.children[0];
  }

  moveEffect() {
    const positionTop = this.block.getBoundingClientRect().top - window.innerHeight;
    const positionBottom = this.block.getBoundingClientRect().bottom;
    const difference = this.img.style.height - this.block.clientHeight;

    if (positionTop <= 0 && positionBottom >= 0) {
      let size = parseInt(-positionBottom / (positionTop - positionBottom) * difference - difference / 2);
      this.img.style.transform = `translateY(${size}px)`;
    }
  };

  check() {
    const speedSize = 2;
    const speedValue = 1.5;

    if (this.img.clientHeight <= this.block.clientHeight) {
      elHtml.style.setProperty('--size-img1', this.block.clientHeight * (speedSize ?? speedValue) + 'px');
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

new Parallax(wrapImageUp).start();
new Parallax(wrapImageDown).start();