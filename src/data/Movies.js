const MOVIES = [
  {
    title: "PAW PATROL : THE MIGHTY MOVIE",
    thumnail:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002764?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    director: "Animation",
    category: "Cal Brunker",
    videoDuration: "93 phút",
    status: true,
  },
  {
    title: "PAST LIVES",
    thumnail:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002786?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    director: "Celine Song",
    category: "Romance",
    videoDuration: "106 phút",
    status: true,
  },
  {
    title: "MAN SUANG",
    thumnail:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002774?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    director: "Nat Chartchai Ketnust",
    category: "Mystery",
    videoDuration: "125 phút",
    status: true,
  },
  {
    title: "THE CREATOR",
    thumnail:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002790?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    director: "Gareth Edwards",
    category: "Sci-fi",
    videoDuration: "133 phút",
    status: true,
  },
  {
    title: "BATMAN BEGINS",
    thumnail:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002812?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    director: "Christopher Nolan",
    category: "Action",
    videoDuration: "140 phút",
    status: true,
  },
  {
    title: "IU CONCERT : THE GOLDEN HOUR",
    thumnail:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002793?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    director: "Ca sĩ IU",
    category: "Musical",
    videoDuration: "171 phút",
    status: true,
  },
  {
    title: "AFTER SUNDOWN",
    thumnail:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002786?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    director: "Bhandit Thongdee",
    category: "Drama",
    videoDuration: "106 phút",
    status: true,
  },
  {
    title: "THE EXPENDABLES 4",
    thumnail:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002774?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    director: "Scott Waugh",
    category: "Action",
    videoDuration: "103 phút",
    status: true,
  },
  {
    title: "DONT BUY THE SELLER",
    thumnail:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002777?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    director: "Park Hee Kon",
    category: "Drama",
    videoDuration: "101 phút",
    status: true,
  },
  {
    title: "HONEYSWEET",
    thumnail:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002744?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    director: "Lee Han",
    category: "Comedy",
    videoDuration: "119 phút",
    status: true,
  },
  {
    title: "THE NUN II",
    thumnail:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002761?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    director: "Micheal Chaves",
    category: "Horror",
    videoDuration: "110 phút",
    status: true,
  },
  {
    title: "INU-OH",
    thumnail:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002780?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    director: "YUASA Masaaki",
    category: "History",
    videoDuration: "98 phút",
    status: true,
  },
  {
    title: "NOT QUITE DEAD YET",
    thumnail:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002782?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    director: "HAMASAKI Shinji",
    category: "Comedy",
    videoDuration: "93 phút",
    status: true,
  },
  {
    title: "MY BOY FRIEND IN ORANGE",
    thumnail:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002783?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    director: "MURAKAMI Shosuke",
    category: "Drama",
    videoDuration: "97 phút",
    status: true,
  },
  {
    title: "WEDDING HIGH",
    thumnail:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002784?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    director: "OHKU Akiko",
    category: "Drama",
    videoDuration: "120 phút",
    status: true,
  },
  {
    title: "LIVE - PHÁT TRỰC TIẾP",
    thumnail:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002778?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    director: "Khương Ngọc",
    category: "Horror",
    videoDuration: "91 phút",
    status: true,
  },
  // SẮP CHIẾU
  {
    title: "CHIẾM ĐOẠT",
    thumnail:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002733?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    director: "Thắng Vũ",
    category: "Drama",
    videoDuration: "97 phút",
    status: false,
  },
  {
    title: "ĐẤT RỪNG PHƯƠNG NAM",
    thumnail:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002699?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    director: "Nguyễn Quang Dũng",
    category: "Documentary",
    videoDuration: "110 phút",
    status: false,
  },
  {
    title: "DUNE : PART II",
    thumnail:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002700?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    director: "Denis Villeneuve",
    category: "Action",
    videoDuration: "120 phút",
    status: false,
  },
  {
    title: "FIVE NIGHT AT FREDDY'S",
    thumnail:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002798?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    director: "Emma Tammi",
    category: "Horror",
    videoDuration: "110 phút",
    status: false,
  },
  {
    title: "GIAO LỘ 8675",
    thumnail:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002775?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    director: "TanDs Le",
    category: "Adventure",
    videoDuration: "110 phút",
    status: false,
    preSale: true,
  },
  {
    title: "KILLERS OF THE FLOWER MOON",
    thumnail:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002804?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    director: "Martin Scorsese",
    category: "Crime",
    videoDuration: "206 phút",
    status: false,
  },
  {
    title: "KRAVEN THE HUNTER",
    thumnail:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002762?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    director: "J.C Chandor",
    category: "",
    videoDuration: "120 phút",
    status: false,
  },
  {
    title: "MIGRATION",
    thumnail:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002759?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    director: "Benjamin Renner",
    category: "Animation",
    videoDuration: "110 phút",
    status: false,
  },
  {
    title: "NGƯỜI MẶT TRỜI",
    thumnail:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002799?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    director: "Timothy Linh Bùi",
    category: "Action",
    videoDuration: "101 phút",
    status: false,
  },
  {
    title: "NGƯỜI VỢ CUỐI CÙNG",
    thumnail:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002792?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    director: "Victor Vũ",
    category: "Romance",
    videoDuration: "98 phút",
    status: false,
  },
  {
    title: "THE EXORCIST : BELIEVER",
    thumnail:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002797?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    director: "David Gordon Green",
    category: "Horor",
    videoDuration: "121 phút",
    status: false,
    preSale: true,
  },
  {
    title: "THE MARVELS",
    thumnail:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002701?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    director: "Nia DaCosta",
    category: "Adventure",
    videoDuration: "95 phút",
    status: false,
  },
  {
    title: "TROLLS BAND TOGETHER",
    thumnail:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002751?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    director: "Tim Heitz",
    category: "Animation",
    videoDuration: "110 phút",
    status: false,
  },
  {
    title: "TABOO - ĐIỀU CẤM KỴ KINH HOÀNG",
    thumnail:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002796?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    director: "Vũ Thành",
    category: "Horror",
    videoDuration: "90 phút",
    status: false,
  },
];

export default MOVIES;
