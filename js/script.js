
document.querySelector('.humburger').onclick =
    function () {
        document.querySelector('.menu').classList.toggle('menu_active');
        document.querySelector('.humburger').classList.toggle('humburger_active');
    }
