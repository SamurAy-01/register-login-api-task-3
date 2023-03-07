function login() {

    const url = "http://143.110.166.213:4000/users/sign-in";

    var username2 = document.getElementById("username").value;
    var password2 = document.getElementById("password").value;
    
    const data = {
        username2,
        password2
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            username : username2,
            password : password2
        })
    })
    .then(response =>{
        console.log("response!", response);
        return response.json(); // response body'sini çözümler
    })
    .then((data) => {
        if (data.status === 'success') {
            alert("giriş başarılı");
            window.location.href = "../home/apiHome.html";
        } else {
            alert("yapamadın");
        }
        console.log("data : ", data);
    })
    .catch(error => console.log("error : ", error))
}











    // var username = document.getElementById("username").value;
    // var password = document.getElementById("password").value;

    // Local storage'dan kullanıcı bilgilerini al
    // var storedUsername = localStorage.getItem("username");
    // var storedPassword = localStorage.getItem("password");

    // Girilen bilgiler ile saklanan bilgileri karşılaştır
    // if (username == storedUsername && password == storedPassword) {
    //     // Eşleşiyorsa, yeni sayfaya yönlendir
    //     window.location.href = "./home.html";
    // } else {
    //     // Eşleşmiyorsa, hata mesajı göster
    //     alert("Kullanıcı adı veya şifre yanlış!");
    // }