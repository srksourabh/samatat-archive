export type Language = 'en' | 'bn' | 'hi';

export const translations = {
  nav: {
    about: { en: 'About', bn: 'আমাদের সম্পর্কে', hi: 'हमारे बारे में' },
    productions: { en: 'Productions', bn: 'নাট্য প্রযোজনা', hi: 'प्रस्तुतियाँ' },
    festival: { en: 'Festival', bn: 'নাট্য মেলা', hi: 'महोत्सव' },
    workshops: { en: 'Workshops', bn: 'কর্মশালা', hi: 'कार्यशालाएं' },
    contact: { en: 'Contact', bn: 'যোগাযোগ', hi: 'संपर्क करें' }
  },
  home: {
    title: {
      en: 'Samatat Sanskriti, Uttarpara',
      bn: 'সমতট সংস্কৃতি, উত্তরপাড়া',
      hi: 'समतट संस्कृति, उत्तरपाड़ा'
    },
    subtitle: {
      en: '27 Years of Theatre, Culture, and Community',
      bn: '২৭ বছর ধরে নাট্য, সংস্কৃতি এবং সমাজ সেবা',
      hi: '27 वर्षों से रंगमंच, संस्कृति और समुदाय'
    },
    cta1: { en: "See What's On", bn: 'বর্তমান কার্যক্রম', hi: 'वर्तमान कार्यक्रम' },
    cta2: { en: 'Our Story', bn: 'আমাদের গল্প', hi: 'हमारी कहानी' }
  }
};

export function t(lang: Language, key: string): string {
  const keys = key.split('.');
  let value: any = translations;
  for (const k of keys) {
    value = value[k];
    if (!value) return key;
  }
  return value[lang] || value.en || key;
}
