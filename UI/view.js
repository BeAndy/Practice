function filterShow() {
    var div = document.querySelector('.cd-filter');
    div.style.display = 'block';
}

document.querySelector('.button-add').addEventListener("click", function () {
    var view = document.getElementById('view"');
    var body = document.body;
    body.classList.toggle('no-scroll', true);
});

var modal = document.getElementById('login-template');
var filter = document.getElementById('filter');
var view = document.getElementById('view');
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
    if (event.target === filter) {
        filter.style.display = "none";
    }
    if (event.target === view) {
        view.style.display = "none";
        var body = document.body;
        body.classList.toggle('no-scroll', false);
    }
};