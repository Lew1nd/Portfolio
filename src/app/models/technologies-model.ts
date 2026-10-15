export interface Technology {
    name: string;
    image: string;
}

export type TechnologyId = keyof typeof TECHNOLOGIES;

export const TECHNOLOGIES: Record<string, Technology> = {
  unity: {
    name: 'Unity',
    image: 'images/technologies/unity.webp'
  },
  csharp: {
    name: 'C#',
    image: 'images/technologies/csharp.webp'
  },
  git: {
    name: 'Git',
    image: 'images/technologies/git.webp'
  },
  github: {
    name: 'GitHub',
    image: 'images/technologies/github.webp'
  },
  angular: {
    name: 'Angular',
    image: 'images/technologies/angular.webp'
  },
  html5: {
    name: 'HTML5',
    image: 'images/technologies/html5.webp'
  },
  css3: {
    name: 'CSS3',
    image: 'images/technologies/css3.webp'
  },
  dotnet: {
    name: '.Net',
    image: 'images/technologies/dotnetcore.webp'
  },
  nodejs: {
    name: 'Nodejs',
    image: 'images/technologies/nodejs.webp'
  },
  expressjs: {
    name: 'Expressjs',
    image: 'images/technologies/express.webp'
  },
  nestjs: {
    name: 'Nestjs',
    image: 'images/technologies/nestjs.webp'
  },
  ejs: {
     name: 'Ejs',
     image: 'images/technologies/ejs.webp' 
  },
  mongodb: {
    name: 'Mongodb',
    image: 'images/technologies/mongodb.webp'
  },
  supabase: {
    name: 'Supabase',
    image: 'images/technologies/supabase.webp'
  },
  sqlserver: {
    name: 'Sqlserver',
    image: 'images/technologies/microsoftsqlserver.webp'
  },
  mysql: {
    name: 'Mysql',
    image: 'images/technologies/mysql.webp'
  },
  vercel: {
    name: 'Vercel',
    image: 'images/technologies/vercel.webp'
  },
  railway: {
    name: 'Railway',
    image: 'images/technologies/railway.webp'
  },
  render: {
    name: 'Render',
    image: 'images/technologies/render.webp'
  },
  typescript: {
    name: 'Typescript',
    image: 'images/technologies/typescript.webp'  
  },
  cplusplus: {
    name: 'C++',
    image: 'images/technologies/cplusplus.webp'
  },
  javascript: {
    name: 'Javascript',
    image: 'images/technologies/javascript.webp'
  },
  python: {
    name: 'Python',
    image: 'images/technologies/python.webp'
  },
  canva: {
    name: 'Canva',
    image: 'images/technologies/canva.webp'
  },
  inkscape: {
    name: 'Inkscape',
    image: 'images/technologies/inkscape.webp'
  },
  photoshop: {
    name: 'Photoshop',
    image: 'images/technologies/photoshop.webp'
  },
  postman: {
    name: 'Postman',
    image: 'images/technologies/postman.webp'
  },
  npm: {
    name: 'Npm',
    image: 'images/technologies/npm.webp'
  },
  vagrant: {
    name: 'Vagrant',
    image: 'images/technologies/vagrant.webp'
  },
  nginx: {
    name: 'Nginx',
    image: 'images/technologies/nginx.webp'
  },
  obsidian: {
    name: 'Obsidian',
    image: 'images/technologies/obsidian.webp'
  },
  trello: {
    name: 'Trello',
    image: 'images/technologies/trello.webp'
  },
  emailjs: {
    name: 'Emailjs',
    image: 'images/technologies/emailjs.webp'
  },
  jwt: {
    name: 'Jwt',
    image: 'images/technologies/jwt.webp'
  },
  cloudinary: {
    name: 'Cloudinary',
    image: 'images/technologies/cloudinary.webp'
  },
  java: {
    name: 'Java',
    image: 'images/technologies/java.webp'
  },
  bcrypt: {
    name: 'Bcrypt',
    image: 'images/technologies/bcrypt.webp'
  }
} satisfies Record<string, Technology>;

export const TECHNOLOGY_CATEGORIES = {
  frontend: [
    'angular',
    'html5',
    'css3'
  ],
  gameDevelopment: [
    'unity'
  ],
  backend: [
    'dotnet',
    'nodejs',
    'expressjs',
    'nestjs',
    'ejs'
  ],
  databases: [
    'mongodb',
    'sqlserver',
    'mysql'
  ],
  cloudAndDeploy: [
    'vercel',
    'railway',
    'render'
  ],
  tools: [
    'git',
    'github',
    'npm',
    'vagrant',
    'nginx',
    'obsidian',
    'trello',
    'postman',
    'jwt'
  ],
  languages: [
    'typescript',
    'cplusplus',
    'javascript',
    'python',
    'csharp',
    'java',
  ],
  designs: [
    'canva',
    'inkscape',
    'photoshop',
  ],
  services: [
    'emailjs',
    'cloudinary',
  ],
  security: [
   'bcrypt',
   'jwt',
  ]
} as const satisfies Record<string, TechnologyId[]>;
