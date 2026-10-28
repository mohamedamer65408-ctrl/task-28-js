
window.addEventListener("scroll", function () {

    let scrolvalue = window.scrollY;

    var navbar = document.querySelector(".navbar");

    if (scrolvalue > 300) {

        navbar.classList.remove("bg-body-tertiary")
        navbar.classList.add("bg-primary")

    }
    if (scrolvalue < 300) {

        navbar.classList.remove("bg-primary")
        navbar.classList.add("bg-body-tertiary")

    }

}
)


function mytime() {
    let time = new Date;

    document.getElementById("demo").innerHTML = time;
}

function data() {
    alert("hallow")
}

// document.getElementById("show_alert").addEventListener("click", function () {

//     Swal.fire({
//         title: "Good job!",
//         text: "You clicked the button!",
//         icon: "success"
//     });
// })

let mohamed;

document.querySelector("#start_alert").addEventListener("click", function () {

    mohamed = setTimeout(function () {
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
        });
    }, 2000)

})

document.querySelector("#stop_alert").addEventListener("click",function(){
    clearTimeout(mohamed)
})





