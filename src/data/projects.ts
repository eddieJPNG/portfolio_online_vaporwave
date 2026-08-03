import { type Project } from '../types';
import { getProjectImage } from '../utils/iconImports';

export const projects: Project[] = [
  {
    id: 'webbb3',
    titulo: 'Webbb3',
    descricao: 'Sistema de votação on-chain com smart-contract em Solidity',
    descricaoLonga:
      'Sistema de votação com deploy direto na blockchain, com a criação de smart-contract na linguagem Solidity, consolidado como um Dapp (Decentralized Application).',
    tecnologias: ['Solidity', 'Metamask', 'HTML', 'CSS', 'TypeScript', 'React', 'Bootstrap'],
    periodo: 'fev. 2026 — jun. 2026',
    githubUrl: 'https://github.com/eddieJPNG/webbb3_dapp_course_blockchain',
    imagem: getProjectImage('webbb3'),
    destaque: true,
    categoria: 'Blockchain',
  },
  {
    id: 'nft-hub',
    titulo: 'Nft Hub',
    descricao: 'Sistema de visualização de NFTs on-chain na rede Sui',
    descricaoLonga:
      'Sistema desenvolvido como prática de criação de Dapps na rede Blockchain Sui, na linguagem Move, com deploy do smart-contract direto na rede Mainnet.',
    tecnologias: ['Move', 'Sui', 'HTML5', 'CSS3', 'JavaScript'],
    periodo: 'jan. 2025 — fev. 2025',
    githubUrl: 'https://github.com/eddieJPNG/Sui_Nft_Hub_Project',
    imagem: getProjectImage('nft-hub'),
    destaque: true,
    categoria: 'Blockchain',
  },
  {
    id: 'convmonitor',
    titulo: 'ConvMonitor',
    descricao: 'Sistema de monitoramento de convênios de estágio',
    descricaoLonga:
      'Aplicação desktop para gerenciamento de convênios de estágio da Universidade Estadual do Piauí (UESPI), com painéis distintos por perfil de acesso, geração de documentos e controle de vencimentos.',
    tecnologias: ['Python', 'SQLAlchemy', 'Flask', 'Flet', 'MySQL'],
    periodo: 'mai. 2026 — jun. 2026',
    githubUrl: 'https://github.com/pedroaguiarcd/sistema-convenios',
    imagem: getProjectImage('convmonitor'),
    destaque: true,
    categoria: 'Web',
  },
  {
    id: 'egoapi',
    titulo: 'EgoAPI',
    descricao: 'API Rest consumível para pesquisa de persongens do anime/mangá Blue Lock',
    descricaoLonga:
      'O projeto fornece endpoints para listagem, busca e filtragem de personagens, permitindo consultar informações como nome, apelido, nacionalidade, equipe, posição, habilidades e armas especiais utilizadas pelos jogadores.',
    tecnologias: ['Python', 'Fastapi', 'Sqlalchemy', 'Sqlite'],
    periodo: 'jun. 2026 — jun. 2026',
    githubUrl: 'https://github.com/eddieJPNG/EgoAPI',
    imagem: getProjectImage('egoapi'),
    destaque: true,
    categoria: 'Web',
  },
  {
    id: 'portfolio-vaporwave',
    titulo: 'Portfolio Online Vaporwave',
    descricao:
      'Portfólio profissional online com estética vaporwave imersivo, desenvolvido com React, TypeScript e Vite.',
    descricaoLonga:
      'O Vaporwave Online Portfolio é uma aplicação web single-page application (SPA) que funciona como cartão de visitas digital avançado. Apresenta o perfil profissional, habilidades técnicas e projetos de desenvolvimento web, backend e blockchain de Edson Rocha da Silva, combinando design vaporwave imersivo com funcionalidade profissional.',
    tecnologias: ['React', 'Typescript', 'Vite', 'Tailwind', 'CSS3', 'Vitest'],
    periodo: 'mai. 2026 — jul. 2026',
    githubUrl: 'https://github.com/eddieJPNG/vaporwaveOnlinePortifolio',
    imagem: getProjectImage('portfolio'),
    destaque: true,
    categoria: 'Web',
  },
  {
    id: 'lubanAPI',
    titulo: "Back N' Nest",
    descricao: 'Projeto para estudo do ecossistema backend typescript ',
    descricaoLonga:
      "Back N' Nest é um projeto para desenvolvimento pessoal e profissional de vários ecossistemas do campo backend e typescript com base numa API de usuários. Com seus primeiro passo sendo uma API RESTful para CRUD de usuários, desenvolvida com boas práticas de arquitetura e design de software. O projeto utiliza NestJS como framework, Prisma como ORM e SQLite como banco de dados, com documentação Swagger integrada.",
    tecnologias: ['NestJS', 'Prisma', 'SQLite', 'Swagger', 'TypeScript', 'Jest', 'NodeJS'],
    periodo: 'mar. 2026 — ago. 2026',
    githubUrl: 'https://github.com/eddieJPNG/lu_banAPI',
    imagem: getProjectImage('back_n_nest'),
    destaque: true,
    categoria: 'Web',
  },
];
