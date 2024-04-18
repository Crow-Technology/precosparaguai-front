import { Options } from '@splidejs/react-splide';
import { StaticImageData } from 'next/image';
import { ICategory, IProduct } from './product.types';
import { IBrand } from './company.types';
import { _internal_ComponentDescription } from '@headlessui/react/dist/components/description/description';

// SLIDER TYPES
export type sliderVariant = 'products' | 'banner' | 'full';

export interface ISliderProps {
    variant: sliderVariant;
    products?: IProduct[];
    items?: ICategory[] | IBrand[];
    images?: StaticImageData[] | string[];
    options?: Options;
    progress?: boolean;
    imageClasses?: string;
}

export interface IFullSliderProps extends Partial<ISliderProps> {
    images: StaticImageData[] | string[];
    progress?: boolean;
    options?: Options;
    imageClasses?: string;
}

export interface IProductSliderProps extends Partial<ISliderProps> {
    options?: Options;
    products?: IProduct[];
    items?: ICategory[] | IBrand[];
}

export type PositionOptions = 'left' | 'right' | 'top' | 'bottom' | 'full';
export type BannerVariants = 'lg' | 'sm';

export const BannerSectionsList = [
    'semana_consumidor',
    'hero',
    'categorias',
    'multibanner',
    'ofertas',
    'lancamentos',
    'interior',
    'services',
] as const;

export type BannerSectionsTuple = typeof BannerSectionsList;
export type BannerSection = BannerSectionsTuple[number];

export type BannerProviderData = Record<
    BannerSection,
    Partial<IGroupedBanners>
>;

export interface IBanner {
    _id: string;
    companyId: string;
    pos: PositionOptions;
    images: Record<BannerVariants, string> | Record<BannerVariants, string[]>;
    image_alt: string;
    image_href?: string;
    pageSection: BannerSection;
}

export interface IBannerGroup {
    images: Record<BannerVariants, string> | Record<BannerVariants, string[]>;
}

export type IGroupedBanners = Record<PositionOptions, IBannerGroup[]>;
