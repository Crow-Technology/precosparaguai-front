import { Options } from '@splidejs/react-splide';
import { StaticImageData } from 'next/image';
import { ICategory, IProduct } from './product.types';
import { IBrand } from '../utils/fixtures/BrandsFixture';

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

export type BannerSections =
    | 'semana_consumidor'
    | 'hero'
    | 'categorias'
    | 'multibanner'
    | 'ofertas'
    | 'lancamentos'
    | 'interior'
    | 'services';

export interface IBanner {
    _id: string;
    companyId: string;
    pos: PositionOptions;
    images: Record<BannerVariants, string> | Record<BannerVariants, string[]>;
    image_alt: string;
    image_href?: string;
    pageSection: BannerSections;
}

export interface IBannerGroup extends IBanner {
    image: string;
}

export type IGroupedBanners = Record<PositionOptions, IBannerGroup[]>;
