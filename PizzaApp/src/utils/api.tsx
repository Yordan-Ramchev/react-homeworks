
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
      slug: 'margherita'
    },
    {
      id: '1',
      name: 'Marinara',
      description: 'Tomato sauce, garlic and basil',
      thumb: '//www.dominos.bg/gallery/fmobile/1344medium.png',
      price: 7.2,
      slug: 'marinara'
    },
    {
      id: '2',
      name: 'Quattro Stagioni',
      description:
        'Tomato sauce, mozzarella, mushrooms, ham, artichokes, olives, and oregano',
      thumb: '//www.dominos.bg/gallery/fmobile/1364medium.png',
      price: 7.6,
      slug: 'quattro-stagioni'
    },
    {
      id: '3',
      name: 'Chorizana',
      description:
        'Tomato Sauce, Feta Cheese, Mozzarella, Chicken, Choriso, Fresh tomato',
      thumb: '//www.dominos.bg/gallery/fmobile/1361medium.png',
      price: 7.6,
      slug: 'chorizana'
    },
    {
      id: '4',
      name: 'Mediterraneo',
      description:
        'Tomato Sauce, Mozzarella, Feta Cheese, Fresh tomato, Black Olives, Fresh green peppers',
      thumb: '//www.dominos.bg/gallery/fmobile/1314medium.png',
      price: 8.2,
      slug: 'mediterraneo'
    },
    {
      id: '5',
      name: 'Chickenita',
      description:
        'Tomato Sauce, Mozzarella, Emmental, Pepperoni, Chicken, Fresh tomato',
      thumb: '//www.dominos.bg/gallery/fmobile/1341medium.png',
      price: 8.2,
      slug: 'chickenita'
    },
  ];
