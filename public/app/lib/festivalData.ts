// Festival data extracted from original leaflets (2000-2024)
// Samatat Natyamela - Annual Theatre Festival

export type Language = 'en' | 'bn' | 'hi';
export type TranslatedText = Record<Language, string>;

export interface Play {
  title: TranslatedText;
  group: TranslatedText;
  director: TranslatedText;
  playwright?: TranslatedText;
  cast?: TranslatedText;
  date: string;
  time?: string;
  description?: TranslatedText;
}

export interface Festival {
  year: number;
  edition: number;
  title: TranslatedText;
  dates: TranslatedText;
  venue: TranslatedText;
  description?: TranslatedText;
  leafletImage: string;
  plays: Play[];
}

// Helper to create storage URL
const storageUrl = (path: string) =>
  `https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/${encodeURIComponent(path)}?alt=media`;

export const festivalsData: Festival[] = [
  // 2024 - 25th Edition
  {
    year: 2024,
    edition: 25,
    title: {
      en: 'Samatat Natyamela - Silver Jubilee',
      bn: 'সমতট নাট্যমেলা - রজত জয়ন্তী',
      hi: 'समतट नाट्यमेला - रजत जयंती'
    },
    dates: {
      en: '21-31 December 2024',
      bn: '২১-৩১ ডিসেম্বর ২০২৪',
      hi: '21-31 दिसंबर 2024'
    },
    venue: {
      en: 'Uttarpara Gangabhaban',
      bn: 'উত্তরপাড়া গঙ্গাভবন',
      hi: 'उत्तरपाड़ा गंगाभवन'
    },
    leafletImage: storageUrl('images/Festivals/Natyamela 2024/24.jpg'),
    plays: [
      {
        title: { en: 'Charone Seba Lage', bn: 'চরণে সেবা লাগে', hi: 'चरणे सेबा लागे' },
        group: { en: 'Chabik, Kolkata', bn: 'চাবিক, কলকাতা', hi: 'चाबिक, कोलकाता' },
        director: { en: 'Shekhar Duttagupta', bn: 'শেখহার দত্তগুপ্ত', hi: 'शेखर दत्तगुप्ता' },
        date: '21 December 2024',
        time: '6:00 PM'
      },
      {
        title: { en: 'Dusra', bn: 'দুসরা', hi: 'दुसरा' },
        group: { en: 'Name Natya', bn: 'নামে নাট্য', hi: 'नामे नाट्य' },
        director: { en: 'Soumitra Hazaldar', bn: 'সৌমিত্র হাজলদার', hi: 'सौमित्र हाजलदार' },
        playwright: { en: 'Ratan Kumar Das', bn: 'রতন কুমার দাস', hi: 'रतन कुमार दास' },
        date: '22 December 2024',
        time: '6:00 PM'
      },
      {
        title: { en: 'Dhanabatar', bn: 'ধনাবতার', hi: 'धनाबतार' },
        group: { en: 'Sayer, Kolkata', bn: 'সায়ের, কলকাতা', hi: 'सायेर, कोलकाता' },
        director: { en: 'Utpal Chattopadhyay', bn: 'উৎপল চট্টোপাধ্যায়', hi: 'उत्पल चट्टोपाध्याय' },
        date: '23 December 2024',
        time: '6:00 PM'
      },
      {
        title: { en: 'Aksharik', bn: 'অক্ষরিক', hi: 'अक्षरिक' },
        group: { en: 'Amrita, Kolkata', bn: 'অমৃতা, কলকাতা', hi: 'अमृता, कोलकाता' },
        director: { en: 'Debashis Majumdar', bn: 'দেবাশিস মজুমদার', hi: 'देबाशिस मजुमदार' },
        date: '24 December 2024',
        time: '6:00 PM'
      },
      {
        title: { en: 'Baranda', bn: 'বারান্দা', hi: 'बारांदा' },
        group: { en: 'Jhadanpur Ramyani', bn: 'জ্ঞানপুর রম্যানি', hi: 'झादनपुर रम्यानी' },
        director: { en: 'Soumik Ghosh', bn: 'সৌমিক ঘোষ', hi: 'सौमिक घोष' },
        date: '25 December 2024',
        time: '6:00 PM'
      },
      {
        title: { en: 'Ferari Fauj', bn: 'ফেরারী ফৌজ', hi: 'फेरारी फौज' },
        group: { en: 'Nehari Natyasanstha', bn: 'নেহারী নাট্যসংস্থা', hi: 'नेहारी नाट्यसंस्था' },
        director: { en: 'Debashis Maity', bn: 'দেবাশিস মাইতি', hi: 'देबाशिस माइती' },
        playwright: { en: 'Utpal Dutt', bn: 'উৎপল দত্ত', hi: 'उत्पल दत्त' },
        date: '26 December 2024',
        time: '6:00 PM'
      },
      {
        title: { en: 'Madhyama Gandhi', bn: 'মধ্যমা গান্ধী', hi: 'मध्यमा गांधी' },
        group: { en: 'Troyee, Kolkata', bn: 'ত্রয়ী, কলকাতা', hi: 'त्रयी, कोलकाता' },
        director: { en: 'Nirmalya Mukherjee', bn: 'নির্মাল্য মুখার্জী', hi: 'निर्मल्या मुखर्जी' },
        date: '27 December 2024',
        time: '6:00 PM'
      },
      {
        title: { en: 'Maal Jungle', bn: 'মাল জঙ্গলে', hi: 'माल जंगले' },
        group: { en: 'Samat', bn: 'সমতট', hi: 'समतट' },
        director: { en: 'Jyotirmoy Chakraborty', bn: 'জ্যোতির্ময় চক্রবর্তী', hi: 'ज्योतिर्मय चक्रवर्ती' },
        date: '28 December 2024',
        time: '6:00 PM'
      },
      {
        title: { en: 'Swapnamoy', bn: 'স্বপ্নময়', hi: 'स्वप्नमय' },
        group: { en: 'Samat Natya', bn: 'সমতট নাট্য', hi: 'समतट नाट्य' },
        director: { en: 'Premananda Mukhopadhyay', bn: 'প্রেমানন্দ মুখোপাধ্যায়', hi: 'प्रेमानंद मुखोपाध्याय' },
        date: '29 December 2024',
        time: '6:00 PM'
      },
      {
        title: { en: 'Kelashin', bn: 'কেলাসিন', hi: 'केलासिन' },
        group: { en: 'Pacha, Kolkata', bn: 'পাচা, কলকাতা', hi: 'पाचा, कोलकाता' },
        director: { en: 'Varun Kumar Das', bn: 'বরুণ কুমার দাস', hi: 'वरुण कुमार दास' },
        date: '30 December 2024',
        time: '6:00 PM'
      },
      {
        title: { en: 'Palish', bn: 'পালিশ', hi: 'पालिश' },
        group: { en: 'Panchom Baidin', bn: 'পঞ্চম বৈদিন', hi: 'पंचम बैदिन' },
        director: { en: 'Rahul Dasgupta', bn: 'রাহুল দাসগুপ্ত', hi: 'राहुल दासगुप्ता' },
        date: '31 December 2024',
        time: '6:00 PM'
      }
    ]
  },

  // 2023 - 24th Edition
  {
    year: 2023,
    edition: 24,
    title: {
      en: 'Samatat Natyamela',
      bn: 'সমতট নাট্যমেলা',
      hi: 'समतट नाट्यमेला'
    },
    dates: {
      en: '22-31 December 2023',
      bn: '২২-৩১ ডিসেম্বর ২০২৩',
      hi: '22-31 दिसंबर 2023'
    },
    venue: {
      en: 'Uttarpara Gangabhaban',
      bn: 'উত্তরপাড়া গঙ্গাভবন',
      hi: 'उत्तरपाड़ा गंगाभवन'
    },
    leafletImage: storageUrl('images/Festivals/Natyamela 2023/23.jpg'),
    plays: [
      {
        title: { en: 'Pratishodh', bn: 'প্রতিশোধ', hi: 'प्रतिशोध' },
        group: { en: 'Padakuti, Kolkata', bn: 'পদকুটি, কলকাতা', hi: 'पदकुटी, कोलकाता' },
        director: { en: 'Sabyasachi Chakraborty', bn: 'সব্যসাচী চক্রবর্তী', hi: 'सब्यसाची चक्रवर्ती' },
        date: '22 December 2023',
        time: '6:00 PM'
      },
      {
        title: { en: 'Ratrang', bn: 'রাত্রং', hi: 'रात्रंग' },
        group: { en: 'Arabak, Dhaka', bn: 'আরবক, ঢাকা', hi: 'अरबक, ढाका' },
        director: { en: 'Mamunur Rashid', bn: 'মামুনুর রশিদ', hi: 'मामुनुर रशीद' },
        date: '23 December 2023',
        time: '6:00 PM'
      },
      {
        title: { en: 'Jodi Ar Ekbar', bn: 'যদি আর একবার', hi: 'जदि आर एकबार' },
        group: { en: 'Samatat Sanskriti, Uttarpara', bn: 'সমতট সংস্কৃতি, উত্তরপাড়া', hi: 'समतट संस्कृति, उत्तरपाड़ा' },
        director: { en: 'Soumadeb Hui', bn: 'সৌমদেব হুই', hi: 'सौमदेब हुई' },
        date: '24 December 2023',
        time: '6:00 PM'
      },
      {
        title: { en: 'Mitra', bn: 'মিত্রা', hi: 'मित्रा' },
        group: { en: 'Pacha, Kolkata', bn: 'পাচা, কলকাতা', hi: 'पाचा, कोलकाता' },
        director: { en: 'Soumitra Hazaldar', bn: 'সৌমিত্র হাজলদার', hi: 'सौमित्र हाजलदार' },
        cast: { en: 'Soumitra Hazaldar, Shruti Ghosh Hazaldar', bn: 'সৌমিত্র হাজলদার, শ্রুতি ঘোষ হাজলদার', hi: 'सौमित्र हाजलदार, श्रुति घोष हाजलदार' },
        date: '25 December 2023',
        time: '6:00 PM'
      },
      {
        title: { en: 'Mona Likhe Monika', bn: 'ম না লিখে মনিকা', hi: 'म ना लिखे मोनिका' },
        group: { en: 'Jhadanpur Ramyani', bn: 'জ্ঞানপুর রম্যানি', hi: 'झादनपुर रम्यानी' },
        director: { en: 'Biswajit Chakraborty', bn: 'বিশ্বজিৎ চক্রবর্তী', hi: 'बिस्वजित चक्रवर्ती' },
        date: '26 December 2023',
        time: '6:00 PM'
      },
      {
        title: { en: 'Habir Notraj-E', bn: 'হাবির নটরাজ-ই', hi: 'हाबिर नटराज-ई' },
        group: { en: 'Jhadanpur Ramyani', bn: 'জ্ঞানপুর রম্যানি', hi: 'झादनपुर रम्यानी' },
        director: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        date: '27 December 2023',
        time: '6:00 PM'
      },
      {
        title: { en: 'Khoj', bn: 'খোঁজ', hi: 'खोज' },
        group: { en: 'Sanjeet, Kolkata', bn: 'সঞ্জীত, কলকাতা', hi: 'संजीत, कोलकाता' },
        director: { en: 'Debesh Chattopadhyay', bn: 'দেবেশ চট্টোপাধ্যায়', hi: 'देबेश चट्टोपाध्याय' },
        date: '28 December 2023',
        time: '6:00 PM'
      },
      {
        title: { en: 'Jorakumari', bn: 'জোড়াকুমারী', hi: 'जोड़ाकुमारी' },
        group: { en: 'Purba Paschim, Kolkata', bn: 'পূর্ব পশ্চিম, কলকাতা', hi: 'पूर्व पश्चिम, कोलकाता' },
        director: { en: 'Meghna Bhattacharya', bn: 'মেঘনা ভট্টাচার্য', hi: 'मेघना भट्टाचार्य' },
        date: '29 December 2023',
        time: '6:00 PM'
      },
      {
        title: { en: 'Ebar Dharmarajya', bn: 'এবার ধর্মরাজ্য', hi: 'एबार धर्मराज्य' },
        group: { en: 'ECTA', bn: 'একতা', hi: 'एकता' },
        director: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        date: '30 December 2023',
        time: '6:00 PM'
      },
      {
        title: { en: 'Janmantar', bn: 'জন্মান্তর', hi: 'जन्मांतर' },
        group: { en: 'Natyashala', bn: 'নাট্যশালা', hi: 'नाट्यशाला' },
        director: { en: 'Sudipta Sensharma', bn: 'সুদীপ্ত সেনশর্মা', hi: 'सुदीप्त सेनशर्मा' },
        date: '31 December 2023',
        time: '6:00 PM'
      }
    ]
  },

  // 2022 - 23rd Edition
  {
    year: 2022,
    edition: 23,
    title: {
      en: 'Samatat Natyamela',
      bn: 'সমতট নাট্যমেলা',
      hi: 'समतट नाट्यमेला'
    },
    dates: {
      en: '22-31 December 2022',
      bn: '২২-৩১ ডিসেম্বর ২০২২',
      hi: '22-31 दिसंबर 2022'
    },
    venue: {
      en: 'Uttarpara Gangabhaban',
      bn: 'উত্তরপাড়া গঙ্গাভবন',
      hi: 'उत्तरपाड़ा गंगाभवन'
    },
    leafletImage: storageUrl('images/Festivals/Natyamela 2022/22.jpg'),
    plays: [
      {
        title: { en: 'Satya Phire Esho', bn: 'সত্য ফিরে এসো', hi: 'सत्य फिरे एसो' },
        group: { en: 'Pratibimba', bn: 'প্রতিবিম্ব', hi: 'प्रतिबिम्ब' },
        director: { en: 'Paran Bandyopadhyay', bn: 'পরাণ বন্দ্যোপাধ্যায়', hi: 'परान बंद्योपाध्याय' },
        date: '22 December 2022',
        time: '6:00 PM'
      },
      {
        title: { en: 'Bhabishyater Smriti', bn: 'ভবিষ্যতের স্মৃতি', hi: 'भविष्यतेर स्मृति' },
        group: { en: 'Sayer', bn: 'সায়ের', hi: 'सायेर' },
        director: { en: 'Meghna Bhattacharya, Debashis Roy', bn: 'মেঘনা ভট্টাচার্য, দেবাশিস রায়', hi: 'मेघना भट्टाचार्य, देबाशिस राय' },
        date: '23 December 2022',
        time: '6:00 PM'
      },
      {
        title: { en: 'Rupal Tarer Behala', bn: 'রূপাল তারের বেহালা', hi: 'रूपाल तारेर बेहाला' },
        group: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        director: { en: 'Utpal Chattopadhyay, Sujan Mukhopadhyay', bn: 'উৎপল চট্টোপাধ্যায়, সুজন মুখোপাধ্যায়', hi: 'उत्पल चट्टोपाध्याय, सुजन मुखोपाध्याय' },
        date: '24 December 2022',
        time: '6:30 PM'
      },
      {
        title: { en: 'Julius Caesar', bn: 'জুলিয়াস সিজার', hi: 'जूलियस सीजर' },
        group: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        director: { en: 'Mohammad Saidul Alam Chowdhury', bn: 'মহম্মদ সাইদুল আলম চৌধুরী', hi: 'मोहम्मद सैदुल आलम चौधरी' },
        date: '25 December 2022',
        time: '6:00 PM'
      },
      {
        title: { en: 'Kobe Facebook', bn: 'কবে ফেসবুক', hi: 'कबे फेसबुक' },
        group: { en: 'Ababak Natudul, Dhaka', bn: 'আববক নাটুদল, ঢাকা', hi: 'अबाबक नाटुदल, ढाका' },
        director: { en: 'Mamunur Rashid', bn: 'মামুনুর রশিদ', hi: 'मामुनुर रशीद' },
        date: '25 December 2022',
        time: '6:00 PM'
      },
      {
        title: { en: 'Uttaptapurir Pran', bn: 'উত্তপ্তপুরীর প্রাণ', hi: 'उत्तप्तपुरीर प्राण' },
        group: { en: 'Sanjab', bn: 'সঞ্জব', hi: 'संजब' },
        director: { en: 'Debashis', bn: 'দেবাশিস', hi: 'देबाशिस' },
        playwright: { en: 'Salil Sarkar', bn: 'সলীল সরকার', hi: 'सलील सरकार' },
        date: '26 December 2022',
        time: '6:00 PM'
      },
      {
        title: { en: 'Doy', bn: 'দায়', hi: 'दाय' },
        group: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        director: { en: 'Suman Chattopadhyay', bn: 'সুমন চট্টোপাধ্যায়', hi: 'सुमन चट्टोपाध्याय' },
        date: '27 December 2022',
        time: '6:00 PM'
      },
      {
        title: { en: 'Ek Bori', bn: 'এক বরি', hi: 'एक बोरी' },
        group: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        director: { en: 'Soumi Sengupta', bn: 'সৌমি সেনগুপ্ত', hi: 'सौमि सेनगुप्ता' },
        date: '28 December 2022',
        time: '6:00 PM'
      },
      {
        title: { en: 'Semsud', bn: 'সেমসুদ', hi: 'सेमसुद' },
        group: { en: 'Sayandev Bhattacharya', bn: 'সায়নদেব ভট্টাচার্য', hi: 'सायनदेब भट्टाचार्य' },
        director: { en: 'Amar Mitra', bn: 'অমর মিত্র', hi: 'अमर मित्र' },
        date: '29 December 2022',
        time: '6:00 PM'
      },
      {
        title: { en: 'Kashtha Manab', bn: 'কাষ্ঠ মানব', hi: 'काष्ठ मानब' },
        group: { en: 'Kaberia Mon', bn: 'কাবেরিয়া মন', hi: 'काबेरिया मोन' },
        director: { en: 'Samit Kumar Roy, Abhyar Chakraborty', bn: 'সমিত কুমার রায়, অভ্যার চক্রবর্তী', hi: 'समित कुमार राय, अभ्यार चक्रवर्ती' },
        date: '30 December 2022',
        time: '6:00 PM'
      },
      {
        title: { en: 'Ami Jagadish', bn: 'আমি জগদীশ', hi: 'आमि जगदीश' },
        group: { en: 'Ekta, New Jersey, North America', bn: 'একতা, নিউ জার্সি, উত্তর আমেরিকা', hi: 'एकता, न्यू जर्सी, उत्तर अमेरिका' },
        director: { en: 'Soumendu Bhattacharya, Sudipta Soimik', bn: 'সৌমেন্দু ভট্টাচার্য, সুদীপ্ত সৈমিক', hi: 'सौमेंदु भट्टाचार्य, सुदीप्ता सोइमिक' },
        date: '31 December 2022',
        time: '6:00 PM'
      }
    ]
  },

  // 2021 - 22nd Edition
  {
    year: 2021,
    edition: 22,
    title: {
      en: 'Samatat Natyamela',
      bn: 'সমতট নাট্যমেলা',
      hi: 'समतट नाट्यमेला'
    },
    dates: {
      en: '24-30 December 2021',
      bn: '২৪-৩০ ডিসেম্বর ২০২১',
      hi: '24-30 दिसंबर 2021'
    },
    venue: {
      en: 'Uttarpara Gangabhaban',
      bn: 'উত্তরপাড়া গঙ্গাভবন',
      hi: 'उत्तरपाड़ा गंगाभवन'
    },
    leafletImage: storageUrl('images/Festivals/Natyamela 2021/21.jpg'),
    plays: [
      {
        title: { en: 'Ekdin Eidine Tajmahal Para', bn: 'একদিন এইদিনে তাজমহল পাড়া', hi: 'एकदिन इदिने ताजमहल पाड़ा' },
        group: { en: 'Sanskriti', bn: 'সংস্কৃতি', hi: 'संस्कृति' },
        director: { en: 'Debesh Chattopadhyay', bn: 'দেবেশ চট্টোপাধ্যায়', hi: 'देबेश चट्टोपाध्याय' },
        cast: { en: 'Meghna Bhattacharya, Debesh Chattopadhyay', bn: 'মেঘনা ভট্টাচার্য, দেবেশ চট্টোপাধ্যায়', hi: 'मेघना भट्टाचार्य, देबेश चट्टोपाध्याय' },
        date: '24 December 2021',
        time: '6:00 PM'
      },
      {
        title: { en: 'Mithyebadi', bn: 'মিথ্যেবাদী', hi: 'मिथ्येबादी' },
        group: { en: 'Pratibimba', bn: 'প্রতিবিম্ব', hi: 'प्रतिबिम्ब' },
        director: { en: 'Paran Bandyopadhyay', bn: 'পরাণ বন্দ্যোপাধ্যায়', hi: 'परान बंद्योपाध्याय' },
        date: '25 December 2021',
        time: '6:00 PM'
      },
      {
        title: { en: 'Sarayutire Muni', bn: 'সরযূতীরে মুনি', hi: 'सरयूतीरे मुनि' },
        group: { en: 'Name Natya', bn: 'নামে নাট্য', hi: 'नामे नाट्य' },
        director: { en: 'Soumitra Hazaldar', bn: 'সৌমিত্র হাজলদার', hi: 'सौमित्र हाजलदार' },
        cast: { en: 'Swatilekha Sengupta, Soumitra Hazaldar', bn: 'স্বাতীলেখা সেনগুপ্ত, সৌমিত্র হাজলদার', hi: 'स्वातीलेखा सेनगुप्ता, सौमित्र हाजलदार' },
        date: '26 December 2021',
        time: '6:00 PM'
      },
      {
        title: { en: 'Pagla Paru', bn: 'পাগলা পাড়ু', hi: 'पागला पाड़ू' },
        group: { en: 'Purbapashchim', bn: 'পূর্বপশ্চিম', hi: 'पूर्वपश्चिम' },
        director: { en: 'Soumik Mitra', bn: 'সৌমিক মিত্র', hi: 'सौमिक मित्र' },
        playwright: { en: 'Utpal Chattopadhyay', bn: 'উৎপল চট্টোপাধ্যায়', hi: 'उत्पल चट्टोपाध्याय' },
        date: '27 December 2021',
        time: '6:00 PM'
      },
      {
        title: { en: 'Bisarjan', bn: 'বিসর্জন', hi: 'बिसर्जन' },
        group: { en: 'Samatat Sanskriti', bn: 'সমতট সংস্কৃতি', hi: 'समतट संस्कृति' },
        director: { en: 'Abhijit Mukhopadhyay', bn: 'অভিজিৎ মুখোপাধ্যায়', hi: 'अभिजित मुखोपाध्याय' },
        playwright: { en: 'Rabindranath Tagore', bn: 'রবীন্দ্রনাথ ঠাকুর', hi: 'रवींद्रनाथ टैगोर' },
        date: '28 December 2021',
        time: '6:00 PM'
      },
      {
        title: { en: 'Typist', bn: 'টাইপিষ্ট', hi: 'टाइपिस्ट' },
        group: { en: 'Mukhamukhi', bn: 'মুখামুখি', hi: 'मुखामुखी' },
        director: { en: 'Soumik Basu', bn: 'সৌমিক বসু', hi: 'सौमिक बसु' },
        date: '29 December 2021',
        time: '6:00 PM'
      },
      {
        title: { en: 'Merchant of Venice', bn: 'মার্চেন্ট অফ ভেনিস', hi: 'मर्चेंट ऑफ वेनिस' },
        group: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        director: { en: 'Anurup Basu Roy, Soumadeb Hui', bn: 'অনুরূপ বসু রায়, সৌমদেব হুই', hi: 'अनुरूप बसु राय, सौमदेब हुई' },
        playwright: { en: 'William Shakespeare', bn: 'উইলিয়াম শেক্সপিয়র', hi: 'विलियम शेक्सपियर' },
        date: '30 December 2021',
        time: '6:00 PM'
      }
    ]
  },

  // 2020 - 21st Edition
  {
    year: 2020,
    edition: 21,
    title: {
      en: 'Samatat Natyamela',
      bn: 'সমতট নাট্যমেলা',
      hi: 'समतट नाट्यमेला'
    },
    dates: {
      en: '25-29 December 2020',
      bn: '২৫-২৯ ডিসেম্বর ২০২০',
      hi: '25-29 दिसंबर 2020'
    },
    venue: {
      en: 'Uttarpara Gangabhaban',
      bn: 'উত্তরপাড়া গঙ্গাভবন',
      hi: 'उत्तरपाड़ा गंगाभवन'
    },
    description: {
      en: 'Limited festival due to COVID-19 pandemic with safety protocols',
      bn: 'কোভিড-১৯ মহামারীর কারণে সীমিত উৎসব, নিরাপত্তা প্রোটোকল সহ',
      hi: 'कोविड-19 महामारी के कारण सुरक्षा प्रोटोकॉल के साथ सीमित उत्सव'
    },
    leafletImage: storageUrl('images/Festivals/Natyamela 2020/20.jpg'),
    plays: [
      {
        title: { en: 'Damini-E', bn: 'দামিনী-এ', hi: 'दामिनी-ए' },
        group: { en: 'Sayer', bn: 'সায়ের', hi: 'सायेर' },
        director: { en: 'Meghnad Bhattacharya', bn: 'মেঘনাদ ভট্টাচার্য', hi: 'मेघनाद भट्टाचार्य' },
        playwright: { en: 'Chandan Sen', bn: 'চন্দন সেন', hi: 'चंदन सेन' },
        date: '25 December 2020',
        time: '6:00 PM'
      },
      {
        title: { en: 'Nobbi Kuthar Swati', bn: 'নব্বী কুঠার স্বতী', hi: 'नोब्बी कुठार स्वती' },
        group: { en: 'Name Natya', bn: 'নামে নাট্য', hi: 'नामे नाट्य' },
        director: { en: 'Gautam Haldar', bn: 'গৌতম হালদার', hi: 'गौतम हालदार' },
        playwright: { en: 'Jasimuddin', bn: 'জসীমউদ্দীন', hi: 'जसीमुद्दीन' },
        cast: { en: 'Shruti Ghosh Haldar', bn: 'শ্রুতি ঘোষ হালদার', hi: 'श्रुति घोष हालदार' },
        date: '26 December 2020',
        time: '6:00 PM'
      },
      {
        title: { en: 'Gichagiti', bn: 'গিচাগিটি', hi: 'गिचागिटी' },
        group: { en: 'Chetona', bn: 'চেতনা', hi: 'चेतना' },
        director: { en: 'Sujan Mukhopadhyay', bn: 'সুজন মুখোপাধ্যায়', hi: 'सुजन मुखोपाध्याय' },
        playwright: { en: 'Safdar Hashmi', bn: 'সফদার হাশমি', hi: 'सफदर हाश्मी' },
        cast: { en: 'Utpal Chattopadhyay, Abanti Chakraborty, Sujan Mukhopadhyay, Nibedita Mukhopadhyay', bn: 'উৎপল চট্টোপাধ্যায়, অবন্তী চক্রবর্তী, সুজন মুখোপাধ্যায়, নিবেদিতা মুখোপাধ্যায়', hi: 'उत्पल चट्टोपाध्याय, अबंती चक्रवर्ती, सुजन मुखोपाध्याय, निबेदिता मुखोपाध्याय' },
        date: '27 December 2020',
        time: '6:00 PM'
      },
      {
        title: { en: 'Eknayaker Shesh Rat', bn: 'একনায়কের শেষ রাত', hi: 'एकनायकेर शेष रात' },
        group: { en: 'Haybaral', bn: 'হাইবরাল', hi: 'हैबराल' },
        director: { en: 'Chandan Sen', bn: 'চন্দন সেন', hi: 'चंदन सेन' },
        cast: { en: 'Debashankar Haldar, Chalantika Gangopadhyay', bn: 'দেবশঙ্কর হালদার, চলন্তিকা গঙ্গোপাধ্যায়', hi: 'देबशंकर हालदार, चलंतिका गंगोपाध्याय' },
        date: '28 December 2020',
        time: '6:30 PM'
      },
      {
        title: { en: 'Ardhek Manush', bn: 'অর্ধেক মানুষ', hi: 'अर्धेक मानुष' },
        group: { en: 'Swapnasandhani', bn: 'স্বপ্নসন্ধানী', hi: 'स्वप्नसंधानी' },
        director: { en: 'Kaushik Sen', bn: 'কৌশিক সেন', hi: 'कौशिक सेन' },
        playwright: { en: 'Ratan Kumar Das', bn: 'রতন কুমার দাস', hi: 'रतन कुमार दास' },
        cast: { en: 'Debashankar Haldar, Reshmi Sen, Ditipriya Sarkar, Suranjana Banerjee', bn: 'দেবশঙ্কর হালদার, রেশমি সেন, দিতিপ্রিয়া সরকার, সুরঞ্জনা ব্যানার্জী', hi: 'देबशंकर हालदार, रेशमी सेन, दितिप्रिया सरकार, सुरंजना बैनर्जी' },
        date: '29 December 2020',
        time: '6:30 PM'
      }
    ]
  },

  // 2019 - 20th Edition
  {
    year: 2019,
    edition: 20,
    title: {
      en: 'Samatat Natyamela - 20th Edition',
      bn: 'সমতট নাট্যমেলা - বিংশতম সংস্করণ',
      hi: 'समतट नाट्यमेला - 20वां संस्करण'
    },
    dates: {
      en: '21-25 December 2019',
      bn: '২১-২৫ ডিসেম্বর ২০১৯',
      hi: '21-25 दिसंबर 2019'
    },
    venue: {
      en: 'Uttarpara Gangabhaban',
      bn: 'উত্তরপাড়া গঙ্গাভবন',
      hi: 'उत्तरपाड़ा गंगाभवन'
    },
    leafletImage: storageUrl('images/Festivals/Natyamela 2019/19-2-rotated.jpg'),
    plays: [
      {
        title: { en: 'Trijata', bn: 'ত্রিজটা', hi: 'त्रिजटा' },
        group: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        director: { en: 'Putul Shahanwaz', bn: 'পুতুল শাহানওয়াজ', hi: 'पुतुल शाहनवाज' },
        date: '21 December 2019',
        time: '3:00 PM'
      },
      {
        title: { en: 'Satyaprabha', bn: 'সত্যপ্রভা', hi: 'सत्यप्रभा' },
        group: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        director: { en: 'Rudraprasad Sengupta', bn: 'রুদ্রপ্রসাদ সেনগুপ্ত', hi: 'रुद्रप्रसाद सेनगुप्ता' },
        cast: { en: 'Madhab De, Rudraprasad Sengupta', bn: 'মাধব দে, রুদ্রপ্রসাদ সেনগুপ্ত', hi: 'माधब दे, रुद्रप्रसाद सेनगुप्ता' },
        date: '21 December 2019',
        time: '6:00 PM'
      },
      {
        title: { en: 'Dhanyabad', bn: 'ধন্যবাদ', hi: 'धन्यवाद' },
        group: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        director: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        date: '22 December 2019',
        time: '3:00 PM'
      },
      {
        title: { en: 'Pralobhan', bn: 'প্রলোভন', hi: 'प्रलोभन' },
        group: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        director: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        cast: { en: 'Biswajit Chakraborty', bn: 'বিশ্বজিৎ চক্রবর্তী', hi: 'बिस्वजित चक्रवर्ती' },
        date: '22 December 2019',
        time: '6:00 PM'
      },
      {
        title: { en: 'Titir Jagchhe', bn: 'তিতির জাগছে', hi: 'तितिर जागछे' },
        group: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        director: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        date: '23 December 2019',
        time: '3:00 PM'
      },
      {
        title: { en: 'Hridaybeena', bn: 'হৃদয়বীণ', hi: 'हृदयवीण' },
        group: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        director: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        date: '23 December 2019',
        time: '6:00 PM'
      },
      {
        title: { en: 'Bajibar', bn: 'বাজিবর', hi: 'बाजीबर' },
        group: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        director: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        date: '24 December 2019',
        time: '3:00 PM'
      },
      {
        title: { en: 'Adha Andhakare', bn: 'আধা অন্ধকারে', hi: 'आधा अंधकारे' },
        group: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        director: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        date: '24 December 2019',
        time: '6:00 PM'
      },
      {
        title: { en: 'Jibanannadi', bn: 'জীবনানন্দী', hi: 'जीवनानंदी' },
        group: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        director: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        date: '25 December 2019',
        time: '3:00 PM'
      },
      {
        title: { en: 'Manush', bn: 'মানুষ', hi: 'मानुष' },
        group: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        director: { en: 'Manoj Mitra', bn: 'মনোজ মিত্র', hi: 'मनोज मित्र' },
        date: '25 December 2019',
        time: '6:00 PM'
      }
    ]
  },

  // 2018 - 19th Edition
  {
    year: 2018,
    edition: 19,
    title: {
      en: 'Samatat Natyamela',
      bn: 'সমতট নাট্যমেলা',
      hi: 'समतट नाट्यमेला'
    },
    dates: {
      en: '22-30 December 2018',
      bn: '২২-৩০ ডিসেম্বর ২০১৮',
      hi: '22-30 दिसंबर 2018'
    },
    venue: {
      en: 'Kolkata Rabindra Bhaban',
      bn: 'কলকাতা রবীন্দ্র ভবন',
      hi: 'कोलकाता रवींद्र भवन'
    },
    leafletImage: storageUrl('images/Festivals/Natyamela 2018/18.jpg'),
    plays: [
      {
        title: { en: 'Dik Bidik', bn: 'দিক বিদিক', hi: 'दिक बिदिक' },
        group: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        director: { en: 'Dipendu Chakraborty', bn: 'দীপেন্দু চক্রবর্তী', hi: 'दीपेंदु चक्रवर्ती' },
        date: '22 December 2018',
        time: '6:00 PM'
      },
      {
        title: { en: 'Ananya-9', bn: 'অনন্যা-৯', hi: 'अनन्या-9' },
        group: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        director: { en: 'Asha Bhattacharya', bn: 'আশা ভট্টাচার্য', hi: 'आशा भट्टाचार्य' },
        cast: { en: 'Asha Bhattacharya, Japmala Ghosh', bn: 'আশা ভট্টাচার্য, জপমালা ঘোষ', hi: 'आशा भट्टाचार्य, जपमाला घोष' },
        date: '23 December 2018',
        time: '6:00 PM'
      },
      {
        title: { en: 'Sri Manmatha Kimba', bn: 'শ্রী মন্মথ কিম্বা', hi: 'श्री मन्मथ किम्बा' },
        group: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        director: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        cast: { en: 'Soumitra Chattopadhyay', bn: 'সৌমিত্র চট্টোপাধ্যায়', hi: 'सौमित्र चट्टोपाध्याय' },
        date: '24 December 2018',
        time: '6:00 PM'
      },
      {
        title: { en: 'Reef Jolbe', bn: 'রীফ জ্বলবে', hi: 'रीफ जोलबे' },
        group: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        director: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        cast: { en: 'Biswajit Chakraborty', bn: 'বিশ্বজিৎ চক্রবর্তী', hi: 'बिस्वजित चक्रवर्ती' },
        date: '25 December 2018',
        time: '6:00 PM'
      },
      {
        title: { en: 'Mulya', bn: 'মূল্য', hi: 'मूल्य' },
        group: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        director: { en: 'Ramayan Basu', bn: 'রামায়ন বসু', hi: 'रामायण बसु' },
        date: '26 December 2018',
        time: '6:00 PM'
      },
      {
        title: { en: 'Tarafdar Chand', bn: 'তরফদার চাঁদ', hi: 'तरफदार चांद' },
        group: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        director: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        date: '26 December 2018',
        time: '6:00 PM'
      },
      {
        title: { en: 'Macheyala', bn: 'মাচেয়ালা', hi: 'माचेयाला' },
        group: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        director: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        date: '27 December 2018',
        time: '6:00 PM'
      }
    ]
  },

  // 2017 - 18th Edition
  {
    year: 2017,
    edition: 18,
    title: {
      en: 'Samatat Natyamela',
      bn: 'সমতট নাট্যমেলা',
      hi: 'समतट नाट्यमेला'
    },
    dates: {
      en: '22 December 2017 - 1 January 2018',
      bn: '২২ ডিসেম্বর ২০১৭ - ১ জানুয়ারি ২০১৮',
      hi: '22 दिसंबर 2017 - 1 जनवरी 2018'
    },
    venue: {
      en: 'Uttarpara Gangabhaban',
      bn: 'উত্তরপাড়া গঙ্গাভবন',
      hi: 'उत्तरपाड़ा गंगाभवन'
    },
    leafletImage: storageUrl('images/Festivals/Natyamela 2017/17.jpg'),
    plays: [
      {
        title: { en: 'Shironam', bn: 'শিরোনাম', hi: 'शिरोनाम' },
        group: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        director: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        date: '22 December 2017',
        time: '6:00 PM'
      },
      {
        title: { en: 'Sada O Kusum', bn: 'সাদা ও কুসুম', hi: 'सादा ओ कुसुम' },
        group: { en: 'Sanstab', bn: 'সংস্তব', hi: 'संस्तब' },
        director: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        date: '23 December 2017',
        time: '6:00 PM'
      },
      {
        title: { en: 'Delishoper Moto', bn: 'ডেলিশপের মতো', hi: 'डेलिशोपेर मोतो' },
        group: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        director: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        date: '24 December 2017',
        time: '6:00 PM'
      },
      {
        title: { en: 'Rati', bn: 'রতী', hi: 'रती' },
        group: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        director: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        date: '24 December 2017',
        time: '6:00 PM'
      },
      {
        title: { en: 'Kanchini', bn: 'কাঞ্চিণী', hi: 'कांचिनी' },
        group: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        director: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        date: '25 December 2017',
        time: '6:00 PM'
      },
      {
        title: { en: 'Ek Dui-Teen', bn: 'এক দুই-তীন', hi: 'एक दुई-तीन' },
        group: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        director: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        date: '26 December 2017',
        time: '6:00 PM'
      },
      {
        title: { en: 'Aurangzeb', bn: 'ঔরাগজেব', hi: 'औरंगजेब' },
        group: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        director: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        date: '27 December 2017',
        time: '6:00 PM'
      },
      {
        title: { en: 'Bidhi', bn: 'বিধি', hi: 'बिधी' },
        group: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        director: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        date: '27 December 2017',
        time: '6:00 PM'
      },
      {
        title: { en: 'Trishpanth Sabitri', bn: 'ত্রিশপন্থ সাবিত্রী', hi: 'त्रिशपंथ सावित्री' },
        group: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        director: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        date: '28 December 2017',
        time: '6:00 PM'
      },
      {
        title: { en: 'Boikali', bn: 'বৈকালী', hi: 'बैकाली' },
        group: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        director: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        date: '29 December 2017',
        time: '6:00 PM'
      },
      {
        title: { en: 'Triushak', bn: 'ত্রিউশক্', hi: 'त्रिउशक' },
        group: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        director: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        date: '30 December 2017',
        time: '6:00 PM'
      },
      {
        title: { en: 'Chainaprem', bn: 'চৈনাপ্রেম', hi: 'चैनाप्रेम' },
        group: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        director: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिন्न' },
        date: '30 December 2017',
        time: '6:00 PM'
      },
      {
        title: { en: 'Tatha', bn: 'তথা', hi: 'तथा' },
        group: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        director: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        date: '31 December 2017',
        time: '6:00 PM'
      },
      {
        title: { en: 'Hadisan', bn: 'হাদিসান', hi: 'हादीसान' },
        group: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        director: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        date: '31 December 2017',
        time: '6:00 PM'
      },
      {
        title: { en: 'Nagarmosil', bn: 'নগরমসিল', hi: 'नगरमसिल' },
        group: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        director: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        date: '1 January 2018',
        time: '6:00 PM'
      }
    ]
  },

  // 2016 - 17th Edition
  {
    year: 2016,
    edition: 17,
    title: {
      en: 'Samatat Natyamela',
      bn: 'সমতট নাট্যমেলা',
      hi: 'समतट नाट्यमेला'
    },
    dates: {
      en: '23-31 December 2016',
      bn: '২৩-৩১ ডিসেম্বর ২০১৬',
      hi: '23-31 दिसंबर 2016'
    },
    venue: {
      en: 'Gangabhaban, Uttarpara',
      bn: 'গঙ্গাভবন, উত্তরপাড়া',
      hi: 'गंगाभवन, उत्तरपाड़ा'
    },
    leafletImage: storageUrl('images/Festivals/Natyamela 2016/16.jpg'),
    plays: [
      {
        title: { en: 'Dildar', bn: 'দিলদার', hi: 'दिलदार' },
        group: { en: 'Sayer', bn: 'সায়ের', hi: 'सायेर' },
        director: { en: 'Meghnad Bhattacharya', bn: 'মেঘনাদ ভট্টাচার্য', hi: 'मेघनाद भट्टाचार्य' },
        date: '23 December 2016',
        time: '5:00 PM'
      },
      {
        title: { en: 'Cancele Malsat', bn: 'ক্যান্সেলে মালসাট', hi: 'कैंसेले मालसाट' },
        group: { en: 'Tritiya Sutra', bn: 'তৃতীয় সূত্র', hi: 'तृतीय सूत्र' },
        director: { en: 'Suman Mukhopadhyay', bn: 'সুমন মুখোপাধ্যায়', hi: 'सुमन मुखोपाध्याय' },
        date: '24 December 2016',
        time: '6:00 PM'
      },
      {
        title: { en: 'Shalbani', bn: 'শালবনী', hi: 'शालबनी' },
        group: { en: 'Swapnasandhani', bn: 'স্বপ্নসন্ধানী', hi: 'स्वप्नसंधानी' },
        director: { en: 'Kaushik Sen', bn: 'কৌশিক সেন', hi: 'कौशिक सेन' },
        date: '25 December 2016',
        time: '3:00 PM'
      },
      {
        title: { en: 'Kanapisir Japmala', bn: 'কানাপিসির জপমালা', hi: 'कानापिसिर जपमाला' },
        group: { en: 'Nirbak Abhinay Academy', bn: 'নির্বাক অভিনয় একাদেমি', hi: 'निर्वाक अभिनय अकादेमी' },
        director: { en: 'Suranjana Dasgupta, Shyamal Chakraborty', bn: 'সুরঞ্জনা দাসগুপ্ত, শ্যামল চক্রবর্তী', hi: 'सुरंजना दासगुप्ता, श्यामल चक्रवर्ती' },
        date: '25 December 2016',
        time: '7:00 PM'
      },
      {
        title: { en: 'Panthamama', bn: 'পান্থামামার', hi: 'पांथामामार' },
        group: { en: 'Pancham Baidik', bn: 'পঞ্চম বৈদিক', hi: 'पंचम बैदिक' },
        director: { en: 'Arpita Ghosh, Shaoli Mitra, Debatosh Ghosh', bn: 'অর্পিতা ঘোষ, শাওলী মিত্র, দেবতোষ ঘোষ', hi: 'अर्पिता घोष, शाओली मित्र, देबतोष घोष' },
        date: '26 December 2016',
        time: '6:00 PM'
      },
      {
        title: { en: 'Aguner Enmala', bn: 'আগুনের এনমালা', hi: 'आगुनेर एनमाला' },
        group: { en: 'Drishyapat', bn: 'দৃশ্যপট', hi: 'दृश्यपट' },
        director: { en: 'Anirban Bhattacharya, Debashankar Haldar, Rita Dutta Chakraborty', bn: 'অনির্বাণ ভট্টাচার্য, দেবশঙ্কর হালদার, ঋতা দত্ত চক্রবর্তী', hi: 'अनिर्बान भट्टाचार्य, देबशंकर हालदार, रिता दत्ता चक्रवर्ती' },
        date: '27 December 2016',
        time: '6:00 PM'
      },
      {
        title: { en: 'Rater Habal O Pari', bn: 'রাতের হবল ও পাড়ি', hi: 'रातेर हबल ओ पाड़ी' },
        group: { en: 'Nandikar', bn: 'নান্দীকার', hi: 'नांदीकार' },
        director: { en: 'Swatilekha Sengupta, Gautam Haldar, Debashankar Haldar, Sohini Sengupta', bn: 'স্বাতীলেখা সেনগুপ্ত, গৌতম হালদার, দেবশঙ্কর হালদার, সোহিনী সেনগুপ্ত', hi: 'स्वातीलेखा सेनगुप्ता, गौतम हालदार, देबशंकर हालदार, सोहिनी सेनगुप्ता' },
        date: '28 December 2016',
        time: '6:00 PM'
      },
      {
        title: { en: 'Khurut', bn: 'খুড়ুত', hi: 'खुड़ुत' },
        group: { en: 'Rank Bhan', bn: 'র্যাঁক ভান', hi: 'रैंक भान' },
        director: { en: 'Raja Bhattacharya, Debashankar Haldar, Anandi Basu', bn: 'রাজা ভট্টাচার্য, দেবশঙ্কর হালদার, আনন্দী বসু', hi: 'राजा भट्टाचार्य, देबशंकर हालदार, आनंदी बसु' },
        date: '29 December 2016',
        time: '6:00 PM'
      },
      {
        title: { en: 'Chup', bn: 'চুপ', hi: 'चुप' },
        group: { en: 'Sanskriti', bn: 'সংস্কৃতি', hi: 'संस्कृति' },
        director: { en: 'Debesh Chattopadhyay, Debashankar Haldar', bn: 'দেবেশ চট্টোপাধ্যায়, দেবশঙ্কর হালদার', hi: 'देबेश चट्टोपाध्याय, देबशंकर हालदार' },
        date: '30 December 2016',
        time: '6:00 PM'
      },
      {
        title: { en: 'Kaliprasanna O Ora', bn: 'কালীপ্রসন্ন ও ওরা', hi: 'कालीप्रसन्न ओ ओरा' },
        group: { en: 'Nandikar/Samatat Sanskriti', bn: 'নান্দীকার/সমতট সংস্কৃতি', hi: 'नांदीकार/समतट संस्कृति' },
        director: { en: 'Sumanta Gangopadhyay', bn: 'সুমন্ত গঙ্গোপাধ্যায়', hi: 'सुमंत गंगोपाध्याय' },
        date: '30 December 2016',
        time: '3:00 PM'
      },
      {
        title: { en: 'Chhu', bn: 'ছু', hi: 'छू' },
        group: { en: 'Barasat Anushilani', bn: 'বারাসাত অনুশীলনী', hi: 'बरासत अनुशीलनी' },
        director: { en: 'Ramaprasad Banik', bn: 'রমাপ্রসাদ বণিক', hi: 'रामप्रसाद बनिक' },
        date: '31 December 2016',
        time: '3:00 PM'
      },
      {
        title: { en: 'Kemla', bn: 'কেমলা', hi: 'केमला' },
        group: { en: 'Swapna Suchana', bn: 'স্বপ্ন সূচনা', hi: 'स्वप्न सूचना' },
        director: { en: 'Rata Basu, Shyamal Sarkar, Phalduni Chattopadhyay', bn: 'রাতা বসু, শ্যামল সরকার, ফান্ডনী চট্টোপাধ্যায়', hi: 'राता बसु, श्यामल सरकार, फालदुनी चट्टोपाध्याय' },
        date: '31 December 2016',
        time: '6:00 PM'
      }
    ]
  },

  // Continue with earlier years...
  // 2014-15 - 15th Edition
  {
    year: 2014,
    edition: 15,
    title: {
      en: 'Samatat Natyamela',
      bn: 'সমতট নাট্যমেলা',
      hi: 'समतट नाट्यमेला'
    },
    dates: {
      en: '20 December 2014 - 1 January 2015',
      bn: '২০ ডিসেম্বর ২০১৪ - ১ জানুয়ারি ২০১৫',
      hi: '20 दिसंबर 2014 - 1 जनवरी 2015'
    },
    venue: {
      en: 'Uttarpara Gangabhaban',
      bn: 'উত্তরপাড়া গঙ্গাভবন',
      hi: 'उत्तरपाड़ा गंगाभवन'
    },
    leafletImage: storageUrl('images/Festivals/Natyamela 2014/14-2-rotated.jpg'),
    plays: [
      {
        title: { en: 'Smriti', bn: 'স্মৃতি', hi: 'स्मृति' },
        group: { en: 'Ibrahim', bn: 'ইব্রাহিম', hi: 'इब्राहिम' },
        director: { en: 'Swapan Chattopadhyay', bn: 'স্বপন চট্টোপাধ্যায়', hi: 'स्वपन चट्टोपाध्याय' },
        date: '20 December 2014',
        time: '6:00 PM'
      },
      {
        title: { en: 'Dhananjek', bn: 'ধনাঞ্জেক', hi: 'धनांजेक' },
        group: { en: 'Nandikar', bn: 'নান্দীকার', hi: 'नांदीकार' },
        director: { en: 'Rudraprasad Sengupta', bn: 'রুদ্রপ্রসাদ সেনগুপ্ত', hi: 'रुद्रप्रसाद सेनगुप्ता' },
        date: '21 December 2014',
        time: '6:00 PM'
      },
      {
        title: { en: 'Kalguyo', bn: 'কালগুয়ো', hi: 'कालगुयो' },
        group: { en: 'Ratnapati', bn: 'রত্নপতি', hi: 'रत्नपति' },
        director: { en: 'Soumitri Ganguly', bn: 'সৌমিত্রী গাঙ্গুলী', hi: 'सौमित्री गांगुली' },
        cast: { en: 'Samir Sarkar', bn: 'সমীর সরকার', hi: 'समीर सरकार' },
        date: '22 December 2014',
        time: '6:00 PM'
      },
      {
        title: { en: 'Khunir Ma', bn: 'খুনির মা', hi: 'खुनिर मा' },
        group: { en: 'Ei Aasam', bn: 'এম আসাম', hi: 'एम आसाम' },
        director: { en: 'Kangal Bhattacharya', bn: 'কঙ্গাল ভট্টাচার্য', hi: 'कंगाल भट्टाचार्य' },
        date: '23 December 2014',
        time: '4:00 PM'
      },
      {
        title: { en: 'Jen', bn: 'জেন', hi: 'जेन' },
        group: { en: 'Sayer', bn: 'সায়ের', hi: 'सायेर' },
        director: { en: 'Debesh Chattopadhyay', bn: 'দেবেশ চট্টোপাধ্যায়', hi: 'देबेश चट्टोपाध्याय' },
        date: '24 December 2014',
        time: '6:00 PM'
      },
      {
        title: { en: 'Atom Bomb', bn: 'অ্যাটম বোমা', hi: 'एटम बॉम्ब' },
        group: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        director: { en: 'Rabindra Chattopadhyay', bn: 'রাবীন্দ্র চট্টোপাধ্যায়', hi: 'रवींद्र चट्टोपाध्याय' },
        date: '25 December 2014',
        time: '6:00 PM'
      },
      {
        title: { en: 'Parabas', bn: 'পরবাস', hi: 'परबास' },
        group: { en: 'Sundaram', bn: 'সুন্দরম', hi: 'सुंदरम' },
        director: { en: 'Manoj Mitra', bn: 'মনোজ মিত্র', hi: 'मनोज मित्र' },
        date: '25 December 2014',
        time: '6:00 PM'
      },
      {
        title: { en: 'Rajnaitik Hatya', bn: 'রাজনীতিক হত্যা', hi: 'राजनैतिक हत्या' },
        group: { en: 'Panchambaidik', bn: 'পঞ্চমবৈদিক', hi: 'पंचमबैदिक' },
        director: { en: 'Shantinu Mitra', bn: 'শান্তিনু মিত্র', hi: 'शांतिनु मित्र' },
        cast: { en: 'Manoj Ghosh, Babu Roy', bn: 'মনোজ ঘোষ, বাবু রায়', hi: 'मनोज घोष, बाबू राय' },
        date: '26 December 2014',
        time: '6:00 PM'
      },
      {
        title: { en: 'Bipannata', bn: 'বিপন্নতা', hi: 'बिपन्नता' },
        group: { en: 'Namanjira', bn: 'নামঞ্জিরা', hi: 'नामंजिरा' },
        director: { en: 'Soumitra Mitra', bn: 'সৌমিত্র মিত্র', hi: 'सौमित्र मित्र' },
        cast: { en: 'Mukh Hoite Rakhileha Sengupta', bn: 'মুখ হইতে রাখিলেহা সেনগুপ্ত', hi: 'मुख होइते राखिलेहा सेनगुप्ता' },
        date: '27 December 2014',
        time: '6:00 PM'
      },
      {
        title: { en: 'Kirti Stuti', bn: 'কীর্তি স্তুতি', hi: 'कीर्ति स्तुति' },
        group: { en: 'Hridayshrabi', bn: 'হৃদয়শ্রাবী', hi: 'हृदयश्रवी' },
        director: { en: 'Kaushik Sen', bn: 'কৌশিক সেন', hi: 'कौशिक सेन' },
        date: '28 December 2014',
        time: '6:00 PM'
      },
      {
        title: { en: 'Thai Atmahatya', bn: 'থাই আত্মহত্যা', hi: 'थाई आत्महत्या' },
        group: { en: 'Nabarup Bhattacharya', bn: 'নবরূপ ভট্টাচার্য', hi: 'नबरूप भट्टाचार्य' },
        director: { en: 'Suman Mukhopadhyay', bn: 'সুমন মুখোপাধ্যায়', hi: 'सुमन मुखोपाध्याय' },
        date: '29 December 2014',
        time: '6:00 PM'
      },
      {
        title: { en: 'Damini-E', bn: 'দামিনী-এ', hi: 'दामिनी-ए' },
        group: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        director: { en: 'Meghnad Chowdhury', bn: 'মেঘনাদ চৌধুরী', hi: 'मेघनाद चौधरी' },
        date: '31 December 2014',
        time: '6:00 PM'
      },
      {
        title: { en: 'Maghchura', bn: 'মাঘচুড়া', hi: 'माघचुड़ा' },
        group: { en: 'Natak', bn: 'নাটক', hi: 'नाटक' },
        director: { en: 'Suchandra Bandyopadhyay', bn: 'সুচন্দ্র বন্দ্যোপাধ্যায়', hi: 'सुचंद्र बंद्योपाध्याय' },
        date: '1 January 2015',
        time: '6:00 PM'
      },
      {
        title: { en: 'Charandas Chor', bn: 'চরন্দাস চোর', hi: 'चरनदास चोर' },
        group: { en: 'Samatat', bn: 'সমতট', hi: 'समतट' },
        director: { en: 'Bapandeb Hui', bn: 'বাপনদেব হুই', hi: 'बापनदेब हुई' },
        date: 'Various',
        time: '6:00 PM'
      }
    ]
  },

  // 2013-14 - 14th Edition
  {
    year: 2013,
    edition: 14,
    title: {
      en: 'Samatat Natyamela',
      bn: 'সমতট নাট্যমেলা',
      hi: 'समतट नाट्यमेला'
    },
    dates: {
      en: '21 December 2013 - 1 January 2014',
      bn: '২১ ডিসেম্বর ২০১৩ - ১ জানুয়ারি ২০১৪',
      hi: '21 दिसंबर 2013 - 1 जनवरी 2014'
    },
    venue: {
      en: 'Uttarpara Gangabhaban',
      bn: 'উত্তরপাড়া গঙ্গাভবন',
      hi: 'उत्तरपाड़ा गंगाभवन'
    },
    leafletImage: storageUrl('images/Festivals/Natyamela 2013/13-1.jpg'),
    plays: [
      {
        title: { en: 'Sijar', bn: 'সিজার', hi: 'सीजर' },
        group: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        director: { en: 'Samrat Chattopadhyay, Shantilal Mukhopadhyay, Chandan Sen', bn: 'সম্রাট চট্টোপাধ্যায়, শান্তিল মুখোপাধ্যায়, চন্দন সেন', hi: 'सम्राट चट्टोपाध्याय, शांतिलाल मुखोपाध्याय, चंदन सेन' },
        date: '21 December 2013',
        time: '6:00 PM'
      },
      {
        title: { en: 'Anyadin', bn: 'অন্যদিন', hi: 'अन्यदिन' },
        group: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        director: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        cast: { en: 'Debashankar Haldar', bn: 'দেবশঙ্কর হালদার', hi: 'देबशंकर हालदार' },
        date: '22 December 2013',
        time: '6:00 PM'
      },
      {
        title: { en: 'Nachni', bn: 'নাচনী', hi: 'नाचनी' },
        group: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        director: { en: 'Soumitra Sengupta, Debdas Hazaldar, Padmanabha De', bn: 'সৌমিত্র সেনগুপ্ত, দেবদাস হাজলদার, পদ্মনাভ দে', hi: 'सौमित्र सेनगुप्ता, देबदास हाजलदार, पद्मनाभ दे' },
        date: '23 December 2013',
        time: '6:00 PM'
      },
      {
        title: { en: 'Kalumama', bn: 'কালুমামা', hi: 'कालुमामा' },
        group: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        director: { en: 'Debesh Haldar, Dipika Mitra', bn: 'দেবেশ হালদার, দীপিকা মিত্র', hi: 'देबेश हालदार, दीपिका मित्र' },
        date: '24 December 2013',
        time: '6:00 PM'
      },
      {
        title: { en: 'Chhit Chhit Bat', bn: 'ছিট ছিট বাঁট', hi: 'छिट छिट बाट' },
        group: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        director: { en: 'Manoj Mitra', bn: 'মনোজ মিত্র', hi: 'मनोज मित्र' },
        date: '25 December 2013',
        time: '6:00 PM'
      },
      {
        title: { en: 'Anthony Farunes', bn: 'অ্যান্থনি ফারুনেস', hi: 'एंथनी फारुनेस' },
        group: { en: 'Sundaram', bn: 'সুন্দরম', hi: 'सुंदरम' },
        director: { en: 'Manoj Mitra', bn: 'মনোজ মিত্র', hi: 'मनोज मित्र' },
        date: '26 December 2013',
        time: '6:30 PM'
      },
      {
        title: { en: 'Belasheshe Kolahal', bn: 'বেলাশেষে কোলাহল', hi: 'बेलाशेषे कोलाहल' },
        group: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        director: { en: 'Soumitra Sen', bn: 'সৌমিত্র সেন', hi: 'सौमित्र सेन' },
        cast: { en: 'Raidik Sengupta, Biswajit Chakraborty', bn: 'রাইদিক সেনগুপ্ত, বিশ্বজিৎ চক্রবর্তী', hi: 'राइदिक सेनगुप्ता, बिस्वजित चक्रवर्ती' },
        date: '27 December 2013',
        time: '6:30 PM'
      },
      {
        title: { en: 'Hemnal', bn: 'হেমনাল', hi: 'हेमनाल' },
        group: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        director: { en: 'Anupadana Roy, Poulami Chattopadhyay', bn: 'অনুপদনা রায়, পৌলমী চট্টোপাধ্যায়', hi: 'अनुपदना राय, पौलमी चट्टोपाध्याय' },
        date: '28 December 2013',
        time: '6:00 PM'
      },
      {
        title: { en: 'B Kele Bhorer Amful', bn: 'বি কেলে ভোরের আমফুল', hi: 'बी केले भोरेर आमफुल' },
        group: { en: 'Sanjukta', bn: 'সংযুক্তা', hi: 'संयुक्ता' },
        director: { en: 'Surajit Bandyopadhyay', bn: 'সুরজিৎ বন্দ্যোপাধ্যায়', hi: 'सुरजित बंद्योपाध्याय' },
        date: '29 December 2013',
        time: '10:00 AM'
      },
      {
        title: { en: 'Thamo Chole Esechhi', bn: 'থামো চলে এসেছি', hi: 'थामो चले एसेछि' },
        group: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        director: { en: 'Kaushik Sen, Soumitra Hazaldar', bn: 'কৌশিক সেন, সৌমিত্র হাজলদার', hi: 'कौशिक सेन, सौमित्र हाजलदार' },
        date: '30 December 2013',
        time: '6:00 PM'
      },
      {
        title: { en: 'Pandubhut And Chhana', bn: 'পান্ডুভূত অ্যান্ড ছানা', hi: 'पांडुभूत एंड छाना' },
        group: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        director: { en: 'Samitra Hazaldar', bn: 'সমিত্র হাজলদার', hi: 'समित्र हाजलदार' },
        date: '31 December 2013',
        time: '6:00 PM'
      },
      {
        title: { en: 'Nagamandala', bn: 'নাগমণ্ডলা', hi: 'नागमंडला' },
        group: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        director: { en: 'Girish Karnad (playwright)', bn: 'গিরীশ কার্নাড (নাট্যকার)', hi: 'गिरीश कार्नाड (नाटककार)' },
        date: '1 January 2014',
        time: '4:00 PM'
      },
      {
        title: { en: 'Ekhon Tokhon', bn: 'এখন তখন', hi: 'एखोन तोखोन' },
        group: { en: 'Chayer', bn: 'চায়ের', hi: 'चायेर' },
        director: { en: 'Dilip Debnath', bn: 'দিলীপ দেবনাথ', hi: 'दिलीप देबनाथ' },
        date: '1 January 2014',
        time: '6:00 PM'
      }
    ]
  },

  // 2012 - 13th Edition
  {
    year: 2012,
    edition: 13,
    title: {
      en: 'Samatat Natyamela',
      bn: 'সমতট নাট্যমেলা',
      hi: 'समतट नाट्यमेला'
    },
    dates: {
      en: '22 December 2012 - 3 January 2013',
      bn: '২২ ডিসেম্বর ২০১২ - ৩ জানুয়ারি ২০১৩',
      hi: '22 दिसंबर 2012 - 3 जनवरी 2013'
    },
    venue: {
      en: 'Uttarpara Gangabhaban',
      bn: 'উত্তরপাড়া গঙ্গাভবন',
      hi: 'उत्तरपाड़ा गंगाभवन'
    },
    leafletImage: storageUrl('images/Festivals/Natyamela 2012/12.jpg'),
    plays: [
      {
        title: { en: 'Dukh Anoret Saheb', bn: 'দুখ অনোরেট সাহেব', hi: 'दुख अनोरेट साहेब' },
        group: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        director: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        date: '22 December 2012',
        time: '6:00 PM'
      },
      {
        title: { en: 'Paribartan', bn: 'পরিবর্তন', hi: 'परिवर्तन' },
        group: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        director: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        date: '23 December 2012',
        time: '6:00 PM'
      },
      {
        title: { en: 'Bil', bn: 'বিল', hi: 'बिल' },
        group: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        director: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        date: '24 December 2012',
        time: '6:00 PM'
      },
      {
        title: { en: 'Bhanchar', bn: 'ভানচর', hi: 'भानचर' },
        group: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        director: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        date: '25 December 2012',
        time: '6:00 PM'
      },
      {
        title: { en: 'Ankecho', bn: 'অ্যান্কেচো', hi: 'अंकेचो' },
        group: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        director: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        date: '26 December 2012',
        time: '6:00 PM'
      },
      {
        title: { en: 'Procheshta', bn: 'প্রচেষ্টা', hi: 'प्रचेष्टा' },
        group: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        director: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        date: '27 December 2012',
        time: '6:00 PM'
      },
      {
        title: { en: 'Hamlet', bn: 'হ্যামলেট', hi: 'हैमलेट' },
        group: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        director: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        playwright: { en: 'William Shakespeare', bn: 'উইলিয়াম শেক্সপিয়র', hi: 'विलियम शेक्सपियर' },
        date: '28 December 2012',
        time: '6:00 PM'
      },
      {
        title: { en: 'Chhatrapati', bn: 'ছত্রপতি', hi: 'छत्रपति' },
        group: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        director: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        date: '29 December 2012',
        time: '6:00 PM'
      },
      {
        title: { en: 'Macbeth', bn: 'ম্যাকবেথ', hi: 'मैकबेथ' },
        group: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        director: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        playwright: { en: 'William Shakespeare', bn: 'উইলিয়াম শেক্সপিয়র', hi: 'विलियम शेक्सपियर' },
        date: '31 December 2012',
        time: '6:00 PM'
      }
    ]
  },

  // 2011-12 - 12th Edition
  {
    year: 2011,
    edition: 12,
    title: {
      en: 'Samatat Natyamela',
      bn: 'সমতট নাট্যমেলা',
      hi: 'समतट नाट्यमेला'
    },
    dates: {
      en: '24 December 2011 - 2 January 2012',
      bn: '২৪ ডিসেম্বর ২০১১ - ২ জানুয়ারি ২০১২',
      hi: '24 दिसंबर 2011 - 2 जनवरी 2012'
    },
    venue: {
      en: 'Gangabhaban, Uttarpara',
      bn: 'গঙ্গাভবন, উত্তরপাড়া',
      hi: 'गंगाभवन, उत्तरपाड़ा'
    },
    leafletImage: storageUrl('images/Festivals/Natyamela 2011/11.jpg'),
    plays: [
      {
        title: { en: 'Jan E Benka', bn: 'জান এ বেনকা', hi: 'जान ए बेंका' },
        group: { en: 'Akhor', bn: 'আখর', hi: 'आखर' },
        director: { en: 'Amit Basu, Uttara Basu, Ashis Basu', bn: 'অমিত বসু, উত্তরা বসু, আশিস বসু', hi: 'अमित बसु, उत्तरा बसु, आशिस बसु' },
        date: '24 December 2011',
        time: '6:00 PM'
      },
      {
        title: { en: 'Laboratory', bn: 'ল্যাবরেটরি', hi: 'लेबोरेटरी' },
        group: { en: 'Lokokriti', bn: 'লোককৃতি', hi: 'लोकोकृति' },
        director: { en: 'Shashwati Chattopadhyay', bn: 'শাশ্বতী চট্টোপাধ্যায়', hi: 'शाश्वती चट्टोपाध्याय' },
        date: '25 December 2011',
        time: '6:30 PM'
      },
      {
        title: { en: 'Supari Killar', bn: 'সুপারি কিলার', hi: 'सुपारी किलर' },
        group: { en: 'Prachya', bn: 'প্রাচ্য', hi: 'प्राच्य' },
        director: { en: 'Pranta Kumar Mandal, Biplab Bandyopadhyay', bn: 'প্রান্ত কুমার মন্ডল, বিপ্লব বন্দ্যোপাধ্যায়', hi: 'प्रांत कुमार मंडल, बिप्लब बंद्योपाध्याय' },
        date: '26 December 2011',
        time: '6:00 PM'
      },
      {
        title: { en: 'Munerfard', bn: 'মুনেরফর্দ', hi: 'मुनेरफर्द' },
        group: { en: 'Nandikar', bn: 'নান্দীকার', hi: 'नांदीकार' },
        director: { en: 'Rudraprasad Sengupta', bn: 'রুদ্রপ্রসাদ সেনগুপ্ত', hi: 'रुद्रप्रसाद सेनगुप्ता' },
        cast: { en: 'Swatilekha Sengupta, Debashankar Haldar, Sohini Sengupta', bn: 'স্বাতীলেখা সেনগুপ্ত, দেবশঙ্কর হালদার, সোহিনী সেনগুপ্ত', hi: 'स्वातीलेखा सेनगुप्ता, देबशंकर हालदार, सोहिनी सेनगुप्ता' },
        date: '27 December 2011',
        time: '6:30 PM'
      },
      {
        title: { en: 'Dhandho', bn: 'ধনধো', hi: 'धन्धो' },
        group: { en: 'Budhbar', bn: 'বুধবার', hi: 'बुधबार' },
        director: { en: 'Debashis Majumdar, Debashankar Haldar, Indrani Sen', bn: 'দেবাশিস মজুমদার, দেবশঙ্কর হালদার, ইন্দ্রানী সেন', hi: 'देबाशिस मजुमदार, देबशंकर हालदार, इंद्राणी सेन' },
        date: '28 December 2011',
        time: '6:30 PM'
      },
      {
        title: { en: 'Double Nadit', bn: 'ডবল নাদিত', hi: 'डबल नादित' },
        group: { en: 'Samatat', bn: 'সমতট', hi: 'समतट' },
        director: { en: 'Basudeb Hui', bn: 'বাসুদেব হুই', hi: 'बासुदेब हुई' },
        date: '29 December 2011',
        time: '6:00 PM'
      },
      {
        title: { en: 'Moi Du Meli', bn: 'মই দু মেলি', hi: 'मोई दू मेली' },
        group: { en: 'Swapnasandhani', bn: 'স্বপ্নসাধনী', hi: 'स्वप्नसंधानी' },
        director: { en: 'Kaushik Sen', bn: 'কৌশিক সেন', hi: 'कौशिक सेन' },
        cast: { en: 'Ratnabha Verma, Meghna Verma', bn: 'রত্নাভ বর্মা, মেঘনা বর্মা', hi: 'रत्नाभ वर्मा, मेघना वर्मा' },
        date: '30 December 2011',
        time: '6:00 PM'
      },
      {
        title: { en: 'Monasachakra', bn: 'মনসচক্র', hi: 'मनसचक्र' },
        group: { en: 'Sanbi', bn: 'সন্বি', hi: 'संवी' },
        director: { en: 'Bijan Bandyopadhyay', bn: 'বিজন বন্দ্যোপাধ্যায়', hi: 'बिजन बंद्योपाध्याय' },
        date: '31 December 2011',
        time: '6:30 PM'
      },
      {
        title: { en: 'Dipendra Bal', bn: 'দীপেন্দ্র বাল', hi: 'दीपेंद्र बाल' },
        group: { en: 'Sayer', bn: 'সায়ক', hi: 'सायक' },
        director: { en: 'Meghnad Bhattacharya', bn: 'মেঘনাদ ভট্টাচার্য', hi: 'मेघनाद भट्टाचार्य' },
        date: '1 January 2012',
        time: '6:00 PM'
      },
      {
        title: { en: 'Mayer Moto', bn: 'মায়ের মতো', hi: 'मायेर मोतो' },
        group: { en: 'Rajdola', bn: 'রাজদোলা', hi: 'राजदोला' },
        director: { en: 'Soumik Chattopadhyay, Seema Mukhopadhyay', bn: 'সৌমিক চট্টোপাধ্যায়, সীমা মুখোপাধ্যায়', hi: 'सौमिक चट्टोपाध्याय, सीमा मुखोपाध्याय' },
        date: '2 January 2012',
        time: '6:30 PM'
      }
    ]
  },

  // 2010 - 11th Edition
  {
    year: 2010,
    edition: 11,
    title: {
      en: 'Samatat Natyamela',
      bn: 'সমতট নাট্যমেলা',
      hi: 'समतट नाट्यमेला'
    },
    dates: {
      en: '24 December 2010 - 3 January 2011',
      bn: '২৪ ডিসেম্বর ২০১০ - ৩ জানুয়ারি ২০১১',
      hi: '24 दिसंबर 2010 - 3 जनवरी 2011'
    },
    venue: {
      en: 'Gangabhaban, Uttarpara',
      bn: 'গঙ্গাভবন, উত্তরপাড়া',
      hi: 'गंगाभवन, उत्तरपाड़ा'
    },
    leafletImage: storageUrl('images/Festivals/Natyamela 2010/10.jpg'),
    plays: [
      {
        title: { en: 'Charitra Achhe Ashesh', bn: 'চরিত্র আছে অশেষ', hi: 'चरित्र आछे अशेष' },
        group: { en: 'Prachya', bn: 'প্রাচ্য', hi: 'प्राच्य' },
        director: { en: 'Soumik Chattopadhyay, Bijan Bandyopadhyay, Poulami Basu', bn: 'সৌমিক চট্টোপাধ্যায়, বিজন বন্দ্যোপাধ্যায়, পৌলমী বসু', hi: 'सौमिक चट्टोपाध्याय, बिजन बंद्योपाध्याय, पौलमी बसु' },
        date: '24 December 2010',
        time: '6:00 PM'
      },
      {
        title: { en: 'Muktijuddha', bn: 'মুক্তিযুদ্ধ', hi: 'मुक्तियुद्ध' },
        group: { en: 'Sayer', bn: 'সায়ক', hi: 'सायक' },
        director: { en: 'Meghnad Bhattacharya', bn: 'মেঘনাদ ভট্টাচার্য', hi: 'मेघनाद भट्टाचार्य' },
        playwright: { en: 'Rabindranath', bn: 'রবীন্দ্রনাথ', hi: 'रवींद्रनाथ' },
        date: '25 December 2010',
        time: '6:30 PM'
      },
      {
        title: { en: 'Madhabi', bn: 'মাধবী', hi: 'माधबी' },
        group: { en: 'Nandikar', bn: 'নান্দীকার', hi: 'नांदीकार' },
        director: { en: 'Rudraprasad Sengupta', bn: 'রুদ্রপ্রসাদ সেনগুপ্ত', hi: 'रुद्रप्रसाद सेनगुप्ता' },
        cast: { en: 'Swatilekha Sengupta, Debashankar Haldar', bn: 'স্বাতীলেখা সেনগুপ্ত, দেবশঙ্কর হালদার', hi: 'स्वातीलेखा सेनगुप्ता, देबशंकर हालदार' },
        date: '26 December 2010',
        time: '6:00 PM'
      },
      {
        title: { en: 'Rijubhuter Sabujmar', bn: 'ঋজুভূতের সবুজমার', hi: 'ऋजुभूतेर सबुजमार' },
        group: { en: 'Ratnaki', bn: 'রত্নকী', hi: 'रत्नकी' },
        director: { en: 'Seema Mukhopadhyay', bn: 'সীমা মুখোপাধ্যায়', hi: 'सीमा मुखोपाध्याय' },
        date: '27 December 2010',
        time: '6:00 PM'
      },
      {
        title: { en: 'Charkumarir Mantra', bn: 'চরকুমারির মন্ত্র', hi: 'चरकुमारिर मंत्र' },
        group: { en: 'Chetona', bn: 'চেতনা', hi: 'चेतना' },
        director: { en: 'Arun Mukhopadhyay', bn: 'অরুণ মুখোপাধ্যায়', hi: 'अरुण मुखोपाध्याय' },
        playwright: { en: 'Rabindranath', bn: 'রবীন্দ্রনাথ', hi: 'रवींद्रनाथ' },
        date: '28 December 2010',
        time: '6:30 PM'
      },
      {
        title: { en: 'Barpurush', bn: 'বারপুরুষ', hi: 'बारपुरुष' },
        group: { en: 'Swapnasandhani', bn: 'স্বপ্নসাধনী', hi: 'स्वप्नसंधानी' },
        director: { en: 'Kaushik Sen, Kanchan Mallick', bn: 'কৌশিক সেন, কাঞ্চন মল্লিক', hi: 'कौशिक सेन, कांचन मल्लिक' },
        date: '29 December 2010',
        time: '6:00 PM'
      },
      {
        title: { en: 'Amitakshar', bn: 'অমিতাক্ষর', hi: 'अमिताक्षर' },
        group: { en: 'Shudhik', bn: 'শুদ্ধিক', hi: 'शुद्धिक' },
        director: { en: 'Bijan Bandyopadhyay, Debashis Majumdar, Biswajit Chakraborty, Soumitra Mitra, Indrani Sen', bn: 'বিজন বন্দ্যোপাধ্যায়, দেবাশিস মজুমদার, বিশ্বজিৎ চক্রবর্তী, সৌমিত্র মিত্র, ইন্দ্রানী সেন', hi: 'बिजन बंद्योपाध्याय, देबाशिस मजुमदार, बिस्वजित चक्रवर्ती, सौमित्र मित्र, इंद्राणी सेन' },
        date: '30 December 2010',
        time: '6:00 PM'
      },
      {
        title: { en: 'Uchchha', bn: 'উচ্ছ্বা', hi: 'उच्छ्वा' },
        group: { en: 'Brihajjan', bn: 'বৃহজ্জন', hi: 'बृहज्जन' },
        director: { en: 'Tarunap Mukhopadhyay', bn: 'তরুণপ মুখোপাধ্যায়', hi: 'तरुणप मुखोपाध्याय' },
        date: '31 December 2010',
        time: '6:30 PM'
      },
      {
        title: { en: 'E/O Mar Haloyan', bn: 'এ/ও মার হালোয়ন', hi: 'ए/ओ मार हालोयन' },
        group: { en: 'Samatat', bn: 'সমতট', hi: 'समतट' },
        director: { en: 'Basudeb Hui', bn: 'বাসুদেব হুই', hi: 'बासुदेब हुई' },
        date: '1 January 2011',
        time: '6:00 PM'
      },
      {
        title: { en: 'Agra Biharer Namta', bn: 'আগ্রা বিহারের নামতা', hi: 'आग्रा बिहारेर नामता' },
        group: { en: 'Chayer', bn: 'চায়ের', hi: 'चायेर' },
        director: { en: 'Sabyasachi Chakraborty, Sheyali Duttagupta', bn: 'সব্যসাচী চক্রবর্তী, শেয়ালি দত্তগুপ্ত', hi: 'सब्यसाची चक्रवर्ती, शेयालि दत्तगुप्ता' },
        date: '2 January 2011',
        time: '6:30 PM'
      },
      {
        title: { en: 'Helmet', bn: 'হেলমেট', hi: 'हेलमेट' },
        group: { en: 'Various', bn: 'বিভিন্ন', hi: 'विभिन्न' },
        director: { en: 'Ashish Ghosh', bn: 'অশীষ ঘোষ', hi: 'अशीष घोष' },
        date: '3 January 2011',
        time: '6:00 PM'
      }
    ]
  },

  // 2009 - 10th Edition
  {
    year: 2009,
    edition: 10,
    title: {
      en: 'Samatat Natyamela - 10th Edition',
      bn: 'সমতট নাট্যমেলা - দশম সংস্করণ',
      hi: 'समतट नाट्यमेला - 10वां संस्करण'
    },
    dates: {
      en: '19-30 December 2009',
      bn: '১৯-৩০ ডিসেম্বর ২০০৯',
      hi: '19-30 दिसंबर 2009'
    },
    venue: {
      en: 'Gangabhaban, Uttarpara',
      bn: 'গঙ্গাভবন, উত্তরপাড়া',
      hi: 'गंगाभवन, उत्तरपाड़ा'
    },
    leafletImage: storageUrl('images/Festivals/Natyamela 2009/9.jpg'),
    plays: [
      {
        title: { en: 'Manabjomin Ful', bn: 'মানবজমিন ফুল', hi: 'मानबजोमिन फुल' },
        group: { en: 'Sayer', bn: 'সায়ক', hi: 'सायक' },
        director: { en: 'Meghnad Bhattacharya', bn: 'মেঘনাদ ভট্টাচার্য', hi: 'मेघनाद भट्टाचार्य' },
        date: '19 December 2009',
        time: '6:00 PM'
      },
      {
        title: { en: 'Charandas Chor', bn: 'চরণদাস চোর', hi: 'चरनदास चोर' },
        group: { en: 'Naya Theatre', bn: 'নয়া থিয়েটার', hi: 'नया थिएटर' },
        director: { en: 'Habib Tanvir', bn: 'হাবিব তনবীর', hi: 'हबीब तनवीर' },
        date: '20 December 2009',
        time: '6:30 PM'
      },
      {
        title: { en: 'Chaka Porechhe Gorte', bn: 'চাকা পড়েছে গর্তে', hi: 'चाका पोड़ेछे गोर्ते' },
        group: { en: 'Chayer', bn: 'চায়ের', hi: 'चायेर' },
        director: { en: 'Dalilin Ganguly, Sabyasachi Chakraborty, Sheyali Duttagupta', bn: 'দলিলন গাঙ্গুলী, সব্যসাচী চক্রবর্তী, শেয়ালি দত্তগুপ্ত', hi: 'दलिलिन गांगुली, सब्यसाची चक्रवर्ती, शेयालि दत्तगुप्ता' },
        date: '21 December 2009',
        time: '6:00 PM'
      },
      {
        title: { en: 'Rani Mohan', bn: 'রানী মোহন', hi: 'रानी मोहन' },
        group: { en: 'Nandikar', bn: 'নান্দীকার', hi: 'नांदीकार' },
        director: { en: 'Prakash Bhattacharya, Chapal Bhaduri', bn: 'প্রকাশ ভট্টাচার্য, চপল ভাদুড়ী', hi: 'प्रकाश भट्टाचार्य, चपल भादुड़ी' },
        date: '22 December 2009',
        time: '6:30 PM'
      },
      {
        title: { en: 'Jhulpachhote', bn: 'ঝুলপাছোতে', hi: 'झुलपाछोते' },
        group: { en: 'Theatre Workshop', bn: 'থিয়েটার ওয়ার্কশপ', hi: 'थिएटर वर्कशॉप' },
        director: { en: 'Alok Mukhopadhyay', bn: 'অলোক মুখোপাধ্যায়', hi: 'अलोक मुखोपाध्याय' },
        date: '23 December 2009',
        time: '6:30 PM'
      },
      {
        title: { en: 'Chamcham Kumar', bn: 'চমচম কুমার', hi: 'चमचम कुमार' },
        group: { en: 'Samatat', bn: 'সমতট', hi: 'समतट' },
        director: { en: 'Ranu Hui, Somnath Gatri, Swapnamuhurta, Suman Gangopadhyay', bn: 'রানু হুই, সোমনাথ গাত্রী, স্বপ্নমুহূর্ত, সুমন গঙ্গোপাধ্যায়', hi: 'रानु हुई, सोमनाथ गात्री, स्वप्नमुहूर्त, सुमन गंगोपाध्याय' },
        date: '24 December 2009',
        time: '6:30 PM'
      },
      {
        title: { en: 'Jhorikkshe', bn: 'ঝরিক্ষে', hi: 'झोरिक्षे' },
        group: { en: 'Shudhik', bn: 'শুদ্ধিক', hi: 'शुद्धिक' },
        director: { en: 'Debashis Majumdar', bn: 'দেবাশিস মজুমদার', hi: 'देबाशिस मजुमदार' },
        date: '25 December 2009',
        time: '6:30 PM'
      },
      {
        title: { en: 'Dada Marseyan O Dipi', bn: 'দাদা মা\'রসেয়ান ও দিপি', hi: 'दादा मार्सेयान ओ दिपी' },
        group: { en: 'Nandikar', bn: 'নান্দীকার', hi: 'नांदीकार' },
        director: { en: 'Rudraprasad Sengupta, Swatilekha Sengupta', bn: 'রুদ্রপ্রসাদ সেনগুপ্ত, স্বাতীলেখা সেনগুপ্ত', hi: 'रुद्रप्रसाद सेनगुप्ता, स्वातीलेखा सेनगुप्ता' },
        date: '26 December 2009',
        time: '6:30 PM'
      },
      {
        title: { en: 'Sehre', bn: 'সেহরে', hi: 'सेहरे' },
        group: { en: 'Robibar', bn: 'রবিবার', hi: 'रविबार' },
        director: { en: 'Usha Ganguly, Azhar Habibullah', bn: 'উষা গাঙ্গুলী, আজহার হাবিবুল্লাহ', hi: 'उषा गांगुली, अजहर हबीबुल्लाह' },
        date: '27 December 2009',
        time: '6:00 PM'
      },
      {
        title: { en: 'Diba Ratrir Kabya', bn: 'দিবা রাত্রির কাব্য', hi: 'दिबा रात्रिर काव्य' },
        group: { en: 'Sandhik, Berhampore', bn: 'শন্ধিক, বহরমপুর', hi: 'संधिक, बेरहामपुर' },
        director: { en: 'Somen Roychowdhury', bn: 'সোমেন রায়চৌধুরী', hi: 'सोमेन रायचौधुरी' },
        date: '28 December 2009',
        time: '6:30 PM'
      },
      {
        title: { en: 'Dalbar Islam Char', bn: 'দলবার ইসলাম চার', hi: 'दलबार इसलाम चार' },
        group: { en: 'Purba Paschim', bn: 'পূর্ব পশ্চিম', hi: 'पूर्व पश्चिम' },
        director: { en: 'Sarbakumar Roy, Ramaprasad Banik', bn: 'সর্বকুমার রায়, রামপ্রসাদ বণিক', hi: 'सर्वकुमार राय, रामप्रसाद बनिक' },
        date: '29 December 2009',
        time: '6:30 PM'
      },
      {
        title: { en: 'Ma Tu Bharat', bn: 'ম্যা তু ভারত', hi: 'मा तू भारत' },
        group: { en: 'Sundaram', bn: 'সুন্দরম', hi: 'सुंदरम' },
        director: { en: 'Manoj Mitra', bn: 'মনোজ মিত্র', hi: 'मनोज मित्र' },
        date: '30 December 2009',
        time: '6:00 PM'
      }
    ]
  },

  // 2008 - 9th Edition
  {
    year: 2008,
    edition: 9,
    title: {
      en: 'Samatat Natyamela',
      bn: 'সমতট নাট্যমেলা',
      hi: 'समतट नाट्यमेला'
    },
    dates: {
      en: '20-28 December 2008',
      bn: '২০-২৮ ডিসেম্বর ২০০৮',
      hi: '20-28 दिसंबर 2008'
    },
    venue: {
      en: 'Gangabhaban, Uttarpara',
      bn: 'গঙ্গাভবন, উত্তরপাড়া',
      hi: 'गंगाभवन, उत्तरपाड़ा'
    },
    leafletImage: storageUrl('images/Festivals/Natyamela 2008/8.jpg'),
    plays: [
      {
        title: { en: 'Satyajit-er Golpapath O Anukul', bn: 'সত্যজিৎ-এর গল্পাপাঠ ও অনুকূল', hi: 'सत्यजित-एर गोल्पापाठ ओ अनुकूल' },
        group: { en: 'Theatre Passion', bn: 'থিয়েটার প্যাশন', hi: 'थिएटर पैशन' },
        director: { en: 'Ramaprasad Banik', bn: 'রমাপ্রসাদ বণিক', hi: 'रामप्रसाद बनिक' },
        date: '20 December 2008',
        time: '5:00 PM'
      },
      {
        title: { en: 'Hirak Rajar Deshe', bn: 'হীরক রাজার দেশে', hi: 'हीरक राजार देशे' },
        group: { en: 'Natya Anan', bn: 'নাট্য আনন', hi: 'नाट्य आनन' },
        director: { en: 'Chandan Sen', bn: 'চন্দন সেন', hi: 'चंदन सेन' },
        playwright: { en: 'Based on Satyajit Ray', bn: 'সত্যজিৎ রায় অবলম্বনে', hi: 'सत्यजित राय पर आधारित' },
        date: '21 December 2008',
        time: '3:00 PM'
      },
      {
        title: { en: 'Potgan O Khotash Raja', bn: 'পটগান ও খটাশ রাজা', hi: 'पोटगान ओ खोटाश राजा' },
        group: { en: 'Rupantar, Bangladesh', bn: 'রূপান্তর, বাংলাদেশ', hi: 'रूपांतर, बांग्लादेश' },
        director: { en: 'Swapan Bha', bn: 'স্বপন ভ', hi: 'स्वपन भ' },
        date: '21 December 2008',
        time: '6:30 PM'
      },
      {
        title: { en: 'Hagra', bn: 'হাগড়া', hi: 'हागड़ा' },
        group: { en: 'Swapnasandhani', bn: 'স্বপ্নসন্ধানী', hi: 'स्वप्नसंधानी' },
        director: { en: 'Kaushik Sen', bn: 'কৌশিক সেন', hi: 'कौशिक सेन' },
        date: '22 December 2008',
        time: '6:30 PM'
      },
      {
        title: { en: 'Doipayon', bn: 'দৈপায়ন', hi: 'दैपायन' },
        group: { en: 'Sayer', bn: 'সায়ক', hi: 'सायक' },
        director: { en: 'Meghnad Bhattacharya', bn: 'মেঘনাদ ভট্টাচার্য', hi: 'मेघनाद भट्टाचार्य' },
        date: '23 December 2008',
        time: '6:30 PM'
      },
      {
        title: { en: 'Char', bn: 'চার', hi: 'चार' },
        group: { en: 'Shantik, Berhampore', bn: 'শান্তিক, বহরমপুর', hi: 'शांतिक, बेरहामपुर' },
        director: { en: 'Gautam Roy Chowdhury', bn: 'গৌতম রায় চৌধুরী', hi: 'गौतम राय चौधरी' },
        playwright: { en: 'Rabindranath Tagore', bn: 'রবীন্দ্রনাথ ঠাকুর', hi: 'रवींद्रनाथ टैगोर' },
        date: '24 December 2008',
        time: '6:30 PM'
      },
      {
        title: { en: 'Chhotoder Borodin O Agdum Bagdum', bn: 'ছোটদের বড়দিন ও আগডুম বাগডুম', hi: 'छोटोदेर बोड़ोदिन ओ आगडुम बागडुम' },
        group: { en: 'Samatat', bn: 'সমতট', hi: 'समतट' },
        director: { en: 'Basudeb Hui, Tamal Chattopadhyay', bn: 'বাসুদেব হুই, তমাল চট্টোপাধ্যায়', hi: 'बासुदेब हुई, तमाल चट्टोपाध्याय' },
        date: '25 December 2008',
        time: '5:00 PM'
      },
      {
        title: { en: 'Abatibas', bn: 'অবতিবাস', hi: 'अबतिबास' },
        group: { en: 'Nandikar', bn: 'নান্দীকার', hi: 'नांदीकार' },
        director: { en: 'Sumanta Gangopadhyay, Rudraprasad Sengupta, Swatilekha Sengupta, Sohini Sengupta', bn: 'সুমন্ত গঙ্গোপাধ্যায়, রুদ্রপ্রসাদ সেনগুপ্ত, স্বাতীলেখা সেনগুপ্ত, সোহিনী সেনগুপ্ত', hi: 'सुमंत गंगोपाध्याय, रुद्रप्रसाद सेनगुप्ता, स्वातीलेखा सेनगुप्ता, सोहिनी सेनगुप्ता' },
        date: '26 December 2008',
        time: '6:30 PM'
      },
      {
        title: { en: 'Kacher Manush', bn: 'কাঁচের মানুষ', hi: 'कांचेर मानुष' },
        group: { en: 'Pandar', bn: 'পান্ডার', hi: 'पांडार' },
        director: { en: 'Gautam Haldar (Tirthankara), Debashankar Haldar, Bijaylakshmi Barman', bn: 'গৌতম হালদার (তীর্থঙ্কর), দেবশঙ্কর হালদার, বিজয়লক্ষ্মী বর্মন', hi: 'गौतम हालदार (तीर्थंकर), देबशंकर हालदार, बिजयलक्ष्मी बर्मन' },
        date: '27 December 2008',
        time: '6:30 PM'
      },
      {
        title: { en: 'Aurangzeb', bn: 'আওরঙ্গজেব', hi: 'औरंगजेब' },
        group: { en: 'Ratnapat', bn: 'রত্নপট', hi: 'रत्नपट' },
        director: { en: 'Barimanab Mukhopadhyay, Debashankar Haldar, Bijaylakshmi Barman, Rita Dutta Chakraborty', bn: 'বরিমানব মুখোপাধ্যায়, দেবশঙ্কর হালদার, বিজয়লক্ষ্মী বর্মন, ঋতা দত্ত চক্রবর্তী', hi: 'बरिमानब मुखोपाध्याय, देबशंकर हालदार, बिजयलक्ष्मी बर्मन, रिता दत्ता चक्रवर्ती' },
        date: '27 December 2008',
        time: '3:00 PM'
      },
      {
        title: { en: 'Sandhanir Sakshi', bn: 'সন্ধানীর সাক্ষী', hi: 'संधानीर साक्षी' },
        group: { en: 'Pratikriti', bn: 'প্রতিকৃতি', hi: 'प्रतिकृति' },
        director: { en: 'Alok Deb, Parthapratim Deb', bn: 'আলোক দেব, পার্থপ্রতিম দেব', hi: 'आलोक देब, पार्थप्रतिम देब' },
        playwright: { en: 'Manik Bandyopadhyay (tribute)', bn: 'মানিক বন্দ্যোপাধ্যায় (স্মরণে)', hi: 'मानिक बंद्योपाध्याय (श्रद्धांजलि)' },
        date: '28 December 2008',
        time: '3:00 PM'
      },
      {
        title: { en: 'Pagla Ghora', bn: 'পাগলা ঘোড়া', hi: 'पागला घोड़ा' },
        group: { en: 'Epic Artist Workshop, North America', bn: 'এপিক আর্টিস্ট ওয়ার্কশপ, উত্তর আমেরিকা', hi: 'एपिक आर्टिस्ट वर्कशॉप, उत्तर अमेरिका' },
        director: { en: 'Amal Palekar', bn: 'অমল পালেকার', hi: 'अमल पालेकर' },
        playwright: { en: 'Badal Sarkar', bn: 'বাদল সরকার', hi: 'बादल सरकार' },
        date: '28 December 2008',
        time: '6:00 PM'
      }
    ]
  },

  // 2007 - 8th Edition
  {
    year: 2007,
    edition: 8,
    title: {
      en: 'Samatat Natyamela',
      bn: 'সমতট নাট্যমেলা',
      hi: 'समतट नाट्यमेला'
    },
    dates: {
      en: '22-30 December 2007',
      bn: '২২-৩০ ডিসেম্বর ২০০৭',
      hi: '22-30 दिसंबर 2007'
    },
    venue: {
      en: 'Gangabhaban, Uttarpara',
      bn: 'গঙ্গাভবন, উত্তরপাড়া',
      hi: 'गंगाभवन, उत्तरपाड़ा'
    },
    leafletImage: storageUrl('images/Festivals/Natyamela 2007/7.jpg'),
    plays: [
      {
        title: { en: 'Galpo Hekim Saheb', bn: 'গল্প হেকিম সাহেব', hi: 'गल्प हेकिम साहेब' },
        group: { en: 'Sundaram', bn: 'সুন্দরম', hi: 'सुंदरम' },
        director: { en: 'Manoj Mitra', bn: 'মনোজ মিত্র', hi: 'मनोज मित्र' },
        date: '22 December 2007',
        time: '5:00 PM'
      },
      {
        title: { en: 'Ei Ghum', bn: 'এইঘুম', hi: 'ऐ घुम' },
        group: { en: 'Sanstab', bn: 'সংস্তব', hi: 'संस्तब' },
        director: { en: 'Bijen Bandyopadhyay', bn: 'বিজেন বন্দ্যোপাধ্যায়', hi: 'बिजेन बंद्योपाध्याय' },
        date: '23 December 2007',
        time: '3:00 PM'
      },
      {
        title: { en: 'Putul Nacher Itikatha', bn: 'পুতুল নাচের ইতিকথা', hi: 'पुतुल नाचेर इतिकथा' },
        group: { en: 'Chetona', bn: 'চেতনা', hi: 'चेतना' },
        director: { en: 'Arun Mukhopadhyay', bn: 'অরুণ মুখোপাধ্যায়', hi: 'अरुण मुखोपाध्याय' },
        date: '23 December 2007',
        time: '6:00 PM'
      },
      {
        title: { en: 'Tattur', bn: 'তত্ত্বুর', hi: 'तत्तुर' },
        group: { en: 'Sandhya', bn: 'সান্ধ্য', hi: 'संध्या' },
        director: { en: 'Soumitra Basu', bn: 'সৌমিত্র বসু', hi: 'सौमित्र बसु' },
        date: '24 December 2007',
        time: '6:00 PM'
      },
      {
        title: { en: 'Manmantri Girls School', bn: 'মানমন্ত্রী গার্লস স্কুল', hi: 'मानमंत्री गर्ल्स स्कूल' },
        group: { en: 'Samikshan', bn: 'সমীক্ষণ', hi: 'समीक्षण' },
        director: { en: 'Pankaj Mungi', bn: 'পঙ্কজ মুঙ্গী', hi: 'पंकज मुंगी' },
        date: '25 December 2007',
        time: '3:00 PM'
      },
      {
        title: { en: 'Mahate Khapan', bn: 'মহতে খপন', hi: 'महते खपन' },
        group: { en: 'Shudhik', bn: 'শুদ্ধিক', hi: 'शुद्धिक' },
        director: { en: 'Debashis Majumdar', bn: 'দেবাশিস মজুমদার', hi: 'देबाशिस मजुमदार' },
        date: '26 December 2007',
        time: '6:00 PM'
      },
      {
        title: { en: 'Pratham Path', bn: 'প্রথম পাঠ', hi: 'प्रथम पाठ' },
        group: { en: 'Ayantrik', bn: 'অযান্ত্রিক', hi: 'अयांत्रिक' },
        director: { en: 'Ramaprasad Banik, Kharaj Bandyopadhyay', bn: 'রমাপ্রসাদ বণিক, খরাজ বন্দ্যোপাধ্যায়', hi: 'रामप्रसाद बनिक, खराज बंद्योपाध्याय' },
        date: '26 December 2007',
        time: '6:00 PM'
      },
      {
        title: { en: 'Bachte Thaklo O Shoronchapa', bn: 'বাঁচতে থাকল ও শরণচাপা', hi: 'बांचते थाकलो ओ शरणचापा' },
        group: { en: 'Sayak', bn: 'সায়ক', hi: 'सायक' },
        director: { en: 'Meghnad Bhattacharya', bn: 'মেঘনাদ ভট্টাচার্য', hi: 'मेघनाद भट्टाचार्य' },
        date: '27 December 2007',
        time: '6:00 PM'
      },
      {
        title: { en: 'Chokkhe Selai', bn: 'চোখ্যে সেলাই', hi: 'चोक्खे सेलाई' },
        group: { en: 'Nandikar', bn: 'নান্দীকার', hi: 'नांदीकार' },
        director: { en: 'Swatilekha Sengupta, Gautam Haldar', bn: 'স্বাতীলেখা সেনগুপ্ত, গৌতম হালদার', hi: 'स्वातीलेखा सेनगुप्ता, गौतम हालदार' },
        date: '28 December 2007',
        time: '6:00 PM'
      },
      {
        title: { en: 'Monbhupure Ramkatha', bn: 'মনভূপুরে রামকথা', hi: 'मनभूपुरे रामकथा' },
        group: { en: 'Nandikar', bn: 'নান্দীকার', hi: 'नांदीकार' },
        director: { en: 'Prakash Bhattacharya', bn: 'প্রকাশ ভট্টাচার্য', hi: 'प्रकाश भट्टाचार्य' },
        date: '29 December 2007',
        time: '6:00 PM'
      },
      {
        title: { en: 'Palash', bn: 'পলাশ', hi: 'पलाश' },
        group: { en: 'Natya', bn: 'নট্য', hi: 'नट्य' },
        director: { en: 'Shib Mukhopadhyay, Meghnad Bhattacharya, Soumitra Basu, Seema Mukhopadhyay', bn: 'শিব মুখোপাধ্যায়, মেঘনাদ ভট্টাচার্য, সৌমিত্র বসু, সীমা মুখোপাধ্যায়', hi: 'शिब मुखोपाध्याय, मेघनाद भट्टाचार्य, सौमित्र बसु, सीमा मुखोपाध्याय' },
        date: '30 December 2007',
        time: '2:00 PM'
      },
      {
        title: { en: 'Tota Kahini O Podi Pisir Bormi Baks', bn: 'তোতা কাহিনী ও পদি পিসির বর্মি বাক্স', hi: 'तोता काहिनी ओ पोदी पिसिर बोर्मी बाक्स' },
        group: { en: 'Samatat/Nandikar', bn: 'সমতট/নান্দীকার', hi: 'समतट/नांदीकार' },
        director: { en: 'Parthapratim Deb, Debashankar Haldar', bn: 'পার্থ প্রতিম দেব, দেবশঙ্কর হালদার', hi: 'पार्थप्रतिम देब, देबशंकर हालदार' },
        date: '30 December 2007',
        time: '5:00 PM'
      }
    ]
  },

  // 2006 - 7th Edition
  {
    year: 2006,
    edition: 7,
    title: {
      en: 'Samatat Natyamela',
      bn: 'সমতট নাট্যমেলা',
      hi: 'समतट नाट्यमेला'
    },
    dates: {
      en: '23-31 December 2006',
      bn: '২৩-৩১ ডিসেম্বর ২০০৬',
      hi: '23-31 दिसंबर 2006'
    },
    venue: {
      en: 'Gangabhaban, Uttarpara',
      bn: 'গঙ্গাভবন, উত্তরপাড়া',
      hi: 'गंगाभवन, उत्तरपाड़ा'
    },
    leafletImage: storageUrl('images/Festivals/Natyamela 2006/6.jpg'),
    plays: [
      {
        title: { en: 'Dildar', bn: 'দিলদার', hi: 'दिलदार' },
        group: { en: 'Sayak', bn: 'সায়ক', hi: 'सायक' },
        director: { en: 'Meghnad Bhattacharya', bn: 'মেঘনাদ ভট্টাচার্য', hi: 'मेघनाद भट्टाचार्य' },
        date: '23 December 2006',
        time: '5:00 PM'
      },
      {
        title: { en: 'Kanchele Malsat', bn: 'ক্যান্সেলে মালসাট', hi: 'कांचेले मालसाट' },
        group: { en: 'Tritiya Sutra', bn: 'তৃতীয় সূত্র', hi: 'तृतीय सूत्र' },
        director: { en: 'Suman Mukhopadhyay', bn: 'সুমন মুখোপাধ্যায়', hi: 'सुमन मुखोपाध्याय' },
        date: '24 December 2006',
        time: '6:00 PM'
      },
      {
        title: { en: 'Shalbani', bn: 'শালবনী', hi: 'शालबनी' },
        group: { en: 'Swapnasandhani', bn: 'স্বপ্নসন্ধানী', hi: 'स्वप्नसंधानी' },
        director: { en: 'Koushik Sen', bn: 'কৌশিক সেন', hi: 'कौशिक सेन' },
        date: '25 December 2006',
        time: '3:00 PM'
      },
      {
        title: { en: 'Kaliprasanna O Ora', bn: 'কালীপ্রসন্ন ও ওরা', hi: 'कालीप्रसन्न ओ ओरा' },
        group: { en: 'Nandikar/Samatat Sanskriti', bn: 'নান্দীকার/সমতট সংস্কৃতি', hi: 'नांदीकार/समतट संस्कृति' },
        director: { en: 'Sumanta Gangopadhyay', bn: 'সুমন্ত গঙ্গোপাধ্যায়', hi: 'सुमंत गंगोपाध्याय' },
        date: '25 December 2006',
        time: '6:00 PM'
      },
      {
        title: { en: 'Manosamon', bn: 'মানসমন', hi: 'मानसमन' },
        group: { en: 'Silpayan', bn: 'শিল্পায়ন', hi: 'शिल्पायन' },
        director: { en: 'Ashok Mukhopadhyay', bn: 'অশোক মুখোপাধ্যায়', hi: 'अशोक मुखोपाध्याय' },
        date: '26 December 2006',
        time: '6:00 PM'
      },
      {
        title: { en: 'Kabuli Waalla', bn: 'কাবুলিওয়ালা', hi: 'काबुलीवाला' },
        group: { en: 'Gandharba', bn: 'গন্ধর্ব', hi: 'गंधर्व' },
        director: { en: 'Baban Mukhopadhyay', bn: 'বাবন মুখোপাধ্যায়', hi: 'बाबन मुखोपाध्याय' },
        date: '27 December 2006',
        time: '6:00 PM'
      },
      {
        title: { en: 'Bagh', bn: 'বাঘ', hi: 'बाघ' },
        group: { en: 'Anya Theatre', bn: 'অন্য থিয়েটার', hi: 'अन्य थिएटर' },
        director: { en: 'Bibhas Chakraborty', bn: 'বিভাস চক্রবর্তী', hi: 'बिभास चक्रवर्ती' },
        date: '28 December 2006',
        time: '6:00 PM'
      },
      {
        title: { en: 'Prem Prem', bn: 'প্রেম প্রেম', hi: 'प्रेम प्रेम' },
        group: { en: 'Sundaram', bn: 'সুন্দরম', hi: 'सुंदरम' },
        director: { en: 'Manoj Mitra', bn: 'মনোজ মিত্র', hi: 'मनोज मित्र' },
        date: '29 December 2006',
        time: '6:00 PM'
      },
      {
        title: { en: 'Madhabananda', bn: 'মাধবানন্দ', hi: 'माधबानंद' },
        group: { en: 'Kalyani Natyacharcha Kendra', bn: 'কল্যাণী নাট্যচর্চা কেন্দ্র', hi: 'कल्याणी नाट्यचर्चा केंद्र' },
        director: { en: 'Gautam Haldar', bn: 'গৌতম হালদার', hi: 'गौतम हालदार' },
        date: '30 December 2006',
        time: '3:00 PM'
      },
      {
        title: { en: 'Paribartan', bn: 'পরিবর্তন', hi: 'परिबर्तन' },
        group: { en: 'Theatre Passion', bn: 'থিয়েটার প্যাশন', hi: 'थिएटर पैशन' },
        director: { en: 'Ramaprasad Banik', bn: 'রমাপ্রসাদ বণিক', hi: 'रामप्रसाद बनिक' },
        date: '30 December 2006',
        time: '6:00 PM'
      },
      {
        title: { en: 'Chhayabaji', bn: 'ছায়াবাজি', hi: 'छायाबाजी' },
        group: { en: 'Sayer', bn: 'সায়ের', hi: 'सायेर' },
        director: { en: 'Sheyali Duttagupta', bn: 'শেয়ালী দত্তগুপ্ত', hi: 'शेयालि दत्तगुप्ता' },
        date: '31 December 2006',
        time: '3:00 PM'
      },
      {
        title: { en: 'Tringsha Shatabdir Natak', bn: 'ত্রিংশ শতাব্দীর নাটক', hi: 'त्रिंश शताब्दीर नाटक' },
        group: { en: 'Manashij', bn: 'মানসিজ', hi: 'मानसिज' },
        director: { en: 'Shyamal Chakraborty', bn: 'শ্যামল চক্রবর্তী', hi: 'श्यामल चक्रवर्ती' },
        date: '31 December 2006',
        time: '6:00 PM'
      }
    ]
  },

  // 2005-06 - 6th Edition
  {
    year: 2005,
    edition: 6,
    title: {
      en: 'Samatat Natyamela',
      bn: 'সমতট নাট্যমেলা',
      hi: 'समतट नाट्यमेला'
    },
    dates: {
      en: '24 December 2005 - 1 January 2006',
      bn: '২৪ ডিসেম্বর ২০০৫ - ১ জানুয়ারি ২০০৬',
      hi: '24 दिसंबर 2005 - 1 जनवरी 2006'
    },
    venue: {
      en: 'Gangabhaban, Uttarpara',
      bn: 'গঙ্গাভবন, উত্তরপাড়া',
      hi: 'गंगाभवन, उत्तरपाड़ा'
    },
    leafletImage: storageUrl('images/Festivals/Natyamela 2005/5.jpg'),
    plays: [
      {
        title: { en: 'Bhoyam', bn: 'ভয়াম', hi: 'भयाम' },
        group: { en: 'Peoples Little Theatre', bn: 'পিপলস লিটল থিয়েটার', hi: 'पीपल्स लिटल थिएटर' },
        director: { en: 'Utpal Dutt', bn: 'উৎপল দত্ত', hi: 'उत्पल दत्त' },
        date: '24 December 2005',
        time: '6:00 PM'
      },
      {
        title: { en: 'Kagaj Kali', bn: 'কাগজ কালি', hi: 'कागज कालि' },
        group: { en: 'Nandikar, Samatat', bn: 'নান্দীকার, সমতট', hi: 'नांदीकार, समतट' },
        director: { en: 'Debshankar Haldar', bn: 'দেবশঙ্কর হালদার', hi: 'देबशंकर हालदार' },
        date: '25 December 2005',
        time: '10:30 AM'
      },
      {
        title: { en: 'Mrityu Sanghita', bn: 'মৃত্যু সংহিতা', hi: 'मृत्यु संहिता' },
        group: { en: 'Anya Theatre', bn: 'অন্য থিয়েটার', hi: 'अन्य थिएटर' },
        director: { en: 'Bibhas Chakraborty', bn: 'বিভাস চক্রবর্তী', hi: 'बिभास चक्रवर्ती' },
        date: '25 December 2005',
        time: '6:00 PM'
      },
      {
        title: { en: 'Ratri Sharbari', bn: 'রাত্রি সর্বাঙ্গ', hi: 'रात्रि सर्वांग' },
        group: { en: 'Theatre Workshop', bn: 'থিয়েটার ওয়ার্কশপ', hi: 'थिएटर वर्कशॉप' },
        director: { en: 'Ashok Mukhopadhyay', bn: 'অশোক মুখোপাধ্যায়', hi: 'अशोक मुखोपाध्याय' },
        date: '26 December 2005',
        time: '6:00 PM'
      },
      {
        title: { en: 'Chhayadhey Mondobishey', bn: 'ছায়াদে মন্দবিশে', hi: 'छायादे मंदबिशे' },
        group: { en: 'Sundaram', bn: 'সুন্দরম', hi: 'सुंदरम' },
        director: { en: 'Manoj Mitra', bn: 'মনোজ মিত্র', hi: 'मनोज मित्र' },
        date: '27 December 2005',
        time: '6:00 PM'
      },
      {
        title: { en: 'Raja', bn: 'রাজা', hi: 'राजा' },
        group: { en: 'Ride Opera', bn: 'রাইড অপেরা', hi: 'राइड ओपेरा' },
        director: { en: 'Obhashish Gangopadhyay', bn: 'ওভাশিষ গঙ্গোপাধ্যায়', hi: 'ओभाषिष गंगोपाध्याय' },
        date: '28 December 2005',
        time: '6:30 PM'
      },
      {
        title: { en: 'Ei Britanto', bn: 'এই বৃত্তান্ত', hi: 'ऐ बृत्तांत' },
        group: { en: 'Sayer', bn: 'সায়ের', hi: 'सायेर' },
        director: { en: 'Sheyali Duttagupta', bn: 'শেয়ালী দত্তগুপ্ত', hi: 'शेयालि दत्तगुप्ता' },
        date: '29 December 2005',
        time: '6:00 PM'
      },
      {
        title: { en: 'Baki Itihas', bn: 'বাকি ইতিহাস', hi: 'बाकी इतिहास' },
        group: { en: 'Swapnasandhani', bn: 'স্বপ্নসন্ধানী', hi: 'स्वप्नसंधानी' },
        director: { en: 'Koushik Sen', bn: 'কৌশিক সেন', hi: 'कौशिक सेन' },
        date: '30 December 2005',
        time: '10:30 AM'
      },
      {
        title: { en: 'Bhaboghure', bn: 'ভাবঘুরে', hi: 'भाबघुरे' },
        group: { en: 'Pankashti', bn: 'পঙ্কষ্টি', hi: 'पंकष्टी' },
        director: { en: 'Rata Basu', bn: 'রাতা বসু', hi: 'राता बसु' },
        date: '30 December 2005',
        time: '6:00 PM'
      },
      {
        title: { en: 'Shalya Parba', bn: 'শল্য পর্ব', hi: 'शल्य पर्व' },
        group: { en: 'Barasat Anushilani', bn: 'বারাসাত অনুশীলনী', hi: 'बरासत अनुशीलनी' },
        director: { en: 'Rudratej Sengupta', bn: 'রুদ্রতেজ সেনগুপ্ত', hi: 'रुद्रतेज सेनगुप्ता' },
        date: '31 December 2005',
        time: '6:00 PM'
      },
      {
        title: { en: 'Satyasatya', bn: 'সত্যাসত্য', hi: 'सत्यासत्य' },
        group: { en: 'Pandar', bn: 'পান্ডার', hi: 'पांडार' },
        director: { en: 'Shyamal Chakraborty', bn: 'শ্যামল চক্রবর্তী', hi: 'श्यामल चक्रवर्ती' },
        date: '1 January 2006',
        time: '3:00 PM'
      },
      {
        title: { en: 'Ramnidhi', bn: 'রামনিধি', hi: 'रामनिधि' },
        group: { en: 'Ekush Shatak', bn: 'একুশ শতক', hi: 'एकुश शतक' },
        director: { en: 'Ranju Chowdhury', bn: 'রঞ্জু চৌধুরী', hi: 'रंजू चौधरी' },
        date: '1 January 2006',
        time: '6:30 PM'
      }
    ]
  },

  // 2004-05 - 5th Edition
  {
    year: 2004,
    edition: 5,
    title: {
      en: 'Samatat Natyamela',
      bn: 'সমতট নাট্যমেলা',
      hi: 'समतट नाट्यमेला'
    },
    dates: {
      en: '24 December 2004 - 1 January 2005',
      bn: '২৪ ডিসেম্বর ২০০৪ - ১ জানুয়ারি ২০০৫',
      hi: '24 दिसंबर 2004 - 1 जनवरी 2005'
    },
    venue: {
      en: 'Gangabhaban, Uttarpara',
      bn: 'গঙ্গাভবন, উত্তরপাড়া',
      hi: 'गंगाभवन, उत्तरपाड़ा'
    },
    leafletImage: storageUrl('images/Festivals/Natyamela 2004/4.jpg'),
    plays: [
      {
        title: { en: 'Satabendra', bn: 'সান্তাবেঁদা', hi: 'सांताबेंदा' },
        group: { en: 'Sayak', bn: 'সায়ক', hi: 'सायक' },
        director: { en: 'Meghnad Bhattacharya', bn: 'মেঘনাদ ভট্টাচার্য', hi: 'मेघनाद भट्टाचार्य' },
        date: '24 December 2004',
        time: '6:00 PM'
      },
      {
        title: { en: 'Jabla Ebong Bhola', bn: 'জাবলা এবং ভোলা', hi: 'जाबला एबं भोला' },
        group: { en: 'Theatre Passion', bn: 'থিয়েটার প্যাশন', hi: 'थिएटर पैशन' },
        director: { en: 'Ramaprasad Banik', bn: 'রমাপ্রসাদ বণিক', hi: 'रामप्रसाद बनिक' },
        date: '25 December 2004',
        time: '6:30 PM'
      },
      {
        title: { en: 'Balkotar Yeupy', bn: 'বালকোতার ইউপিয়ে', hi: 'बालकोतार यूपी' },
        group: { en: 'Swapnasandhani', bn: 'স্বপ্নসন্ধানী', hi: 'स्वप्नसंधानी' },
        director: { en: 'Koushik Sen', bn: 'কৌশিক সেন', hi: 'कौशिक सेन' },
        date: '26 December 2004',
        time: '6:30 PM'
      },
      {
        title: { en: 'Jai Jai Antaryami', bn: 'জৈ জৈ অন্তর্যামী', hi: 'जै जै अंतर्यामी' },
        group: { en: 'Anya Theatre', bn: 'অন্য থিয়েটার', hi: 'अन्य थिएटर' },
        director: { en: 'Bibhas Chakraborty', bn: 'বিভাস চক্রবর্তী', hi: 'बिभास चक्रवर्ती' },
        date: '27 December 2004',
        time: '6:30 PM'
      },
      {
        title: { en: 'Arohon', bn: 'আরোহণ', hi: 'आरोहण' },
        group: { en: 'Mukhamukhi', bn: 'মুখামুখি', hi: 'मुखामुखी' },
        director: { en: 'Soumitra Chattopadhyay', bn: 'সৌমিত্র চট্টোপাধ্যায়', hi: 'सौमित्र चट्टोपाध्याय' },
        date: '28 December 2004',
        time: '6:30 PM'
      },
      {
        title: { en: 'Eijey Ami Pheyarwey', bn: 'এই যে আমি ফেয়ারওয়েল', hi: 'ऐजे आमी फेयारवे' },
        group: { en: 'Nandikar', bn: 'নান্দীকার', hi: 'नांदीकार' },
        director: { en: 'Rudraprasad Sengupta', bn: 'রুদ্রপ্রসাদ সেনগুপ্ত', hi: 'रुद्रप्रसाद सेनगुप्ता' },
        date: '29 December 2004',
        time: '6:30 PM'
      },
      {
        title: { en: '29 Tulai', bn: '২৯ তুলাই', hi: '29 तुलाई' },
        group: { en: 'Pankashti', bn: 'পঙ্কষ্টি', hi: 'पंकष्टी' },
        director: { en: 'Rata Basu', bn: 'রাতা বসু', hi: 'राता बसु' },
        date: '30 December 2004',
        time: '6:30 PM'
      },
      {
        title: { en: 'Tritiyo Babur Hatey Lathi', bn: 'তৃতীয় বাবুর হাতে লাঠি', hi: 'तृतीय बाबुर हाते लाठी' },
        group: { en: 'Swapnasandhani', bn: 'স্বপ্নসন্ধানী', hi: 'स्वप्नसंधानी' },
        director: { en: 'Koushik Sen', bn: 'কৌশিক সেন', hi: 'कौशिक सेन' },
        date: '30 December 2004',
        time: 'Morning'
      },
      {
        title: { en: 'Tyagyen Dombhey Gamyay', bn: 'ত্যাগেনদম্ভে গম্যায়', hi: 'त्यागेनदम्भे गम्याय' },
        group: { en: 'Sundaram', bn: 'সুন্দরম', hi: 'सुंदरम' },
        director: { en: 'Manoj Mitra', bn: 'মনোজ মিত্র', hi: 'मनोज मित्र' },
        date: '31 December 2004',
        time: '6:00 PM'
      },
      {
        title: { en: 'E Muhurtey Marut', bn: 'এ মুহূর্তে মারুত', hi: 'ए मुहूर्ते मारुत' },
        group: { en: 'Theatre Workshop', bn: 'থিয়েটার ওয়ার্কশপ', hi: 'थिएटर वर्कशॉप' },
        director: { en: 'Ashok Mukhopadhyay', bn: 'অশোক মুখোপাধ্যায়', hi: 'अशोक मुखोपाध्याय' },
        date: '1 January 2005',
        time: '6:30 PM'
      }
    ]
  },

  // 2003 - 4th Edition
  {
    year: 2003,
    edition: 4,
    title: {
      en: 'Samatat Natyamela',
      bn: 'সমতট নাট্যমেলা',
      hi: 'समतट नाट्यमेला'
    },
    dates: {
      en: '20-29 December 2003',
      bn: '২০-২৯ ডিসেম্বর ২০০৩',
      hi: '20-29 दिसंबर 2003'
    },
    venue: {
      en: 'Gangabhaban, Uttarpara',
      bn: 'গঙ্গাভবন, উত্তরপাড়া',
      hi: 'गंगाभवन, उत्तरपाड़ा'
    },
    leafletImage: storageUrl('images/Festivals/Natyamela 2003/3.jpg'),
    plays: [
      {
        title: { en: 'Madhab Malanchakonya', bn: 'মাধব মালঞ্চ কন্যা', hi: 'माधब मालंच कन्या' },
        group: { en: 'Anya Theatre', bn: 'অন্য থিয়েটার', hi: 'अन्य थिएटर' },
        director: { en: 'Bibhas Chakraborty', bn: 'বিভাস চক্রবর্তী', hi: 'बिभास चक्रवर्ती' },
        date: '20 December 2003',
        time: '6:30 PM'
      },
      {
        title: { en: 'Kashinama', bn: 'কাশীনামা', hi: 'काशीनामा' },
        group: { en: 'Rangakarmi', bn: 'রঙ্গকর্মী', hi: 'रंगकर्मी' },
        director: { en: 'Usha Ganguly', bn: 'উষা গাঙ্গুলী', hi: 'उषा गांगुली' },
        date: '21 December 2003',
        time: '6:30 PM'
      },
      {
        title: { en: 'Gand Ken Chehara Sonar', bn: 'গাঁদে কেন চেহারা সোনার', hi: 'गांद केन चेहारा सोनार' },
        group: { en: 'Sayer', bn: 'সায়ের', hi: 'सायेर' },
        director: { en: 'Sheyali Duttagupta', bn: 'শেয়ালী দত্তগুপ্ত', hi: 'शेयालि दत्तगुप्ता' },
        date: '22 December 2003',
        time: '6:30 PM'
      },
      {
        title: { en: 'Badi Iswar', bn: 'বদী ঈশ্বর', hi: 'बदी ईश्वर' },
        group: { en: 'Sayak', bn: 'সায়ক', hi: 'सायक' },
        director: { en: 'Meghnad Bhattacharya', bn: 'মেঘনাদ ভট্টাচার্য', hi: 'मेघनाद भट्टाचार्य' },
        date: '23 December 2003',
        time: '6:30 PM'
      },
      {
        title: { en: 'Mati', bn: 'মাটি', hi: 'माटी' },
        group: { en: 'Nandikar, Samatat', bn: 'নান্দীকার, সমতট', hi: 'नांदीकार, समतट' },
        director: { en: 'Gautam Haldar', bn: 'গৌতম হালদার', hi: 'गौतम हालदार' },
        date: '24 December 2003',
        time: '6:30 PM'
      },
      {
        title: { en: 'Bhadeswarir Galpo', bn: 'ভাদেশ্বরীর গল্প', hi: 'भादेश्वरीर गल्प' },
        group: { en: 'Nabamukha', bn: 'নবমুখ', hi: 'नबमुख' },
        director: { en: 'Rishi Mukhopadhyay', bn: 'ঋষি মুখোপাধ্যায়', hi: 'ऋषि मुखोपाध्याय' },
        date: '25 December 2003',
        time: '6:30 PM'
      },
      {
        title: { en: 'Dibyer No. 1', bn: 'দিব্যের নং ১', hi: 'दिव्येर नंबर 1' },
        group: { en: 'Swapnasandhani', bn: 'স্বপ্নসন্ধানী', hi: 'स्वप्नसंधानी' },
        director: { en: 'Kaushik Sen', bn: 'কৌশিক সেন', hi: 'कौशिक सेन' },
        date: '26 December 2003',
        time: '6:30 PM'
      },
      {
        title: { en: 'Raktokarobi', bn: 'রক্তকরবী', hi: 'रक्तकरबी' },
        group: { en: 'Bangladesh Natyasanstha', bn: 'বাংলাদেশ নাট্যসংস্থা', hi: 'बांग्लादेश नाट्यसंस्था' },
        director: { en: 'Ahmed Iqbal Haidar', bn: 'আহমেদ ইকবাল হায়দার', hi: 'अहमद इकबाल हैदर' },
        playwright: { en: 'Rabindranath Tagore', bn: 'রবীন্দ্রনাথ ঠাকুর', hi: 'रवींद्रनाथ टैगोर' },
        date: '27 December 2003',
        time: '6:30 PM'
      },
      {
        title: { en: 'Tilekoen Sena', bn: 'টিলেকোয়েন সেনা', hi: 'टिलेकोएन सेना' },
        group: { en: 'Kalyani Natyacharcha Kendra', bn: 'কল্যাণী নাট্যচর্চা কেন্দ্র', hi: 'कल्याणी नाट्यचर्चा केंद्र' },
        director: { en: 'Gautam Haldar', bn: 'গৌতম হালদার', hi: 'गौतम हालदार' },
        date: '28 December 2003',
        time: '6:30 PM'
      },
      {
        title: { en: 'Operation Bhomaragarh', bn: 'অপারেশন ভোমরাগড়', hi: 'ऑपरेशन भोमरागड़' },
        group: { en: 'Sundaram', bn: 'সুন্দরম', hi: 'सुंदरम' },
        director: { en: 'Manoj Mitra', bn: 'মনোজ মিত্র', hi: 'मनोज मित्र' },
        date: '29 December 2003',
        time: '6:30 PM'
      }
    ]
  },

  // 2001 - 2nd Edition
  {
    year: 2001,
    edition: 2,
    title: {
      en: 'Samatat Natyamela',
      bn: 'সমতট নাট্যমেলা',
      hi: 'समतट नाट्यमेला'
    },
    dates: {
      en: '22-30 December 2001',
      bn: '২২-৩০ ডিসেম্বর ২০০১',
      hi: '22-30 दिसंबर 2001'
    },
    venue: {
      en: 'Uttarpara Gangabhaban',
      bn: 'উত্তরপাড়া গঙ্গাভবন',
      hi: 'उत्तरपाड़ा गंगाभवन'
    },
    leafletImage: storageUrl('images/Festivals/Natyamela 2001/1.jpg'),
    plays: [
      {
        title: { en: 'Mukti', bn: 'মুক্তি', hi: 'मुक्ति' },
        group: { en: 'Rangakarmi', bn: 'রঙ্গকর্মী', hi: 'रंगकर्मी' },
        director: { en: 'Usha Ganguly', bn: 'উষা গাঙ্গুলী', hi: 'उषा गांगुली' },
        date: '22 December 2001',
        time: 'Evening'
      },
      {
        title: { en: 'Arsidheser Porshira', bn: 'আরশিদেশের পড়শিরা', hi: 'आरशीदेशेर पोड़शीरा' },
        group: { en: 'Shuddhak/Samatat', bn: 'শুদ্ধক/সমতট', hi: 'शुद्धक/समतट' },
        director: { en: 'Bipanu Mitra', bn: 'বিপানু মিত্র', hi: 'बिपानु मित्र' },
        date: '23 December 2001',
        time: 'Morning'
      },
      {
        title: { en: 'Parabas', bn: 'পরবাস', hi: 'परबास' },
        group: { en: 'Sundaram', bn: 'সুন্দরম', hi: 'सुंदरम' },
        director: { en: 'Manoj Mitra', bn: 'মনোজ মিত্র', hi: 'मनोज मित्र' },
        date: '23 December 2001',
        time: 'Evening'
      },
      {
        title: { en: 'Poka', bn: 'পোকা', hi: 'पोका' },
        group: { en: 'Theatre Workshop', bn: 'থিয়েটার ওয়ার্কশপ', hi: 'थिएटर वर्कशॉप' },
        director: { en: 'Ashok Mukhopadhyay', bn: 'অশোক মুখোপাধ্যায়', hi: 'अशोक मुखोपाध्याय' },
        date: '24 December 2001',
        time: 'Evening'
      },
      {
        title: { en: 'Dakshinrayer Pala / Dharmajuddha', bn: 'দক্ষিণরায়ের পালা / ধর্মযুদ্ধ', hi: 'दक्षिणरायेर पाला / धर्मयुद्ध' },
        group: { en: 'Kasba Arghya, Raja Parry Mohan College', bn: 'কসবা অর্ঘ্য, রাজা প্যারী মোহন কলেজ', hi: 'कसबा अर्घ्य, राजा पैरी मोहन कॉलेज' },
        director: { en: 'Manish Mitra, Kutub Mukhopadhyay', bn: 'মণীষ মিত্র, কুতুব মুখোপাধ্যায়', hi: 'मनीष मित्र, कुतुब मुखोपाध्याय' },
        date: '25 December 2001',
        time: 'Afternoon'
      },
      {
        title: { en: 'Mushtijug', bn: 'মুষ্টিযুগ', hi: 'मुष्टियुग' },
        group: { en: 'Sanstab', bn: 'সংস্তব', hi: 'संस्तब' },
        director: { en: 'Bijen Bandopadhyay', bn: 'বিজেন বন্দ্যোপাধ্যায়', hi: 'बिजेन बंदोपाध्याय' },
        date: '25 December 2001',
        time: 'Evening'
      },
      {
        title: { en: 'Ankagali', bn: 'অঙ্কগলি', hi: 'अंकगली' },
        group: { en: 'Sayak', bn: 'সায়ক', hi: 'सायक' },
        director: { en: 'Meghnad Bhattacharya', bn: 'মেঘনাদ ভট্টাচার্য', hi: 'मेघनाद भट्टाचार्य' },
        date: '26 December 2001',
        time: 'Evening'
      },
      {
        title: { en: 'Dhritabanshi', bn: 'ধৃতাবংশী', hi: 'धृताबंशी' },
        group: { en: 'Bahurupi', bn: 'বহুরূপী', hi: 'बहुरूपी' },
        director: { en: 'Tarapodo Mukhopadhyay', bn: 'তারাপদ মুখোপাধ্যায়', hi: 'तारापद मुखोपाध्याय' },
        date: '27 December 2001',
        time: 'Evening'
      },
      {
        title: { en: 'Sirajdaulla', bn: 'সিরাজদৌলা', hi: 'सिराजदौला' },
        group: { en: 'Natyaranga', bn: 'নাট্যরঙ্গ', hi: 'नाट्यरंग' },
        director: { en: 'Swapan Sengupta', bn: 'স্বপন সেনগুপ্ত', hi: 'स्वपन सेनगुप्ता' },
        date: '28 December 2001',
        time: 'Evening'
      },
      {
        title: { en: 'Mrityu Na Hatya', bn: 'মৃত্যু না হত্যা', hi: 'मृत्यु ना हत्या' },
        group: { en: 'Nandikar', bn: 'নান্দীকার', hi: 'नांदीकार' },
        director: { en: 'Bibhas Chakraborty', bn: 'বিভাস চক্রবর্তী', hi: 'बिभास चक्रवर्ती' },
        date: '29 December 2001',
        time: 'Evening'
      },
      {
        title: { en: 'Rupnagarer Rupkatha', bn: 'রূপনগরের রূপকথা', hi: 'रूपनगरेर रूपकथा' },
        group: { en: 'Nandikar/Samatat', bn: 'নান্দীকার/সমতট', hi: 'नांदीकार/समतट' },
        director: { en: 'Debshonkor Haldar', bn: 'দেবশঙ্কর হালদার', hi: 'देबशंकर हालदार' },
        date: '30 December 2001',
        time: 'Morning'
      },
      {
        title: { en: 'Feriwalar Mrityu', bn: 'ফেরিওয়ালার মৃত্যু', hi: 'फेरीवालार मृत्यु' },
        group: { en: 'Nandikar', bn: 'নান্দীকার', hi: 'नांदीकार' },
        director: { en: 'Rudraprasad Sengupta', bn: 'রুদ্রপ্রসাদ সেনগুপ্ত', hi: 'रुद्रप्रसाद सेनगुप्ता' },
        date: '30 December 2001',
        time: 'Evening'
      }
    ]
  },

  // 2000 - 1st Edition
  {
    year: 2000,
    edition: 1,
    title: {
      en: 'Samatat Natyamela - Inaugural Edition',
      bn: 'সমতট নাট্যমেলা - প্রথম সংস্করণ',
      hi: 'समतट नाट्यमेला - प्रथम संस्करण'
    },
    dates: {
      en: '24 December 2000 - 1 January 2001',
      bn: '২৪ ডিসেম্বর ২০০০ - ১ জানুয়ারি ২০০১',
      hi: '24 दिसंबर 2000 - 1 जनवरी 2001'
    },
    venue: {
      en: 'Gangabhaban, Uttarpara',
      bn: 'গঙ্গাভবন, উত্তরপাড়া',
      hi: 'गंगाभवन, उत्तरपाड़ा'
    },
    leafletImage: storageUrl('images/Festivals/Natyamela 2000/2000.jpg'),
    plays: [
      {
        title: { en: 'Jibon Chhanda', bn: 'জীবন ছন্দ', hi: 'जीबन छंद' },
        group: { en: 'Pindak', bn: 'পিন্ডক', hi: 'पिंडक' },
        director: { en: 'Timir Barun Roy', bn: 'তিমির বরুণ রায়', hi: 'तिमिर बरुण राय' },
        date: '24 December 2000',
        time: 'Morning'
      },
      {
        title: { en: 'Rajmeistri', bn: 'রাজমিস্ত্রী', hi: 'राजमिस्त्री' },
        group: { en: 'Sundaram', bn: 'সুন্দরম', hi: 'सुंदरम' },
        director: { en: 'Manoj Mitra', bn: 'মনোজ মিত্র', hi: 'मनोज मित्र' },
        date: '24 December 2000',
        time: 'Evening'
      },
      {
        title: { en: 'Badi Bedambar', bn: 'বড়ি বেদম্বর', hi: 'बड़ी बेदम्बर' },
        group: { en: 'Theatre Workshop', bn: 'থিয়েটার ওয়ার্কশপ', hi: 'थिएटर वर्कशॉप' },
        director: { en: 'Ashok Mukhopadhyay', bn: 'অশোক মুখোপাধ্যায়', hi: 'अशोक मुखोपाध्याय' },
        date: '25 December 2000',
        time: 'Evening'
      },
      {
        title: { en: 'Rokter Bahire Rokta', bn: 'রক্তের বাইরে রক্ত', hi: 'रक्तेर बाहिरे रक्त' },
        group: { en: 'Theatre Passion', bn: 'থিয়েটার প্যাশন', hi: 'थिएटर पैशन' },
        director: { en: 'Ramaprasad Banik', bn: 'রমাপ্রসাদ বণিক', hi: 'रामप्रसाद बनिक' },
        date: '26 December 2000',
        time: 'Evening'
      },
      {
        title: { en: 'Dayabaddha', bn: 'দায়বদ্ধ', hi: 'दायबद्ध' },
        group: { en: 'Sayak', bn: 'সায়ক', hi: 'सायक' },
        director: { en: 'Meghnad Bhattacharya', bn: 'মেঘনাদ ভট্টাচার্য', hi: 'मेघनाद भट्टाचार्य' },
        date: '27 December 2000',
        time: 'Evening'
      },
      {
        title: { en: 'Itukur Epitaph', bn: 'ইটকুর এপিটাফ', hi: 'इटकुर एपिटाफ' },
        group: { en: 'Nandikar', bn: 'নান্দীকার', hi: 'नांदीकार' },
        director: { en: 'Rudraprasad Sengupta', bn: 'রুদ্রপ্রসাদ সেনগুপ্ত', hi: 'रुद्रप्रसाद सेनगुप्ता' },
        date: '28 December 2000',
        time: 'Evening'
      },
      {
        title: { en: 'Janmadin', bn: 'জন্মদিন', hi: 'जन्मदिन' },
        group: { en: 'Chhupkatha', bn: 'ছুপকথা', hi: 'छुपकथा' },
        director: { en: 'Asit Mukhopadhyay', bn: 'অসিত মুখোপাধ্যায়', hi: 'असित मुखोपाध्याय' },
        date: '29 December 2000',
        time: 'Evening'
      },
      {
        title: { en: 'Dyui Dukkhu Kakatiuya', bn: 'দুই দুঃখু কাকাতুয়া', hi: 'दुई दुक्खु काकातुया' },
        group: { en: 'Bahurupi', bn: 'বহুরূপী', hi: 'बहुरूपी' },
        director: { en: 'Kumar Roy', bn: 'কুমার রায়', hi: 'कुमार राय' },
        date: '30 December 2000',
        time: 'Evening'
      },
      {
        title: { en: 'Manush Khota', bn: 'মানুষ খোঁতা', hi: 'मानुष खोंता' },
        group: { en: 'Mandal', bn: 'মন্ডল', hi: 'मंडल' },
        director: { en: 'Samir Biswas', bn: 'সমীর বিশ্বাস', hi: 'समीर बिस्वास' },
        date: '31 December 2000',
        time: 'Evening'
      },
      {
        title: { en: 'Aiko', bn: 'আইকো', hi: 'आइको' },
        group: { en: 'Natyaranga', bn: 'নাট্যরঙ্গ', hi: 'नाट्यरंग' },
        director: { en: 'Swapan Sengupta', bn: 'স্বপন সেনগুপ্ত', hi: 'स्वपन सेनगुप्ता' },
        date: '1 January 2001',
        time: 'Evening'
      }
    ]
  }
];

// Get festivals sorted by year (descending - newest first)
export const getFestivalsSorted = () => {
  return [...festivalsData].sort((a, b) => b.year - a.year);
};

// Get a specific festival by year
export const getFestivalByYear = (year: number) => {
  return festivalsData.find(f => f.year === year);
};

// Get all unique theatre groups
export const getAllGroups = () => {
  const groups = new Set<string>();
  festivalsData.forEach(festival => {
    festival.plays.forEach(play => {
      if (play.group.en !== 'Various') {
        groups.add(play.group.en);
      }
    });
  });
  return Array.from(groups).sort();
};

// Get all unique directors
export const getAllDirectors = () => {
  const directors = new Set<string>();
  festivalsData.forEach(festival => {
    festival.plays.forEach(play => {
      if (play.director.en !== 'Various') {
        directors.add(play.director.en);
      }
    });
  });
  return Array.from(directors).sort();
};
