import {
    IBanner,
    BannerSectionsList,
    BannerSection,
    BannerProviderData,
} from '@/lib/types/ui.types';
import { BannerGroupBy } from '../grouping';

export const BuildProviderConfig = (banners: IBanner[]): BannerProviderData => {
    return BannerSectionsList.reduce(
        (acc: BannerProviderData, section: BannerSection) => {
            return {
                ...acc,
                [section]: BannerGroupBy(section, banners),
            };
        },
        {} as BannerProviderData
    );
};
