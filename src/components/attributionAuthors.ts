type Artwork = {
  artworkType: 'image' | 'svg' | 'illustration' | 'text';
  artworkImage?: string; // Only for image
  svg?: string; // Only for SVG
  text?: string; // Only for text
  linkCreator: string,
  authorName: string;
  linkLicence: string;
};

// apply to following attribute to every svg; othervise using `src` attribute to every <img> element would disable editing to the fill for example. And `set:html` can only nest variables inside the element 
// class="w-full h-full fill-text"

export const attributionAuthors: Artwork[] = [
  {
    artworkType: 'text',
    text: 'Montserrat',
    linkCreator: 'https://fonts.google.com/specimen/Montserrat',
    authorName: 'Julieta Ulanovsky, <br />Sol Matas, <br />Juan Pablo del Peral, <br />Jacques Le Bailly',
    linkLicence: 'https://fonts.google.com/knowledge/glossary/licensing/'
  },
  {
    artworkType: 'image',
    artworkImage: '/hand-hero.jpg',
    linkCreator: 'https://www.pexels.com/photo/person-holding-a-stress-ball-339620/',
    authorName: 'Matthias Zomer',
    linkLicence: 'https://www.pexels.com/license/'
  },
  {
    artworkType: 'svg',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-full h-full fill-text"><title>phone-alert</title><path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4C3,3.44 3.45,3 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.24 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.58L6.62,10.79M17,12V10H19V12H17M17,8V2H19V8H17Z" /></svg>',
    linkCreator: 'https://pictogrammers.com/library/mdi/icon/phone-alert/',
    authorName: 'Patricia Cadenas',
    linkLicence: 'https://pictogrammers.com/docs/general/license/'
  },
  {
    artworkType: 'svg',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-full h-full fill-text"><title>email</title><path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" /></svg>',
    linkCreator: 'https://pictogrammers.com/library/mdi/icon/email/',
    authorName: 'Google',
    linkLicence: 'https://pictogrammers.com/docs/general/license/'
  },
  {
    artworkType: 'svg',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-full h-full fill-text"><title>map-marker-radius-outline</title><path d="M12 4C14.2 4 16 5.8 16 8C16 10.1 13.9 13.5 12 15.9C10.1 13.4 8 10.1 8 8C8 5.8 9.8 4 12 4M12 2C8.7 2 6 4.7 6 8C6 12.5 12 19 12 19S18 12.4 18 8C18 4.7 15.3 2 12 2M12 6C10.9 6 10 6.9 10 8S10.9 10 12 10 14 9.1 14 8 13.1 6 12 6M20 19C20 21.2 16.4 23 12 23S4 21.2 4 19C4 17.7 5.2 16.6 7.1 15.8L7.7 16.7C6.7 17.2 6 17.8 6 18.5C6 19.9 8.7 21 12 21S18 19.9 18 18.5C18 17.8 17.3 17.2 16.2 16.7L16.8 15.8C18.8 16.6 20 17.7 20 19Z" /></svg>',
    linkCreator: 'https://pictogrammers.com/library/mdi/icon/map-marker-radius-outline/',
    authorName: 'Michael Irigoyen',
    linkLicence: 'https://pictogrammers.com/docs/general/license/'
  },
  {
    artworkType: 'svg',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-full h-full fill-text"><title>facebook</title><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" /></svg>',
    linkCreator: 'https://pictogrammers.com/library/mdi/icon/facebook/',
    authorName: 'Anon',
    linkLicence: 'https://pictogrammers.com/docs/general/license/'
  },
  {
    artworkType: 'svg',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-full h-full fill-text"><title>instagram</title><path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" /></svg>',
    linkCreator: 'https://pictogrammers.com/library/mdi/icon/instagram/',
    authorName: 'Anon',
    linkLicence: 'https://pictogrammers.com/docs/general/license/'
  },
  {
    artworkType: 'svg',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129"><path d="M97.5869496,9.51093626 C115.83804,20.7848256 128,40.9721238 128,64 C128,99.346224 99.346224,128 64,128 C56.2920179,128 48.9022945,126.637372 42.0606106,124.137797 L41.3296807,123.865645 L42.5199148,123.48344 L44.0499006,122.981598 L44.8047554,122.729449 L44.8047554,122.729449 L45.5528525,122.476476 L47.0287766,121.968044 L48.477679,121.456268 L49.8995657,120.941118 L51.2944429,120.422561 L51.9817549,120.161995 L53.3361292,119.638268 C54.7663971,119.077773 56.1505947,118.511327 57.4887554,117.938757 L58.4837445,117.508179 L59.7032082,116.966702 C60.2391997,116.725238 60.7672019,116.482694 61.2872173,116.239057 L62.0612505,115.87278 L63.1998411,115.320271 L63.7590314,115.042615 L63.7590314,115.042615 L64.3114862,114.76402 L65.3961918,114.203997 C74.5017145,109.427674 80.6883363,104.239002 83.9729034,98.5499653 C90.9321253,86.4962393 84.8542511,73.6150855 67.4065187,60.4830885 L65.9866432,59.4185495 L65.1241488,58.7570907 L64.2867532,58.1006716 L63.4743719,57.4492672 L62.6869203,56.8028527 L62.3025167,56.4815088 L62.3025167,56.4815088 L61.9243138,56.161403 L61.1864678,55.5248932 L60.6492814,55.0507377 L60.6492814,55.0507377 L60.1259396,54.5793364 L59.4496246,53.9550673 L58.7977741,53.3356509 L58.1703034,52.7210621 L57.865684,52.4155703 L57.865684,52.4155703 L57.5671278,52.1112761 L56.9881629,51.5062679 C50.0910281,44.1742986 48.550875,37.8976624 51.6821025,32.4742173 C53.275799,29.713854 56.0387768,26.999998 59.9662039,24.3569485 L60.4430842,24.040124 L61.1940488,23.5569049 C61.5336196,23.3425039 61.8809347,23.1285905 62.2359916,22.9151777 L62.7743828,22.5954356 L63.603739,22.1172522 L64.4592124,21.6408141 L65.1179529,21.2846511 L65.1179529,21.2846511 L65.7913778,20.9295026 L66.7121153,20.4575739 C67.4124544,20.1043216 68.1348104,19.7526404 68.8791706,19.4025938 L69.6308651,19.0530944 L70.6559388,18.5888147 L71.1782513,18.3574212 L72.2424237,17.8961475 L72.7842819,17.6662758 L73.887538,17.2080833 L74.4489343,16.9797709 L75.5912592,16.5247346 L76.1721862,16.2980192 L77.353565,15.8462143 L78.5609715,15.3966054 L79.174433,15.1726349 L80.4208685,14.7263826 L81.6933149,14.2824097 L82.9917658,13.8407497 L83.6507409,13.6207974 L84.9881859,13.1826691 L86.3516187,12.7469371 L87.7410327,12.3136347 L89.1564212,11.8827954 L90.5977776,11.4544525 L92.4359804,10.9225852 L94.3147346,10.394736 L96.6227494,9.76671243 L97.5869496,9.51093626 Z M64,0 C71.7830114,0 79.2415381,1.38928435 86.1411179,3.93339103 L86.8782091,4.21038217 L86.4108627,4.35186467 L84.1313124,5.0545346 L83.3848908,5.2905768 L81.9121853,5.76541455 L80.4663248,6.24395126 L79.0473024,6.72622031 L77.6551115,7.21225509 L76.2897456,7.70208898 L75.6171199,7.94844102 L73.9648828,8.56854028 L72.3545311,9.19471909 L71.0963985,9.70008321 L70.4773795,9.95425044 L69.2594321,10.4655761 C56.8123589,15.7699668 48.6548341,21.7176 44.7538993,28.4742173 C37.9453585,40.2669559 44.1208291,52.9796592 61.5702618,66.1081375 L62.9900625,67.1727537 L63.8522936,67.8346365 L64.6892575,68.491774 L65.09829,68.8185721 L65.8975078,69.468645 L66.4804703,69.9531308 L66.4804703,69.9531308 L67.0493707,70.4349994 L67.7860906,71.0734406 L68.1451248,71.3909334 L68.8445933,72.0224812 C69.2263095,72.3720718 69.5965761,72.7195512 69.9554568,73.0649416 L70.4852463,73.5814631 L71.248012,74.3504059 L71.9726186,75.1123909 C78.8402712,82.495364 80.3081527,88.8974997 77.0447002,94.5499653 C74.933031,98.2074836 70.9013706,101.807999 64.958951,105.303275 L64.4134675,105.620736 L63.5293583,106.121564 L62.6189315,106.620891 C62.1058295,106.897871 61.5805462,107.174142 61.0430864,107.449677 L60.227765,107.862426 L59.2252746,108.356245 L58.1964941,108.848418 L57.1414295,109.338914 L56.6040425,109.583523 L55.5095633,110.071443 L54.3888152,110.557607 L53.2418044,111.041982 L52.6584524,111.283488 L51.4720589,111.76512 L50.869019,112.005238 L50.869019,112.005238 L50.259418,112.244884 L49.0205357,112.722748 L47.755418,113.19868 L46.4640712,113.672647 L45.1465013,114.144619 L43.8027143,114.614564 L43.1209914,114.848766 L41.7378904,115.315609 L41.0365138,115.548243 L39.6141124,116.011914 L38.1655184,116.47343 L36.3179518,117.047246 L34.4294807,117.617582 L32.8892605,118.071305 L30.739698,118.689489 C12.3072163,107.455464 0,87.1649844 0,64 C0,28.653776 28.653776,0 64,0 Z" transform="translate(.335 .835)" fill="#0080FF"/></svg>',
    linkCreator: 'https://swiperjs.com/',
    authorName: 'Vladimir Kharlampidi',
    linkLicence: 'https://github.com/nolimits4web/swiper/blob/master/LICENSE/'
  },



  {
    artworkType: 'illustration',
    artworkImage: '/icons/care-button-icon.png',
    linkCreator: 'https://www.flaticon.com/free-icon/love_7434718',
    authorName: 'Freepik',
    linkLicence: 'https://www.flaticon.com/legal/'
  },
  {
    artworkType: 'illustration',
    artworkImage: '/icons/hotel-button-icon.png',
    linkCreator: 'https://www.flaticon.com/free-icon/dining-table_8503975',
    authorName: 'Freepik',
    linkLicence: 'https://www.flaticon.com/legal/'
  },
  {
    artworkType: 'illustration',
    artworkImage: '/icons/clean-button-icon.png',
    linkCreator: 'https://www.flaticon.com/free-icon/broom_2912598',
    authorName: 'Freepik',
    linkLicence: 'https://www.flaticon.com/legal/'
  },
  {
    artworkType: 'image',
    artworkImage: '/care.jpg',
    linkCreator: 'https://www.pexels.com/photo/caregiver-serving-tea-to-old-woman-in-retirement-house-18459193/',
    authorName: 'Jsme MILA',
    linkLicence: 'https://www.pexels.com/license/'
  },
  {
    artworkType: 'image',
    artworkImage: '/bar.jpg',
    linkCreator: 'https://www.pexels.com/photo/people-in-cafe-2788792/',
    authorName: 'On Shot',
    linkLicence: 'https://www.pexels.com/license/'
  },
  {
    artworkType: 'image',
    artworkImage: '/clean.jpg',
    linkCreator: 'https://www.pexels.com/photo/man-in-orange-jacket-and-pants-standing-on-road-using-a-power-spray-4567269/',
    authorName: 'Zhang Kaiyv',
    linkLicence: 'https://www.pexels.com/license/'
  },
  {
    artworkType: 'illustration',
    artworkImage: '/job-interview.png',
    linkCreator: 'https://www.flaticon.com/free-icon/job-interview_10403771',
    authorName: 'Freepik',
    linkLicence: 'https://www.flaticon.com/legal/'
  },
  {
    artworkType: 'illustration',
    artworkImage: '/cv.png',
    linkCreator: 'https://www.flaticon.com/free-icon/cv_11989156',
    authorName: 'Freepik',
    linkLicence: 'https://www.flaticon.com/legal/'
  },
  {
    artworkType: 'illustration',
    artworkImage: '/newsletter.png',
    linkCreator: 'https://www.flaticon.com/free-icon/email_6854529',
    authorName: 'Freepik',
    linkLicence: 'https://www.flaticon.com/legal/'
  },
];
