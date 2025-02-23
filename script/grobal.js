// // const uid = localStorage.getItem('pageId');
// // console.log(uid ?? 'No pageId found');

// document.querySelectorAll('.overlay-item').forEach(item => {
//     item.addEventListener('click', function () {
//         const pageId = this.dataset.id; // Get the data-id
//         localStorage.setItem('pageId', pageId);
//         console.log(`pageId set to: ${pageId}`);
//         alert('clicked deteced')
//     });
// });


document.querySelectorAll('.overlay-item').forEach(link => {
    link.addEventListener('click', function () {
        const id = this.dataset.id;
        alert(id)
        localStorage.setItem('pageId', id);
        console.log(id)

    });

    
});
console.log(localStorage.getItem('pageId'))