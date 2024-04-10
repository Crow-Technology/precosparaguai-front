
import React, { createContext, useContext } from 'react';
import { PageLoader } from '@/lib/components/shared';
import { Suspense } from 'react';
import { IBanner, IGroupedBanners, BannerSections } from '@/lib/types/ui.types';
import { useMediaQuery } from 'react-responsive';
import { getBanners } from '@/actions/banners';

interface IBannerContext {
    banners: IBanner[];
    BannerGroupBy: (section: BannerSections) => Partial<IGroupedBanners>;
}

const BannerContext = createContext<IBannerContext | undefined>(undefined);

export const useBannerContext = () => {
    const context = useContext(BannerContext);

    if (!context) {
        throw new Error(
            'useBannerContext must be used within a BannerProvider'
        );
    }

    return context;
};

export const BannerProvider = async ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const isMobile = useMediaQuery({ query: '(max-width:520px)' });
    const banners = await getBanners();

    const BannerGroupBy = (
        section: BannerSections
    ): Partial<IGroupedBanners> => {
        return banners.reduce((acc: IGroupedBanners, banner: IBanner) => {
            if (banner.pageSection === section) {
                const image = isMobile ? banner.images.sm : banner.images.lg;

                return {
                    ...acc,
                    [banner.pos]: [
                        ...(acc[banner.pos] || []),
                        { ...banner, image },
                    ],
                };
            }

            return acc;
        }, {} as IGroupedBanners);
    };

    return (
        <Suspense fallback={<PageLoader />}>
            <BannerContext.Provider value={{ banners, BannerGroupBy }}>
                {children}
            </BannerContext.Provider>
        </Suspense>
    );
};
