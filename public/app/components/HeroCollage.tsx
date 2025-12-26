'use client';

import { useState, useEffect, useRef } from 'react';

// Configuration - faster timing with lightweight thumbnails
const GRID_COLS = 8;
const GRID_ROWS = 5;
const TOTAL_CELLS = GRID_COLS * GRID_ROWS;
const ANIMATION_INTERVAL = 500; // 500ms between new photos
const CELL_DISPLAY_TIME = 2000; // 2 seconds visible as requested
const FADE_DURATION = 800; // Fast fade for smooth transitions
const INITIAL_DELAY = 500; // Quick start
const INITIAL_STAGGER = 100; // Fast initial fill

// Optimized thumbnail URLs (400x400, ~15-20KB each instead of 5-18MB)
const productionThumbnails: string[] = [
  // Adharmoni
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Adharmoni/IMG_8382.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Adharmoni/IMG_8384.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Adharmoni/IMG_8386.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Adharmoni/IMG_8387.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Adharmoni/IMG_8389.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Adharmoni/IMG_8391.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Adharmoni/IMG_8393.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Adharmoni/IMG_8399.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Adharmoni/IMG_8409.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Adharmoni/IMG_8432.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Adharmoni/IMG_8462.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Adharmoni/IMG_8496.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Adharmoni/IMG_8502.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Adharmoni/IMG_8508.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Adharmoni/IMG_8510.jpg',

  // Arshi Desher Porshira
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Arshi%20Desher%20Porshira/Picture-07.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Arshi%20Desher%20Porshira/dfv.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Arshi%20Desher%20Porshira/samatat007.jpg',

  // Bisarjan Natok
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Bisarjan%20Natok%20edited/CT2A7937.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Bisarjan%20Natok%20edited/CT2A7943.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Bisarjan%20Natok%20edited/CT2A7944.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Bisarjan%20Natok%20edited/CT2A7950.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Bisarjan%20Natok%20edited/CT2A7956.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Bisarjan%20Natok%20edited/CT2A7957.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Bisarjan%20Natok%20edited/CT2A7966.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Bisarjan%20Natok%20edited/CT2A7985.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Bisarjan%20Natok%20edited/CT2A7987.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Bisarjan%20Natok%20edited/CT2A7989.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Bisarjan%20Natok%20edited/DSC07306.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Bisarjan%20Natok%20edited/DSC07312.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Bisarjan%20Natok%20edited/DSC07328.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Bisarjan%20Natok%20edited/DSC07330.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Bisarjan%20Natok%20edited/DSC07335.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Bisarjan%20Natok%20edited/DSC07339.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Bisarjan%20Natok%20edited/DSC07341.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Bisarjan%20Natok%20edited/DSC07345.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Bisarjan%20Natok%20edited/DSC07348.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Bisarjan%20Natok%20edited/DSC07350.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Bisarjan%20Natok%20edited/DSC07358.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Bisarjan%20Natok%20edited/DSC07363.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Bisarjan%20Natok%20edited/DSC07370.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Bisarjan%20Natok%20edited/DSC07375.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Bisarjan%20Natok%20edited/DSC07378.jpg',

  // Charandas Chor
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Charandas%20chor/1.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Charandas%20chor/2.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Charandas%20chor/3.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Charandas%20chor/4.jpg',

  // General
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/IMG_3973.jpg',

  // Jodi Aar Ekbar
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Jodi%20aar%20ekbar/IMG_9021.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Jodi%20aar%20ekbar/IMG_9027.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Jodi%20aar%20ekbar/IMG_9028.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Jodi%20aar%20ekbar/IMG_9031.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Jodi%20aar%20ekbar/IMG_9032.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Jodi%20aar%20ekbar/IMG_9042.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Jodi%20aar%20ekbar/IMG_9045.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Jodi%20aar%20ekbar/IMG_9048.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Jodi%20aar%20ekbar/IMG_9051.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Jodi%20aar%20ekbar/IMG_9052.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Jodi%20aar%20ekbar/IMG_9054.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Jodi%20aar%20ekbar/IMG_9055.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Jodi%20aar%20ekbar/IMG_9056.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Jodi%20aar%20ekbar/IMG_9063.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Jodi%20aar%20ekbar/IMG_9066.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Jodi%20aar%20ekbar/IMG_9067.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Jodi%20aar%20ekbar/IMG_9073.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Jodi%20aar%20ekbar/IMG_9080.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Jodi%20aar%20ekbar/IMG_9104.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Jodi%20aar%20ekbar/IMG_9125.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Jodi%20aar%20ekbar/IMG_9150.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Jodi%20aar%20ekbar/IMG_9151.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Jodi%20aar%20ekbar/IMG_9152.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Jodi%20aar%20ekbar/IMG_9155.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Jodi%20aar%20ekbar/IMG_9156.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Jodi%20aar%20ekbar/IMG_9161.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Jodi%20aar%20ekbar/IMG_9162.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Jodi%20aar%20ekbar/IMG_9167.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Jodi%20aar%20ekbar/IMG_9175.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Jodi%20aar%20ekbar/IMG_9176.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Jodi%20aar%20ekbar/IMG_9185.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Jodi%20aar%20ekbar/IMG_9186.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Jodi%20aar%20ekbar/IMG_9187.jpg',

  // Kagoj Kahini
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Kagoj%20Kahini/44.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Kagoj%20Kahini/45.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Kagoj%20Kahini/46.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Kagoj%20Kahini/Picture-08.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Kagoj%20Kahini/Picture-09.jpg',

  // Kaliprasanna O Ora
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Kaliprasanna%20o%20ora/Picture-02.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Kaliprasanna%20o%20ora/Picture-50.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Kaliprasanna%20o%20ora/Picture-51.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Kaliprasanna%20o%20ora/Picture-52.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Kaliprasanna%20o%20ora/gh%20gh.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Kaliprasanna%20o%20ora/rt%20ygh.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Kaliprasanna%20o%20ora/samatat043.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Kaliprasanna%20o%20ora/samatat045.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Kaliprasanna%20o%20ora/tgh%20gfh.jpg',

  // Mabhoi
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Mabhoi/26.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Mabhoi/27.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Mabhoi/28.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Mabhoi/Picture-21.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Mabhoi/samatat041.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Mabhoi/samatat042.jpg',

  // Neel Phool
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Neel%20Phool/12.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Neel%20Phool/58.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Neel%20Phool/59.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Neel%20Phool/Picture-18.jpg',

  // Podi Pishi
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Podi%20pishi/07.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Podi%20pishi/21.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Podi%20pishi/22.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Podi%20pishi/23.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Podi%20pishi/Picture%20370.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Podi%20pishi/Picture%20390.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Podi%20pishi/Picture%20430.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Podi%20pishi/Picture%20452.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Podi%20pishi/Picture-28.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Podi%20pishi/Picture-35.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Podi%20pishi/Picture-36.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Podi%20pishi/Picture-37.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Podi%20pishi/RollBack%20(1).jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Podi%20pishi/RollBack.jpg',

  // Roopnagarer Roopkotha
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Roopnagarer%20roopkotha/24.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Roopnagarer%20roopkotha/25.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Roopnagarer%20roopkotha/5yuytuj.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Roopnagarer%20roopkotha/Picture-01.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Roopnagarer%20roopkotha/Picture-15.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Roopnagarer%20roopkotha/samatat024.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Roopnagarer%20roopkotha/samatat025.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Roopnagarer%20roopkotha/samatat026.jpg',

  // Saatmar Palawan (selection)
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Saatmar%20Palawan/20220219194641_IMG_5211.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Saatmar%20Palawan/20220219194826_IMG_5217.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Saatmar%20Palawan/20220219195101_IMG_5228.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Saatmar%20Palawan/20220219195344_IMG_5244.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Saatmar%20Palawan/20220219195628_IMG_5255.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Saatmar%20Palawan/20220219200027_IMG_5267.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Saatmar%20Palawan/20220219200209_IMG_5276.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Saatmar%20Palawan/20220219200432_IMG_5289.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Saatmar%20Palawan/20220219200855_IMG_5306.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Saatmar%20Palawan/20220219201254_IMG_5324.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Saatmar%20Palawan/20220219201621_IMG_5339.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Saatmar%20Palawan/20220219202033_IMG_5354.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Saatmar%20Palawan/20220219202256_IMG_5364.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Saatmar%20Palawan/20220219202538_IMG_5373.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Saatmar%20Palawan/20220219202918_IMG_5386.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Saatmar%20Palawan/20220219203139_IMG_5400.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Saatmar%20Palawan/20220219203341_IMG_5407.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Saatmar%20Palawan/20220219203529_IMG_5414.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Saatmar%20Palawan/20220219203717_IMG_5427.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Saatmar%20Palawan/20220219203810_IMG_5435.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Saatmar%20Palawan/20220219204023_IMG_5453.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Saatmar%20Palawan/20220219204316_IMG_5470.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Saatmar%20Palawan/20220219204634_IMG_5490.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Saatmar%20Palawan/20220219204901_IMG_5504.jpg',

  // Satmar Paloyan
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Satmar%20Paloyan/9.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Satmar%20Paloyan/IMG_5244.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Satmar%20Paloyan/IMG_5260.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Satmar%20Paloyan/IMG_5273.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Satmar%20Paloyan/IMG_5304.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Satmar%20Paloyan/IMG_5310.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Satmar%20Paloyan/IMG_5333.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Satmar%20Paloyan/IMG_5358.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Satmar%20Paloyan/IMG_5396.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Satmar%20Paloyan/IMG_5405.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Satmar%20Paloyan/IMG_5450.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Satmar%20Paloyan/IMG_5477.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Satmar%20Paloyan/IMG_5478.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Satmar%20Paloyan/IMG_8516.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Satmar%20Paloyan/IMG_8518.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Satmar%20Paloyan/IMG_8526.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Satmar%20Paloyan/IMG_8533.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Satmar%20Paloyan/IMG_9933.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Satmar%20Paloyan/IMG_9997.jpg',

  // Shopno Muhurte
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Shopno%20muhurte/47.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Shopno%20muhurte/48.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Shopno%20muhurte/60.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Shopno%20muhurte/Picture-17.jpg',

  // Sukhno Gange Ashuk
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Sukhno%20Gange%20Ashuk/W94A5817.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Sukhno%20Gange%20Ashuk/W94A5818.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Sukhno%20Gange%20Ashuk/W94A5825.jpg',

  // Swapnomoy
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Swapnomoy/IMG_1086.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Swapnomoy/IMG_1087.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Swapnomoy/IMG_1095.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Swapnomoy/IMG_1099.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Swapnomoy/IMG_1100.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Swapnomoy/IMG_1104.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Swapnomoy/IMG_1105.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Swapnomoy/IMG_1111.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Swapnomoy/IMG_1112.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Swapnomoy/IMG_1114.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Swapnomoy/IMG_1116.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Swapnomoy/IMG_1117.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Swapnomoy/IMG_1118.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Swapnomoy/IMG_1119.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Swapnomoy/IMG_1120.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Swapnomoy/IMG_1125.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Swapnomoy/IMG_1127.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Swapnomoy/IMG_1132.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Swapnomoy/IMG_1133.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Swapnomoy/IMG_1135.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Swapnomoy/IMG_1137.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Swapnomoy/IMG_1139.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Swapnomoy/IMG_1141.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Swapnomoy/IMG_1145.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Swapnomoy/IMG_1146.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Swapnomoy/IMG_1148.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Swapnomoy/IMG_1151.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Swapnomoy/IMG_1152.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Swapnomoy/IMG_1153.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Swapnomoy/IMG_1157.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Swapnomoy/IMG_1158.jpg',

  // Telenapotar Moto
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Telenapotar%20moto/IMG_8718.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Telenapotar%20moto/IMG_8832.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Telenapotar%20moto/IMG_8860.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Telenapotar%20moto/IMG_8888.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Telenapotar%20moto/IMG_8894.jpg',

  // Tota Kahini
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Tota%20kahini/09.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Tota%20kahini/J43.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Tota%20kahini/Picture%20401.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Tota%20kahini/Picture%20682.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Tota%20kahini/Picture%20692.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Tota%20kahini/Picture%20698.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Tota%20kahini/Picture%20701.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Tota%20kahini/Picture%20706.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Tota%20kahini/Picture%20712.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Tota%20kahini/Picture%20722.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Tota%20kahini/Picture%20730.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Tota%20kahini/Picture%20749.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/Tota%20kahini/RollBack%20(2).jpg',

  // Wazeb Mianr Biya
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/wazeb%20mianr%20biya/samatat033.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/wazeb%20mianr%20biya/samatat034.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/wazeb%20mianr%20biya/samatat035.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/wazeb%20mianr%20biya/samatat036.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/wazeb%20mianr%20biya/samatat038.jpg',
  'https://storage.googleapis.com/samatat-archive.firebasestorage.app/images/thumbnails/wazeb%20mianr%20biya/samatat039.jpg',
];

interface CellState {
  photoUrl: string | null;
  opacity: number;
  isActive: boolean;
}

// Shuffle array
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function HeroCollage() {
  const [cells, setCells] = useState<CellState[]>(() =>
    Array.from({ length: TOTAL_CELLS }, () => ({
      photoUrl: null,
      opacity: 0,
      isActive: false,
    }))
  );

  const [isReady, setIsReady] = useState(false);
  const photoQueueRef = useRef<string[]>(shuffleArray([...productionThumbnails]));
  const displayedPhotosRef = useRef<Set<string>>(new Set());
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  // Get next unique photo
  const getNextPhoto = (): string => {
    // Refill queue if empty
    if (photoQueueRef.current.length === 0) {
      photoQueueRef.current = shuffleArray([...productionThumbnails]);
    }

    // Find a photo not currently displayed
    let photo = photoQueueRef.current.shift()!;
    let attempts = 0;

    while (displayedPhotosRef.current.has(photo) && attempts < 20) {
      photoQueueRef.current.push(photo);
      photo = photoQueueRef.current.shift()!;
      attempts++;
    }

    return photo;
  };

  // Show a photo in a specific cell
  const showPhotoInCell = (cellIndex: number) => {
    const photo = getNextPhoto();
    displayedPhotosRef.current.add(photo);

    // Fade in
    setCells(prev => {
      const next = [...prev];
      next[cellIndex] = { photoUrl: photo, opacity: 1, isActive: true };
      return next;
    });

    // Schedule fade out
    const fadeOutTimeout = setTimeout(() => {
      setCells(prev => {
        const next = [...prev];
        next[cellIndex] = { ...next[cellIndex], opacity: 0, isActive: false };
        return next;
      });

      // Release photo after fade completes
      setTimeout(() => {
        displayedPhotosRef.current.delete(photo);
      }, FADE_DURATION + 200);
    }, CELL_DISPLAY_TIME);

    timeoutsRef.current.push(fadeOutTimeout);
  };

  // Preload images and start animations
  useEffect(() => {
    // Preload first batch of images - thumbnails load very fast
    const preloadCount = Math.min(20, productionThumbnails.length);
    let loadedCount = 0;

    for (let i = 0; i < preloadCount; i++) {
      const img = new Image();
      img.onload = () => {
        loadedCount++;
        if (loadedCount >= preloadCount) {
          setIsReady(true);
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount >= preloadCount) {
          setIsReady(true);
        }
      };
      img.src = productionThumbnails[i];
    }

    // Fallback - thumbnails are fast so short timeout
    const fallbackTimeout = setTimeout(() => setIsReady(true), 1000);

    return () => clearTimeout(fallbackTimeout);
  }, []);

  // Start animations once ready
  useEffect(() => {
    if (!isReady) return;

    // Wait before starting
    const startTimeout = setTimeout(() => {
      // Fill initial cells quickly
      const initialCells = shuffleArray([...Array(TOTAL_CELLS).keys()]).slice(0, 15);

      initialCells.forEach((cellIndex, i) => {
        const delay = i * INITIAL_STAGGER;
        const timeout = setTimeout(() => showPhotoInCell(cellIndex), delay);
        timeoutsRef.current.push(timeout);
      });

      // Continuous animation - 2 new photos every interval
      const interval = setInterval(() => {
        // Find inactive cells
        setCells(prev => {
          const inactiveCells = prev
            .map((cell, idx) => ({ cell, idx }))
            .filter(({ cell }) => !cell.isActive);

          if (inactiveCells.length > 0) {
            // Show 2 photos at a time for more dynamic effect
            const count = Math.min(2, inactiveCells.length);
            const shuffledInactive = shuffleArray(inactiveCells);

            for (let i = 0; i < count; i++) {
              setTimeout(() => {
                showPhotoInCell(shuffledInactive[i].idx);
              }, i * 100);
            }
          }
          return prev;
        });
      }, ANIMATION_INTERVAL);

      timeoutsRef.current.push(interval as unknown as NodeJS.Timeout);
    }, INITIAL_DELAY);

    timeoutsRef.current.push(startTimeout);

    return () => {
      timeoutsRef.current.forEach(t => clearTimeout(t));
      timeoutsRef.current = [];
    };
  }, [isReady]);

  return (
    <div className="hero-collage">
      <div className="hero-collage-grid">
        {cells.map((cell, index) => (
          <div key={index} className="hero-collage-cell">
            <div
              className="hero-collage-image"
              style={{
                backgroundImage: cell.photoUrl ? `url(${cell.photoUrl})` : 'none',
                opacity: cell.opacity,
              }}
            />
          </div>
        ))}
      </div>
      <div className="hero-collage-overlay hero-collage-overlay-left" />
      <div className="hero-collage-overlay hero-collage-overlay-bottom" />
    </div>
  );
}

// Export thumbnails for use in other components
export { productionThumbnails };
