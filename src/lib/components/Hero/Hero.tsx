import React from 'react';

// import {
//     SemanaDoConsumidor,
//     CategorySection,
//     HeroSection,
//     MultiBannerSection,
// } from '@/lib/components/Sections';

import {
    HeroSection,
    MultiBannerSection,
    CategorySection,
    SemanaDoConsumidor,
} from '@/lib/components/Sections';

import { BannerProvider } from '@/lib/store/context/BannerContext';
import { ProductSection } from '@/lib/components/Sections/Products';
import { OfertaSection } from '../Sections/OfertaSection';
import { ReleasesSection } from '../Sections/ReleasesSection';
import { InteriorSection } from '../Sections/InteriorSection';
import { ServicesSection } from '../Sections/ServicesSection';
import { BrandSection } from '../Sections/BrandSection';

const Hero = () => {
    return (
        <BannerProvider>
            <HeroSection />
            <div className="ease container flex flex-col pb-8 transition-all duration-300 md:px-4">
                <SemanaDoConsumidor />
                <CategorySection />
                <MultiBannerSection />

                {/* PRODUCTS */}
                <ProductSection title="Destaques" />
                <ProductSection title="Produtos Patrocinados" />
                <ProductSection title="Acabaram de chegar para você" />
                <ProductSection title="Ofertas Especiais" />

                <OfertaSection />
                <ReleasesSection />

                <ProductSection title="Mais Vistos" />
                <ProductSection title="Produtos patrocinados" />

                <InteriorSection />

                <ProductSection title="Mais Vistos" />
                <ProductSection title="Produtos patrocinados" />

                <ServicesSection />
                <BrandSection />
            </div>
        </BannerProvider>
    );
};

export default Hero;
