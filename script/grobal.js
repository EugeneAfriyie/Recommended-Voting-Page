// // const uid = localStorage.getItem('pageId');
// // console.log(uid ?? 'No pageId found');




document.querySelectorAll('.overlay-item').forEach(link => {
    link.addEventListener('click', function () {
        const id = this.dataset.id;
        // alert(id)
        localStorage.setItem('pageId', id);

    });

    
});
console.log(localStorage.getItem('pageId'))