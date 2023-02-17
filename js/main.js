let btn = document.querySelector(".btn");
let works = document.querySelector(".our-works");
let list = Array.from(document.querySelectorAll('.info-list > li'));


// console.log(list);
btn.onclick = function () {
    // works.classList.toggle('container');
    // if (works.className.includes = "container") {
    //     btn.textContent = "Default";
    // } else {
    //     btn.textContent = "Full Screen";
    // }

    if (works.classList.contains("container")) {
        btn.textContent = "Default";
        works.classList.remove("container");
    } else {
        btn.textContent = "Full Screen";
        works.classList.add("container");
    }
};


// lis.addEventListener("click", () => {
//     if (lis.classList.contains("selected")) {
//         lis.classList.remove('selected');
//     } else {
//         lis.classList.add('selected');
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
Array.from(document.querySelectorAll('.info-list > li'), li => li.addEventListener("click", function (event) {
    if (event.target.classList.contains('selected')) {
        li.classList.remove('selected');
        li.className.indexOf(li);
    } else {
        li.classList.add('selected');
    }
}));


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