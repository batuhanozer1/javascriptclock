function showTime(){
    var date = new Date();
    var hours = date.getHours(); //açıkla 24 saatlik sistem
    var minutes = date.getMinutes(); //açıkla 60 dakika 
    var seconds = date.getSeconds(); //açıkla 60 saniye

    var saat = document.getElementById('myClock');
    saat.innerHTML = hours+":"+  minutes + ":" + seconds;
    setTimeout(showTime, 1000); //1000 milisaniye = 1 saniye
} 

let names = prompt("Lütfen Adınızı Girin: "); // Fix: Corrected the typo in the prompt function
var Name = document.getElementById('myName'); // queryselector de # gibi id seçerken getElementById de sadece id yazıyoruz
var fullName = Name.innerHTML = `${names} `;
