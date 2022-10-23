$(document).ready(function () {
    $(document).click(
        function (event) {
            var target = $(event.target);
            var _menuOpen = $(".navbar-collapse").hasClass("show");
            if (_menuOpen === true && !target.hasClass("navbar-toggler")) {
                $("button.navbar-toggler").click();
            }
        }
    );
});