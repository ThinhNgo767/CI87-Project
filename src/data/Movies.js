const MOVIES = [
  {
    id :1,
    title: "PAW PATROL : THE MIGHTY MOVIE",
    thumnail:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002764?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    director: "Animation",
    category: "Cal Brunker",
    videoDuration: "93 phút",
    status: "active",
  },
  {
    id :2,
    title: "PAST LIVES",
    thumnail:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002786?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    director: "Celine Song",
    category: "Romance",
    videoDuration: "106 phút",
    status: "active",
  },
  {
    id:3,
    title: "MAN SUANG",
    thumnail:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002774?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    director: "Nat Chartchai Ketnust",
    category: "Mystery",
    videoDuration: "125 phút",
    status: "active",
  },
  {
    id:4,
    title: "THE CREATOR",
    thumnail:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002790?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    director: "Gareth Edwards",
    category: "Sci-fi",
    videoDuration: "133 phút",
    status: "active",
  },
  {
    id:5,
    title: "BATMAN BEGINS",
    thumnail:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002812?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    director: "Christopher Nolan",
    category: "Action",
    videoDuration: "140 phút",
    status: "active",
  },
  {
    id:6,
    title: "IU CONCERT : THE GOLDEN HOUR",
    thumnail:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002793?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    director: "Ca sĩ IU",
    category: "Musical",
    videoDuration: "171 phút",
    status: "active",
  },
  {
    id:7,
    title: "AFTER SUNDOWN",
    thumnail:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002786?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    director: "Bhandit Thongdee",
    category: "Drama",
    videoDuration: "106 phút",
    status: "active",
  },
  {
    id:8,
    title: "THE EXPENDABLES 4",
    thumnail:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002774?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    director: "Scott Waugh",
    category: "Action",
    videoDuration: "103 phút",
    status: "active",
  },
  {
    id:9,
    title: "DONT BUY THE SELLER",
    thumnail:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002777?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    director: "Park Hee Kon",
    category: "Drama",
    videoDuration: "101 phút",
    status: "active",
  },
  {
    id:10,
    title: "HONEYSWEET",
    thumnail:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002744?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    director: "Lee Han",
    category: "Comedy",
    videoDuration: "119 phút",
    status: "active",
  },
  {
    id:11,
    title: "THE NUN II",
    thumnail:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002761?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    director: "Micheal Chaves",
    category: "Horror",
    videoDuration: "110 phút",
    status: "active",
  },
  {
    id:12,
    title: "INU-OH",
    thumnail:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002780?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    director: "YUASA Masaaki",
    category: "History",
    videoDuration: "98 phút",
    status: "active",
  },
  {
    id:13,
    title: "NOT QUITE DEAD YET",
    thumnail:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002782?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    director: "HAMASAKI Shinji",
    category: "Comedy",
    videoDuration: "93 phút",
    status: "active",
  },
  {
    id:14,
    title: "MY BOY FRIEND IN ORANGE",
    thumnail:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002783?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    director: "MURAKAMI Shosuke",
    category: "Drama",
    videoDuration: "97 phút",
    status: "active",
  },
  {
    id:15,
    title: "WEDDING HIGH",
    thumnail:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002784?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    director: "OHKU Akiko",
    category: "Drama",
    videoDuration: "120 phút",
    status: "active",
  },
  {
    id:16,
    title: "LIVE - PHÁT TRỰC TIẾP",
    thumnail:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002778?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    director: "Khương Ngọc",
    category: "Horror",
    videoDuration: "91 phút",
    status: "active",
  },

  // SẮP CHIẾU
  {
    id:17,
    title: "CHIẾM ĐOẠT",
    thumnail:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002790?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    director: "Thắng Vũ",
    category: "Drama",
    videoDuration: "97 phút",
    status: "comingsoon",
  },
  {
    id:18,
    title: "ĐẤT RỪNG PHƯƠNG NAM",
    thumnail:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002812?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    director: "Nguyễn Quang Dũng",
    category: "Documentary",
    videoDuration: "110 phút",
    status: "comingsoon",
  },
  {
    id:19,
    title: "DUNE : PART II",
    thumnail:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002793?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    director: "Denis Villeneuve",
    category: "Action",
    videoDuration: "120 phút",
    status: "comingsoon",
  },
  {
    id:20,
    title: "FIVE NIGHT AT FREDDY'S",
    thumnail:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002786?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    director: "Emma Tammi",
    category: "Horror",
    videoDuration: "110 phút",
    status: "comingsoon",
  },
  {
    id:21,
    title: "KILLERS OF THE FLOWER MOON",
    thumnail:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002774?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    director: "Martin Scorsese",
    category: "Crime",
    videoDuration: "206 phút",
    status: "comingsoon",
  },
  {
    id:22,
    title: "KRAVEN THE HUNTER",
    thumnail:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002777?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    director: "J.C Chandor",
    category: "",
    videoDuration: "120 phút",
    status: "comingsoon",
  },
  {
    id:23,
    title: "MIGRATION",
    thumnail:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002744?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    director: "Benjamin Renner",
    category: "Animation",
    videoDuration: "110 phút",
    status: "comingsoon",
  },
  {
    id:24,
    title: "NGƯỜI MẶT TRỜI",
    thumnail:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002761?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    director: "Timothy Linh Bùi",
    category: "Action",
    videoDuration: "101 phút",
    status: "comingsoon",
  },
  {
    id:25,
    title: "NGƯỜI VỢ CUỐI CÙNG",
    thumnail:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002780?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    director: "Victor Vũ",
    category: "Romance",
    videoDuration: "98 phút",
    status: "comingsoon",
  },
  {
    id:26,
    title: "THE EXORCIST : BELIEVER",
    thumnail:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002782?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    director: "David Gordon Green",
    category: "Horor",
    videoDuration: "121 phút",
    status: "comingsoon",
  },
  {
    id:27,
    title: "THE MARVELS",
    thumnail:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002783?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    director: "Nia DaCosta",
    category: "Adventure",
    videoDuration: "95 phút",
    status: "comingsoon",
  },
  {
    id:28,
    title: "TROLLS BAND TOGETHER",
    thumnail:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002784?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    director: "Tim Heitz",
    category: "Animation",
    videoDuration: "110 phút",
    status: "comingsoon",
  },
  {
    id:29,
    title: "TABOO - ĐIỀU CẤM KỴ KINH HOÀNG",
    thumnail:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002778?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    director: "Vũ Thành",
    category: "Horror",
    videoDuration: "90 phút",
    status: "comingsoon",
  },
];

export default MOVIES;
