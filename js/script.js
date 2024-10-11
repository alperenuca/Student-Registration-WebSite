document.getElementById('bilgiForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const ad = document.getElementById('ad').value;
    const soyad = document.getElementById('soyad').value;
    const yas = parseFloat(document.getElementById('yas').value);
    const okul = document.getElementById('okul').value;
    const puan = parseFloat(document.getElementById('puan').value);
    const iban = document.getElementById('iban').value;

    if (puan > 500 || puan < 0) {
        alert(`Sayın ${ad} ${soyad}, Geçersiz Puan Girdiniz!`);
        return;
    } else if (puan < 300) {
        alert(`Üzgünüz ${ad} ${soyad}, farklı bir bölüm seçmeyi deneyin!`);
        return;
    }

    if (iban.length !== 6 || isNaN(iban)) {
        alert("İBAN numarası 6 haneli olmalı ve sayısal olmalıdır.");
        return;
    }

    document.getElementById('ekBilgiler').style.display = 'block';
});

document.getElementById('ekBilgiForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const telno = document.getElementById('telno').value;
    const anne = document.getElementById('anne').value;
    const baba = document.getElementById('baba').value;
    const adres = document.getElementById('adres').value;

    if (telno.length !== 10 || isNaN(telno)) {
        alert("Geçersiz telefon numarası. 10 haneli rakam giriniz.");
        return;
    }

    const ad = document.getElementById('ad').value;
    const soyad = document.getElementById('soyad').value;
    const yas = document.getElementById('yas').value;
    const okul = document.getElementById('okul').value;
    const puan = document.getElementById('puan').value;

    const bilgiListesi = `
        <p>Adınız: ${ad}</p>
        <p>Soyadınız: ${soyad}</p>
        <p>Yaşınız: ${yas}</p>
        <p>Liseden Mezun Olduğunuz Okul: ${okul}</p>
        <p>YKS Puanınız: ${puan}</p>
        <p>Telefon Numaranız: ${telno}</p>
        <p>Anne Adı: ${anne}</p>
        <p>Baba Adı: ${baba}</p>
        <p>Adresiniz: ${adres}</p>
    `;

    document.getElementById('bilgiListesi').innerHTML = bilgiListesi;

    // Modal'ı aç
    document.getElementById('modal').style.display = 'block';
});

const modal = document.getElementById('modal');
const span = document.getElementsByClassName('close')[0];

span.onclick = function () {
    modal.style.display = 'none';
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

document.getElementById('evetBtn').addEventListener('click', function () {
    alert("Bilgiler onaylandı. İşleminiz tamamlandı.");
    modal.style.display = 'none';
});

document.getElementById('hayirBtn').addEventListener('click', function () {
    alert("Bilgiler onaylanmadı. Lütfen tekrar deneyin.");
    modal.style.display = 'none';
});
