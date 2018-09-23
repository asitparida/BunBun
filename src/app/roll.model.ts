export class BunBunRoll {
    name: string;
    img: string;
    description: string;
    ingredients: string;
    calories: number;
    glaze = 'none';
    units = 1;
    price = 2.99;
}
export const GlazeOptions = [
    { key: 'None', value: 'none' },
    { key: 'Vanilla Milk', value: 'vanilla-milk' },
    { key: 'Sugar Milk', value: 'sugar-milk' },
    { key: 'Double Choclate', value: 'double-choclate' }
];
export const UnitOptions = [
    { key: '1', value: 1 },
    { key: '3', value: 3 },
    { key: '6', value: 6 },
    { key: '12', value: 12 },
];
