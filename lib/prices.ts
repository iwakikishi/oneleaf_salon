export type ServiceItem = {
  name: string;
  time: string;
  description: string[];
  price: string;
};

export type ServiceCategory = {
  name: string;
  description: string;
  icon: string;
  items: ServiceItem[];
};

// Prices in effect until October 31, 2026
export const currentServices: ServiceCategory[] = [
  {
    name: 'Cut & Style',
    description: 'Including shampoo and blow-dry',
    icon: '',
    items: [
      { name: 'Woman Haircut', time: '50 mins', description: ['Includes shampoo and blow dry'], price: '$115' },
      { name: 'Men Haircut', time: '45 mins', description: ['Includes shampoo and blow dry'], price: '$90' },
      { name: "Girl's Haircut (under 17)", time: '50 mins', description: ['Includes shampoo and blow dry'], price: '$105' },
      { name: "Boy's Haircut (under 17)", time: '40 mins', description: ['Includes shampoo and blow dry'], price: '$85' },
      { name: 'Bangs cut', time: '10 mins', description: [''], price: '$30' },
      { name: 'Blow Out (with shampoo)', time: '1 hr', description: [''], price: '$80' },
      { name: 'Updo', time: '1 hr', description: ['Private: $150 - $260+', 'Wedding hair: $260+'], price: '' },
    ],
  },
  {
    name: 'Color & Bleach',
    description: 'The price does not include the haircut',
    icon: 'hair_color',
    items: [
      {
        name: 'Root Touch Up (No Bleach)',
        time: '1 hr 30 mins',
        description: ['More than 2 inches $120+', 'Time: around 90 mins'],
        price: '$100',
      },
      {
        name: 'Full Color',
        time: '90 mins - 2 hrs',
        description: ['One color session / No bleach', 'Short: $155+', 'Medium: $175+', 'Long: $195+', 'Time: around 90 mins - 2 hours'],
        price: '',
      },
      {
        name: 'Toner Gross Color',
        time: '90 mins - 2 hrs',
        description: ['Short: $110+', 'Medium: $175+', 'Long: $195+', 'Time: around 90 mins - 2 hours'],
        price: '',
      },
      { name: 'Balayage No Bleach', time: '2 hrs - 150 mins', description: ['$260 - $330', 'Time: around 2 hours - 150 mins'], price: '' },
      {
        name: 'Balayage (Bleach and Tone)',
        time: '3 -5 hrs',
        description: ['Bleach and Tone', '$360 - $500+', 'Time: around 3 - 5 hours'],
        price: '',
      },
      {
        name: 'Bleach & Tone',
        time: '3 - 5 hrs',
        description: ['Short: $220+', 'Medium: $360+', 'Long: $500+', 'Time: around 3 - 5 hours'],
        price: '',
      },
      {
        name: 'Partial Highlight',
        time: '2 - 3 hrs',
        description: ['Partial* only front face framing, only top, etc', 'Cost: $260 - $330', 'Time: around 2 - 3 hours'],
        price: '',
      },
      {
        name: 'Full Highlight',
        time: '3 - 5 hrs',
        description: ['$360 - $500+', 'Time: around 3 - 5 hours'],
        price: '',
      },
    ],
  },
  {
    name: 'Perms & Straightening',
    description: 'The price does not include the haircut',
    icon: 'hair_perm',
    items: [
      { name: 'Cold Perm', time: '2 hrs', description: ['Short: $130+', 'Medium: $175+', 'Long: $195+', 'Time: around 2 hours'], price: '' },

      {
        name: 'Digital Perm',
        time: '2 hrs',
        description: ['No history of bleach hair', 'Short: $160+', 'Medium: $190+', 'Long: $260+', 'Time: around 2 hours'],
        price: '',
      },
      {
        name: 'Japanese Straightening',
        time: '3 hrs',
        description: ['Short: $290+', 'Touch up: $330 - $360+', 'Medium, Long: $420 - $500+', 'Time: around 3 hours'],
        price: '',
      },
      {
        name: 'Brazilian Keratin Hair Treatment',
        time: '2 hrs',
        description: ['Short: $220+', 'Medium: $330+', 'Long: $450+', 'Time: around 2 hours'],
        price: '',
      },
    ],
  },
  {
    name: 'Makeup',
    description: '',
    icon: 'makeup',
    items: [
      { name: 'Make up', time: '1 hr 30 mins', description: ['wedding $250+'], price: '' },
      { name: 'Make up teaching lesson', time: '1 hr', description: [''], price: '$150' },
      // { name: 'Party Makeup', time: '1 hr 30 mins', description: [''], price: '$150+' },
      // { name: 'Bridal Makeup', time: '1 hr 30 mins', description: [''], price: '$200+' },
    ],
  },
  {
    name: 'Head Spa',
    description: '',
    icon: '',
    items: [
      { name: 'Head Spa (original) 20 mins no blow dry', time: '25 mins', description: ['No waterfall'], price: '$55' },
      { name: 'Head Spa (original) 20 mins with blow dry', time: '1 hr', description: ['No waterfall'], price: '$110' },
      { name: 'Head Spa (original) 40 mins no blow dry', time: '45 mins', description: ['No waterfall'], price: '$100' },
      { name: 'Head Spa (original) 40 mins with blow dry', time: '1 hr', description: ['No waterfall'], price: '$155' },
      { name: 'New! Zen Head Spa 30 mins no blow dry', time: '35 mins', description: ['Waterfall Head Spa'], price: '$80' },
      { name: 'New! Zen Head Spa 30 mins with blow dry', time: '1 hr', description: ['Waterfall Head Spa'], price: '$135' },
      { name: 'New! Zen Head Spa 50 mins no blow dry', time: '1 hr', description: ['Waterfall Head Spa'], price: '$125' },
      { name: 'New! Zen Head Spa 50 mins with blow dry', time: '1 hr and 20 mins', description: ['Waterfall Head Spa'], price: '$180' },
      {
        name: 'Deep treatment Milbon',
        time: '20 mins',
        description: ['Blow dry and styling are NOT included', 'Add other menu or add blow dry +$50)'],
        price: '$55',
      },
    ],
  },
];

// Prices effective November 1, 2026
export const newServices: ServiceCategory[] = [
  {
    name: 'Cut & Style',
    description: 'Including shampoo and blow-dry',
    icon: '',
    items: [
      { name: 'Woman Haircut', time: '50 mins', description: ['Includes shampoo and blow dry'], price: '$125' },
      { name: 'Men Haircut', time: '45 mins', description: ['Includes shampoo and blow dry'], price: '$95' },
      { name: "Girl's Haircut (under 17)", time: '50 mins', description: ['Includes shampoo and blow dry'], price: '$115' },
      { name: "Boy's Haircut (under 17)", time: '40 mins', description: ['Includes shampoo and blow dry'], price: '$90' },
      { name: 'Bangs cut', time: '10 mins', description: [''], price: '$35' },
      { name: 'Blow Out (with shampoo)', time: '1 hr', description: [''], price: '$85' },
      { name: 'Updo', time: '1 hr', description: ['Private: $160 - $280+', 'Wedding hair: $280+'], price: '' },
    ],
  },
  {
    name: 'Color & Bleach',
    description: 'The price does not include the haircut',
    icon: 'hair_color',
    items: [
      {
        name: 'Root Touch Up (No Bleach)',
        time: '1 hr 30 mins',
        description: ['More than 2 inches $130+', 'Time: around 90 mins'],
        price: '$110',
      },
      {
        name: 'Full Color',
        time: '90 mins - 2 hrs',
        description: ['One color session / No bleach', 'Short: $165+', 'Medium: $185+', 'Long: $205+', 'Time: around 90 mins - 2 hours'],
        price: '',
      },
      {
        name: 'Toner Gross Color',
        time: '90 mins - 2 hrs',
        description: ['Short: $165+', 'Medium: $185+', 'Long: $205+', 'Time: around 90 mins - 2 hours'],
        price: '',
      },
      { name: 'Balayage No Bleach', time: '2 hrs - 150 mins', description: ['$280 - $350+', 'Time: around 2 hours - 150 mins'], price: '' },
      {
        name: 'Balayage (Bleach and Tone)',
        time: '3 -5 hrs',
        description: ['Bleach and Tone', '$380 - $500+', 'Time: around 3 - 5 hours'],
        price: '',
      },
      {
        name: 'Bleach & Tone',
        time: '3 - 5 hrs',
        description: ['Short: $250+', 'Medium: $380+', 'Long: $500+', 'Time: around 3 - 5 hours'],
        price: '',
      },
      {
        name: 'Partial Highlight',
        time: '2 - 3 hrs',
        description: ['Partial* only front face framing, only top, etc', 'Cost: $280 - $350+', 'Time: around 2 - 3 hours'],
        price: '',
      },
      {
        name: 'Full Highlight',
        time: '3 - 5 hrs',
        description: ['$380 - $500+', 'Time: around 3 - 5 hours'],
        price: '',
      },
    ],
  },
  {
    name: 'Perms & Straightening',
    description: 'The price does not include the haircut',
    icon: 'hair_perm',
    items: [
      { name: 'Cold Perm', time: '2 hrs', description: ['Short: $150+', 'Medium: $195+', 'Long: $205+', 'Time: around 2 hours'], price: '' },

      {
        name: 'Digital Perm',
        time: '2 hrs',
        description: ['No history of bleach hair', 'Short: $180+', 'Medium: $210+', 'Long: $280+', 'Time: around 2 hours'],
        price: '',
      },
      {
        name: 'Japanese Straightening',
        time: '3 hrs',
        description: ['Short: $310+', 'Touch up: $350+', 'Medium, Long: $450+', 'Time: around 3 hours'],
        price: '',
      },
      {
        name: 'Brazilian Keratin Hair Treatment',
        time: '2 hrs',
        description: ['Short: $250+', 'Medium: $330+', 'Long: $450+', 'Time: around 2 hours'],
        price: '',
      },
    ],
  },
  {
    name: 'Makeup',
    description: '',
    icon: 'makeup',
    items: [
      { name: 'Make up', time: '1 hr 30 mins', description: ['wedding $280+'], price: '' },
      { name: 'Make up teaching lesson', time: '1 hr', description: [''], price: '$160+' },
      // { name: 'Party Makeup', time: '1 hr 30 mins', description: [''], price: '$150+' },
      // { name: 'Bridal Makeup', time: '1 hr 30 mins', description: [''], price: '$200+' },
    ],
  },
  {
    name: 'Head Spa',
    description: '',
    icon: '',
    items: [
      { name: 'Head Spa (original) 20 mins no blow dry', time: '25 mins', description: ['No waterfall'], price: '$60' },
      { name: 'Head Spa (original) 20 mins with blow dry', time: '1 hr', description: ['No waterfall'], price: '$115' },
      { name: 'Head Spa (original) 40 mins no blow dry', time: '45 mins', description: ['No waterfall'], price: '$105' },
      { name: 'Head Spa (original) 40 mins with blow dry', time: '1 hr', description: ['No waterfall'], price: '$160' },
      { name: 'New! Zen Head Spa 30 mins no blow dry', time: '35 mins', description: ['Waterfall Head Spa'], price: '$85' },
      { name: 'New! Zen Head Spa 30 mins with blow dry', time: '1 hr', description: ['Waterfall Head Spa'], price: '$140' },
      { name: 'New! Zen Head Spa 50 mins no blow dry', time: '1 hr', description: ['Waterfall Head Spa'], price: '$130' },
      { name: 'New! Zen Head Spa 50 mins with blow dry', time: '1 hr and 20 mins', description: ['Waterfall Head Spa'], price: '$185' },
      {
        name: 'Deep treatment Milbon',
        time: '20 mins',
        description: ['Blow dry and styling are NOT included', 'Add other menu or add blow dry +$60'],
        price: '$60',
      },
      { name: 'Add blow out for spa or treatment', time: '', description: [''], price: '$60' },
    ],
  },
];
