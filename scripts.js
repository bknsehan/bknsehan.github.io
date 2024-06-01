const searchBar = document.getElementById('search-bar');
const tagsContainer = document.querySelector('.tags-container');

const tags = [
    'C#',
    'C++',
    'Java',
    'JavaScript',
    'Python',
    'PHP',
    'Ruby',
    'Swift',
    'Go',
    'Rust'
];

// Menampilkan tag awal
displayTags();

// Menambahkan event listener untuk search bar
searchBar.addEventListener('input', () => {
    const searchTerm = searchBar.value.toLowerCase();
    const filteredTags = tags.filter(tag => tag.toLowerCase().includes(searchTerm));
    displayTags(filteredTags);
});

function displayTags(filteredTags = tags) {
    tagsContainer.innerHTML = '';
    filteredTags.forEach(tag => {
        const tagElement = document.createElement('div');
        tagElement.classList.add('tag');
        tagElement.textContent = tag;
        tagsContainer.appendChild(tagElement);
    });
}
let selectedTags = []; // Array untuk menyimpan tag yang dipilih

// Menambahkan event listener untuk klik tag
tagsContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('tag')) {
        const tagName = event.target.textContent;
        const tagIndex = selectedTags.indexOf(tagName);

        if (tagIndex === -1) { // Tag belum dipilih
            selectedTags.push(tagName);
        } else if (selectedTags[tagIndex] === 'excluded') { // Tag diubah dari exclude ke unselect
            selectedTags.splice(tagIndex, 1);
        } else { // Tag diubah dari include ke exclude
            selectedTags[tagIndex] = 'excluded';
        }

        displayTags(); // Menampilkan tag dengan perubahan
    }
});

// Memfilter dan menampilkan tag dengan status yang sesuai
function displayTags(filteredTags = tags) {
    tagsContainer.innerHTML = '';
    filteredTags.forEach(tag => {
        const tagElement = document.createElement('div');
        tagElement.classList.add('tag');
        const isSelected = selectedTags.includes(tag);
        const isExcluded = selectedTags.includes(tag) && selectedTags[selectedTags.indexOf(tag)] === 'excluded';
        tagElement.classList.add(isSelected ? 'selected' : '');
        tagElement.classList.add(isExcluded ? 'excluded' : '');
        tagElement.textContent = tag;
        tagsContainer.appendChild(tagElement);
    });
}
