$(function () {
    function display(bool) {
        if (bool) {
            $(".container").show();
        } else {
            $(".container").hide();
        }
    }

    function displayAlready(bool) {
        if (bool) {
            $(".container").show();
        } else {
            $(".container").hide();
        }
    }

    display(false)
    displayAlready(false)

    // if the person uses the escape key, it will exit the resource
    document.onkeyup = function (data) {
        if (data.which == 27) {
            $("#slot1Accept").prop( "checked", false );
            $("#slot2Accept").prop( "checked", false );
            $("#slot3Accept").prop( "checked", false );
            $("#slot4Accept").prop( "checked", false );
            $("#slot5Accept").prop( "checked", false );
            $(".footer").hide();
            $.post('http://agrp-voting/exit', JSON.stringify({}));
            return
        }
    };

    window.addEventListener('message', function(event) {
        var item = event.data;

        if (item.type === "ui") {
            if (item.status == true) {
                display(true)
            } else {
                display(false)
            }
        }

        if (item.type === "already") {
            if (item.status == true) {
                displayAlready(true)
            } else {
                displayAlready(false)
            }
        }
    })
})
