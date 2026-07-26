// Catalogue Noun Héritage
// Prix de référence en XAF (franc CFA), convertis à la volée dans les autres devises.
// Ces taux sont statiques pour la démo ; à brancher sur une API de change en production.

export const CURRENCIES = {
  XAF: { symbol: 'FCFA', label: 'Franc CFA', rate: 1 },
  USD: { symbol: '$', label: 'Dollar US', rate: 1 / 610 },
  EUR: { symbol: '€', label: 'Euro', rate: 1 / 656 },
  GBP: { symbol: '£', label: 'Livre Sterling', rate: 1 / 770 },
}

export function convertPrice(xafAmount, currency) {
  const rate = CURRENCIES[currency]?.rate ?? 1
  const value = xafAmount * rate
  if (currency === 'XAF') {
    return `${Math.round(value).toLocaleString('fr-FR')} ${CURRENCIES.XAF.symbol}`
  }
  return `${CURRENCIES[currency].symbol}${value.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

export const CATEGORIES = [
  { slug: 'statuettes', name: 'Statuettes', description: 'Figures commémoratives sculptées à la main, dans la tradition des portraits royaux bamoun.' },
  { slug: 'masques', name: 'Masques', description: 'Masques cimiers et masques perlés inspirés des sociétés traditionnelles de Foumban.' },
  { slug: 'trones', name: 'Trônes & Tabourets', description: 'Sièges royaux perlés, symboles de prestige dans la cour bamoun.' },
  { slug: 'bijoux', name: 'Bijoux', description: 'Parures en laiton, perles et bronze, façonnées selon des techniques de fonte ancestrales.' },
  { slug: 'vetements', name: 'Vêtements traditionnels', description: 'Boubous, tenues brodées et chéchias, portés lors des grandes cérémonies bamoun.' },
]

export const PRODUCTS = [
  {
    id: 'st-01',
    slug: 'statuette-dignitaire-baton-raphia',
    category: 'statuettes',
    name: 'Statuette du Dignitaire au Bâton de Raphia',
    shortDescription: 'Figure debout sur tabouret, bâton cérémoniel décoré de raphia.',
    description:
      "Sculptée dans un bois dense selon les codes du portrait commémoratif bamoun, cette statuette représente un dignitaire debout sur un tabouret sculpté, tenant un bâton cérémoniel orné de raphia. La posture rigide et le regard frontal reprennent la tradition des figures d'apparat destinées à honorer la mémoire d'un notable ou d'un ancêtre. Chaque pièce est taillée à la main par un atelier de Foumban, puis patinée pour révéler le grain du bois.",
    priceXAF: 145000,
    material: 'Bois dur sculpté, patine naturelle',
    origin: 'Foumban, Cameroun',
    height: '58 cm',
    featured: true,
  },
  {
    id: 'st-02',
    slug: 'statuette-couple-royal-bronze',
    category: 'statuettes',
    name: 'Couple Royal en Bronze',
    shortDescription: 'Duo de figures royales fondues au bronze, cornes sculptées.',
    description:
      "Inspiré des techniques de fonte à la cire perdue pratiquées à Foumban depuis le XIXe siècle, ce couple de statuettes en bronze représente un souverain et sa parèdre, tous deux couronnés d'attributs cornus symbolisant la force et la fécondité. La fonte au bronze, héritée des échanges entre royaumes du Grassland camerounais, donne à ces pièces une teinte sombre et une texture ciselée caractéristique de l'art bamoun.",
    priceXAF: 210000,
    material: 'Bronze fondu à la cire perdue',
    origin: 'Foumban, Cameroun',
    height: '42 cm (le couple)',
    featured: true,
  },
  {
    id: 'st-03',
    slug: 'statuette-gardien-tabouret-salamandres',
    category: 'statuettes',
    name: 'Gardien au Tabouret des Salamandres',
    shortDescription: 'Figure debout sur un tabouret orné de deux salamandres, animal fétiche bamoun.',
    description:
      "Cette statuette met en scène un gardien debout sur un tabouret sculpté de deux salamandres, animal fétiche associé à la protection dans la cosmogonie bamoun. Collier stylisé et attributs cérémoniels complètent la figure, taillée dans un bois local puis huilée pour en révéler les reliefs.",
    priceXAF: 128000,
    material: 'Bois sculpté, finition huilée',
    origin: 'Foumban, Cameroun',
    height: '49 cm',
    featured: false,
  },
  {
    id: 'ma-01',
    slug: 'masque-cimier-perle',
    category: 'masques',
    name: 'Masque Cimier Perlé',
    shortDescription: 'Masque casque recouvert de perles multicolores, porté par les oreilles.',
    description:
      "Le masque cimier se porte sur le sommet du crâne et se maintient par des liens passés aux oreilles. Celui-ci reprend la tradition du perlage bamoun : verre, jaune, bleu et rouge composent un décor dense sur une âme de bois et de raphia tressé. Autrefois réservé aux danses rituelles de cour, ce type de masque signale aujourd'hui le prestige de son porteur lors des grandes cérémonies.",
    priceXAF: 175000,
    material: 'Bois, raphia tressé, perles de verre',
    origin: 'Foumban, Cameroun',
    height: '38 cm',
    featured: true,
  },
  {
    id: 'ma-02',
    slug: 'masque-facial-traits-joufflus',
    category: 'masques',
    name: 'Masque Facial aux Traits Joufflus',
    shortDescription: 'Visage stylisé aux joues pleines et yeux globuleux, style typique bamoun.',
    description:
      "Les joues pleines, la bouche entrouverte et les yeux globuleux de ce masque facial reprennent un canon esthétique partagé par les peuples du Grassland camerounais — Bamoun, Bamiléké et Tikar. Sculpté d'une seule pièce de bois, il porte une patine sombre obtenue par fumage traditionnel.",
    priceXAF: 98000,
    material: 'Bois monoxyle, patine fumée',
    origin: 'Foumban, Cameroun',
    height: '31 cm',
    featured: false,
  },
  {
    id: 'ma-03',
    slug: 'masque-reptiles-danseurs',
    category: 'masques',
    name: 'Masque à la Couronne de Reptiles Dansants',
    shortDescription: 'Coiffe ajourée représentant des personnages dansants surmontés de reptiles.',
    description:
      "Une coiffe ajourée couronne ce masque de figures dansantes elles-mêmes surmontées de reptiles stylisés — motif que l'on retrouve sur les grands masques casques bamoun destinés aux cérémonies de cour. Le travail d'ajour, particulièrement fin, demande plusieurs semaines de sculpture.",
    priceXAF: 195000,
    material: 'Bois sculpté et ajouré',
    origin: 'Foumban, Cameroun',
    height: '45 cm',
    featured: false,
  },
  {
    id: 'tr-01',
    slug: 'tabouret-royal-perle',
    category: 'trones',
    name: 'Tabouret Royal Perlé',
    shortDescription: 'Siège traditionnel entièrement recouvert de perles, symbole de prestige.',
    description:
      "Dans la tradition des cours du Grassland, les sièges perlés ne sont pas conçus pour l'usage quotidien mais comme symboles de royauté, exhibés lors des intronisations et visites de dignitaires. Ce tabouret reprend cette tradition : une structure en bois est intégralement recouverte d'un maillage de perles colorées, tendu à la main par des artisans perleurs de Foumban.",
    priceXAF: 320000,
    material: 'Bois, maillage de perles de verre',
    origin: 'Foumban, Cameroun',
    height: '52 cm',
    featured: true,
  },
  {
    id: 'tr-02',
    slug: 'trone-miniature-parasol',
    category: 'trones',
    name: 'Trône Miniature au Parasol Amovible',
    shortDescription: 'Reproduction de chaise à porteurs surmontée d\'un parasol à bords crénelés.',
    description:
      "Cette pièce de collection reproduit à échelle réduite les chaises à porteurs royales, surmontées d'un parasol amovible aux bords crénelés — symbole de sagesse et d'autorité dans la cour bamoun. Sculptée en bois massif, elle convient aussi bien à l'exposition qu'à la décoration d'un intérieur inspiré de l'Afrique des Grasslands.",
    priceXAF: 260000,
    material: 'Bois massif sculpté',
    origin: 'Foumban, Cameroun',
    height: '35 cm',
    featured: false,
  },
  {
    id: 'bi-01',
    slug: 'collier-laiton-bamoun',
    category: 'bijoux',
    name: 'Collier en Laiton Ciselé',
    shortDescription: 'Collier de dignitaire, motifs ciselés à la main.',
    description:
      "Porté par les dignitaires lors des cérémonies, ce collier en laiton reprend des motifs géométriques ciselés à la main, écho discret aux caractères de l'écriture bamoun créée par le sultan Njoya. Le laiton, matériau noble dans la tradition de fonte du Grassland, est ici travaillé à froid puis poli.",
    priceXAF: 42000,
    material: 'Laiton ciselé et poli',
    origin: 'Foumban, Cameroun',
    height: 'Longueur 48 cm',
    featured: true,
  },
  {
    id: 'bi-02',
    slug: 'bracelet-perles-cauris',
    category: 'bijoux',
    name: 'Bracelet Perles & Cauris',
    shortDescription: 'Perles de verre et cauris tressés, symboles traditionnels de prospérité.',
    description:
      "Les cauris, autrefois utilisés comme monnaie d'échange dans plusieurs royaumes d'Afrique de l'Ouest et du Grassland, sont ici associés à des perles de verre colorées sur une tresse de fibres naturelles. Ce bracelet se porte aussi bien au quotidien que lors d'occasions festives.",
    priceXAF: 18000,
    material: 'Perles de verre, cauris, fibres naturelles',
    origin: 'Foumban, Cameroun',
    height: 'Ajustable',
    featured: false,
  },
  {
    id: 'bi-03',
    slug: 'bague-sceau-bronze',
    category: 'bijoux',
    name: 'Bague Sceau en Bronze',
    shortDescription: 'Bague massive à motif de sceau, fonte à la cire perdue.',
    description:
      "Coulée selon la technique de la cire perdue, cette bague massive porte un motif de sceau inspiré des symboles royaux bamoun. Chaque exemplaire présente de légères variations, trace du moule unique détruit lors de la fonte.",
    priceXAF: 35000,
    material: 'Bronze fondu à la cire perdue',
    origin: 'Foumban, Cameroun',
    height: 'Tailles 52 à 64',
    featured: false,
  },
  {
    id: 've-01',
    slug: 'boubou-brode-indigo',
    category: 'vetements',
    name: 'Boubou Brodé Indigo Royal',
    shortDescription: 'Grand boubou en indigo profond, broderies traditionnelles au col.',
    description:
      "Taillé dans un tissu teint à l'indigo — l'une des teintes traditionnelles associées à la royauté bamoun — ce grand boubou est brodé à la main au niveau du col et des manches. Une pièce d'apparat pensée pour les grandes occasions, cérémonies et fêtes culturelles.",
    priceXAF: 68000,
    material: 'Coton teint à l\'indigo, broderie main',
    origin: 'Foumban, Cameroun',
    height: 'Tailles S à XXL',
    featured: true,
  },
  {
    id: 've-02',
    slug: 'chechia-brodee-or',
    category: 'vetements',
    name: 'Chéchia Brodée Fil d\'Or',
    shortDescription: 'Coiffe cylindrique brodée, assortie aux tenues d\'apparat.',
    description:
      "Coiffée par les notables lors des cérémonies officielles, cette chéchia est brodée de fil doré sur une base de velours sombre. Elle complète traditionnellement les boubous d'apparat portés lors des grandes fêtes du royaume.",
    priceXAF: 24000,
    material: 'Velours, broderie fil doré',
    origin: 'Foumban, Cameroun',
    height: 'Taille unique ajustable',
    featured: false,
  },
  {
    id: 've-03',
    slug: 'tenue-ceremonie-ocre',
    category: 'vetements',
    name: 'Tenue de Cérémonie Ocre & Blanc Cassé',
    shortDescription: 'Ensemble deux pièces aux teintes de terre, motifs tissés.',
    description:
      "Cet ensemble deux pièces marie l'ocre rouge et le blanc cassé, teintes tirées des terres et argiles de la région de l'Ouest camerounais. Les motifs tissés au niveau du buste évoquent les bas-reliefs muraux qui ornent les façades des concessions royales de Foumban.",
    priceXAF: 75000,
    material: 'Coton tissé, teintures naturelles',
    origin: 'Foumban, Cameroun',
    height: 'Tailles S à XXL',
    featured: false,
  },
]

export function getProductsByCategory(slug) {
  return PRODUCTS.filter((p) => p.category === slug)
}

export function getProductBySlug(slug) {
  return PRODUCTS.find((p) => p.slug === slug)
}

export function getFeaturedProducts() {
  return PRODUCTS.filter((p) => p.featured)
}
