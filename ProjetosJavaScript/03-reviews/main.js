// local reviews data
const reviews = [
    {
        id: 1,
        name: 'susan smith',
        job: 'web developer',
        img: 'https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg',
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: 'anna johnson',
        job: 'web designer',
        img: 'https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg',
        text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
        id: 3,
        name: 'peter jones',
        job: 'intern',
        img: 'https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg',
        text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
        id: 4,
        name: 'bill anderson',
        job: 'the boss',
        img: 'https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg',
        text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
];

// select itens
const img = document.querySelector("#person-img");
const author = document.querySelector("#author");
const job = document.querySelector("#job");
const review = document.querySelector("#info");

const prev = document.querySelector(".prev-btn");
const next = document.querySelector(".next-btn");
const random = document.querySelector(".random-btn");

// starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', show(currentItem));

// show items
function show(currentItem) {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    review.textContent = item.text;
};

// Replace items
prev.addEventListener('click', () => {
    currentItem = currentItem - 1;
    if (currentItem < 0) return currentItem = (reviews.length - 1);
    show(currentItem);
});


next.addEventListener('click', () => {
    currentItem = currentItem + 1;
    if (currentItem > (reviews.length - 1)) return currentItem = 0;
    show(currentItem);
});

random.addEventListener('click', () => {
    currentItem = Math.floor(Math.random() * reviews.length)
    show(currentItem);
});

