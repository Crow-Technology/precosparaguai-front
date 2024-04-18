import { BannerSection, IBanner, IGroupedBanners } from '../types/ui.types';

export const BannerGroupBy = (
    section: BannerSection,
    banners: IBanner[]
): Partial<IGroupedBanners> => {
    return banners.reduce((acc: IGroupedBanners, banner) => {
        if (banner.pageSection === section) {
            return {
                ...acc,
                [banner.pos]: [
                    ...(acc[banner.pos] || []),
                    { ...banner, images: banner.images },
                ],
            };
        }

        return acc;
    }, {} as IGroupedBanners);
};
