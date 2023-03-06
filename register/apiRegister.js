function register() {
    console.log("registerin başı");
    const url = 'http://143.110.166.213:4000/users/sign-up'; // API'nin URL'si

    var username1 = document.getElementById("username").value;
    var email1 = document.getElementById("email").value;
    var password1 = document.getElementById("password").value;

    const data = {
        username1,
        email1,
        password1
    };

    fetch (url, {
        method: 'POST',
        headers: {
            "Content-type": "application/json; charset = UTF-8"
        },
        body: JSON.stringify({
            username : username1,
            email : email1,
            password : password1
        }),
    })
    .then(response => {
        if (response.status = "success") {
            
            console.log("ifin içi");
            // window.location.href = "../login/apiLogin.html";
        }else{
            alert("eksik veya hatalı yazım!!")
        }
        console.log("RESPONSE!",response);
    })
    
    // .then(response => console.log(response))
    .then((data) => console.log("datayı logluyom", data))
    .catch(error => console.log("erroru logluyorum : ", error));
    
}

   






































// Email ve Telefon doğrulama
    // var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // var phoneRegex = /^[0-9]{10}$/;

    // if (username.trim() === '' ) {
    //     alert("kullanıcı adı girin!");
    //     return;
    // }
    // if (!emailRegex.test(email)) {
    //     alert("hatalı email!");
    //     return;
    // }
    // if (!phoneRegex.test(phone)) {
    //     alert("hatalı numara");
    //     return;
    // }
    // if (password.trim() === '' ) {
    //     alert("şifre girin!");
    //     return;
    // }
    
    // Kullanıcı bilgilerini local storage'a kaydet
    // localStorage.setItem("username", username);
    // localStorage.setItem("password", password);

    // Giriş sayfasına yönlendir
    // window.location.href = "apiLogin.html";
    

