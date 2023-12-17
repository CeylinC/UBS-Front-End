// Öğrenci listeleri
        var matematikOgrenciler = ["Ayşe", "Fatma", "Öğrenci 3"];
        var fizikOgrenciler = ["Öğrenci A", "Öğrenci B", "Öğrenci C"];

        // Öğrenci listelerini bir nesne içinde saklayarak ders adına göre erişimi sağla
        var ogrenciListeleri = {
            "matematik": matematikOgrenciler,
            "fizik": fizikOgrenciler
        };

        // Seçilen dersin not bilgilerini tutan nesne
        var secilenDersNotlari = {
            "matematik": { "vize": 0, "final": 0, "proje": 0 },
            "fizik": { "vize": 0, "final": 0, "proje": 0 }
        };

        // Seçilen sınav türünü tutan değişken
        var secilenSinav;

        function dersiSec() {
            // Seçilen dersin adını al
            var selectedDers = document.getElementById("dersler").value;

            // Öğrenci listesini HTML olarak oluştur
            var ogrenciHTML = "<h4 class='text-center mb-3'>" + selectedDers.toUpperCase() + " Dersi Öğrenci Listesi</h4><ul class='pl-0'>";

            for (var i = 0; i < ogrenciListeleri[selectedDers].length; i++) {
                ogrenciHTML += "<li class='mb-3'>" + ogrenciListeleri[selectedDers][i] + ": <input type='number' class='form-control' id='" + ogrenciListeleri[selectedDers][i] + "' placeholder='Not Girin'></li>";
            }

            ogrenciHTML += "</ul>";

            // Öğrenci listesini göster
            document.getElementById("ogrenciListesi").innerHTML = ogrenciHTML;

            // Ders adını göster
            document.getElementById("dersAdi").innerText = selectedDers.toUpperCase();

            // Sınav seçim formunu göster
            document.getElementById("sinavSecimFormu").style.display = "block";
        }

        function sinavSecildi() {
            // Seçilen sınav türünü al
            secilenSinav = document.getElementById("sinavTipi").value;

            // Sınav seçim formunu gizle
            document.getElementById("sinavSecimFormu").style.display = "none";

            // Öğrenci listesini göster
            document.getElementById("ogrenciListesi").style.display = "block";
        }

        // Onayla Butonu Fonksiyonu
        function onaylaNotlar() {
            // Hata kontrolü: Not girişi yapılmış mı?
            var notlarGirildiMi = kontrolNotGirildiMi();
            if (!notlarGirildiMi) {
                alert("Lütfen tüm öğrencilerin notlarını girin.");
                return;
            }

            // Öğrenci listesini göster
            document.getElementById("ogrenciListesi").style.display = "block";

            // Not ortalamasını hesapla ve göster
            var notOrtalamasi = hesaplaNotOrtalamasi();
            alert("Not Ortalaması: " + notOrtalamasi.toFixed(2) + "\nNotlar onaylandı!");
        }

        // Hata kontrolü: Tüm öğrencilerin notları girildi mi ve notlar 0-100 arasında mı?
        function kontrolNotGirildiMi() {
            var selectedDers = document.getElementById("dersler").value;
            for (var i = 0; i < ogrenciListeleri[selectedDers].length; i++) {
                var not = parseFloat(document.getElementById(ogrenciListeleri[selectedDers][i]).value);
                if (isNaN(not) || not < 0 || not > 100) {
                    alert("Lütfen geçerli bir not girin (0 ile 100 arasında).");
                    return false;
                }
            }
            return true;
        }

        // Not ortalamasını hesapla
        function hesaplaNotOrtalamasi() {
            var selectedDers = document.getElementById("dersler").value;
            var toplamNot = 0;
            for (var i = 0; i < ogrenciListeleri[selectedDers].length; i++) {
                var not = parseFloat(document.getElementById(ogrenciListeleri[selectedDers][i]).value);
                toplamNot += not;
            }
            var notOrtalamasi = toplamNot / ogrenciListeleri[selectedDers].length;
            return notOrtalamasi;
        }

        function geriGit() {
            // Ders seçim formunu sıfırla
            document.getElementById("dersForm").reset();

            // Öğrenci listesini temizle
            document.getElementById("ogrenciListesi").innerHTML = "";

            // Sınav seçim formunu gizle
            document.getElementById("sinavSecimFormu").style.display = "none";
        }