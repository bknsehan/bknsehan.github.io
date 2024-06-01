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
