import { Project, Service, SoftwareItem, Testimonial, FAQItem } from '../types';

export const PERSONAL_INFO = {
  name: "Sarvar Kalandarov",
  title: "Senior 3D Visualizer & Architectural Designer",
  experience: "7+ Years",
  projectsCompleted: "120+",
  clientsSatisfied: "98%",
  location: "Tashkent, Uzbekistan / Available Globally",
  email: "contact@sarvar3d.com",
  telegram: "@sarvar_arch3d",
  phone: "+998 90 123 45 67",
  bio: "Arxitektura vizualizatsiyasi, 3D modellashtirish va AutoCAD ishchi chizmalari bo'yicha yuqori malakali mutaxassis. Zamonaviy xonadonlar, kotedjlar, tijorat majmualari va interyer dizaynlari uchun realistik 3D renderlar yarataman."
};

export const PROJECTS: Project[] = [
  {
    id: "villa-modern-mirabad",
    title: "Mirobod Modern Private Villa",
    subtitle: "High-end Exterior Architectural Visualization",
    category: "exterior",
    client: "Orient Building Group",
    location: "Tashkent, Uzbekistan",
    year: "2024",
    area: "480 m²",
    mainImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    beforeImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80"
    ],
    software: ["3ds Max", "Corona Render", "AutoCAD", "Photoshop"],
    description: "2 qavatli zamonaviy kotedj eksterer dizayni va tun-kun yoritish ssenariylari bilan tayyorlangan fotorealistik 3D vizualizatsiya. Landshaft va fasad materiallari atrof-muhit bilan uyg'unlashtirilgan.",
    keyFeatures: [
      "AutoCAD 2D chizmalar asosida 100% aniq 3D model",
      "Kunduzgi va tungi yoritish rejimlarida 8K renderlar",
      "Kombinatsiyalashgan fasad materiallari (Marmar, yog'och, alyumin kompozit)",
      "Landshaft dizayni va hovli basseyni detalizatsiyasi"
    ],
    featured: true
  },
  {
    id: "penthouse-neoclassic",
    title: "Tashkent City Neoclassic Penthouse",
    subtitle: "Luxurious Interior Design & Render",
    category: "interior",
    client: "Private Client",
    location: "Tashkent City, Uzbekistan",
    year: "2024",
    area: "220 m²",
    mainImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80",
    beforeImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=80"
    ],
    software: ["3ds Max", "V-Ray", "AutoCAD", "Photoshop"],
    description: "Neoklassika uslubidagi hashamatli pentxaus mehmoxonasi, oshxona va yotoqxona interyer dizayni. Italiya mebellari va maxsus yoritish tizimi bilan jihozlangan.",
    keyFeatures: [
      "Custom mebel modellashtirish va teksturalash",
      "Oshxona va mehmonxona uchun detallashgan 3D renderlar",
      "Mebel va elektrik nuqtalar uchun to'liq AutoCAD chizmalar to'plami",
      "Ranglar va teksturalar kombinatsiyasi tavsiyasi"
    ],
    featured: true
  },
  {
    id: "autocad-working-drawings-set",
    title: "Full Architectural Working Blueprint Package",
    subtitle: "2D AutoCAD Drafting & Construction Details",
    category: "autocad",
    client: "Grand Development",
    location: "Samarkand, Uzbekistan",
    year: "2023",
    area: "1200 m²",
    mainImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
    beforeImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80"
    ],
    software: ["AutoCAD", "Revit", "PDF Draft"],
    description: "Qurilish ustalari va santexnik/elektriklar uchun to'liq professional AutoCAD ishchi hujjatlari to'plami. Barcha razmerlar, qirqimlar (section) va uzellar ko'rsatilgan.",
    keyFeatures: [
      "Qavatlar bo'yicha mebel joylashuvi va o'lchamlar rejasi",
      "Elektr kalitlari, rozetkalar va chiroqlar montaj chizmasi",
      "Santexnika va isitish tizimlari bog'lanish chizmasi",
      "Shift va pol qoplamalari spetsifikatsiyasi"
    ],
    featured: true
  },
  {
    id: "commercial-shopping-center",
    title: "Silk Road Plaza Mall",
    subtitle: "Commercial Exterior & Interior Visualization",
    category: "exterior",
    client: "Silk Road Investors",
    location: "Bukhara, Uzbekistan",
    year: "2024",
    area: "3500 m²",
    mainImage: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1555636222-cae831e670b3?auto=format&fit=crop&w=1600&q=80"
    ],
    software: ["3ds Max", "Corona Render", "AutoCAD", "Photoshop"],
    description: "Tijorat majmualari uchun fasad va atrium vizualizatsiyasi. Tungi mediaseksiya yoritgichlari va tashqi reklama konstruksiyalari modellangan.",
    keyFeatures: [
      "Odamlar va mashinalar (3D crowd setup) bilan fotorealistik kadrlar",
      "Kunduzgi va kechki biznes muhiti",
      "Tijorat zonalari renderlari"
    ],
    featured: false
  },
  {
    id: "minimalist-office-space",
    title: "Tech Hub Coworking & Office",
    subtitle: "Modern Minimalist Interior Concept",
    category: "interior",
    client: "IT Park Resident",
    location: "Tashkent, Uzbekistan",
    year: "2024",
    area: "310 m²",
    mainImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80"
    ],
    software: ["3ds Max", "V-Ray", "Blender"],
    description: "IT kompaniya uchun ochiq kosmos (Open Space) va uchrashuv xonalari dizayni. Ergonomik mebellar va akustik panellar hisobga olingan.",
    keyFeatures: [
      "Yorug'lik va soyalar aniq hisoblangan akustik dizayn",
      "Lokal brending elementlari",
      "3D Mebel kolleksiyasi"
    ],
    featured: false
  },
  {
    id: "luxury-sofa-product-3d",
    title: "Italian Leather Armchair 3D Model",
    subtitle: "High-Poly 3D Asset for Furniture Catalog",
    category: "3d-product",
    client: "Milano Design Studio",
    location: "Italy / Remote",
    year: "2023",
    area: "Product",
    mainImage: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1600&q=80"
    ],
    software: ["3ds Max", "Marvelous Designer", "Corona Render"],
    description: "Mebel ishlab chiqaruvchilar uchun 3ds Max va Marvelous Designer'da yaratilgan yuqori detallashgan charm kreslo va divan 3D modeli.",
    keyFeatures: [
      "Realistic fabric/leather displacement texturing",
      "Low-poly & High-poly export option (.MAX, .OBJ, .FBX, .GLTF)",
      "Studio 3-point lighting setup included"
    ],
    featured: false
  }
];

export const SERVICES: Service[] = [
  {
    id: "interior-3d",
    title: "Interyer 3D Vizualizatsiya",
    pricePerUnit: "$5 - $10 / m²",
    description: "Xonadon, kotedj, ofis va restoranlar uchun yuqori sifatli 4K fotorealistik 3D renderlar yaratish.",
    iconName: "Home",
    deliverables: [
      "Har bir xona uchun 3-5 ta burchakdan 4K renderlar",
      "Mebel va ranglar kombinatsiyasi tavsiyasi",
      "2 marta bepul tuzatish (correction) kiritish"
    ],
    popular: true
  },
  {
    id: "exterior-3d",
    title: "Eksterer & Fasad Vizualizatsiya",
    pricePerUnit: "$150 - $400 / bino",
    description: "Kotedj, villalar va tijorat binolari fasad dizayni, landshaft va tungi yoritish renderlari.",
    iconName: "Building2",
    deliverables: [
      "Kunduzgi va tungi fasad renderlari",
      "Landshaft va hovli dizayni",
      "Fasad materiallari spetsifikatsiyasi"
    ],
    popular: false
  },
  {
    id: "autocad-blueprint",
    title: "AutoCAD 2D Ishchi Chizmalar",
    pricePerUnit: "$3 - $6 / m²",
    description: "Qurilish ustalari uchun mebel joylashuvi, elektr, santexnika, pol va shift chizmalari to'plami.",
    iconName: "FileSpreadsheet",
    deliverables: [
      "Qavatlar rejasi (Floor plan)",
      "Rozetka va chiroqlar montaj xaritasi",
      "Qirqimlar (Sections) va o'lchamlar"
    ],
    popular: false
  },
  {
    id: "turnkey-design",
    title: "Full Design Package (Chizma + 3D)",
    pricePerUnit: "$12 - $20 / m²",
    description: "Interyer va eksterer uchun kompleks xizmat: G'oyadan to tayyor chizma va 3D renderlargacha.",
    iconName: "Sparkles",
    deliverables: [
      "To'liq 3D Vizualizatsiya package",
      "Barcha AutoCAD ishchi chizmalari",
      "Materiallar va mebellarni tanlashda mualliflik nazorati"
    ],
    popular: true
  }
];

export const SOFTWARE_STACK: SoftwareItem[] = [
  { name: "3ds Max", category: "Modeling", level: 95, icon: "Box", experienceYears: "7 yil" },
  { name: "Corona Render", category: "Rendering", level: 98, icon: "Sun", experienceYears: "6 yil" },
  { name: "V-Ray", category: "Rendering", level: 90, icon: "Camera", experienceYears: "7 yil" },
  { name: "AutoCAD", category: "Drafting", level: 95, icon: "Ruler", experienceYears: "7 yil" },
  { name: "Revit", category: "Drafting", level: 80, icon: "Layers", experienceYears: "3 yil" },
  { name: "Photoshop", category: "Post-Processing", level: 90, icon: "Image", experienceYears: "7 yil" },
  { name: "Blender", category: "Modeling", level: 85, icon: "Sparkles", experienceYears: "4 yil" }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    clientName: "Bobur Ismoilov",
    role: "Bosh Arxitektor",
    company: "Orient Building",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    comment: "Sarvar bilan 3 ta yirik kotedj loyihasida ishladik. Renderlar sifati va AutoCAD chizmalarining aniqligi mijozlarimizga juda yoqdi. Muddatlarga rioya qilishi har doim xursand qiladi.",
    rating: 5,
    projectType: "Villa Exterior & Working Drawings"
  },
  {
    id: "2",
    clientName: "Elena Volkova",
    role: "Art Director",
    company: "Design Studio Luxe",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
    comment: "Tashkent City pentxaus loyihamiz uchun neoklassika interyerini birinchi marta o'zidayoq deyarli tuzatishlarsiz topshirdi. Mebel va mato teksturalari xuddi haqiqiy fotosuratdek chiqqan!",
    rating: 5,
    projectType: "Penthouse Interior Render"
  },
  {
    id: "3",
    clientName: "Jahongir Rustamov",
    role: "Loyiha Menejeri",
    company: "Grand Construction",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    comment: "AutoCAD chizmalari o'ta professional tartibda berilgan. Santexnik va elektriklarimiz hech qanday chalkashliksiz montaj ishlarini bajarishdi. Tavsiya qilaman!",
    rating: 5,
    projectType: "Complete Blueprint Package"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Loyiha topshirish muddati qancha vaqt oladi?",
    answer: "O'rtacha 100 m² xonadon interyer 3D vizualizatsiyasi 3-6 ish kunini oladi. Kotedj ekstererlari esa 4-7 kun ichida tayyor bo'ladi. Shoshilinch loyihalar kelishuv asosida tezlashtirilishi mumkin."
  },
  {
    question: "Ishni boshlash uchun mendan nimalar talab qilinadi?",
    answer: "Xonaning o'lcham chizmasi (AutoCAD, PDF yoki qo'lda chizilgan eskiz), mebel va uslub bo'yicha namunalar (TZ - Texnik topshiriq yoki Pinterest rasm to'plamlari)."
  },
  {
    question: "Tuzatishlar (Pravkalar) kiritish bepulmi?",
    answer: "Ha, dastlabki kelishilgan Texnik Topshiriq doirasida 2 marta tuzatish kiritish bepul hisoblanadi. Kontseptsiya butunlay o'zgarsa, qo'shimcha kelishiladi."
  },
  {
    question: "To'lov tartibi qanday amalga oshiriladi?",
    answer: "Ishni boshlashdan oldin 30-50% bo'nak (avans) olinadi. Dastlabki renderlar va suv belgisiga (watermark) ega kadrlar ko'rsatilib tasdiqlangach, qolgan summaning to'lovi va 4K renderlar taqdim etiladi."
  }
];
