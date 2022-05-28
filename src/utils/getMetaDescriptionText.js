import { CONFIG } from '../config';
import cutText from './cutText';

export default function getMetaDescriptionText(text, added = ''){
  let addon = ' | ' + CONFIG.SITE_NAME_SHORT + added;
  let cuted = cutText(text, 160 - addon.length);
  return cuted + addon;
}