// imgs
import p1 from '../../public/images/p1.png';
import p8 from '../../public/images/p8.png';
import p2 from '../../public/images/p2.png';
import p12 from '../../public/images/p12.png';
import p9 from '../../public/images/p9.png';
import p6 from '../../public/images/p6.png';
import p7 from '../../public/images/p7.png';

import g1 from '../../public/images/g1.png';
import g2 from '../../public/images/g2.png';
import g22 from '../../public/images/g22.png';
import g24 from '../../public/images/g24.png';
import g21 from '../../public/images/g21.png';
import g20 from '../../public/images/g20.png';
import g3 from '../../public/images/g3.png';
import g4 from '../../public/images/g4.png';
import g8 from '../../public/images/g8.png';
import g9 from '../../public/images/g9.png';
import g10 from '../../public/images/g10.png';
import g23 from '../../public/images/g23.png';
import g25 from '../../public/images/g25.png';
import g26 from '../../public/images/g26.png';
import g27 from '../../public/images/g27.png';
import g14 from '../../public/images/g14.png';
import g15 from '../../public/images/g15.png';
import g13 from '../../public/images/g13.png';

import bn from '../../public/images/bn-cart.png';
import bn2 from '../../public/images/bn-cart1.png';
import bn3 from '../../public/images/bn-cart1.2.png';
import bn4 from '../../public/images/bn-cart1.3.png';
import bn5 from '../../public/images/bn-cart2.png';
import bn6 from '../../public/images/bn-cart2.2.png';
import bn7 from '../../public/images/bn-cart2.3.png';
import bn8 from '../../public/images/bn-cart2.4.png';
import bn9 from '../../public/images/bn-cart4.png';
import bn10 from '../../public/images/bn-cart7.png';

import brand1 from '../../public/images/1.png';
import brand2 from '../../public/images/2.png';
import brand3 from '../../public/images/3.png';
import brand4 from '../../public/images/4.png';
import brand5 from '../../public/images/5.png';
import brand6 from '../../public/images/6.png';
import brand7 from '../../public/images/7.png';
import brand8 from '../../public/images/8.png';

export const NavLinks = [
  {
    id: 1,
    title: 'لباس زنانه',
    dropdownList: [
      { title: 'لورم ایپسوم' },
      { title: 'لورم ایپسوم' },
      { title: 'لورم ایپسوم' }
    ],
    dropdownOpen: false
  },
  {
    id: 2,
    title: 'لباس مردانه',
    dropdownList: [{ title: 'لورم ایپسوم' }],
    dropdownOpen: false
  },
  {
    id: 3,
    title: 'کفش و کتونی',
    dropdownList: [
      { title: 'لورم ایپسوم' },
      { title: 'لورم ایپسوم' },
      { title: 'لورم ایپسوم' },
      { title: 'لورم ایپسوم' }
    ],
    dropdownOpen: false
  },
  {
    id: 4,
    title: 'لباس بچگانه',
    dropdownList: [
      { title: 'لورم ایپسوم' },
      { title: 'لورم ایپسوم' },
      { title: 'لورم ایپسوم' }
    ],
    dropdownOpen: false
  },
  {
    id: 5,
    title: 'نوزاد',
    dropdownList: [{ title: 'لورم ایپسوم' }, { title: 'لورم ایپسوم' }],
    dropdownOpen: false
  }
];

export const productsSlider = [
  {
    id: 1,
    img: p1,
    title: 'رکابی مردانه برند لیورجی رنگ نوک مدادی کد male222',
    price: 450000,
    off: ''
  },
  {
    id: 2,
    img: p8,
    title: 'تیشرت ورزشی مردانه برند آندر آرمور کد va466',
    price: 450000,
    off: 31
  },
  {
    id: 3,
    img: p2,
    title: 'شلوار لینن زنانه اسمارا مدل دمپا کشی کد bano1707',
    price: 450000,
    off: 22
  },
  {
    id: 4,
    img: p12,
    title: 'شورت اسلیپ زنانه برند Esmara کد bano140',
    price: 450000,
    off: 35
  },
  {
    id: 5,
    img: p9,
    title: 'تیشرت ورزشی مردانه برند آندر آرمور کد va472',
    price: 450000,
    off: 27
  },
  {
    id: 6,
    img: p6,
    title: 'تیشرت بچگانه پسرانه برند puma کد va492',
    price: 450000,
    off: 40
  },
  {
    id: 7,
    img: p1,
    title: 'رکابی مردانه برند لیورجی رنگ نوک مدادی کد male222',
    price: 450000,
    off: 31
  },
  {
    id: 8,
    img: p2,
    title: 'شلوار لینن زنانه اسمارا مدل دمپا کشی کد bano1707',
    price: 450000,
    off: 22
  }
];

export const productsSlider2 = [
  {
    id: 1,
    img: p1,
    gallery: [p1, g1, g2],
    title: 'رکابی مردانه برند لیورجی رنگ نوک مدادی کد male222',
    price: 450000,
    off: '',
    newP: true
  },
  {
    id: 2,
    img: p8,
    gallery: [p8, g20, g21, g22],
    title: 'تیشرت ورزشی مردانه برند آندر آرمور کد va466',
    price: 450000,
    off: 31
  },
  {
    id: 3,
    img: p2,
    gallery: [p2, g3, g4],

    title: 'شلوار لینن زنانه اسمارا مدل دمپا کشی کد bano1707',
    price: 450000,
    off: 22
  },
  {
    id: 4,
    img: p12,
    gallery: [p12, g8, g9, g10, g13],

    title: 'شورت اسلیپ زنانه برند Esmara کد bano140',
    price: 450000,
    off: 35,
    newP: true
  },
  {
    id: 5,
    img: p9,
    gallery: [p9, g23, g24, g25, g26, g27],

    title: 'تیشرت ورزشی مردانه برند آندر آرمور کد va472',
    price: 450000,
    off: 27
  },
  {
    id: 6,
    img: p6,
    gallery: [p6, g14, g15],

    title: 'تیشرت بچگانه پسرانه برند puma کد va492',
    price: 450000,
    off: 40
  },
  {
    id: 7,
    img: p1,
    gallery: [p1, g1, g2],

    title: 'رکابی مردانه برند لیورجی رنگ نوک مدادی کد male222',
    price: 450000,
    off: 31
  },
  {
    id: 8,
    img: p2,
    gallery: [p2, g3, g4],

    title: 'شلوار لینن زنانه اسمارا مدل دمپا کشی کد bano1707',
    price: 450000,
    off: 22,
    newP: true
  },
  {
    id: 9,
    img: p12,
    gallery: [p12, g8, g9, g10, g13],

    title: 'شورت اسلیپ زنانه برند Esmara کد bano140',
    price: 450000,
    off: 35,
    popular: true
  },
  {
    id: 10,
    img: p8,
    gallery: [p8, g20, g21, g22],

    title: 'تیشرت ورزشی مردانه برند آندر آرمور کد va466',
    price: 450000,
    off: 31,
    popular: true
  },
  {
    id: 11,
    img: p6,
    gallery: [p6, g14, g15],

    title: 'تیشرت بچگانه پسرانه برند puma کد va492',
    price: 450000,
    off: 40
  },
  {
    id: 12,
    img: p1,
    gallery: [p1, g1, g2],

    title: 'رکابی مردانه برند لیورجی رنگ نوک مدادی کد male222',
    price: 450000,
    off: ''
  }
];

export const bnCardSlider = [
  { id: 1, img: bn },
  { id: 2, img: bn2 },
  { id: 3, img: bn3 },
  { id: 4, img: bn4 }
];

export const bnCardSlider2 = [
  { id: 1, img: bn5 },
  { id: 2, img: bn6 },
  { id: 3, img: bn7 },
  { id: 4, img: bn8 }
];

export const bnCardSlider3 = [
  { id: 1, img: bn9 },
  { id: 2, img: bn10 },
  { id: 3, img: bn4 },
  { id: 4, img: bn5 }
];

export const Brands = [
  { id: 1, name: 'اسمارا', img: brand1, entity: 1230 },
  { id: 2, name: 'لوپیلو', img: brand2, entity: 54 },
  { id: 3, name: 'لیورجی', img: brand3, entity: 678 },
  { id: 4, name: 'کریویت', img: brand4, entity: 546 },
  { id: 5, name: 'پیپرتس', img: brand5, entity: 412 },
  { id: 6, name: 'تام اند رز', img: brand6, entity: 5 },
  { id: 7, name: 'کول کلاب', img: brand8, entity: 65 },
  { id: 8, name: 'واتسون', img: brand7, entity: 123 }
];
