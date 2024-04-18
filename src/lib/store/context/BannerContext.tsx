'use client';

import React, {
    createContext,
    PropsWithChildren,
    useContext,
    useEffect,
    useState,
} from 'react';
import { IBanner, IGroupedBanners, BannerSection } from '@/lib/types/ui.types';
import { useMediaQuery } from 'react-responsive';
import { getBanners } from '@/actions/banners.actions';

interface IBannerContext {
    banners: IBanner[];
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

export const BannerProvider = ({ children }: PropsWithChildren) => {
    const isMobile = useMediaQuery({ query: '(max-width:520px)' });
    const [banners, setBanners] = useState<IBanner[]>([{}] as IBanner[]);

    useEffect(() => {
        const fetchBanners = async () => {
            const data = await getBanners();

            setBanners(data);
        };

        fetchBanners();
    }, [setBanners]);

    useEffect(() => {
        if (banners.length) {
            console.log('banners', banners);
        }
    }, [banners]);

    return (
        <BannerContext.Provider value={{ banners }}>
            {children}
        </BannerContext.Provider>
    );
};
