let nilai = {
    pkn: 60,
    indo: 80,
    mtk: 76,
    ipa: 83,
};

function rataRata(nilai) {
    const { pkn, indo, mtk, ipa } = nilai;
    let hasil = (pkn + indo + mtk + ipa) / 4;
    console.log("PKN :", pkn);
    console.log("Indo :", indo);
    console.log("MTK :", mtk);
    console.log("IPA :", ipa);
    console.log("Rata-rata :", hasil);
}

rataRata(nilai);