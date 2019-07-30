$(document).ready(function () {

    $('#loginForm').submit(function (e) {
        e.preventDefault();


        var email = $("#username").val();
        var password = $("#password").val();

        $.ajax({
            type: 'GET',
            url: "http://localhost:3000/users",
            dataType: "json",
            contentType: 'application/json',
            data: {
                format: 'json'
            },

            success: function (data) {

                if (email == "test" && password == "pass1234") {
                    alert("Login Successful");
                    window.location.assign("http://localhost:4000/admin-dashboard.html");
                } else {
                    var user = data.find(
                        element => element.email === email && element.password == password
                    );
                    if (user) {
                        let saveUser = {
                            id: user.id,
                            name: user.first_name
                        };
                        localStorage.setItem("user", JSON.stringify(saveUser));
                        alert("Login Successful");
                        window.location.assign("http://localhost:3000/all-users.html");
                    } else {
                        alert("Incorrect username or password...")
                    }
                }

            },
        })
    })
});