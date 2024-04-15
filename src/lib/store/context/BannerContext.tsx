'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { IBanner, IGroupedBanners, BannerSections } from '@/lib/types/ui.types';
import { useMediaQuery } from 'react-responsive';
import { getBanners } from '@/actions/banners.actions';

interface IBannerContext {
    banners: IBanner[];
    BannerGroupBy: (section: BannerSections) => Partial<IGroupedBanners>;
    loading: boolean;
    error: string | null;
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
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const isMobile = useMediaQuery({ query: '(max-width:520px)' });
    const banners = await getBanners(); // server actions

    useEffect(() => {
        if (banners) {
            setLoading(false);
        }
    }, [banners]);

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
        <BannerContext.Provider value={{ banners, BannerGroupBy, loading, error }}>
            {children}
        </BannerContext.Provider>
    );
};
