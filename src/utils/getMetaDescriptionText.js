import { CONFIG } from '../config';

export default function getMetaDescriptionText(text){
  let addon = ' | ' + CONFIG.SITE_NAME_SHORT;
  let count = addon.length;
  return text.slice(0, 255 - count) + addon;
}