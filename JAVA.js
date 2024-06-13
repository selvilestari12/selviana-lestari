// Data rapor
var dataRapor = [
    { no: 1, mataPelajaran: "Agama", nilai: 95},
    { no: 2, mataPelajaran: "Bahasa Indonesia", nilai: 90},
    { no: 3, mataPelajaran: "Bahasa Inggris", nilai: 89},
    { no: 4, mataPelajaran: "PKN", nilai: 98},
    { no: 5, mataPelajaran: "MTK", nilai: 85},
    { no: 6, mataPelajaran: "TLJ", nilai: 98},
    { no: 7, mataPelajaran: "ASJ", nilai: 90},
    { no: 8, mataPelajaran: "AIJ", nilai: 89},
    { no: 9, mataPelajaran: "WAN", nilai: 98},
    { no: 10, mataPelajaran: "PJOK", nilai: 85},
    
];
n
// Fungsi untuk mengisi tabel rapor
function isiTabelRapor() {
    var table = document.getElementById("raportTable").getElementsByTagName('tbody')[0];
    dataRapor.forEach(function(item) {
        var newRow = table.insertRow(table.rows.length);
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        cell1.innerHTML = item.no;
        cell2.innerHTML = item.mataPelajaran;
        cell3.innerHTML = item.nilai;
    });
}

// Panggil fungsi untuk mengisi tabel rapor saat halaman dimuat
window.onload = function() {
    isiTabelRapor();
};
