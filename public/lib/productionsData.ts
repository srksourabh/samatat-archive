// Productions Data - Comprehensive list of all Samatat Theatre productions
// Images sourced from Firebase Storage: images/productions/{folder_name}/

const STORAGE_BASE = 'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/productions';
const THUMBNAIL_BASE = 'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails';

export interface Production {
  id: string;
  title: string;
  titleBn?: string;
  titleHi?: string;
  category: {
    en: string;
    bn: string;
    hi: string;
  };
  description: {
    en: string;
    bn: string;
    hi: string;
  };
  year?: string;
  playwright?: string;
  director?: string;
  thumbnailUrl: string;
  folderName: string; // Firebase Storage folder name
  photoCount: number;
  youtubeVideoId?: string; // Placeholder for YouTube video ID
  photos: string[]; // Array of full-res photo URLs
}

// Helper to generate photo URLs from Firebase Storage
function generatePhotoUrls(folderName: string, fileNames: string[]): string[] {
  return fileNames.map(name =>
    `${STORAGE_BASE}/${encodeURIComponent(folderName)}/${encodeURIComponent(name)}`
  );
}

export const productions: Production[] = [
  {
    id: 'bisarjan',
    title: 'Bisarjan',
    titleBn: 'বিসর্জন',
    titleHi: 'बिसर्जन',
    category: { en: 'Tagore Classic', bn: 'রবীন্দ্র ক্লাসিক', hi: 'टैगोर क्लासिक' },
    description: {
      en: "Rabindranath Tagore's classic play about sacrifice and devotion. A powerful tale of conflict between faith and humanity, exploring the depths of religious fanaticism and the price of blind devotion.",
      bn: 'ত্যাগ এবং ভক্তি সম্পর্কে রবীন্দ্রনাথ ঠাকুরের ক্লাসিক নাটক। বিশ্বাস এবং মানবতার মধ্যে দ্বন্দ্বের একটি শক্তিশালী গল্প।',
      hi: 'बलिदान और भक्ति के बारे में रवींद्रनाथ टैगोर का क्लासिक नाटक। विश्वास और मानवता के बीच संघर्ष की एक शक्तिशाली कहानी।'
    },
    year: '2023',
    playwright: 'Rabindranath Tagore',
    thumbnailUrl: `${THUMBNAIL_BASE}/Bisarjan%20Natok%20edited/CT2A7966.jpg`,
    folderName: 'Bisarjan Natok edited',
    photoCount: 25,
    photos: generatePhotoUrls('Bisarjan Natok edited', [
      'CT2A7937.jpg', 'CT2A7943.jpg', 'CT2A7944.jpg', 'CT2A7950.jpg', 'CT2A7956.jpg',
      'CT2A7957.jpg', 'CT2A7966.jpg', 'CT2A7985.jpg', 'CT2A7987.jpg', 'CT2A7989.jpg',
      'DSC07306.jpg', 'DSC07312.jpg', 'DSC07328.jpg', 'DSC07330.jpg', 'DSC07335.jpg',
      'DSC07339.jpg', 'DSC07341.jpg', 'DSC07345.jpg', 'DSC07348.jpg', 'DSC07350.jpg',
      'DSC07358.jpg', 'DSC07363.jpg', 'DSC07370.jpg', 'DSC07375.jpg', 'DSC07378.jpg'
    ])
  },
  {
    id: 'saatmar-palawan',
    title: 'Saatmar Palawan',
    titleBn: 'সাতমার পালোয়ান',
    titleHi: 'सातमार पहलवान',
    category: { en: 'Cultural Drama', bn: 'সাংস্কৃতিক নাটক', hi: 'सांस्कृतिक नाटक' },
    description: {
      en: 'A powerful drama about wrestling and tradition in rural Bengal. This epic tale celebrates the spirit of traditional wrestling culture and the values of honor, strength, and community.',
      bn: 'গ্রামীণ বাংলার কুস্তি এবং ঐতিহ্য সম্পর্কে একটি শক্তিশালী নাটক। এই মহাকাব্যিক গল্পটি ঐতিহ্যবাহী কুস্তি সংস্কৃতির চেতনা উদযাপন করে।',
      hi: 'ग्रामीण बंगाल में कुश्ती और परंपरा के बारे में एक शक्तिशाली नाटक। यह महाकाव्य कहानी पारंपरिक कुश्ती संस्कृति की भावना का जश्न मनाती है।'
    },
    year: '2022',
    thumbnailUrl: `${THUMBNAIL_BASE}/Saatmar%20Palawan/20220219201621_IMG_5339.jpg`,
    folderName: 'Saatmar Palawan',
    photoCount: 147,
    photos: generatePhotoUrls('Saatmar Palawan', [
      '20220219194641_IMG_5211.jpg', '20220219194826_IMG_5217.jpg', '20220219195101_IMG_5228.jpg',
      '20220219195344_IMG_5244.jpg', '20220219195628_IMG_5255.jpg', '20220219200027_IMG_5267.jpg',
      '20220219200209_IMG_5276.jpg', '20220219200432_IMG_5289.jpg', '20220219200855_IMG_5306.jpg',
      '20220219201254_IMG_5324.jpg', '20220219201621_IMG_5339.jpg', '20220219202033_IMG_5354.jpg',
      '20220219202256_IMG_5364.jpg', '20220219202538_IMG_5373.jpg', '20220219202918_IMG_5386.jpg',
      '20220219203139_IMG_5400.jpg', '20220219203341_IMG_5407.jpg', '20220219203529_IMG_5414.jpg',
      '20220219203717_IMG_5427.jpg', '20220219203810_IMG_5435.jpg', '20220219204023_IMG_5453.jpg',
      '20220219204316_IMG_5470.jpg', '20220219204634_IMG_5490.jpg', '20220219204901_IMG_5504.jpg'
    ])
  },
  {
    id: 'charandas-chor',
    title: 'Charandas Chor',
    titleBn: 'চারণদাস চোর',
    titleHi: 'चरणदास चोर',
    category: { en: 'Classic Adaptation', bn: 'ক্লাসিক অভিযোজন', hi: 'क्लासिक रूपांतरण' },
    description: {
      en: "Habib Tanvir's legendary play about an honest thief who cannot tell a lie. A satirical masterpiece that questions the morality of society through the eyes of a simple thief.",
      bn: 'একজন সৎ চোর সম্পর্কে হাবিব তানভীরের কিংবদন্তি নাটক যে মিথ্যা বলতে পারে না।',
      hi: 'एक ईमानदार चोर के बारे में हबीब तनवीर का प्रसिद्ध नाटक जो झूठ नहीं बोल सकता।'
    },
    playwright: 'Habib Tanvir',
    thumbnailUrl: `${THUMBNAIL_BASE}/Charandas%20chor/1.jpg`,
    folderName: 'Charandas chor',
    photoCount: 4,
    photos: generatePhotoUrls('Charandas chor', ['1.jpg', '2.jpg', '3.jpg', '4.jpg'])
  },
  {
    id: 'tota-kahini',
    title: 'Tota Kahini',
    titleBn: 'তোতা কাহিনী',
    titleHi: 'तोता कहानी',
    category: { en: 'Satirical Drama', bn: 'ব্যঙ্গাত্মক নাটক', hi: 'व्यंग्य नाटक' },
    description: {
      en: 'A satirical masterpiece that uses the metaphor of parrots to comment on society. Based on Rabindranath Tagore\'s work, it critiques blind education and mindless conformity.',
      bn: 'একটি ব্যঙ্গাত্মক মাস্টারপিস যা সমাজের উপর মন্তব্য করতে তোতার রূপক ব্যবহার করে।',
      hi: 'एक व्यंग्यात्मक कृति जो समाज पर टिप्पणी करने के लिए तोतों के रूपक का उपयोग करती है।'
    },
    playwright: 'Rabindranath Tagore',
    thumbnailUrl: `${THUMBNAIL_BASE}/Tota%20kahini/09.jpg`,
    folderName: 'Tota kahini',
    photoCount: 13,
    photos: generatePhotoUrls('Tota kahini', [
      '09.jpg', 'J43.jpg', 'Picture 401.jpg', 'Picture 682.jpg', 'Picture 692.jpg',
      'Picture 698.jpg', 'Picture 701.jpg', 'Picture 706.jpg', 'Picture 712.jpg',
      'Picture 722.jpg', 'Picture 730.jpg', 'Picture 749.jpg', 'RollBack (2).jpg'
    ])
  },
  {
    id: 'arshi-desher-porshira',
    title: 'Arshi Desher Porshira',
    titleBn: 'আরশি দেশের পরশীরা',
    titleHi: 'आरशी देश के परशीरा',
    category: { en: 'Original Drama', bn: 'মৌলিক নাটক', hi: 'मूल नाटक' },
    description: {
      en: "Our debut production that marked the beginning of Samatat's journey. A milestone production that established our commitment to meaningful theatre.",
      bn: 'আমাদের প্রথম প্রযোজনা যা সমতটের যাত্রার সূচনা করেছে।',
      hi: 'हमारी पहली प्रस्तुति जिसने समतट की यात्रा की शुरुआत की।'
    },
    year: '1999',
    thumbnailUrl: `${THUMBNAIL_BASE}/Arshi%20Desher%20Porshira/Picture-07.jpg`,
    folderName: 'Arshi Desher Porshira',
    photoCount: 3,
    photos: generatePhotoUrls('Arshi Desher Porshira', ['Picture-07.jpg', 'dfv.JPG', 'samatat007.jpg'])
  },
  {
    id: 'adharmoni',
    title: 'Adharmoni',
    titleBn: 'আধারমণি',
    titleHi: 'आधारमणि',
    category: { en: 'Social Drama', bn: 'সামাজিক নাটক', hi: 'सामाजिक नाटक' },
    description: {
      en: 'A compelling social drama exploring human relationships and conflicts. The play delves deep into the complexities of modern life and interpersonal dynamics.',
      bn: 'মানুষের সম্পর্ক এবং দ্বন্দ্ব অন্বেষণকারী একটি আকর্ষণীয় সামাজিক নাটক।',
      hi: 'मानवीय संबंधों और संघर्षों की खोज करने वाला एक आकर्षक सामाजिक नाटक।'
    },
    thumbnailUrl: `${THUMBNAIL_BASE}/Adharmoni/IMG_8432.jpg`,
    folderName: 'Adharmoni',
    photoCount: 15,
    photos: generatePhotoUrls('Adharmoni', [
      'IMG_8382.JPG', 'IMG_8384.JPG', 'IMG_8386.JPG', 'IMG_8387.JPG', 'IMG_8389.JPG',
      'IMG_8391.JPG', 'IMG_8393.JPG', 'IMG_8399.JPG', 'IMG_8409.JPG', 'IMG_8432.JPG',
      'IMG_8462.JPG', 'IMG_8496.JPG', 'IMG_8502.JPG', 'IMG_8508.JPG', 'IMG_8510.JPG'
    ])
  },
  {
    id: 'jodi-aar-ekbar',
    title: 'Jodi Aar Ekbar',
    titleBn: 'যদি আর একবার',
    titleHi: 'जोड़ी आर एकबार',
    category: { en: 'Modern Drama', bn: 'আধুনিক নাটক', hi: 'आधुनिक नाटक' },
    description: {
      en: 'A contemporary exploration of life, choices, and second chances. This modern drama resonates with audiences through its relatable themes of love, loss, and redemption.',
      bn: 'জীবন, পছন্দ এবং দ্বিতীয় সুযোগের সমসাময়িক অন্বেষণ।',
      hi: 'जीवन, विकल्पों और दूसरे अवसरों की एक समकालीन खोज।'
    },
    thumbnailUrl: `${THUMBNAIL_BASE}/Jodi%20aar%20ekbar/IMG_9104.jpg`,
    folderName: 'Jodi aar ekbar',
    photoCount: 33,
    photos: generatePhotoUrls('Jodi aar ekbar', [
      'IMG_9021.JPG', 'IMG_9027.JPG', 'IMG_9028.JPG', 'IMG_9031.JPG', 'IMG_9032.JPG',
      'IMG_9042.JPG', 'IMG_9045.JPG', 'IMG_9048.JPG', 'IMG_9051.JPG', 'IMG_9052.JPG',
      'IMG_9054.JPG', 'IMG_9055.JPG', 'IMG_9056.JPG', 'IMG_9063.JPG', 'IMG_9066.JPG',
      'IMG_9067.JPG', 'IMG_9073.JPG', 'IMG_9080.JPG', 'IMG_9104.JPG', 'IMG_9125.JPG',
      'IMG_9150.JPG', 'IMG_9151.JPG', 'IMG_9152.JPG', 'IMG_9155.JPG', 'IMG_9156.JPG',
      'IMG_9161.JPG', 'IMG_9162.JPG', 'IMG_9167.JPG', 'IMG_9175.JPG', 'IMG_9176.JPG',
      'IMG_9185.JPG', 'IMG_9186.JPG', 'IMG_9187.JPG'
    ])
  },
  {
    id: 'kagoj-kahini',
    title: 'Kagoj Kahini',
    titleBn: 'কাগজ কাহিনী',
    titleHi: 'कागज़ कहानी',
    category: { en: 'Experimental', bn: 'পরীক্ষামূলক', hi: 'प्रयोगात्मक' },
    description: {
      en: 'An experimental piece using paper as a central motif and storytelling tool. A unique theatrical experience that blends visual art with dramatic narrative.',
      bn: 'কাগজকে একটি কেন্দ্রীয় মোটিফ এবং গল্প বলার সরঞ্জাম হিসাবে ব্যবহার করে একটি পরীক্ষামূলক কাজ।',
      hi: 'कागज को एक केंद्रीय रूपांकन और कहानी कहने के उपकरण के रूप में उपयोग करने वाला एक प्रयोगात्मक टुकड़ा।'
    },
    thumbnailUrl: `${THUMBNAIL_BASE}/Kagoj%20Kahini/Picture-08.jpg`,
    folderName: 'Kagoj Kahini',
    photoCount: 5,
    photos: generatePhotoUrls('Kagoj Kahini', ['44.jpg', '45.jpg', '46.jpg', 'Picture-08.jpg', 'Picture-09.jpg'])
  },
  {
    id: 'kaliprasanna-o-ora',
    title: 'Kaliprasanna O Ora',
    titleBn: 'কালীপ্রসন্ন ও ওরা',
    titleHi: 'कालीप्रसन्न ओ ओरा',
    category: { en: 'Historical', bn: 'ঐতিহাসিক', hi: 'ऐतिहासिक' },
    description: {
      en: 'A historical drama based on the life and times of Kaliprasanna Singha, the legendary translator of Mahabharata into Bengali. A tribute to Bengali literary heritage.',
      bn: 'কালীপ্রসন্ন সিংহের জীবন ও সময়ের ওপর ভিত্তি করে একটি ঐতিহাসিক নাটক।',
      hi: 'कालीप्रसन्न सिंह के जीवन और समय पर आधारित एक ऐतिहासिक नाटक।'
    },
    thumbnailUrl: `${THUMBNAIL_BASE}/Kaliprasanna%20o%20ora/Picture-02.jpg`,
    folderName: 'Kaliprasanna o ora',
    photoCount: 9,
    photos: generatePhotoUrls('Kaliprasanna o ora', [
      'Picture-02.jpg', 'Picture-50.JPG', 'Picture-51.JPG', 'Picture-52.JPG',
      'gh gh.JPG', 'rt ygh.JPG', 'samatat043.jpg', 'samatat045.jpg', 'tgh gfh.JPG'
    ])
  },
  {
    id: 'podi-pishi',
    title: 'Podi Pishi',
    titleBn: 'পদি পিসি',
    titleHi: 'पोदी पिशी',
    category: { en: 'Comedy', bn: 'কমেডি', hi: 'कॉमेडी' },
    description: {
      en: 'A delightful comedy that captures the eccentricities of life. This heartwarming play brings laughter while exploring family dynamics and generational bonds.',
      bn: 'জীবনের অদ্ভুততাগুলিকে ধরে রাখা একটি আনন্দদায়ক কমেডি।',
      hi: 'एक आनंदमय कॉमेडी जो जीवन की विलक्षणताओं को दर्शाती है।'
    },
    thumbnailUrl: `${THUMBNAIL_BASE}/Podi%20pishi/Picture%20370.jpg`,
    folderName: 'Podi pishi',
    photoCount: 14,
    photos: generatePhotoUrls('Podi pishi', [
      '07.jpg', '21.jpg', '22.jpg', '23.jpg', 'Picture 370.jpg', 'Picture 390.jpg',
      'Picture 430.jpg', 'Picture 452.jpg', 'Picture-28.jpg', 'Picture-35.jpg',
      'Picture-36.jpg', 'Picture-37.jpg', 'RollBack (1).jpg', 'RollBack.jpg'
    ])
  },
  {
    id: 'roopnagarer-roopkotha',
    title: 'Roopnagarer Roopkotha',
    titleBn: 'রূপনগরের রূপকথা',
    titleHi: 'रूपनगर की रूपकथा',
    category: { en: 'Fantasy/Folk', bn: 'কল্পকাহিনী/লোক', hi: 'काल्पनिक/लोक' },
    description: {
      en: 'A folk-inspired fantasy tale woven with music and magic. This enchanting production brings Bengali folklore to life with vibrant storytelling and traditional music.',
      bn: 'সঙ্গীত এবং জাদুর সাথে বোনা একটি লোক-অনুপ্রাণিত রূপকথা।',
      hi: 'संगीत और जादू से बुनी गई एक लोक-प्रेरित काल्पनिक कहानी।'
    },
    thumbnailUrl: `${THUMBNAIL_BASE}/Roopnagarer%20roopkotha/Picture-01.jpg`,
    folderName: 'Roopnagarer roopkotha',
    photoCount: 8,
    photos: generatePhotoUrls('Roopnagarer roopkotha', [
      '24.jpg', '25.jpg', '5yuytuj.jpg', 'Picture-01.jpg', 'Picture-15.jpg',
      'samatat024.jpg', 'samatat025.jpg', 'samatat026.jpg'
    ])
  },
  {
    id: 'swapnomoy',
    title: 'Swapnomoy',
    titleBn: 'স্বপ্নময়',
    titleHi: 'स्वप्नमय',
    category: { en: 'Dream Drama', bn: 'স্বপ্ন নাটক', hi: 'स्वप्न नाटक' },
    description: {
      en: 'A journey through dreams and the subconscious mind. This poetic drama explores the blurred lines between reality and fantasy, dreams and waking life.',
      bn: 'স্বপ্ন এবং অবচেতন মনের মধ্য দিয়ে একটি যাত্রা।',
      hi: 'सपनों और अवचेतन मन के माध्यम से एक यात्रा।'
    },
    thumbnailUrl: `${THUMBNAIL_BASE}/Swapnomoy/IMG_1114.jpg`,
    folderName: 'Swapnomoy',
    photoCount: 31,
    photos: generatePhotoUrls('Swapnomoy', [
      'IMG_1086.jpg', 'IMG_1087.jpg', 'IMG_1095.jpg', 'IMG_1099.jpg', 'IMG_1100.jpg',
      'IMG_1104.jpg', 'IMG_1105.jpg', 'IMG_1111.jpg', 'IMG_1112.jpg', 'IMG_1114.jpg',
      'IMG_1116.jpg', 'IMG_1117.jpg', 'IMG_1118.jpg', 'IMG_1119.jpg', 'IMG_1120.jpg',
      'IMG_1125.jpg', 'IMG_1127.jpg', 'IMG_1132.jpg', 'IMG_1133.jpg', 'IMG_1135.jpg',
      'IMG_1137.jpg', 'IMG_1139.jpg', 'IMG_1141.jpg', 'IMG_1145.jpg', 'IMG_1146.jpg',
      'IMG_1148.jpg', 'IMG_1151.jpg', 'IMG_1152.jpg', 'IMG_1153.jpg', 'IMG_1157.jpg', 'IMG_1158.jpg'
    ])
  },
  {
    id: 'satmar-paloyan',
    title: 'Satmar Paloyan',
    titleBn: 'সাতমার পালোয়ান',
    titleHi: 'सातमार पहलवान',
    category: { en: 'Cultural Drama', bn: 'সাংস্কৃতিক নাটক', hi: 'सांस्कृतिक नाटक' },
    description: {
      en: 'Another perspective on the legendary wrestling drama, showcasing the valor and traditions of rural Bengal wrestlers.',
      bn: 'কিংবদন্তি কুস্তি নাটকের আরেকটি দৃষ্টিভঙ্গি।',
      hi: 'प्रसिद्ध कुश्ती नाटक पर एक और दृष्टिकोण।'
    },
    thumbnailUrl: `${THUMBNAIL_BASE}/Satmar%20Paloyan/IMG_5358.jpg`,
    folderName: 'Satmar Paloyan',
    photoCount: 19,
    photos: generatePhotoUrls('Satmar Paloyan', [
      '9.jpg', 'IMG_5244.jpg', 'IMG_5260.jpg', 'IMG_5273.jpg', 'IMG_5304.jpg',
      'IMG_5310.jpg', 'IMG_5333.jpg', 'IMG_5358.jpg', 'IMG_5396.jpg', 'IMG_5405.jpg',
      'IMG_5450.jpg', 'IMG_5477.jpg', 'IMG_5478.jpg', 'IMG_8516.jpg', 'IMG_8518.jpg',
      'IMG_8526.jpg', 'IMG_8533.jpg', 'IMG_9933.jpg', 'IMG_9997.jpg'
    ])
  },
  {
    id: 'mabhoi',
    title: 'Mabhoi',
    titleBn: 'মাভৈ',
    titleHi: 'माभोई',
    category: { en: 'Social Drama', bn: 'সামাজিক নাটক', hi: 'सामाजिक नाटक' },
    description: {
      en: 'A thought-provoking social drama exploring fear and courage in everyday life.',
      bn: 'দৈনন্দিন জীবনে ভয় এবং সাহসের অন্বেষণকারী একটি চিন্তা-উদ্দীপক সামাজিক নাটক।',
      hi: 'रोजमर्रा की जिंदगी में डर और साहस की खोज करने वाला एक विचारोत्तेजक सामाजिक नाटक।'
    },
    thumbnailUrl: `${THUMBNAIL_BASE}/Mabhoi/Picture-21.jpg`,
    folderName: 'Mabhoi',
    photoCount: 6,
    photos: generatePhotoUrls('Mabhoi', ['26.jpg', '27.jpg', '28.jpg', 'Picture-21.jpg', 'samatat041.jpg', 'samatat042.jpg'])
  },
  {
    id: 'neel-phool',
    title: 'Neel Phool',
    titleBn: 'নীল ফুল',
    titleHi: 'नील फूल',
    category: { en: 'Poetic Drama', bn: 'কাব্য নাটক', hi: 'काव्य नाटक' },
    description: {
      en: 'A poetic drama about the elusive blue flower, symbolizing the pursuit of dreams and the beauty of unattainable desires.',
      bn: 'অধরা নীল ফুল সম্পর্কে একটি কাব্যিক নাটক।',
      hi: 'अधूरे नीले फूल के बारे में एक काव्यात्मक नाटक।'
    },
    thumbnailUrl: `${THUMBNAIL_BASE}/Neel%20Phool/Picture-18.jpg`,
    folderName: 'Neel Phool',
    photoCount: 4,
    photos: generatePhotoUrls('Neel Phool', ['12.jpg', '58.jpg', '59.jpg', 'Picture-18.jpg'])
  },
  {
    id: 'shopno-muhurte',
    title: 'Shopno Muhurte',
    titleBn: 'স্বপ্ন মুহূর্তে',
    titleHi: 'स्वप्न मुहूर्त',
    category: { en: 'Romantic Drama', bn: 'রোমান্টিক নাটক', hi: 'रोमांटिक नाटक' },
    description: {
      en: 'A romantic drama about fleeting moments of dreams and the magic of imagination.',
      bn: 'স্বপ্নের ক্ষণস্থায়ী মুহূর্ত এবং কল্পনার জাদু সম্পর্কে একটি রোমান্টিক নাটক।',
      hi: 'सपनों के क्षणिक पलों और कल्पना के जादू के बारे में एक रोमांटिक नाटक।'
    },
    thumbnailUrl: `${THUMBNAIL_BASE}/Shopno%20muhurte/Picture-17.jpg`,
    folderName: 'Shopno muhurte',
    photoCount: 4,
    photos: generatePhotoUrls('Shopno muhurte', ['47.jpg', '48.jpg', '60.jpg', 'Picture-17.jpg'])
  },
  {
    id: 'sukhno-gange-ashuk',
    title: 'Sukhno Gange Ashuk',
    titleBn: 'শুকনো গঙ্গে অশুক',
    titleHi: 'सूखी गंगा में अशोक',
    category: { en: 'Environmental Drama', bn: 'পরিবেশ নাটক', hi: 'पर्यावरण नाटक' },
    description: {
      en: 'A powerful environmental drama about the drying Ganges and ecological crisis, blending mythology with contemporary concerns.',
      bn: 'শুকিয়ে যাওয়া গঙ্গা এবং পরিবেশগত সংকট সম্পর্কে একটি শক্তিশালী পরিবেশ নাটক।',
      hi: 'सूखती गंगा और पारिस्थितिक संकट के बारे में एक शक्तिशाली पर्यावरणीय नाटक।'
    },
    thumbnailUrl: `${THUMBNAIL_BASE}/Sukhno%20Gange%20Ashuk/W94A5817.jpg`,
    folderName: 'Sukhno Gange Ashuk',
    photoCount: 3,
    photos: generatePhotoUrls('Sukhno Gange Ashuk', ['W94A5817.jpg', 'W94A5818.jpg', 'W94A5825.jpg'])
  },
  {
    id: 'telenapotar-moto',
    title: 'Telenapotar Moto',
    titleBn: 'তেলেনাপোতার মতো',
    titleHi: 'तेलेनापोतार मोतो',
    category: { en: 'Social Satire', bn: 'সামাজিক ব্যঙ্গ', hi: 'सामाजिक व्यंग्य' },
    description: {
      en: 'A social satire that holds up a mirror to society, exploring themes of identity and belonging.',
      bn: 'একটি সামাজিক ব্যঙ্গ যা সমাজের সামনে আয়না ধরে।',
      hi: 'एक सामाजिक व्यंग्य जो समाज के सामने दर्पण रखता है।'
    },
    thumbnailUrl: `${THUMBNAIL_BASE}/Telenapotar%20moto/IMG_8718.jpg`,
    folderName: 'Telenapotar moto',
    photoCount: 5,
    photos: generatePhotoUrls('Telenapotar moto', [
      'IMG_8718.jpg', 'IMG_8832.jpg', 'IMG_8860.jpg', 'IMG_8888.jpg', 'IMG_8894.jpg'
    ])
  },
  {
    id: 'wazeb-mianr-biya',
    title: 'Wazeb Mianr Biya',
    titleBn: 'ওয়াজেব মিঞার বিয়ে',
    titleHi: 'वाज़ेब मियाँ की शादी',
    category: { en: 'Comedy', bn: 'কমেডি', hi: 'कॉमेडी' },
    description: {
      en: 'A hilarious comedy about the wedding adventures of Wazeb Mian, filled with wit, humor, and social commentary.',
      bn: 'ওয়াজেব মিয়ানের বিয়ের অ্যাডভেঞ্চার নিয়ে একটি হাস্যকর কমেডি।',
      hi: 'वाज़ेब मियाँ की शादी के रोमांच के बारे में एक हँसोड़ कॉमेडी।'
    },
    thumbnailUrl: `${THUMBNAIL_BASE}/wazeb%20mianr%20biya/samatat033.jpg`,
    folderName: 'wazeb mianr biya',
    photoCount: 6,
    photos: generatePhotoUrls('wazeb mianr biya', [
      'samatat033.jpg', 'samatat034.jpg', 'samatat035.jpg', 'samatat036.jpg', 'samatat038.jpg', 'samatat039.jpg'
    ])
  }
];

// Get production by ID
export function getProductionById(id: string): Production | undefined {
  return productions.find(p => p.id === id);
}

// Get all production IDs
export function getAllProductionIds(): string[] {
  return productions.map(p => p.id);
}

// Get productions by category
export function getProductionsByCategory(category: string): Production[] {
  return productions.filter(p =>
    p.category.en.toLowerCase().includes(category.toLowerCase())
  );
}
