let btn = document.querySelector(".btn");
let works = document.querySelector(".our-works");
let lis = Array.from(document.querySelectorAll('.info-list > li'));

// console.log(lis);
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
// Array.from(document.querySelectorAll('.info-list > li'), li => li.addEventListener("click", () => {
//     if (li.classList.contains('selected')) {
//         li.classList.remove('selected');
//     } else {
//         li.classList.add('selected');
//     }
// }));


for (const li of document.querySelectorAll('.info-list > li')) {
    li.addEventListener("click", () => {
        if (li.classList.contains('.selected')) {
            li.classList.add(".selected");
        } else {
            li.classList.remove('.selected');
        }
    });
}
