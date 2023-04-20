public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}



// Get carousel elements
const carousel = document.querySelector('.carousel');
const carouselItems = Array.from(document.querySelectorAll('.carousel__item'));

// Set initial active item
let activeIndex = 0;
carouselItems[activeIndex].classList.add('carousel__item--active');

// Function to move carousel forward
function moveForward() {
  carouselItems[activeIndex].classList.remove('carousel__item--active');
  carouselItems[activeIndex].classList.add('carousel__item--prev');

  activeIndex = (activeIndex + 1) % carouselItems.length;

  carouselItems[activeIndex].classList.remove('carousel__item--next');
  carouselItems[activeIndex].classList.add('carousel__item--active');
}

// Function to move carousel backward
function moveBackward() {
  carouselItems[activeIndex].classList.remove('carousel__item--active');
  carouselItems[activeIndex].classList.add('carousel__item--next');

  activeIndex = (activeIndex - 1 + carouselItems.length) % carouselItems.length;

  carouselItems[activeIndex].classList.remove('carousel__item--prev');
  carouselItems[activeIndex].classList.add('carousel__item--active');
}

// Set up event listeners for buttons
document.querySelector('#carousel-prev').addEventListener('click', moveBackward);
document.querySelector('#carousel-next').addEventListener('click', moveForward);
