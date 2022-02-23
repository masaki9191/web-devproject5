$(document).ready(function() {
    $("#contact_submit").click(function() {
        var flag = false;
        var name_first = $("#name_first");
        var name_last = $("#name_last");
        var furi_first = $("#furi_first");
        var furi_last = $("#furi_last");
        var email = $("#email");
        var phone1 = $("#phone1");
        var phone2 = $("#phone2");
        var phone3 = $("#phone3");
        var message = $("#message");

        if (name_first.val() == "" && name_last.val() == "") {
            name_first.closest(".form-group").addClass("is-invalid");
            console.log(name_first.closest(".form-group"));
            flag = true;
        } else {
            name_first.closest(".form-group").removeClass("is-invalid");
        }

        if (furi_first.val() == "" && furi_last.val() == "") {
            furi_first.closest(".form-group").addClass("is-invalid");
            flag = true;
        } else {
            furi_first.closest(".form-group").removeClass("is-invalid");
        }


        if (email.val() == "") {
            email.closest(".form-group").addClass("is-invalid");
            flag = true;
        } else {
            email.closest(".form-group").removeClass("is-invalid");
        }

        if (phone1.val() == "" && phone2.val() == "" && phone3.val() == "") {
            phone1.closest(".form-group").addClass("is-invalid");
            flag = true;
        } else {
            phone1.closest(".form-group").removeClass("is-invalid");
        }

        if (message.val() == "") {
            message.closest(".form-group").addClass("is-invalid");
            flag = true;
        } else {
            message.closest(".form-group").removeClass("is-invalid");
        }


        if (flag) {
            return false;
        } else {
            return true;
        }
    });
});