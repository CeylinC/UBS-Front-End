
function onayla() {
    var ders = document.getElementById("dersListesi").value;
    var sinavTuru = document.getElementById("sinavTuru").value;
    var sinavTarihi = document.getElementById("sinavTarihi").value;
    var aciklama = document.getElementById("aciklama").value;

    if (!ders || !sinavTuru || !sinavTarihi) {
        alert("Lütfen tüm bilgileri doldurun.");
    } else {
        alert("İşlem Onaylandı!\nDers: " + ders + "\nSınav Türü: " + sinavTuru + "\nSınav Tarihi: " + sinavTarihi + "\nAçıklama: " + aciklama);
        // İşlemi gerçekleştir, örneğin API'ye gönder.
    }
}