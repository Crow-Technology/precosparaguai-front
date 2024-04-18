import { IBannerGroup } from '../types/ui.types';

export const useExtractImages = (
    imageGroup: IBannerGroup[] | undefined,
    sizeCondition: boolean
) => {
    return imageGroup
        ?.reduce((acc: string[], banner) => {
            const { lg, sm } = banner.images;

            if (sizeCondition) {
                return Array.isArray(sm) ? [...sm] : [sm];
            }

            return Array.isArray(lg) ? [...lg] : [lg];
        }, [] as string[])
        .flat();
};
