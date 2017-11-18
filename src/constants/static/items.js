import { formatDate } from 'helpers/date';

export const items = [
  { 
    id: 1,
    image: {
      src: 'https://pp.userapi.com/c639828/v639828889/58af6/wrl1B46fCuE.jpg',
      alt: 'hi kitty'
    },
    meta: {
      name: 'Fedya', 
      likes: 4,
      dateCreated: formatDate('2017-10-02')
    }
  },
  { 
    id: 3,   
    image: {
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
    id: 7, 
    image: {
      src: 'https://pp.userapi.com/c405931/v405931356/39f/GWhaMm1iBVo.jpg',
      alt: 'hi kitty'
    },
    meta: {
      dateCreated: formatDate('2017-09-07')
    },
    text: 'Nice day for'
  }
];
