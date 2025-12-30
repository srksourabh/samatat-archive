// Facebook posts configuration and content translations
// Replace POSTID placeholders with actual post IDs from https://www.facebook.com/Samatat2000

export type FacebookPost = {
  url: string;           // Full Facebook post URL
  isFeatured?: boolean;  // Mark as featured (large display on landing page)
};

// Section translations for Facebook news section
export const facebookSectionContent = {
  eyebrow: {
    en: 'From Our Facebook',
    bn: 'আমাদের ফেসবুক থেকে',
    hi: 'हमारे फेसबुक से'
  },
  title: {
    en: 'Latest Updates',
    bn: 'সাম্প্রতিক খবর',
    hi: 'नवीनतम अपडेट'
  },
  description: {
    en: 'Stay connected with our latest news, events, and behind-the-scenes moments.',
    bn: 'আমাদের সাম্প্রতিক খবর, ইভেন্ট এবং নেপথ্যের মুহূর্তগুলির সাথে সংযুক্ত থাকুন।',
    hi: 'हमारी नवीनतम खबरों, कार्यक्रमों और पर्दे के पीछे के पलों से जुड़े रहें।'
  },
  viewMore: {
    en: 'View All Updates',
    bn: 'সব খবর দেখুন',
    hi: 'सभी अपडेट देखें'
  },
  followUs: {
    en: 'Follow us on Facebook',
    bn: 'ফেসবুকে আমাদের অনুসরণ করুন',
    hi: 'फेसबुक पर हमें फॉलो करें'
  }
};

// News page content
export const newsPageContent = {
  eyebrow: {
    en: 'News & Updates',
    bn: 'খবর ও আপডেট',
    hi: 'समाचार और अपडेट'
  },
  title: {
    en: 'Latest from Samatat',
    bn: 'সমতটের সাম্প্রতিক খবর',
    hi: 'समतट से नवीनतम'
  },
  description: {
    en: 'Stay updated with our latest performances, events, workshops, and community activities. Follow our journey through theatre and cultural preservation.',
    bn: 'আমাদের সাম্প্রতিক পরিবেশনা, ইভেন্ট, কর্মশালা এবং সম্প্রদায়ের কার্যক্রমের সাথে আপডেট থাকুন। থিয়েটার এবং সাংস্কৃতিক সংরক্ষণের মাধ্যমে আমাদের যাত্রা অনুসরণ করুন।',
    hi: 'हमारी नवीनतम प्रस्तुतियों, कार्यक्रमों, कार्यशालाओं और सामुदायिक गतिविधियों से अपडेट रहें। रंगमंच और सांस्कृतिक संरक्षण के माध्यम से हमारी यात्रा का अनुसरण करें।'
  }
};

// Facebook posts to display on landing page (4 posts: 1 featured + 3 regular)
// To get post URLs: Go to any post on Facebook, click "..." menu, select "Embed", copy the URL from the iframe src
// Format: https://www.facebook.com/reel/REELID/ or https://www.facebook.com/Samatat2000/posts/POSTID
export const facebookPosts: FacebookPost[] = [
  {
    // Featured post - appears larger on landing page
    url: 'https://www.facebook.com/reel/917791990570522/',
    isFeatured: true
  },
  {
    url: 'https://www.facebook.com/reel/1136282001916336/',
  },
  {
    url: 'https://www.facebook.com/reel/25608113572162930/',
  },
  {
    url: 'https://www.facebook.com/reel/897426652640257/',
  }
];

// All Facebook posts for the dedicated /news page
// Add more posts here for a fuller feed
export const allFacebookPosts: FacebookPost[] = [
  ...facebookPosts,
  // Add additional posts for the news page
  // {
  //   url: 'https://www.facebook.com/Samatat2000/posts/pfbid02AnotherPostID',
  // },
];

// Facebook page URL
export const facebookPageUrl = 'https://www.facebook.com/Samatat2000';
