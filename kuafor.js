function calismaSaatleriniBelirle() {
    var kuaforAdSoyad = document.getElementById("kuaforAdSoyad").value;
    var seciliGun = document.getElementById("gunSec").value;
    var baslangicSaat = document.getElementById("baslangicSaat").value;
    var bitisSaat = document.getElementById("bitisSaat").value;

    var randevu = {
        kuafor: kuaforAdSoyad,
        gun: seciliGun,
        baslangic: baslangicSaat,
        bitis: bitisSaat
    };

    // Randevuyu listeye ekle
    randevularListesi.push(randevu);

    // Çalışma saatlerini güncelle
    calismaSaatleriniGuncelle();

    var sonucMesaji = "Çalışma saatleri kaydedildi:<br>" +
                      "Gün: " + seciliGun + "<br>" +
                      "Başlangıç Saati: " + baslangicSaat + "<br>" +
                      "Bitiş Saati: " + bitisSaat;

    document.getElementById("sonuc").innerHTML = sonucMesaji;
}

function calismaSaatleriniGuncelle() {
    var kuaforAdSoyad = document.getElementById("kuaforAdSoyad").value;
    var kuaforRandevularListesi = document.getElementById("kuaforRandevular");
    kuaforRandevularListesi.innerHTML = ""; // Önceki listeyi temizle

    // Kullanıcının adına ait randevuları filtrele
    var kuaforRandevular = randevularListesi.filter(function (randevu) {
        return randevu.kuafor === kuaforAdSoyad;
    });

    // Kullanıcının adına ait randevuları listeye ekle
    kuaforRandevular.forEach(function (randevu) {
        var li = document.createElement("li");
        li.textContent = randevu.gun + " - " + randevu.baslangic + " - " + randevu.bitis;
        kuaforRandevularListesi.appendChild(li);
    });
}

var saatSecenekleri = [];
for (var i = 0; i < 24; i++) {
    var saat = (i < 10) ? "0" + i : i;
    saatSecenekleri.push(saat + ":00");
}

var baslangicSaatSelect = document.getElementById("baslangicSaat");
var bitisSaatSelect = document.getElementById("bitisSaat");

saatSecenekleri.forEach(function (saat) {
    var baslangicOption = document.createElement("option");
    baslangicOption.text = saat;
    baslangicSaatSelect.add(baslangicOption);

    var bitisOption = document.createElement("option");
    bitisOption.text = saat;
    bitisSaatSelect.add(bitisOption);
});

// Kuaförün randevularını saklamak için bir dizi
var randevularListesi = [];