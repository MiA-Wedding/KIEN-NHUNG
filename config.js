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
  mapUrl: "https://www.google.com/maps/place/Tt3+khu+t%C3%A1i+%C4%91%E1%BB%8Bnh+c%C6%B0+Ng%E1%BB%8Dc+Th%E1%BB%A5y+-+Th%C6%B0%E1%BB%A3ng+Thanh/@21.0567939,105.8727943,155m/data=!3m1!1e3!4m10!1m2!2m1!1zdHQ0LTU5IHTDoWkgxJHhu4tuaCBjxrAgbmfhu41jIHRo4buleQ!3m6!1s0x3135abc945f42063:0x879b484d26a91131!8m2!3d21.0570172!4d105.8733547!15sCiV0dDQtNTkgdMOhaSDEkeG7i25oIGPGsCBuZ-G7jWMgdGjhu6V5kgETaG91c2luZ19kZXZlbG9wbWVudKoBchABKiIiHnTDoWkgxJHhu4tuaCBjxrAgbmfhu41jIHRo4buleShCMh8QASIbOLoyLv_hDTi2IV1AvvnuWerQWhTBLGm4hujWMikQAiIldHQ0IDU5IHTDoWkgxJHhu4tuaCBjxrAgbmfhu41jIHRo4buleeABAA!16s%2Fg%2F11nmqqj8w8?hl=vi&entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D",

  // link embed hiển thị trực tiếp trong trang
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d676.4813128345734!2d105.87279426917301!3d21.056793947327744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abc945f42063%3A0x879b484d26a91131!2zVHQzIGtodSB0w6FpIMSR4buLbmggY8awIE5n4buNYyBUaOG7pXkgLSBUaMaw4bujbmcgVGhhbmg!5e1!3m2!1svi!2s!4v1760723301166!5m2!1svi!2s",

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
