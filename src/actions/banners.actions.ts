'use server';

import { BannerSections, IBanner, PositionOptions } from '@/lib/types/ui.types';
import { SemanaDoConsumidorFixture } from '@/lib/utils/fixtures/BannerFixture';

export async function getBanners(): Promise<IBanner[]> {
    try {
        const banners = SemanaDoConsumidorFixture;

        return banners;
    } catch (error: unknown) {
        console.error(error);

        return [] as IBanner[];
    }
}
