import { BannerProviderData, IGroupedBanners } from '@/lib/types/ui.types';
import React from 'react';

interface IBannerProps {
    bannerData: Partial<IGroupedBanners>;
    BannerContent:
        | React.JSX.Element
        | React.Component<Partial<IGroupedBanners>>
        | any;
}

const Banner = ({ bannerData, BannerContent }: IBannerProps) => {
    return <BannerContent data={bannerData} />;
};

export default Banner;
