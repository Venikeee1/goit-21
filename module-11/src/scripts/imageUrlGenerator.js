import config from './settings/config';

const IMG_TYPES = {
  small: '_sb.png',
  large: '_lg.png',
  full_quality: '_full.png',
  full_quality_vertical: '_vert.jpg',
};

export default function(name, type) {
  const heroName = name.replace('npc_dota_hero_', '');
  const suffix = IMG_TYPES[type];

  return `${config.CDN_IMAGE_URL}/heroes/${heroName}${suffix}`
}