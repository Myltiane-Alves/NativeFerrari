import { vars } from '../../values';
import { PageColor } from './PageColor';

export function getPageColor(color: PageColor) {
  switch (color) {
    case 'blue':
      return vars.blue;
    case 'green':
      return vars.green;
    case 'red':
      return vars.red;
    case 'yellow':
      return vars.yellow;
    case 'gray':
      return vars.gray;
    default:
      return vars.black;
  }
}
