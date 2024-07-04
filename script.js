const testimonials = [
    {
        name: "fabian_pla",
        country: "Germany",
        text: "I have already placed an order with him several times and I have to say that his work is always delivered with such good quality and the whole thing is done quickly. Arrangements and changes are always made until you have exactly the result that you had in mind and do it him to my number 1.",
        rating: 5,
        time: "3 weeks ago"
    },
    {
        name: "ani_mation12345",
        country: "United States",
        text: "Varnos_Games went above and beyond helping me with my project. Really showing care as if it were his own. All bugs were fixed and he shared and provided opinions that added more to the project.",
        rating: 5,
        time: "1 month ago"
    },
    {
        name: "marwanrahimi478",
        country: "Bahrain",
        text: "He's one of the best online tutor and game developer I've ever work with. Understanding, integrity and commitment are at the highest level while he's teaching you. Best wishes for him.",
        rating: 5,
        time: "2 months ago"
    },
    {
        name: "alexandruap06",
        country: "Romania",
        text: "He was very professional, detail-oriented, and went above and beyond my actual task. The task itself, as well as additional bugs, was solved perfectly. We also had a good time and communicated efficiently on the call. Would like to work again in the future for sure!",
        rating: 5,
        time: "2 months ago"
    },
    {
        name: "jeetcet",
        country: "Canada",
        text: "Working with varnos has been a fantastic experience! He created a game exactly to my specifications, and his post delivery support has been exceptional. I highly recommend them for any game development project.",
        rating: 5,
        time: "2 months ago"
    }
];

let currentTestimonialIndex = 0;

const testimonialTextElement = document.getElementById('testimonial-text');
const testimonialElement = document.getElementById('testimonial');

function updateTestimonial() {
    const testimonial = testimonials[currentTestimonialIndex];
    testimonialTextElement.innerHTML = `<strong>${testimonial.name}</strong> from <strong>${testimonial.country}</strong> (${testimonial.time}):<br>"${testimonial.text}"`;
}

function changeTestimonial(direction) {
    testimonialElement.style.opacity = '0';
    testimonialElement.style.transform = 'translateX(' + (direction === 'left' ? '-' : '') + '100px)';
    setTimeout(() => {
        currentTestimonialIndex = (currentTestimonialIndex + (direction === 'left' ? -1 : 1) + testimonials.length) % testimonials.length;
        updateTestimonial();
        testimonialElement.style.transform = 'translateX(0)';
        testimonialElement.style.opacity = '1';
    }, 500);
}

document.getElementById('left-button').addEventListener('click', () => {
    changeTestimonial('left');
});

document.getElementById('right-button').addEventListener('click', () => {
    changeTestimonial('right');
});

updateTestimonial();

let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        header.classList.add('sticky-header-hidden');
    } else {
        header.classList.remove('sticky-header-hidden');
    }
    lastScrollTop = scrollTop;
});
