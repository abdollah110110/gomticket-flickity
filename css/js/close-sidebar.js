var myCollapsibleNavbar = document.getElementById('collapsibleNavbar');
var collapseBtn = document.getElementById('my-collapse-btn');
var mjModalForCollapse = document.getElementById('mj-modal-for-collapse');
window.onclick = function (event) {
    if (event.target == mjModalForCollapse) {
        myCollapsibleNavbar.style.right = '-250px';
        mjModalForCollapse.style.display = 'none';
    }
}