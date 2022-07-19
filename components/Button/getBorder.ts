import { vars } from '../../values';
import { ButtonColor } from './ButtonColor';

export function getBorder(color: ButtonColor) {
  switch (color) {
    case 'outline':
      return vars.gray2;
    case 'outline-white':
      return vars.white;
    default:
      return 'none';
  }
}
