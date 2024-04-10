import { v4 as uuidv4 } from 'uuid';
import { createFixture } from './createFixture';

import Brastemp_brand from '@/../public/assets/Brastemp_Brand.png';
import Electrolux_brand from '@/../public/assets/Electrolux_brand.png';
import JBL_brand from '@/../public/assets/JBL_brand.png';
import Nespresso_brand from '@/../public/assets/Nespresso_brand.png';
import samsung_brand from '@/../public/assets/samsung_brand.png';
import { IBrand } from '@/lib/types/company.types';

const brandFixcture = createFixture<IBrand>({} as IBrand);

export const BrandFactory = brandFixcture.createCollection([
    {
        _id: uuidv4(),
        icon: Brastemp_brand.src,
        title: 'Brastemp',
    },
    {
        _id: uuidv4(),
        icon: Electrolux_brand.src,
        title: 'Electrolux',
    },
    {
        _id: uuidv4(),
        icon: JBL_brand.src,
        title: 'JBL',
    },
    {
        _id: uuidv4(),
        icon: Nespresso_brand.src,
        title: 'Nespresso',
    },
    {
        _id: uuidv4(),
        icon: samsung_brand.src,
        title: 'Samsung',
    },
]);
