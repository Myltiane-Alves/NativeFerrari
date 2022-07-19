import { vars } from '../../values';
import { ButtonColor } from './ButtonColor';

export function getBgColor(color: ButtonColor) {
  switch (color) {
    case 'green':
      return vars.green;
    case 'red':
      return vars.red;
    case 'blue':
      return vars.blue;
    case 'black':
      return vars.black;
    case 'gray':
      return vars.gray3;
    case 'outline':
      return vars.white;
    default:
      return 'transparent';
  }
}
