
export class Company {
  id: number;
  type: string;
  name: string;
  url: string;
  logo: string;
  description: string;
}

// tslint:disable-next-line:typedef-whitespace
export const companies : Company[] = [
  {
    id: 0,
    name: 'SurgiPal', type: 'Company',
    logo: 'surgipal.png',
    url: 'http://surgipal.com',
    description: 'A physician driven cloud-based preference card system and OR platform for surgeries and procedures'
  },
  {
    id: 1, type: 'Consultancy',
    name: 'Crankfrog',
    logo: 'crankfrog.png',
    url: 'http://crankfrog.com',
    description: 'Focused on healthcare technology strategy and product development, with an experienced team that chips away at solving complicated, unstructured problems.'
  },
  {
    id: 2, type: 'Consultancy',
    name: 'Warburg Pincus',
    logo: 'wp.png',
    url: 'http://warburgpincus.com',
    description: 'At Warburg Pincus, private equity investing is our only business. Established over 50 years ago, Warburg Pincus has invested more than $60 billion in more than 780 companies in more than 40 countries around the world.'
  },
  {
    id:3,
    name: 'Aksia', type: 'Company',
    logo: 'Aksia_Logo_small.png',
    url: 'http://aksia.com',
    description: 'Aksia is a specialist research and portfolio advisory firm providing hedge fund, private credit, and opportunistic solutions to institutional investors. We are proud of our uncompromising research, client investment performance, and well-staffed, client-centric approach. '
  },
  {
    id: 4, type: 'Company',
    name: 'Cerberus Capital Management',
    logo: 'cerberus.png',
    url: 'http://www.cerberuscapital.com/',
    description: 'Cerberus Capital Management, L.P. is a private investment firm based in New York City with affiliate and advisory offices across the United States, Europe and Asia. With over $30 billion under management, we manage funds and accounts for many of the world’s most respected investors. We invest globally in four main areas of distressed securities and assets, private equity, middle-market lending and real-estate. '
  },
  {
    id: 5, type: 'Company',
    name: 'Credit Suisse',
    logo: 'cs.png',
    url: 'https://www.credit-suisse.com/us/en.html',
    // tslint:disable-next-line:max-line-length
    description: 'Founded in 1856, we today have a global reach with operations in about 50 countries and 47,170 employees from over 150 different nations. Our broad footprint helps us to generate a geographically balanced stream of revenues and net new assets and allows us to capture growth opportunities around the world. We serve our clients through three regionally focused divisions: Swiss Universal Bank, International Wealth Management and Asia Pacific. '
  },
  {
    id:6, type: 'Company',
    name: 'CapitalThinking',
    logo: 'ct.png',
    url: 'https://www.crunchbase.com/organization/capitalthinking/timeline#/timeline/index',
    // tslint:disable-next-line:max-line-length
    description: 'A first of its kind commercial mortgage startup, poised to be the "Lending Tree" of the commerical mortgage industry. Aquired by CapitalStream in 2007'
  },
  {
    id: 7,
    type: 'Company',
    name: 'Merrill Lynch',
    logo: 'ml.png',
    url: 'https://www.ml.com',
    // tslint:disable-next-line:max-line-length
    description: 'At Merrill Lynch, we have a clear purpose to help make financial lives better through the power of every connection. We fulfill this purpose through a strategy of responsible growth, which includes a focus on environmental, social and governance leadership. Every day, we’re proud to partner with 46 million individuals, families and businesses, in hundreds of communities through operations in 35 countries to help them achieve their financial goals. '
  }];

