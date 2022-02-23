$(document).ready(function() {

    $(".sp-menu, .overlay .close").click(function() {
        $(".overlay").toggleClass("change");
        $(".sp-menu").toggleClass("change");
    });

    $('input[name="area"]').change(function() {
        var id = $(this).attr("data-id");
        if (id == "all") {
            $(".c-map-piece .item").removeClass("active");
            if ($(this).is(":checked")) {
                $('input[name="area"]').prop("checked", true);
                $(this).prop("checked", true);
                $(".c-map-piece .item").addClass("active");
            } else {
                $('input[name="area"]').prop("checked", false);
            }
        } else {
            $("." + id).toggleClass("active");
            var elms = $('input[name="area"]:checked');
            console.log(elms);
            if (elms.length == 1) {
                var elm = elms[0];
                var flag = elm.getAttribute("data-id");
                if (flag == "all")
                    $('input[name="area"][data-id="all"]').prop("checked", false);
            }
        }
    });
    $('input[name="genre"]').change(function() {
        var id = $(this).attr("data-id");
        if (id == "all") {
            if ($(this).is(":checked")) {
                $('input[name="genre"]').prop("checked", true);
            } else {
                $('input[name="genre"]').prop("checked", false);
            }
        } else {
            var elms = $('input[name="genre"]:checked');
            console.log(elms);
            if (elms.length == 1) {
                var elm = elms[0];
                var flag = elm.getAttribute("data-id");
                if (flag == "all")
                    $('input[name="genre"][data-id="all"]').prop("checked", false);
            }
        }
    });
});

function goBack() {
    window.history.back();
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}