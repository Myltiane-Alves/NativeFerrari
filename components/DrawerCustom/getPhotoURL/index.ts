import { vars } from '../../../values';

export function getPhotoURL(photo: string) {
  return `${vars.baseURL}/photo/${photo}`;
}
