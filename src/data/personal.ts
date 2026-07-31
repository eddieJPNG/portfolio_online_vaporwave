import { type PersonalInfo } from '../types';
import { getProfileImage } from '../utils/iconImports';
import { SOCIAL_LINKS } from '../utils/constants';

export const personalInfo: PersonalInfo = {
  nome: 'Edson Rocha da Silva',
  cargo: 'Desenvolvedor Back-End | Desenvolvedor Python | Desenvolvedor Web | Desenvolvedor NodeJS',
  email: 'rochaedsonn12@gmail.com',
  telefone: '+55 86 994268973',
  endereco: 'Ilha Grande, Piauí, BR',
  resumo:
    'Desenvolvedor centrado em criação e desenvolvimento de soluções e sistemas, Com experiência prática no uso de tecnologias modernas, como FastAPI e Flask(Python), NestJS(Typescript/NodeJS), Bancos de dados Relacionais (MySQL e Sqlite), Infraestrutura e versionamento com Git e Github e base em tecnologias de frontend (HTML5, CSS3, Tailwinde React). Aplicando técnicas de Clean code, escalabilidade e modularização em camadas.',
  imagem: getProfileImage(),
  linkedin: SOCIAL_LINKS.linkedin,
  github: SOCIAL_LINKS.github,
  whatsapp: SOCIAL_LINKS.whatsapp,
};
