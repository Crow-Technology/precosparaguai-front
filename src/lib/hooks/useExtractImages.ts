import { IBanner, IBannerGroup } from '../types/ui.types';

export const useExtractImages = (
    imageGroup: IBannerGroup[] | IBannerGroup[][] | undefined,
    sizeCondition: boolean
) => {
    if (!imageGroup) return [];

    const extract = (group: IBannerGroup[]) => {
        return group
            ?.map((banner) => {
                const { lg, sm } = banner.images;

                if (sizeCondition) {
                    return Array.isArray(sm) ? [...sm] : [sm];
                }

                return Array.isArray(lg) ? [...lg] : [lg];
            })
            .flat();
    };

    if (Array.isArray(imageGroup[0])) {
        const imageMatrix = imageGroup as IBannerGroup[][];
        return [...imageMatrix.map((group) => extract(group))];
    }

    return extract(imageGroup as IBannerGroup[]);
};
