type Artwork = {
  artworkType: 'image' | 'svg' | 'text';
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
    linkLicence: 'https://fonts.google.com/knowledge/glossary/licensing'
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
    authorName: 'Saradnici',
    linkLicence: 'https://pictogrammers.com/docs/general/license/'
  },
  {
    artworkType: 'svg',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-full h-full fill-text"><title>instagram</title><path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" /></svg>',
    linkCreator: 'https://pictogrammers.com/library/mdi/icon/instagram/',
    authorName: 'Saradnici',
    linkLicence: 'https://pictogrammers.com/docs/general/license/'
  }
];
