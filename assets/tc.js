let sayilar = [];
let girilensayilar = Number(prompt('Kac adet sayi gireceksiniz:'));


for (let i = 0; i < girilensayilar; i++) {
    let sayi = Number(prompt(`${i + 1}. sayiyi giriniz: `));
    sayilar.push(sayi);
}

 let tekToplam = 0;  
let ciftToplam = 0;

// let tekToplam = []; 
// let ciftToplam = [];   10-11 in satırla farkı '[]' bu bir dizidir işlem yapmaz yazdıgın sayıları yan yana yazar ama 10-11 de kod satırı işlem yapar.

for (let sayi of sayilar) {
    if(sayi % 2 === 1) {
        tekToplam += sayi;
    } else { 
        ciftToplam += sayi;
    }
}

console.log('Tek sayilarin toplami: ' + tekToplam);
console.log('Cift sayilarin toplami: ' + ciftToplam);
