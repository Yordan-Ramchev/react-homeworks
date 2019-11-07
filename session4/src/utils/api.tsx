import { IPizza } from '../modules/pizzas';

export default {
  listPizzas() {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve(DATA);
      }, 10),
    );
  },

  getPizza(id: string) {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve(DATA.find(p => p.id === id) || null);
      }, 10),
    );
  },
};

const DATA: IPizza[] = [
  {
    id: '0',
    name: 'Margherita',
    description: 'Tomato sauce, mozzarella, and oregano',
    thumb: '//www.dominos.bg/gallery/fmobile/1265medium.png',
    price: 6.5,
    qtn: 3,
    likes: 12,
    viewerLiked: false,
  },
  {
    id: '1',
    name: 'Marinara',
    description: 'Tomato sauce, garlic and basil',
    thumb: '//www.dominos.bg/gallery/fmobile/1344medium.png',
    price: 7.2,
    qtn: 2,
    likes: 22,
    viewerLiked: false,
  },
  {
    id: '2',
    name: 'Quattro Stagioni',
    description:
      'Tomato sauce, mozzarella, mushrooms, ham, artichokes, olives, and oregano',
    thumb: '//www.dominos.bg/gallery/fmobile/1364medium.png',
    price: 7.6,
    qtn: 4,
    likes: 0,
    viewerLiked: false,
  },
];
