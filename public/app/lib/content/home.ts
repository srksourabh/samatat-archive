import { Language } from '../../components/LanguageSwitcher';

type TranslatedContent = Record<Language, string>;

export const homeContent = {
  hero: {
    title: {
      en: 'Samatat Sanskriti',
      bn: 'সমতট সংস্কৃতি',
      hi: 'समतट संस्कृति',
    } as TranslatedContent,
    subtitle: {
      en: 'Theatre Collective · Uttarpara · Since 1999',
      bn: 'থিয়েটার কালেক্টিভ · উত্তরপাড়া · ১৯৯৯ থেকে',
      hi: 'थिएटर कलेक्टिव · उत्तरपाड़ा · 1999 से',
    } as TranslatedContent,
    cta1: {
      en: 'Current Shows',
      bn: 'বর্তমান শো',
      hi: 'वर्तमान शो',
    } as TranslatedContent,
    cta2: {
      en: 'About Us',
      bn: 'আমাদের সম্পর্কে',
      hi: 'हमारे बारे में',
    } as TranslatedContent,
  },
  current: {
    heading: {
      en: 'Current Announcements',
      bn: 'বর্তমান ঘোষণা',
      hi: 'वर्तमान घोषणाएँ',
    } as TranslatedContent,
    productions: {
      title: {
        en: 'Upcoming Productions',
        bn: 'আসন্ন প্রযোজনা',
        hi: 'आगामी प्रस्तुतियाँ',
      } as TranslatedContent,
      desc: {
        en: 'Experience our latest theatrical productions showcasing powerful storytelling and exceptional performances.',
        bn: 'শক্তিশালী গল্প বলা এবং ব্যতিক্রমী পারফরম্যান্স প্রদর্শনকারী আমাদের সর্বশেষ নাট্য প্রযোজনা অভিজ্ঞতা করুন।',
        hi: 'शक्तिशाली कहानी और असाधारण प्रदर्शन प्रदर्शित करने वाली हमारी नवीनतम नाट्य प्रस्तुतियों का अनुभव करें।',
      } as TranslatedContent,
    },
    festival: {
      title: {
        en: 'Theatre Festival 2025',
        bn: 'থিয়েটার উৎসব ২০২৫',
        hi: 'थिएटर उत्सव 2025',
      } as TranslatedContent,
      desc: {
        en: 'Join us for our annual theatre festival featuring performances from groups across India and beyond.',
        bn: 'ভারত এবং তার বাইরের দলগুলির পারফরম্যান্স সমন্বিত আমাদের বার্ষিক থিয়েটার উৎসবে যোগ দিন।',
        hi: 'भारत और उसके बाहर के समूहों के प्रदर्शनों वाले हमारे वार्षिक थिएटर उत्सव में शामिल हों।',
      } as TranslatedContent,
    },
    workshops: {
      title: {
        en: 'Training Programs',
        bn: 'প্রশিক্ষণ কর্মসূচি',
        hi: 'प्रशिक्षण कार्यक्रम',
      } as TranslatedContent,
      desc: {
        en: 'Develop your skills with our intensive workshops in acting, direction, stagecraft, and more.',
        bn: 'অভিনয়, পরিচালনা, মঞ্চকলা এবং আরও অনেক বিষয়ে আমাদের নিবিড় কর্মশালার মাধ্যমে আপনার দক্ষতা বিকাশ করুন।',
        hi: 'अभिनय, निर्देशन, मंचकला और अन्य में हमारी गहन कार्यशालाओं के साथ अपने कौशल विकसित करें।',
      } as TranslatedContent,
    },
  },
  about: {
    heading: {
      en: 'About Samatat',
      bn: 'সমতট সম্পর্কে',
      hi: 'समतट के बारे में',
    } as TranslatedContent,
    formalTitle: {
      en: 'OFFICIALLY',
      bn: 'আনুষ্ঠানিকভাবে',
      hi: 'आधिकारिक रूप से',
    } as TranslatedContent,
    formalP1: {
      en: 'Samatat Sanskriti is a registered cultural organization based in Uttarpara, Hooghly, West Bengal. Since our founding in 1999, we have been dedicated to the promotion and preservation of Bengali theatre and cultural heritage.',
      bn: 'সমতট সংস্কৃতি পশ্চিমবঙ্গের হুগলির উত্তরপাড়ায় অবস্থিত একটি নিবন্ধিত সাংস্কৃতিক সংগঠন। ১৯৯৯ সালে আমাদের প্রতিষ্ঠার পর থেকে আমরা বাংলা থিয়েটার এবং সাংস্কৃতিক ঐতিহ্যের প্রচার ও সংরক্ষণে নিবেদিত।',
      hi: 'समतट संस्कृति पश्चिम बंगाल के हुगली के उत्तरपाड़ा में स्थित एक पंजीकृत सांस्कृतिक संगठन है। 1999 में हमारी स्थापना के बाद से, हम बंगाली रंगमंच और सांस्कृतिक विरासत के प्रचार और संरक्षण के लिए समर्पित हैं।',
    } as TranslatedContent,
    formalP2: {
      en: 'We have staged over 150 productions, conducted hundreds of workshops, and organized numerous cultural events that have touched the lives of thousands in our community.',
      bn: 'আমরা ১৫০টিরও বেশি প্রযোজনা মঞ্চস্থ করেছি, শত শত কর্মশালা পরিচালনা করেছি এবং অসংখ্য সাংস্কৃতিক অনুষ্ঠানের আয়োজন করেছি যা আমাদের সম্প্রদায়ের হাজার হাজার মানুষের জীবনকে স্পর্শ করেছে।',
      hi: 'हमने 150 से अधिक प्रस्तुतियाँ मंचित की हैं, सैकड़ों कार्यशालाएँ आयोजित की हैं, और कई सांस्कृतिक कार्यक्रमों का आयोजन किया है जिन्होंने हमारे समुदाय में हजारों लोगों के जीवन को छुआ है।',
    } as TranslatedContent,
    communityTitle: {
      en: 'AT HEART',
      bn: 'মূলত',
      hi: 'दिल से',
    } as TranslatedContent,
    communityP1: {
      en: 'Samatat is more than an organization — it is a family of theatre enthusiasts, artists, and dreamers united by a shared love for the performing arts.',
      bn: 'সমতট একটি সংগঠনের চেয়ে বেশি কিছু — এটি থিয়েটার উৎসাহী, শিল্পী এবং স্বপ্নদ্রষ্টাদের একটি পরিবার যারা পারফর্মিং আর্টসের প্রতি ভালোবাসায় একত্রিত।',
      hi: 'समतट एक संगठन से अधिक है — यह रंगमंच प्रेमियों, कलाकारों और सपने देखने वालों का एक परिवार है जो प्रदर्शन कलाओं के प्रति साझा प्रेम से एकजुट है।',
    } as TranslatedContent,
    communityP2: {
      en: 'We believe in the transformative power of theatre to educate, inspire, and bring communities together. Every performance is an opportunity to create meaningful connections.',
      bn: 'আমরা শিক্ষিত করতে, অনুপ্রাণিত করতে এবং সম্প্রদায়গুলিকে একত্রিত করতে থিয়েটারের রূপান্তরকারী শক্তিতে বিশ্বাস করি। প্রতিটি পারফরম্যান্স অর্থবহ সংযোগ তৈরি করার একটি সুযোগ।',
      hi: 'हम शिक्षित करने, प्रेरित करने और समुदायों को एक साथ लाने के लिए रंगमंच की परिवर्तनकारी शक्ति में विश्वास करते हैं। हर प्रदर्शन सार्थक संबंध बनाने का एक अवसर है।',
    } as TranslatedContent,
  },
  engage: {
    heading: {
      en: 'Engage With Us',
      bn: 'আমাদের সাথে যুক্ত হন',
      hi: 'हमसे जुड़ें',
    } as TranslatedContent,
    subtitle: {
      en: 'Many ways to be part of our story',
      bn: 'আমাদের গল্পের অংশ হওয়ার অনেক উপায়',
      hi: 'हमारी कहानी का हिस्सा बनने के कई तरीके',
    } as TranslatedContent,
  },
};
