'use client';

import { useState, useEffect, useRef } from 'react';

// Configuration - Matrix bullet time effect with 4-second display
const GRID_COLS = 8;
const GRID_ROWS = 5;
const TOTAL_CELLS = GRID_COLS * GRID_ROWS;
const ANIMATION_INTERVAL = 150; // Fast interval for matrix cascade effect
const CELL_DISPLAY_TIME = 4000; // 4 seconds visible
const FADE_DURATION = 1500; // 1.5 second smooth fade
const INITIAL_DELAY = 300; // Quick start
const INITIAL_STAGGER = 50; // Fast cascade for matrix effect

// Optimized thumbnail URLs (400x400, ~15-20KB each instead of 5-18MB)
const productionThumbnails: string[] = [
  // Adharmoni
  'https://images.unsplash.com/photo-1507676184212-d0c30a514758?auto=format&fit=crop&w=800&q=80', // TEMPORARY PLACEHOLDER TO PROVE CODE WORKS
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FAdharmoni%2FIMG_8384.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FAdharmoni%2FIMG_8386.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FAdharmoni%2FIMG_8387.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FAdharmoni%2FIMG_8389.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FAdharmoni%2FIMG_8391.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FAdharmoni%2FIMG_8393.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FAdharmoni%2FIMG_8399.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FAdharmoni%2FIMG_8409.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FAdharmoni%2FIMG_8432.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FAdharmoni%2FIMG_8462.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FAdharmoni%2FIMG_8496.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FAdharmoni%2FIMG_8502.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FAdharmoni%2FIMG_8508.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FAdharmoni%2FIMG_8510.jpg?alt=media',

  // Arshi Desher Porshira
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FArshi%20Desher%20Porshira%2FPicture-07.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FArshi%20Desher%20Porshira%2Fdfv.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FArshi%20Desher%20Porshira%2Fsamatat007.jpg?alt=media',

  // Bisarjan Natok
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FBisarjan%20Natok%20edited%2FCT2A7937.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FBisarjan%20Natok%20edited%2FCT2A7943.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FBisarjan%20Natok%20edited%2FCT2A7944.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FBisarjan%20Natok%20edited%2FCT2A7950.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FBisarjan%20Natok%20edited%2FCT2A7956.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FBisarjan%20Natok%20edited%2FCT2A7957.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FBisarjan%20Natok%20edited%2FCT2A7966.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FBisarjan%20Natok%20edited%2FCT2A7985.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FBisarjan%20Natok%20edited%2FCT2A7987.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FBisarjan%20Natok%20edited%2FCT2A7989.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FBisarjan%20Natok%20edited%2FDSC07306.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FBisarjan%20Natok%20edited%2FDSC07312.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FBisarjan%20Natok%20edited%2FDSC07328.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FBisarjan%20Natok%20edited%2FDSC07330.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FBisarjan%20Natok%20edited%2FDSC07335.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FBisarjan%20Natok%20edited%2FDSC07339.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FBisarjan%20Natok%20edited%2FDSC07341.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FBisarjan%20Natok%20edited%2FDSC07345.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FBisarjan%20Natok%20edited%2FDSC07348.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FBisarjan%20Natok%20edited%2FDSC07350.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FBisarjan%20Natok%20edited%2FDSC07358.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FBisarjan%20Natok%20edited%2FDSC07363.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FBisarjan%20Natok%20edited%2FDSC07370.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FBisarjan%20Natok%20edited%2FDSC07375.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FBisarjan%20Natok%20edited%2FDSC07378.jpg?alt=media',

  // Charandas Chor
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FCharandas%20chor%2F1.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FCharandas%20chor%2F2.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FCharandas%20chor%2F3.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FCharandas%20chor%2F4.jpg?alt=media',

  // General
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FIMG_3973.jpg?alt=media',

  // Jodi Aar Ekbar
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FJodi%20aar%20ekbar%2FIMG_9021.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FJodi%20aar%20ekbar%2FIMG_9027.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FJodi%20aar%20ekbar%2FIMG_9028.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FJodi%20aar%20ekbar%2FIMG_9031.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FJodi%20aar%20ekbar%2FIMG_9032.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FJodi%20aar%20ekbar%2FIMG_9042.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FJodi%20aar%20ekbar%2FIMG_9045.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FJodi%20aar%20ekbar%2FIMG_9048.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FJodi%20aar%20ekbar%2FIMG_9051.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FJodi%20aar%20ekbar%2FIMG_9052.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FJodi%20aar%20ekbar%2FIMG_9054.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FJodi%20aar%20ekbar%2FIMG_9055.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FJodi%20aar%20ekbar%2FIMG_9056.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FJodi%20aar%20ekbar%2FIMG_9063.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FJodi%20aar%20ekbar%2FIMG_9066.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FJodi%20aar%20ekbar%2FIMG_9067.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FJodi%20aar%20ekbar%2FIMG_9073.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FJodi%20aar%20ekbar%2FIMG_9080.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FJodi%20aar%20ekbar%2FIMG_9104.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FJodi%20aar%20ekbar%2FIMG_9125.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FJodi%20aar%20ekbar%2FIMG_9150.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FJodi%20aar%20ekbar%2FIMG_9151.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FJodi%20aar%20ekbar%2FIMG_9152.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FJodi%20aar%20ekbar%2FIMG_9155.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FJodi%20aar%20ekbar%2FIMG_9156.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FJodi%20aar%20ekbar%2FIMG_9161.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FJodi%20aar%20ekbar%2FIMG_9162.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FJodi%20aar%20ekbar%2FIMG_9167.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FJodi%20aar%20ekbar%2FIMG_9175.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FJodi%20aar%20ekbar%2FIMG_9176.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FJodi%20aar%20ekbar%2FIMG_9185.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FJodi%20aar%20ekbar%2FIMG_9186.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FJodi%20aar%20ekbar%2FIMG_9187.jpg?alt=media',

  // Kagoj Kahini
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FKagoj%20Kahini%2F44.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FKagoj%20Kahini%2F45.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FKagoj%20Kahini%2F46.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FKagoj%20Kahini%2FPicture-08.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FKagoj%20Kahini%2FPicture-09.jpg?alt=media',

  // Kaliprasanna O Ora
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FKaliprasanna%20o%20ora%2FPicture-02.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FKaliprasanna%20o%20ora%2FPicture-50.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FKaliprasanna%20o%20ora%2FPicture-51.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FKaliprasanna%20o%20ora%2FPicture-52.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FKaliprasanna%20o%20ora%2Fgh%20gh.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FKaliprasanna%20o%20ora%2Frt%20ygh.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FKaliprasanna%20o%20ora%2Fsamatat043.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FKaliprasanna%20o%20ora%2Fsamatat045.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FKaliprasanna%20o%20ora%2Ftgh%20gfh.jpg?alt=media',

  // Mabhoi
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FMabhoi%2F26.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FMabhoi%2F27.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FMabhoi%2F28.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FMabhoi%2FPicture-21.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FMabhoi%2Fsamatat041.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FMabhoi%2Fsamatat042.jpg?alt=media',

  // Neel Phool
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FNeel%20Phool%2F12.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FNeel%20Phool%2F58.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FNeel%20Phool%2F59.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FNeel%20Phool%2FPicture-18.jpg?alt=media',

  // Podi Pishi
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FPodi%20pishi%2F07.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FPodi%20pishi%2F21.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FPodi%20pishi%2F22.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FPodi%20pishi%2F23.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FPodi%20pishi%2FPicture%20370.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FPodi%20pishi%2FPicture%20390.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FPodi%20pishi%2FPicture%20430.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FPodi%20pishi%2FPicture%20452.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FPodi%20pishi%2FPicture-28.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FPodi%20pishi%2FPicture-35.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FPodi%20pishi%2FPicture-36.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FPodi%20pishi%2FPicture-37.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FPodi%20pishi%2FRollBack%20(1).jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FPodi%20pishi%2FRollBack.jpg?alt=media',

  // Roopnagarer Roopkotha
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FRoopnagarer%20roopkotha%2F24.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FRoopnagarer%20roopkotha%2F25.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FRoopnagarer%20roopkotha%2F5yuytuj.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FRoopnagarer%20roopkotha%2FPicture-01.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FRoopnagarer%20roopkotha%2FPicture-15.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FRoopnagarer%20roopkotha%2Fsamatat024.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FRoopnagarer%20roopkotha%2Fsamatat025.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FRoopnagarer%20roopkotha%2Fsamatat026.jpg?alt=media',

  // Saatmar Palawan (selection)
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSaatmar%20Palawan%2F20220219194641_IMG_5211.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSaatmar%20Palawan%2F20220219194826_IMG_5217.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSaatmar%20Palawan%2F20220219195101_IMG_5228.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSaatmar%20Palawan%2F20220219195344_IMG_5244.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSaatmar%20Palawan%2F20220219195628_IMG_5255.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSaatmar%20Palawan%2F20220219200027_IMG_5267.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSaatmar%20Palawan%2F20220219200209_IMG_5276.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSaatmar%20Palawan%2F20220219200432_IMG_5289.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSaatmar%20Palawan%2F20220219200855_IMG_5306.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSaatmar%20Palawan%2F20220219201254_IMG_5324.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSaatmar%20Palawan%2F20220219201621_IMG_5339.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSaatmar%20Palawan%2F20220219202033_IMG_5354.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSaatmar%20Palawan%2F20220219202256_IMG_5364.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSaatmar%20Palawan%2F20220219202538_IMG_5373.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSaatmar%20Palawan%2F20220219202918_IMG_5386.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSaatmar%20Palawan%2F20220219203139_IMG_5400.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSaatmar%20Palawan%2F20220219203341_IMG_5407.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSaatmar%20Palawan%2F20220219203529_IMG_5414.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSaatmar%20Palawan%2F20220219203717_IMG_5427.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSaatmar%20Palawan%2F20220219203810_IMG_5435.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSaatmar%20Palawan%2F20220219204023_IMG_5453.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSaatmar%20Palawan%2F20220219204316_IMG_5470.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSaatmar%20Palawan%2F20220219204634_IMG_5490.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSaatmar%20Palawan%2F20220219204901_IMG_5504.jpg?alt=media',

  // Satmar Paloyan
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSatmar%20Paloyan%2F9.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSatmar%20Paloyan%2FIMG_5244.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSatmar%20Paloyan%2FIMG_5260.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSatmar%20Paloyan%2FIMG_5273.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSatmar%20Paloyan%2FIMG_5304.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSatmar%20Paloyan%2FIMG_5310.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSatmar%20Paloyan%2FIMG_5333.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSatmar%20Paloyan%2FIMG_5358.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSatmar%20Paloyan%2FIMG_5396.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSatmar%20Paloyan%2FIMG_5405.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSatmar%20Paloyan%2FIMG_5450.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSatmar%20Paloyan%2FIMG_5477.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSatmar%20Paloyan%2FIMG_5478.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSatmar%20Paloyan%2FIMG_8516.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSatmar%20Paloyan%2FIMG_8518.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSatmar%20Paloyan%2FIMG_8526.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSatmar%20Paloyan%2FIMG_8533.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSatmar%20Paloyan%2FIMG_9933.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSatmar%20Paloyan%2FIMG_9997.jpg?alt=media',

  // Shopno Muhurte
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FShopno%20muhurte%2F47.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FShopno%20muhurte%2F48.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FShopno%20muhurte%2F60.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FShopno%20muhurte%2FPicture-17.jpg?alt=media',

  // Sukhno Gange Ashuk
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSukhno%20Gange%20Ashuk%2FW94A5817.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSukhno%20Gange%20Ashuk%2FW94A5818.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSukhno%20Gange%20Ashuk%2FW94A5825.jpg?alt=media',

  // Swapnomoy
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSwapnomoy%2FIMG_1086.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSwapnomoy%2FIMG_1087.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSwapnomoy%2FIMG_1095.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSwapnomoy%2FIMG_1099.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSwapnomoy%2FIMG_1100.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSwapnomoy%2FIMG_1104.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSwapnomoy%2FIMG_1105.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSwapnomoy%2FIMG_1111.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSwapnomoy%2FIMG_1112.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSwapnomoy%2FIMG_1114.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSwapnomoy%2FIMG_1116.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSwapnomoy%2FIMG_1117.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSwapnomoy%2FIMG_1118.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSwapnomoy%2FIMG_1119.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSwapnomoy%2FIMG_1120.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSwapnomoy%2FIMG_1125.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSwapnomoy%2FIMG_1127.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSwapnomoy%2FIMG_1132.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSwapnomoy%2FIMG_1133.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSwapnomoy%2FIMG_1135.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSwapnomoy%2FIMG_1137.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSwapnomoy%2FIMG_1139.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSwapnomoy%2FIMG_1141.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSwapnomoy%2FIMG_1145.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSwapnomoy%2FIMG_1146.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSwapnomoy%2FIMG_1148.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSwapnomoy%2FIMG_1151.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSwapnomoy%2FIMG_1152.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSwapnomoy%2FIMG_1153.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSwapnomoy%2FIMG_1157.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSwapnomoy%2FIMG_1158.jpg?alt=media',

  // Telenapotar Moto
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FTelenapotar%20moto%2FIMG_8718.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FTelenapotar%20moto%2FIMG_8832.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FTelenapotar%20moto%2FIMG_8860.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FTelenapotar%20moto%2FIMG_8888.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FTelenapotar%20moto%2FIMG_8894.jpg?alt=media',

  // Tota Kahini
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FTota%20kahini%2F09.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FTota%20kahini%2FJ43.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FTota%20kahini%2FPicture%20401.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FTota%20kahini%2FPicture%20682.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FTota%20kahini%2FPicture%20692.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FTota%20kahini%2FPicture%20698.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FTota%20kahini%2FPicture%20701.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FTota%20kahini%2FPicture%20706.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FTota%20kahini%2FPicture%20712.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FTota%20kahini%2FPicture%20722.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FTota%20kahini%2FPicture%20730.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FTota%20kahini%2FPicture%20749.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FTota%20kahini%2FRollBack%20(2).jpg?alt=media',

  // Wazeb Mianr Biya
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2Fwazeb%20mianr%20biya%2Fsamatat033.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2Fwazeb%20mianr%20biya%2Fsamatat034.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2Fwazeb%20mianr%20biya%2Fsamatat035.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2Fwazeb%20mianr%20biya%2Fsamatat036.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2Fwazeb%20mianr%20biya%2Fsamatat038.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2Fwazeb%20mianr%20biya%2Fsamatat039.jpg?alt=media',
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
      <div className="hero-collage-overlay hero-collage-overlay-right" />
      <div className="hero-collage-overlay hero-collage-overlay-bottom" />
    </div>
  );
}

// Export thumbnails for use in other components
export { productionThumbnails };
