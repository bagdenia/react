import { formatDate } from 'helpers/date';

export const items = [
  { 
    id: 1,
    image: {
      src: '/dist/images/1.jpg',
      alt: 'hi kitty'
    },
    meta: {
      name: 'Fedya', 
      likes: 4,
      dateCreated: formatDate('2017-10-02')
    }
  },
  { 
    id: 2,   
    image: {
      src: '/dist/images/2.jpg',
      alt: 'hi kitty'
    },
    meta: {
      name: 'Vasya', 
      likes: 7,
      dateCreated: formatDate('2017-09-07')
    },
    text: 'Bye all'
  },
  {
    id: 3, 
    image: {
      src: '/dist/images/3.jpg',
      alt: 'hi kitty'
    },
    meta: {
      dateCreated: formatDate('2017-09-07')
    },
    text: 'Nice day for'
  }
];
