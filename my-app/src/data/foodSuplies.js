const foodSuplies = [
    {
        "name": "Domates",
        "type": "Sebze"
    },
    {
        "name": "Soğan",
        "type": "Sebze"
    },
    {
        "name": "Sarımsak",
        "type": "Sebze"
    },
    {
        "name": "Zeytinyağı",
        "type": "Yağ"
    },
    {
        "name": "Tuz",
        "type": "Baharat"
    },
    {
        "name": "Karabiber",
        "type": "Baharat"
    },
    {
        "name": "Tavuk",
        "type": "Et"
    },
    {
        "name": "Biftek",
        "type": "Et"
    },
    {
        "name": "Balık",
        "type": "Deniz Ürünü"
    },
    {
        "name": "Pirinç",
        "type": "Tahıl"
    },
    {
        "name": "Makarna",
        "type": "Tahıl"
    },
    {
        "name": "Patates",
        "type": "Sebze"
    },
    {
        "name": "Biber",
        "type": "Sebze"
    },
    {
        "name": "Havuç",
        "type": "Sebze"
    },
    {
        "name": "Salatalık",
        "type": "Sebze"
    },
    {
        "name": "Yoğurt",
        "type": "Süt Ürünü"
    },
    {
        "name": "Peynir",
        "type": "Süt Ürünü"
    },
    {
        "name": "Yumurta",
        "type": "Süt Ürünü"
    },
    {
        "name": "Un",
        "type": "Tahıl"
    },
    {
        "name": "Tereyağı",
        "type": "Süt Ürünü"
    },
    {
        "name": "Maydanoz",
        "type": "Yeşillik"
    },
    {
        "name": "Nane",
        "type": "Yeşillik"
    },
    {
        "name": "Biberiye",
        "type": "Baharat"
    },
    {
        "name": "Kekik",
        "type": "Baharat"
    },
    {
        "name": "Limon",
        "type": "Meyve"
    },
    {
        "name": "Soya Sosu",
        "type": "Sos"
    },
    {
        "name": "Zencefil",
        "type": "Baharat"
    },
    {
        "name": "Tarçın",
        "type": "Baharat"
    },
    {
        "name": "Süt",
        "type": "Süt Ürünü"
    },
    {
        "name": "Sirke",
        "type": "Sos"
    },
    {
        "name": "Bal",
        "type": "Tatlandırıcı"
    },
    {
        "name": "Şeker",
        "type": "Tatlandırıcı"
    },
    {
        "name": "Mantar",
        "type": "Sebze"
    },
    {
        "name": "Lahana",
        "type": "Sebze"
    },
    {
        "name": "Zeytin",
        "type": "Meyve"
    },
    {
        "name": "Fesleğen",
        "type": "Baharat"
    },
    {
        "name": "Kırmızı Biber",
        "type": "Sebze"
    },
    {
        "name": "Yeşil Biber",
        "type": "Sebze"
    },
    {
        "name": "Brokoli",
        "type": "Sebze"
    },
    {
        "name": "Karnabahar",
        "type": "Sebze"
    },
    {
        "name": "Ispanak",
        "type": "Yeşillik"
    },
    {
        "name": "Roka",
        "type": "Yeşillik"
    },
    {
        "name": "Marul",
        "type": "Yeşillik"
    },
    {
        "name": "Kereviz",
        "type": "Sebze"
    },
    {
        "name": "Enginar",
        "type": "Sebze"
    },
    {
        "name": "Kabak",
        "type": "Sebze"
    },
    {
        "name": "Mısır",
        "type": "Sebze"
    },
    {
        "name": "Bezelye",
        "type": "Sebze"
    },
    {
        "name": "Fasulye",
        "type": "Sebze"
    },
    {
        "name": "Nohut",
        "type": "Bakliyat"
    },
    {
        "name": "Mercimek",
        "type": "Bakliyat"
    },
    {
        "name": "Barbunya",
        "type": "Bakliyat"
    },
    {
        "name": "Bulgur",
        "type": "Tahıl"
    },
    {
        "name": "Ceviz",
        "type": "Kuruyemiş"
    },
    {
        "name": "Badem",
        "type": "Kuruyemiş"
    },
    {
        "name": "Fındık",
        "type": "Kuruyemiş"
    },
    {
        "name": "Kaju",
        "type": "Kuruyemiş"
    },
    {
        "name": "Kurutulmuş Üzüm",
        "type": "Kuru Meyve"
    },
    {
        "name": "Kuru Kayısı",
        "type": "Kuru Meyve"
    },
    {
        "name": "Kuru Erik",
        "type": "Kuru Meyve"
    },
    {
        "name": "Hurma",
        "type": "Kuru Meyve"
    },
    {
        "name": "Avokado",
        "type": "Meyve"
    },
    {
        "name": "Ananas",
        "type": "Meyve"
    },
    {
        "name": "Elma",
        "type": "Meyve"
    },
    {
        "name": "Armut",
        "type": "Meyve"
    },
    {
        "name": "Muz",
        "type": "Meyve"
    },
    {
        "name": "Portakal",
        "type": "Meyve"
    },
    {
        "name": "Mandalina",
        "type": "Meyve"
    },
    {
        "name": "Lime",
        "type": "Meyve"
    },
    {
        "name": "Nar",
        "type": "Meyve"
    },
    {
        "name": "Çilek",
        "type": "Meyve"
    },
    {
        "name": "Böğürtlen",
        "type": "Meyve"
    },
    {
        "name": "Yaban Mersini",
        "type": "Meyve"
    },
    {
        "name": "Ahududu",
        "type": "Meyve"
    },
    {
        "name": "Şeftali",
        "type": "Meyve"
    },
    {
        "name": "Kayısı",
        "type": "Meyve"
    },
    {
        "name": "Kivi",
        "type": "Meyve"
    },
    {
        "name": "Mango",
        "type": "Meyve"
    },
    {
        "name": "Papaya",
        "type": "Meyve"
    },
    {
        "name": "Hindistancevizi",
        "type": "Meyve"
    },
    {
        "name": "Çikolata",
        "type": "Tatlandırıcı"
    },
    {
        "name": "Vanilya",
        "type": "Baharat"
    },
    {
        "name": "Kakao",
        "type": "Tatlandırıcı"
    },
    {
        "name": "Kahve",
        "type": "İçecek"
    },
    {
        "name": "Çay",
        "type": "İçecek"
    },
    {
        "name": "Şarap",
        "type": "İçecek"
    },
    {
        "name": "Bira",
        "type": "İçecek"
    },
    {
        "name": "Maden Suyu",
        "type": "İçecek"
    },
    {
        "name": "Portakal Suyu",
        "type": "İçecek"
    },
    {
        "name": "Elma Suyu",
        "type": "İçecek"
    },
    {
        "name": "Üzüm Suyu",
        "type": "İçecek"
    },
    {
        "name": "Beyaz Peynir",
        "type": "Süt Ürünü"
    },
    {
        "name": "Kaşar Peyniri",
        "type": "Süt Ürünü"
    },
    {
        "name": "Mozzarella",
        "type": "Süt Ürünü"
    },
    {
        "name": "Parmesan",
        "type": "Süt Ürünü"
    },
    {
        "name": "Feta Peyniri",
        "type": "Süt Ürünü"
    },
    {
        "name": "Cheddar",
        "type": "Süt Ürünü"
    },
    {
        "name": "Gouda",
        "type": "Süt Ürünü"
    },
    {
        "name": "Brie",
        "type": "Süt Ürünü"
    },
    {
        "name": "Camembert",
        "type": "Süt Ürünü"
    },
    {
        "name": "Ricotta",
        "type": "Süt Ürünü"
    },
    {
        "name": "Mascarpone",
        "type": "Süt Ürünü"
    },
    {
        "name": "Mavi Peynir",
        "type": "Süt Ürünü"
    },
    {
        "name": "Krem Peynir",
        "type": "Süt Ürünü"
    },
    {
        "name": "Labne",
        "type": "Süt Ürünü"
    },
    {
        "name": "Süzme Yoğurt",
        "type": "Süt Ürünü"
    },
    {
        "name": "Kaymak",
        "type": "Süt Ürünü"
    },
    {
        "name": "Krema",
        "type": "Süt Ürünü"
    },
    {
        "name": "Balzamik Sirke",
        "type": "Sos"
    },
    {
        "name": "Elma Sirkesi",
        "type": "Sos"
    },
    {
        "name": "Beyaz Sirke",
        "type": "Sos"
    },
    {
        "name": "Hardal",
        "type": "Sos"
    },
    {
        "name": "Ketçap",
        "type": "Sos"
    },
    {
        "name": "Mayonez",
        "type": "Sos"
    },
    {
        "name": "Acı Sos",
        "type": "Sos"
    },
    {
        "name": "Barbekü Sosu",
        "type": "Sos"
    },
    {
        "name": "Sriracha",
        "type": "Sos"
    },
    {
        "name": "Hoşaf",
        "type": "Tatlı"
    },
    {
        "name": "Süt Tozu",
        "type": "Süt Ürünü"
    },
    {
        "name": "Pirinç Unu",
        "type": "Tahıl"
    },
    {
        "name": "Mısır Unu",
        "type": "Tahıl"
    },
    {
        "name": "Nişasta",
        "type": "Tahıl"
    },
    {
        "name": "Kinoa",
        "type": "Tahıl"
    },
    {
        "name": "Chia Tohumu",
        "type": "Tahıl"
    },
    {
        "name": "Keten Tohumu",
        "type": "Tahıl"
    },
    {
        "name": "Susam",
        "type": "Tahıl"
    },
    {
        "name": "Çörek Otu",
        "type": "Baharat"
    },
    {
        "name": "Anason",
        "type": "Baharat"
    },
    {
        "name": "Kimyon",
        "type": "Baharat"
    },
    {
        "name": "Kişniş",
        "type": "Baharat"
    },
    {
        "name": "Karabiber Taneleri",
        "type": "Baharat"
    },
    {
        "name": "Kakule",
        "type": "Baharat"
    },
    {
        "name": "Zerdeçal",
        "type": "Baharat"
    },
    {
        "name": "Safran",
        "type": "Baharat"
    },
    {
        "name": "Paprika",
        "type": "Baharat"
    },
    {
        "name": "Pul Biber",
        "type": "Baharat"
    },
    {
        "name": "Acı Kırmızı Biber",
        "type": "Baharat"
    },
    {
        "name": "Defne Yaprağı",
        "type": "Baharat"
    },
    {
        "name": "Tarhun",
        "type": "Baharat"
    },
    {
        "name": "Lavanta",
        "type": "Baharat"
    },
    {
        "name": "Limon Kabuğu Rendesi",
        "type": "Baharat"
    },
    {
        "name": "Portakal Kabuğu Rendesi",
        "type": "Baharat"
    },
    {
        "name": "Zencefil Tozu",
        "type": "Baharat"
    },
    {
        "name": "Kimyon Tohumu",
        "type": "Baharat"
    },
    {
        "name": "Frenk Soğanı",
        "type": "Yeşillik"
    },
    {
        "name": "Kişniş Yaprağı",
        "type": "Yeşillik"
    },
    {
        "name": "Mercanköşk",
        "type": "Baharat"
    },
    {
        "name": "Sumak",
        "type": "Baharat"
    },
    {
        "name": "Nar Ekşisi",
        "type": "Sos"
    },
    {
        "name": "Tam Buğday Unu",
        "type": "Tahıl"
    },
    {
        "name": "Beyaz Un",
        "type": "Tahıl"
    },
    {
        "name": "Ekmek",
        "type": "Fırın Ürünü"
    },
    {
        "name": "Pide",
        "type": "Fırın Ürünü"
    },
    {
        "name": "Lavaş",
        "type": "Fırın Ürünü"
    },
    {
        "name": "Tortilla",
        "type": "Fırın Ürünü"
    },
    {
        "name": "Mısır Cipsi",
        "type": "Atıştırmalık"
    },
    {
        "name": "Kraker",
        "type": "Atıştırmalık"
    },
    {
        "name": "Çubuk Kraker",
        "type": "Atıştırmalık"
    },
    {
        "name": "Krokan",
        "type": "Tatlı"
    },
    {
        "name": "Reçel",
        "type": "Tatlı"
    },
    {
        "name": "Marmelat",
        "type": "Tatlı"
    },
    {
        "name": "Nutella",
        "type": "Tatlı"
    },
    {
        "name": "Pekmez",
        "type": "Tatlı"
    },
    {
        "name": "Tahini",
        "type": "Sos"
    },
    {
        "name": "Pesto Sosu",
        "type": "Sos"
    },
    {
        "name": "Krema",
        "type": "Süt Ürünü"
    },
    {
        "name": "Yoğurt Kreması",
        "type": "Süt Ürünü"
    },
    {
        "name": "Krema Şanti",
        "type": "Süt Ürünü"
    },
    {
        "name": "Sütlü Çikolata",
        "type": "Tatlı"
    },
    {
        "name": "Bitter Çikolata",
        "type": "Tatlı"
    },
    {
        "name": "Beyaz Çikolata",
        "type": "Tatlı"
    },
    {
        "name": "Kakao Tozu",
        "type": "Tatlı"
    },
    {
        "name": "Vanilin",
        "type": "Baharat"
    },
    {
        "name": "Kabartma Tozu",
        "type": "Tatlandırıcı"
    },
    {
        "name": "Karbonat",
        "type": "Tatlandırıcı"
    },
    {
        "name": "Maya",
        "type": "Tatlandırıcı"
    },
    {
        "name": "Jelatin",
        "type": "Tatlandırıcı"
    },
    {
        "name": "Agar Agar",
        "type": "Tatlandırıcı"
    },
    {
        "name": "Balık Sosu",
        "type": "Sos"
    },
    {
        "name": "İstiridye Sosu",
        "type": "Sos"
    },
    {
        "name": "Tamari Sosu",
        "type": "Sos"
    },
    {
        "name": "Soğuk Pres Zeytinyağı",
        "type": "Yağ"
    },
    {
        "name": "Margarit",
        "type": "Yağ"
    },
    {
        "name": "Fındık Yağı",
        "type": "Yağ"
    },
    {
        "name": "Ayçiçek Yağı",
        "type": "Yağ"
    },
    {
        "name": "Tereyağı",
        "type": "Süt Ürünü"
    },
    {
        "name": "Susam Yağı",
        "type": "Yağ"
    },
    {
        "name": "Mısır Yağı",
        "type": "Yağ"
    },
    {
        "name": "Avokado Yağı",
        "type": "Yağ"
    },
    {
        "name": "Keten Tohumu Yağı",
        "type": "Yağ"
    },
    {
        "name": "Hindistancevizi Yağı",
        "type": "Yağ"
    },
    {
        "name": "Fıstık Ezmesi",
        "type": "Tatlandırıcı"
    },
    {
        "name": "Badem Ezmesi",
        "type": "Tatlandırıcı"
    },
    {
        "name": "Helva",
        "type": "Tatlı"
    }
]


export default foodSuplies;