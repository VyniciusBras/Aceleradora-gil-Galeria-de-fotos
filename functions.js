//Funções do site!
// Uma variavel para armazenar as imagens.
const images = [
    { src: "images/Ferrari SF90.jpg", name: "Ferrari SF90", keywords: "Veiculos // Carros" },
    { src: "images/Harley  Davidson Iron 883.jpg", name: "Harley  Davidson Iron 883 // Motos", keywords: "Veiculos" },
    { src: "images/Nova Zelândia.jpg", name: "Nova Zelândia", keywords: "Países" },
    { src: "images/Cuba Varadero.jpg", name: "Cuba Varadero", keywords: "Praias" },
    { src: "images/Estação das docas.jpg", name: "Estação das docas", keywords: "Praias" },
    { src: "images/Kawasaki Ninja.jpg", name: "Kawasaki Ninja", keywords: "Veiculos" },
    { src: "images/Austrália.jpg", name: "Austrália", keywords: "Países" },
    { src: "images/Isola dei Conigli.jpg", name: "Isola dei Conigli", keywords: "Praias" },
    { src: "images/HONDA XRE300.jpg", name: "HONDA XRE300", keywords: "Veiculos // Motos" },
    { src: "images/Canadá.jpg", name: "Canadá", keywords: "Países" },
    { src: "images/Lamborghini Veneno.jpg", name: "Lamborghini Veneno", keywords: "Veiculos // carros" },
    { src: "images/Porsche.jpg", name: "Porsche", keywords: "Veiculos // carros" },
    { src: "images/Praia da Pajuçara.jpg", name: "Praia da Pajuçara", keywords: "Praias" },
    { src: "images/Royal Enfield Meteor 350.jpg", name: "Royal Enfield Meteor 350", keywords: "Veiculos // Motos" },
    { src: "images/Suzuki Hayabusa.jpg", name: "Suzuki Hayabusa", keywords: "Veiculos // Motos" },
    { src: "images/Dinamarca.jpg", name: "Dinamarca", keywords: "Países" },
    { src: "images/Praia de Ipanema.jpg", name: "Praia de Ipanema", keywords: "Praias" },
    { src: "images/Nissan Skyline R34.jpg", name: "Nissan Skyline R34", keywords: "Veiculos // Carros" },
    { src: "images/YAMAHA R7.jpg", name: "Yamaha R7", keywords: "Veiculos // Motos" },
    { src: "images/Praia de Muro Alto.jpg", name: "Praia de Muro Alto", keywords: "Praias" },
    { src: "images/Estados Unidos.jpg", name: "Estados Unidos", keywords: "Países" },
    { src: "images/Japão.jpg", name: "Japão", keywords: "Países" },
    { src: "images/Praia de Santa Catarina.jpg", name: "Praia de Santa Catarina", keywords: "Praias" },
    { src: "images/Alemanha.jpg", name: "Alemanha", keywords: "Países" },
    { src: "images/Praia do Sancho.jpg", name: "Praia do Sancho", keywords: "Praias" },
    { src: "images/Reino Unido.jpg", name: "Reino Unido", keywords: "Países" },
    { src: "images/Suécia.jpg", name: "Suécia", keywords: "Países" },
    { src: "images/Praia dos Golfinhos.jpg", name: "Praia dos Golfinhos", keywords: "Praias" },
    { src: "images/Radhanagar.jpg", name: "Radhanagar", keywords: "Praias" },
    { src: "images/Suíça.jpg", name: "Suíça", keywords: "Países" },
];

const gallery = document.getElementById('gallery');
const noResults = document.getElementById('noResults');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.getElementById('closeModal');

// Função para carregar todas as imagens acima.
function loadImages() {
    gallery.innerHTML = '';
    images.forEach(image => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.dataset.keywords = image.keywords;

        item.innerHTML = `
            <img src="${image.src}" alt="${image.name}" onclick="openModal('${image.src}')">
            <div class="photo-name">${image.name}</div>
        `;

        gallery.appendChild(item);
    });
}

//A seguir uma função para abrir a imagem e abaixo uma para fechar a imagem.
function openModal(src) {
    modalImage.src = src;
    modal.classList.add('active');
}

closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

// Aqui fiz uma função para filtrar as imagens
function filterPhotos(searchValue) {
    const items = document.querySelectorAll('.gallery-item');
    let matchesFound = false;

    items.forEach(item => {
        const photoName = item.querySelector('.photo-name').textContent.toLowerCase();
        const keywords = item.dataset.keywords.toLowerCase();

        if (photoName.includes(searchValue) || keywords.includes(searchValue)) {
            item.style.display = 'block';
            matchesFound = true;
        } else {
            item.style.display = 'none';
        }
    });

    noResults.style.display = matchesFound ? 'none' : 'block';
}

//Variavéis para a barra de pesquisa
const searchInput = document.getElementById('search');
const searchButton = document.getElementById('searchButton');

searchInput.addEventListener('input', () => {
    filterPhotos(searchInput.value.toLowerCase());
});

searchButton.addEventListener('click', () => {
    filterPhotos(searchInput.value.toLowerCase());
});

loadImages();