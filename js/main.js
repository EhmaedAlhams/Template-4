let btn = document.querySelector(".btn");
let works = document.querySelector(".our-works");
// let list = Array.from(document.querySelectorAll('.info-list > li'));
let list = document.querySelector('.info-list');


btn.onclick = function () {

    if (works.classList.contains("container")) {
        btn.textContent = "Default";
        works.classList.remove("container");
    } else {
        btn.textContent = "Full Screen";
        works.classList.add("container");
    }

    // Other Solution 
    // works.classList.toggle('container');
    // if (works.className.includes = "container") {
    //     btn.textContent = "Default";
    // } else {
    //     btn.textContent = "Full Screen";
    // }
};

if (list.children.item('li')){
    // list.children.item("li").addEventListener('click', event => {collapse(event)})
    console.log(list.children.item('li'));
}

function collapse(event) {
    let current = 0;
    list.children[current].classList.remove('selected');
    current = Array.from(list.children).indexOf(event.target)
    list.children[current].classList.add('selected');
}


// let current = 0;
// list.addEventListener("click", (event) => {
//     console.log(event);
//     if (list.classList.contains("selected")) {
//         list[current].classList.remove('selected');
//     } else {
//         list[current].classList.add('selected');
//     }
//     console.log("select");
// })

// lis.onclick = () => {


//     if (lis.classList.contains("selected")) {
//         lis.classList.remove("selected");
//     } else {
//         lis.classList.add("selected");
//     }

// }



// Solution 1:
// Array.from(document.querySelectorAll('.info-list > li'), li => li.addEventListener("click", function (event) {
//     if (event.target.classList.contains('selected')) {
//         event.target.classList.remove('selected');
//     } else {
//         event.target.classList.add('selected');
//     }
//     // console.log(li.c);
// }));


// Solution 2:
// for (const li of document.querySelectorAll('.info-list > li')) {
//     li.addEventListener("click", (event) => {
//         // if (li.classList.contains('selected')) {
//         //     li.classList.remove("selected");
//         // } else {
//         //     li.classList.add('selected');
//         // }
//         // console.log(li);
//         if (event.target.classList.contains("selected")) {
//             event.target.classList.remove("selected");
//         } else {
//             event.target.classList.add('selected');
//         }
//     });
// }


// list.forEach(li => {
//     li.addEventListener("click", (list_item) => {
//         if (list_item.target.classList.contains('selected')) {
//             list_item.classList.remove('selected');
//         } else {
//             list_item.classList.add('selected');
//         }
//     });
// });


// [document.querySelector('.a-class'), document.querySelector('.another-class')].forEach(item => {
//     item.addEventListener('click', event => {
//         //handle click
//     })
// })
