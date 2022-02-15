// function showImage() {
//     const button = document.querySelector('[data-gallery-button]')
//     const wrapper = button.closest("[data-gallery-container]");


//     button.addEventListener("click", function() {
//             if (wrapper.classList.contains("open")) {
//                 wrapper.classList.remove("open");
//             } 
//             else {
//                 wrapper.classList.add("open");    
//             }
//         })
//     );
// }

// showImage();



// const button = document.querySelector(['data-gallery-button'])
// const wrapper = button.closest("[data-gallery-container]")
//     let currentItems = 3;
//     button.addEventListener('click', (e) => {
//         const elementList = [...document.querySelectorAll('.gallery-container .gallery-item')];
//         for (let i = currentItems; i < currentItems + 3; i++) {
//             if (elementList[i]) {
//                 elementList[i].style.display = 'block';
//             }
//         }
//         currentItems += 3;    
        
//         if (currentItems >= elementList.length) {
//             event.target.style.display = 'none';
//         }        
//     })
    


// const loadmore = document.querySelector('#loadmore');
//     let currentItems = 2;
//     loadmore.addEventListener('click', (e) => {
//         const elementList = [...document.querySelectorAll('.list .list-element')];
//         for (let i = currentItems; i < currentItems + 2; i++) {
//             if (elementList[i]) {
//                 elementList[i].style.display = 'block';
//             }
//         }
//         currentItems += 2;

//         // Load more button will be hidden after list fully loaded
//         if (currentItems >= elementList.length) {
//             event.target.style.display = 'none';
//         }
//     })

const galeries = document.querySelectorAll("[data-gallery-container]");

galeries.forEach(galery => {
    const button = galery.querySelector("[data-gallery-button]");

    button.addEventListener("click", function() {
        const closestParent = button.closest("[data-gallery-container]");

        closestParent.classList.add("open");
    });
});