const htmlSelectors = {
    'loadBooks': () => document.getElementById('loadBooks'),
    'createBtn': () => document.querySelector('#create-form > button'),
    'createTitleInput': () => document.getElementById('create-title'),
    'createAuthorInput': () => document.getElementById('create-author'),
    'booksContainer': () => document.querySelector('table > tbody'),
    'errorContainer': () => document.getElementById('error-notification'),
    'editForm': () => document.getElementById('edit-form'),
    'editBtn': () => document.querySelector('#edit-form > button'),
    'editTitleInput': () => document.getElementById('edit-title'),
    'editAuthorInput': () => document.getElementById('edit-author'),
    'deleteForm': () => document.getElementById('delete-form'),
    'deleteBtn': () => document.querySelector('#delete-form > button'),
    'deleteTitleInput': () => document.getElementById('delete-title'),
    'deleteAuthorInput': () => document.getElementById('delete-author'),
}

htmlSelectors['loadBooks']()
    .addEventListener('click', fetchAllBooks);

htmlSelectors['createBtn']()
    .addEventListener('click', createBook);

htmlSelectors['editBtn']()
    .addEventListener('click', editBook);

htmlSelectors['deleteBtn']()
    .addEventListener('click', deleteBook);


function fetchAllBooks() {
    fetch('https://book-library-7a63f-default-rtdb.firebaseio.com/Books/.json')
        .then(res => res.json())
        .then(renderBooks)
        .catch(handleError);
}

function createBook(event) {
    event.preventDefault();
    const titleInput = htmlSelectors['createTitleInput']();
    const authorInput = htmlSelectors['createAuthorInput']();

    if (titleInput.value !== '' && authorInput !== '') {
        const initObj = {
            method: 'POST',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: titleInput.value, author: authorInput.value }),
        }

        fetch('https://book-library-7a63f-default-rtdb.firebaseio.com/Books/.json', initObj)
            .then(fetchAllBooks)
            .catch(handleError);

        titleInput.value = '';
        authorInput.value = '';

    } else {
        const error = { message: '' };
        if (titleInput.value === '') {
            error.message += 'Title must not be empty!';
        }
        if (authorInput.value === '') {
            error.message += 'Author must not be empty!';
        }
        handleError(error);
        //when you have time add this error to show on input field
    }
}

function renderBooks(booksData) {
    const booksContainer = htmlSelectors['booksContainer']()
    if (booksContainer.innerHTML !== '') {
        booksContainer.innerHTML = ''
    }
    Object
        .keys(booksData)
        .forEach(bookId => {
            const { title, author } = booksData[bookId];

            const tableRow = createDOMElement('tr', '', {}, {},
                createDOMElement('td', title, {}, {}),
                createDOMElement('td', author, {}, {}),
                createDOMElement('td', '', {}, {},
                    createDOMElement('button', 'Edit', { 'data-key': bookId }, { click: loadEditBook }),
                    createDOMElement('button', 'Delete', { 'data-key': bookId }, { click: loadDeleteBook })));

            booksContainer.appendChild(tableRow);

        })
}


function loadDeleteBook() {
    const id = this.getAttribute('data-key');
    fetch(`https://book-library-7a63f-default-rtdb.firebaseio.com/Books/${id}.json`)
        .then((res) => res.json())
        .then(({ title, author }) => {
            htmlSelectors['deleteTitleInput']().value = title;
            htmlSelectors['deleteAuthorInput']().value = author;
            htmlSelectors['deleteForm']().style.display = 'block';
            htmlSelectors['deleteBtn']().setAttribute('data-key', id);
        })

        .catch(handleError)
}

function deleteBook(event) {
    event.preventDefault();
    const titleInput = htmlSelectors['deleteTitleInput']();
    const authorInput = htmlSelectors['deleteAuthorInput']();

    if (titleInput.value !== '' && authorInput !== '') {
        const id = this.getAttribute('data-key');
        const initObj = {
            method: 'DELETE'
        }

        fetch(`https://book-library-7a63f-default-rtdb.firebaseio.com/Books/${id}.json`, initObj)
            .then(() => {
                htmlSelectors['deleteForm']().style.display = 'none';
                fetchAllBooks()
            })
            .catch(handleError);


    } else {
        const error = { message: '' };
        if (titleInput.value === '') {
            error.message += 'Title must not be empty!';
        }
        if (authorInput.value === '') {
            error.message += 'Author must not be empty!';
        }
        handleError(error);
        //when you have time add this error to show on input field
    }
}


function loadEditBook() {
    const id = this.getAttribute('data-key');
    fetch(`https://book-library-7a63f-default-rtdb.firebaseio.com/Books/${id}.json`)
        .then((res) => res.json())
        .then(({ title, author }) => {
            htmlSelectors['editTitleInput']().value = title;
            htmlSelectors['editAuthorInput']().value = author;
            htmlSelectors['editForm']().style.display = 'block';
            htmlSelectors['editBtn']().setAttribute('data-key', id);
        })

        .catch(handleError)
}

function editBook(event) {
    event.preventDefault();
    const titleInput = htmlSelectors['editTitleInput']();
    const authorInput = htmlSelectors['editAuthorInput']();

    if (titleInput.value !== '' && authorInput !== '') {
        const id = this.getAttribute('data-key');
        const initObj = {
            method: 'PATCH',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: titleInput.value, author: authorInput.value }),
        }
        htmlSelectors['editForm']().style.display = 'none';
        fetch(`https://book-library-7a63f-default-rtdb.firebaseio.com/Books/${id}.json`, initObj)
            .then(fetchAllBooks)
            .catch(handleError);


    } else {
        const error = { message: '' };
        if (titleInput.value === '') {
            error.message += 'Title must not be empty!';
        }
        if (authorInput.value === '') {
            error.message += 'Author must not be empty!';
        }
        handleError(error);
        //when you have time add this error to show on input field
    }
}

function handleError(err) {
    const errorContainer = htmlSelectors['errorContainer']();
    errorContainer.style.display = 'block';
    errorContainer.textContent = err.message;
    setTimeout(() => {
        errorContainer.style.display = 'none';
    }, 3000)
}

function createDOMElement(type, text, attributes, events, ...children) {
    const domElement = document.createElement(type);

    if (text !== '') {
        domElement.textContent = text;
    }
    Object.entries(attributes)
        .forEach(([attKey, attValue]) => {
            domElement.setAttribute(attKey, attValue)
        });
    Object.entries(events)
        .forEach(([eventName, eventHandler]) => {
            domElement.addEventListener(eventName, eventHandler);
        });

    domElement.append(...children);
    // longer way for the above row is below:

    // children.forEach((child) => {
    //     domElement.appendChild(child);
    // })

    return domElement;

}