import { vars } from '../../values';
import { ButtonColor } from './ButtonColor';

export function getTextColor(color: ButtonColor) {
  switch (color) {
    case 'green':
    case 'red':
    case 'blue':
    case 'black':
    case 'outline-white':
      return vars.white;
    case 'gray':
      return vars.gray0;
    case 'outline':
      return vars.gray2;
    default:
      return vars.black;
  }
}
