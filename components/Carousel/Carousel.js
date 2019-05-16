class Carousel {
    constructor(element) {
        this.carousel = element;
        this.leftBtn = element.querySelector('.left-button');
        this.rightBtn = element.querySelector('.right-button');
        this.images = element.querySelectorAll('img');
        this.count = 0;
        this.imageNum = this.images.length;
        this.current = this.images[this.count];
        this.current.style.display = 'flex';
        this.leftBtn.addEventListener('click', () => this.scrollLeft());
        this.rightBtn.addEventListener('click', () => this.scrollRight());
    }
    scrollLeft() {
        if (this.count === 0) {
            this.count = this.imageNum - 1;
        } else {
            this.count -= 1;
        }
        this.current.style.display = 'none';
        this.current = this.images[this.count];
        this.current.style.display = 'flex';
    }

    scrollRight() {
        if (this.count === this.imageNum - 1) {
            this.count = 0;
        } else {
            this.count += 1;
        }
        this.current.style.display = 'none';
        this.current = this.images[this.count];
        this.current.style.display = 'flex';
    }
}

let carousel = document.querySelector('.carousel');
let ref = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/