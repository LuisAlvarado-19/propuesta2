let si = document.getElementById('si');
si.addEventListener("click", function (e) {
    swal('Sabia que si querias ser mi Novia ❤️ aunque casi obligada 😂', 'Antes de irte has click en la 🌹')
});
let no = document.getElementById('no');
no.addEventListener("mousemove", function (e) {
    let x = Math.round(Math.random() * 80)
    let y = Math.round(Math.random() * 80)
    no.style.left = x + "%";
    no.style.top = y + "%";

});
   