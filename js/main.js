////////search books////////
const searchBooks = () => {
    const searchField = document.getElementById('input-field');
    const searchText = searchField.value;
    
///////// clear input value//////// 
    searchField.value = '';

    
///////////loadData///////////
    const url = `https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.docs))
}
// display result
const displaySearchResult = (books) => {
   const searchContainer = document.getElementById('search-container');

/////////handle search result quantity////// 
   const resultQuantity = document.getElementById('result-quantity');

        /////clear search quantity 
   resultQuantity.textContent = '';

   const p = document.createElement('p');
   console.log(books.length)
    if(books.length === 0){
        p.innerText = `No result found. Please write valid keywords.`;
        p.style.color = 'red'; 
    }
    else{
        p.innerText = `${books.length} results found.`;
        p.style.color = 'yellow';
    }
        resultQuantity.appendChild(p);

 //////////clear search result///////
   searchContainer.textContent = '';

////////handle book detail///////// 
    books.forEach(book => {
        console.log(book.cover_i)
        const imgUrl = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
        const div = document.createElement('div');
        div.classList.add('col');

        div.innerHTML = `
            <div class="card">
            <img src="${imgUrl}" class="card-img-top w-100" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">Author: ${book?.author_name}</p>
                    <p class="card-text">First-published: ${book?.first_publish_year}</p>
                </div>
            </div>
        `
    searchContainer.appendChild(div);
    })

    
}    
 
