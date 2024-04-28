const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const sideBar = document.querySelector('.container .left-section');
const sidebarItems = document.querySelectorAll('.container .left-section .sidebar .item');

menuOpen.addEventListener('click', () => {
    sideBar.style.top = '0';
});

menuClose.addEventListener('click', () => {
    sideBar.style.top = '-60vh';
});

let activeItem = sidebarItems[0];

sidebarItems.forEach(element => {
    element.addEventListener('click', () => {
        if (activeItem) {
            activeItem.removeAttribute('id');
        }

        element.setAttribute('id', 'active');
        activeItem = element;

    });
});

const toggler = document.getElementById('theme-toggle');

toggler.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
});
let circle = document.querySelector(".color-option");

// circle.addEventListener("click", (e)=>{
//     let target = e.target;
//     if(target.classList.contains("circle")){
//         circle.querySelector(".active").classList.remove("active");
//         target.classList.add("active");
//         document.querySelector(".main-images .active").classList.remove("active");
//         document.querySelector(`.main-images .${target.id}`).classList.add("active");
//     }
// });
$('#employee-btn').on('click', function () {
    console.log('clicked');

    console.log($('.analytics, .planning, .bottom-data'));
    $('.analytics, .planning, .bottom-data').css("display" , "none");
});



// $('#dashboard').css('display','block');
// $('#employee-form').css('display','none');

// $('.sidebar>a').eq(0).on('click', () => {
//     // $('#dashboard').css('display','block');
//     $('#employee-form').css('display','none');

// })


// $('.sidebar>a').eq(2).on('click', () => {
//     $('#dashboard').css('display','none');
//     $('#employee-form').css('display','block');
//
// })
// $('.sidebar>a').eq(3).on('click', () => {
//     $('#dashboard').css('display','none');
//     $('#employee-form').css('display','none');
//
// })