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

    $(".eatThis").on("click", function(event){
        event.preventDefault();

        var id = $(this).data("id");

        var eatBurger = {
            devoured: true
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: eatBurger
        }).then(
            function(){
                console.log("You ate the burger.");
                location.reload();
            }
        );
    });

    $(".deleteThis").on("click", function(event){
        event.preventDefault();

        var id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(function(){
            console.log("The burger has been deleted.");
            location.reload();
        })
    })


});