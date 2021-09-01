////////search books////////
const searchBooks = () => {
    const searchField = document.getElementById('input-field');
    const searchText = searchField.value;
    // console.log(searchText)
///////// clear input value//////// 
    searchField.value = ''
///////////loadData///////////
    const url = `http://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.docs))
}
// display result
const displaySearchResult = (books) => {
   const searchContainer = document.getElementById('search-container');
/////////handle search result quantity////// 
   const resultQuantity = document.getElementById('result-quantity');
   const p = document.createElement('p');
   p.innerText = `${books.length} results found.`
   resultQuantity.appendChild(p);

////////handle book detail///////// 
    books.forEach(book => {
        console.log(book.cover_i)
        const imgUrl = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card">
            <img src="${imgUrl}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">Author-name: ${book?.author_name}</p>
                    <p class="card-text">First-publish: ${book?.first_publish_year}</p>
                </div>
            </div>
        `
    searchContainer.appendChild(div);
    })

}    
 
