//! Kitab (Book):
// Bu sinif hər bir kitabı təmsil edir və aşağıdakı xüsusiyyətləri olacaq:
//? ad (kitabın adı)
//? muellif (kitabın müəllifi)
//? movcuddur (kitab mövcuddurmu? - boolean dəyəri)

class Book {

    movcuddur = true

    constructor(ad, muellif) {
        this.ad = ad;
        this.muellif = muellif;

    }
    getDetail() {
        return `Kitabın adı: ${this.ad}, Müəllifi: ${this.muellif}, Mövcuddur: ${this.movcuddur}`
    }
}


//! Kitabxana (Library):
// Bu sinif kitabxananı təmsil edir və aşağıdakı xüsusiyyətləri və metodları olacaq:
// Xüsusiyyətlər:
//? kitablar (kitabxanada olan kitabların siyahısı)
// Metodlar:
//TODO kitabElaveEt(kitab): Yeni kitab əlavə edir.
//TODO kitabSil(ad): Kitabı adına görə kitabxanadan silir.
//TODO kitabVer(ad): Kitabı adına görə ödünc verir və movcuddur dəyərini false edir.
//TODO kitabQaytar(ad): Kitabı adına görə geri qaytarır və movcuddur dəyərini true edir.
//TODO muellifeGoreAxtar(muellif): Müəllifin adına görə kitabları axtarır.



class Library extends Book {
    constructor() {
        super();
        this.kitablar = []

    }



    getLibraryDetail() {
        super.getDetail()
    }

    kitabElaveEt(kitab) {
        this.kitablar.push(kitab);
        console.log(`Kitabxanaya "${kitab.ad}" kitabı əlavə edildi, xoş mütaliələr! Ümumi kitab sayı:${this.kitablar.length}`);
    }

    kitabSil(ad) {
        this.kitablar = this.kitablar.filter(kitab => kitab.ad !== ad);
    }

    kitabVer(ad) {
        const kitab = this.kitablar.find(kitab => kitab.ad == ad);
        if (kitab) {
            kitab.movcuddur = false
            console.log(`${ad} kitabı ödünc verildi, kitabın mövcudluğu: ${kitab.movcuddur} `);
        }
    }

    kitabQaytar(ad) {
        const kitab = this.kitablar.find(kitab => kitab.ad == ad);
        if (kitab) {
            kitab.movcuddur = true
        }
        console.log(`${ad} kitabı qaytarıldı, kitabın mövcudluğu: ${kitab.movcuddur} `);

    }

    muellifeGoreAxtar(muellif) {
        return this.kitablar.filter(kitab => kitab.muellif == muellif)

    }
    movcudKitablariGoster() {
        let movcudKitablar = this.kitablar.filter(kitab => kitab.movcuddur == true)
        console.log(`Kitabxanada mövcud olan kitablar: `, movcudKitablar);

    }

    kitablariSirala() {
        this.kitablar.sort((a, b) => a.ad.localeCompare(b.ad))
        console.log(`Kitablar sıralandı: `, this.kitablar);
    }
}

//! 2. İstifadə Nümunəsi:
// Kitabxana sinifindən bir nümunə yaradın. //? sətir 101
// Bu kitabxanaya bir neçə kitab əlavə edin. //? sətir 113-121
// Bir neçə kitabı ödünc alın (oxumaq ucun goturun) və onların mövcudluğunu yoxlayın. //? sətir 127-130
// Kitabları geri qaytarın və yenidən mövcudluğunu yoxlayın. //? sətir 132-136
// Müəllifə görə kitab axtarın və nəticəni göstərin. //? sətir 145
//! 3. Əlavə Tapşırıq (İstəyə bağlı):
// Kitabları mövcud olub-olmamasına görə siyahılayan movcudKitablariGoster() metodu yaradın. //? sətir 139
// Kitabları adına görə sıraya salan (kitablariSirala()) funksiya əlavə edin. //? sətir 142
// Yuxarıda qeyd olunan tələblərə uyğun olaraq layihəni həyata keçirin və nəticəni test edin

const kitabxana = new Library();
const kitab1 = new Book("Hərb və Sülh", "Lev Tolstoy");
const kitab2 = new Book("Kürk Mantolu Madonna", "Sabahattin Ali");
const kitab3 = new Book("1984", "Corc Oruel");
const kitab4 = new Book("Xoşbəxtlik Axtarışında", "Chris Gardner");
const kitab5 = new Book("Qəribə Dahi", "Eleanor Oliphant");
const kitab6 = new Book("Anna Karenina", "Lev Tolstoy");
const kitab7 = new Book(" Değirmen", "Sabahattin Ali");
const kitab8 = new Book("İçimizdeki Şeytan", "Sabahattin Ali");
const kitab9 = new Book("Kuyucaklı Yusuf", "Sabahattin Ali");

console.error("Yeni əlavə edilmiş kitablar:")
kitabxana.kitabElaveEt(kitab1);
kitabxana.kitabElaveEt(kitab2);
kitabxana.kitabElaveEt(kitab3);
kitabxana.kitabElaveEt(kitab4);
kitabxana.kitabElaveEt(kitab5);
kitabxana.kitabElaveEt(kitab6);
kitabxana.kitabElaveEt(kitab7);
kitabxana.kitabElaveEt(kitab8);
kitabxana.kitabElaveEt(kitab9);

console.error("Bütün kitablar:")
console.log("Bütün Kitablar:", kitabxana.kitablar);

console.error("Ödünc verilən kitablar:")
kitabxana.kitabVer("1984");
kitabxana.kitabVer("Qəribə Dahi")
kitabxana.kitabVer("Anna Karenina")
kitabxana.kitabVer("Hərb və Sülh")

console.error("Qaytarılan kitablar:")
kitabxana.kitabQaytar("Qəribə Dahi")
kitabxana.kitabQaytar("Hərb və Sülh")
//! Aşağıdakı sətri açıb-bağlayanda console.log da mövcud kitabların sayı dəyişir!
// kitabxana.kitabQaytar("1984");   

console.error("Mövcud olan kitablar:")
kitabxana.movcudKitablariGoster()

console.error("Əlifba sırasına görə kitablar:")
kitabxana.kitablariSirala()

console.error("Müəllifin kitabları:")
console.log("Sabahattin Ali'nin kitabları:", kitabxana.muellifeGoreAxtar("Sabahattin Ali"));