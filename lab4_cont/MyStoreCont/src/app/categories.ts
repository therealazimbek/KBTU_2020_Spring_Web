export interface Category {
  id: number;
  name: string;
  active: boolean;
}

export const categories = [
  {
    id: 1,
    name: 'Programming Languages',
    active: false,
  },
  {
    id: 2,
    name: 'Frameworks',
    active: false,
  },
  {
    id: 3,
    name: 'Cloud',
    active: false,
  },
  {
    id: 4,
    name: 'Cybersecurity',
    active: false,
  },
];
