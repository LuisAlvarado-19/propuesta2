let si = document.getElementById('si');
si.addEventListener("click", function (e) {
    swal('Mañana nos casamos 😂', 'Sabia que que querias ser mi Novia. ❤️')
});
let no = document.getElementById('no');
no.addEventListener("mousemove", function (e) {
    let x = Math.round(Math.random() * 80)
    let y = Math.round(Math.random() * 80)
    no.style.left = x + "%";
    no.style.top = y + "%";

});
   