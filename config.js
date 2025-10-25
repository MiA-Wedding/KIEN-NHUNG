/* config.js - cấu hình dễ chỉnh
   Nếu anh có iframe embed chính xác từ Google Maps (Share > Embed a map),
   paste src vào mapEmbed. Nếu không, mapEmbed để trống và script sẽ
   hiển thị một bản đồ tìm kiếm bằng mapUrl.
*/
const WEDDING_CONFIG = {
  groomName: "Trung Kiên    ",
  brideName: "   Hồng Nhung ",

  weddingDate: "2025-11-01 10:00:00",
  location: "Tại Địa chỉ: tt4-59 tái định cư ngọc thụy ",

  // link mở ngoài (mở app Google Maps trên điện thoại)
  mapUrl: "https://www.google.com/maps/place/21%C2%B003'24.3%22N+105%C2%B052'22.0%22E/@21.056762,105.8728757,761a,35y,5.38h/data=!3m1!1e3!4m4!3m3!8m2!3d21.056736!4d105.872773!17m2!4m1!1e3!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D",

  // link embed hiển thị trực tiếp trong trang
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d760.7414466392947!2d105.8728756857794!3d21.05676203171716!2m3!1f5.375999999999998!2f0!3f0!3m2!1i1024!2i768!4f35!3m2!1m1!2zMjHCsDAzJzI0LjMiTiAxMDXCsDUyJzIyLjAiRQ!5e1!3m2!1svi!2s!4v1761402434970!5m2!1svi!2s",

  heroImage: "assets/hero-cover.jpg",
  doorLeft: "assets/A.png",
  doorRight: "assets/B.png",

  music: "assets/Music.mp3",

  effectImage: "assets/effect.png",
  effectEnabled: true,

  videoUrl: "https://www.youtube.com/embed/jQBVxPh4fiA",

  gallery: [
    {src:"assets/g1.jpg"},
    {src:"assets/g2.jpg"},
    {src:"assets/g3.jpg"},
    {src:"assets/g4.jpg"},
    {src:"assets/g5.jpg"},
    {src:"assets/g6.jpg"},
    {src:"assets/g7.jpg"},
    {src:"assets/g8.jpg"},
    {src:"assets/g9.jpg"},
    {src:"assets/g10.jpg"},
	{src:"assets/g11.jpg"},
    {src:"assets/g12.jpg"},
    {src:"assets/g13.jpg"},
    {src:"assets/g14.jpg"},
	{src:"assets/g15.jpg"},
    {src:"assets/g16.jpg"}
  ],

  invitation: {
    groomSide: {
      avatar: "assets/g1.jpg",
      name: "Lê Trung Kiên ",
      parents: "Mẹ: Dương Thị Kham ",
      address: "Địa chỉ: TT4-59 tái định cư ngọc thụy "
    },
    brideSide: {
      avatar: "assets/g2.jpg",
      name: "Vũ Hồng Nhung ",
      parents: "Mẹ: Lưu Thị Loan ",
      address: "Địa chỉ: Số 1 Trung tâm anh ngữ amslink yên Mỹ - Hưng yên "
    }
  },

  qr: [
    {src: "assets/QR02.jpg", title: "", info: ""}
  ],
};
