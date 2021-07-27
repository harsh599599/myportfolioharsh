import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'E-Commerce',
    desc:
      'An application to manage items,categories from Admin Dashboard and user can see and place the order I have added Stripe and paypal payment gateway with testing key.',
    img: UTrackerImg,
    Links: 'https://github.com/harsh599599/prac-projects',
  },
  {
    id: uuidv4(),
    name: 'E-Commerce',
    desc:
      'An application to manage items,categories from Admin Dashboard and user can see and place the order I have added Stripe and paypal payment gateway with testing key.',
    img: UTrackerImg,
    Links: 'https://github.com/harsh599599/prac-projects',
  },
  {
    id: uuidv4(),
    name: 'E-Commerce',
    desc:
      'An application to manage items,categories from Admin Dashboard and user can see and place the order I have added Stripe and paypal payment gateway with testing key.',
    img: UTrackerImg,
    Links: 'https://github.com/harsh599599/prac-projects',
  },
];

export default projects;
