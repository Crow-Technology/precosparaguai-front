import { getBanners } from '@/actions/banners.actions';
import Banner from '@/lib/components/Banner';
import {
    BrandSection,
    CategorySection,
    HeroSection,
    InteriorSection,
    MultiBannerSection,
    OfertaSection,
    ProductSection,
    ReleasesSection,
    SemanaDoConsumidor,
    ServicesSection,
} from '@/lib/components/Sections/Banners';
import Layout from '@/lib/layout';
import { BuildProviderConfig } from '@/lib/utils/config/BannerConfig';
import type { InferGetStaticPropsType, NextPage } from 'next';

export default function Home({
    banners,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <Layout>
            <HeroSection />

            <div className="ease container flex flex-col pb-8 transition-all duration-300 md:px-4">
                <Banner
                    bannerData={banners['semana_consumidor']}
                    BannerContent={SemanaDoConsumidor}
                />
                {/* <SemanaDoConsumidor /> */}

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
        </Layout>
    );
}

export async function getStaticProps() {
    const bannerData = await getBanners();
    // add products here

    return {
        props: {
            banners: BuildProviderConfig(bannerData),
        },
    };
}
