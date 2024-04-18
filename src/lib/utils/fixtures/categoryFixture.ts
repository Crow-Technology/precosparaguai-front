import { createFixture } from './createFixture';
import { ICategory } from '@/lib/types/product.types';
import { v4 as uuidv4 } from 'uuid';
import {
    iconAudio,
    iconBeleza,
    iconGames,
    iconInformatica,
    iconKids,
    iconMobile,
    iconSmartwatch,
    iconVinhos,
} from '../images/categories';

const categoryFixture = createFixture<ICategory>({} as ICategory);

export const CategoryFactory = categoryFixture.createCollection([
    {
        _id: uuidv4(),
        title: 'Electronics',
        icon: iconAudio.src,
        subcategories: {
            TVs: ['Samsung TV', 'LG TV', 'Sony TV'],
            Cameras: ['Canon Camera', 'Nikon Camera'],
            SmartWatches: ['Apple Watch', 'Samsung Watch'],
        },
    },
    {
        _id: uuidv4(),
        title: 'Phones',
        icon: iconMobile.src,
        subcategories: {
            Apple: ['iPhone 13', 'iPhone 12', 'iPhone SE'],
            Samsung: ['Galaxy S21', 'Galaxy S20', 'Galaxy A52'],
            Google: ['Pixel 6', 'Pixel 5a'],
        },
    },
    {
        _id: uuidv4(),
        title: 'Computers',
        icon: iconInformatica.src,
        subcategories: {
            Laptops: ['Apple MacBook Pro', 'Dell XPS', 'HP Spectre'],
            Desktops: ['Apple iMac', 'Dell Inspiron', 'HP Pavilion'],
        },
    },
    {
        _id: uuidv4(),
        title: 'Accessories',
        icon: iconSmartwatch.src,
        subcategories: {
            Headphones: ['Sony WH-1000XM4', 'Bose QuietComfort 35 II'],
            Keyboards: ['Logitech G Pro', 'Razer Huntsman'],
            Mouse: ['Logitech MX Master 3', 'Razer DeathAdder V2'],
        },
    },
    {
        _id: uuidv4(),
        title: 'Beleza',
        icon: iconBeleza.src,
        subcategories: {
            Maquiagem: ['Batom', 'Rímel', 'Base'],
            Cuidados: ['Shampoo', 'Condicionador', 'Creme'],
            Perfumes: ['Masculino', 'Feminino'],
        },
    },
    {
        _id: uuidv4(),
        title: 'Vinhos',
        icon: iconVinhos.src,
        subcategories: {
            Tintos: ['Cabernet Sauvignon', 'Merlot', 'Malbec'],
            Brancos: ['Chardonnay', 'Sauvignon Blanc', 'Riesling'],
            Espumantes: ['Champagne', 'Prosecco', 'Cava'],
        },
    },
    {
        _id: uuidv4(),
        title: 'Kids',
        icon: iconKids.src,
        subcategories: {
            Brinquedos: ['Bonecas', 'Carrinhos', 'Jogos'],
        },
    },
    {
        _id: uuidv4(),
        title: 'Games',
        icon: iconGames.src,
        subcategories: {
            PS5: ['Spiderman', 'Ratchet & Clank'],
            Xbox: ['Halo', 'Forza Horizon'],
            Switch: ['Zelda', 'Mario Kart'],
        },
    },
]);
