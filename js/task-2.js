const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
   },
];

const gal = document.querySelector('.gallery');
const galHtml = document.createElement('ul');

for (const imgData of images) { 
  const li = document.createElement('li');
  li.classList.add("gallery-item");
  const img = document.createElement('img');
  img.classList.add("gallery-image");
  img.setAttribute('src', imgData.url);
  img.setAttribute('alt', imgData.alt);
  li.append(img);
  galHtml.append(li);
}

gal.innerHTML = galHtml.innerHTML;
