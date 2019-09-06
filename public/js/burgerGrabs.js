$(function () {

    $("#burger_submission").on("click", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#userBurger").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("Burger added to the menu.");

                location.reload();
            }
        );
    });


})