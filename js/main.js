let btn = document.querySelector(".btn");
let works = document.querySelector(".our-works");
let tabsArr = Array.from(document.querySelectorAll('.info-list > li'));
let contentArr = Array.from(document.querySelectorAll('.info-content > div'));


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

// REVIEW: here some feature.. need to review.

tabsArr.forEach((tab) => {
    tab.addEventListener("click", (element) => {

        // first step 
        tabsArr.forEach((element) => {
            element.classList.remove('selected');
        });

        //second step
        element.currentTarget.classList.add('selected');

        //third step
        contentArr.forEach((div) => {
            div.style.display = "none";
        })

        document.querySelector(element.currentTarget.dataset.content).style.display = "block";
    })
})


// FIXME: Solution right now.
// function collapse() {
//     let current = 0;
//     list.addEventListener("click", (event) => {
//         list.children[current].classList.remove('selected');
//         current = Array.from(list.children).indexOf(event.target)
//         list.children[current].classList.add('selected');
//     });
// }

// collapse();

// ========================


// let list = document.querySelector('.info-list');

// list.forEach((element) => {
//     element.addEventListener("click", event => {
//         console.log(element);
//         console.log(event);
//     })
// })
// console.log(list[1]);


// function collapse() {
//     // let current = 0;
//     // // list.addEventListener("click", (event) => {

//     // // });
//     // list.children[current].addEventListener("click", event => {

//     //     list.children[current].classList.remove('selected');
//     //     current = Array.from(list.children).indexOf(event.target)
//     //     list.children[current].classList.add('selected');
//     // });

// }
// list.childNodes.item('li').addEventListener("click", event => collapse(event));

// collapse();

// current = 1;
// list.children[current].addEventListener("click", event => {

//     console.log(Array.from(list.children).indexOf(event.currentTarget));

//     list.children[current].classList.remove('selected');
//     current = Array.from(list.children).indexOf(event.target);
//     console.log(Array.from(list.children).indexOf(event.target));

//     list.children[current].classList.add('selected');
//     console.log(Array.from(list.children).indexOf(event.target));

// });


// const tabs = document.querySelectorAll(".info-list > li");
// // console.log(tabs);
// for (const tab of tabs) {
//     let current = 0;
//     tab.addEventListener("click", (event) => {


//         if (tab.matches(".selected")) {
//             console.log("select matches");
//             // tab.children[current].classList.remove('selected');
//             tab.classList.remove('selected');
//         } else {
//             console.log("select ");
//             tab.classList.add('selected');
//         }
//         // current = Array.from(tab.children).indexOf(event.target);
//         // tab.children[current].classList.add('selected');
//     });
//     // console.log(tab);
// }


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



// SECTION: Solution 1:
// Array.from(document.querySelectorAll('.info-list > li'), li => li.addEventListener("click", function (event) {
//     console.log(li);
//     if (li.matches('.selected')) {
//         // for (let i = 0; i < li.childElementCount; i++){
//             // }
//             // li.classList.remove('selected');
//         event.currentTarget.classList.remove('selected');
//     } else {
//         // event.target.classList.add('selected');
//         // li.classList.add('selected');
//         event.currentTarget.classList.add('selected');
//     }
//     // console.log(li.c);
// }));

// SECTION: Solution 2:
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