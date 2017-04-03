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
var create = document.getElementById('create');
var change = document.getElementById('change');
window.onclick = function (event) {
    var body = document.body;
    if (event.target === modal) {
        modal.style.display = "none";
    }
    if (event.target === filter) {
        filter.style.display = "none";
        filter.classList.toggle('animate-div', false);
    }
    if (event.target === view) {
        view.style.display = "none";
        body.classList.toggle('no-scroll', false);
    }
    if (event.target === create) {
        create.style.display = "none";
        body.classList.toggle('no-scroll', false);

    }
    if (event.target === change) {
        change.style.display = "none";
        body.classList.toggle('no-scroll', false);

    }
};