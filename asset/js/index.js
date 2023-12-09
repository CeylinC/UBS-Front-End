function calculateAndAppendAverages() {
    calculateAndAppendAverage("springSemesterTable");
    calculateAndAppendAverage("fallSemesterTable");
    calculateAndAppendAverage("springSemesterTable2");
    calculateAndAppendAverage("fallSemesterTable2");            
}

function calculateAndAppendAverage(tableId) {
    var table = document.getElementById(tableId);
    var rows = table.getElementsByTagName("tbody")[0].getElementsByTagName("tr");

    for (var i = 0; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName("td");
        var vize = parseFloat(cells[3].innerText);
        var final = parseFloat(cells[4].innerText);
        var proje = parseFloat(cells[5].innerText);

        if (!isNaN(vize) && !isNaN(final) && !isNaN(proje)) {
            var average = (vize + final + proje) / 3;
            cells[6].innerText = average.toFixed(2);
        }
    }
}

// Ortalamaları hesapla ve tablolara ekle
calculateAndAppendAverages();