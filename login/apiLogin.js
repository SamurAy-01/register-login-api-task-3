function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Local storage'dan kullanıcı bilgilerini al
    var storedUsername = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");

    // Girilen bilgiler ile saklanan bilgileri karşılaştır
    if (username == storedUsername && password == storedPassword) {
        // Eşleşiyorsa, yeni sayfaya yönlendir
        window.location.href = "./home.html";
    } else {
        // Eşleşmiyorsa, hata mesajı göster
        alert("Kullanıcı adı veya şifre yanlış!");
    }
}