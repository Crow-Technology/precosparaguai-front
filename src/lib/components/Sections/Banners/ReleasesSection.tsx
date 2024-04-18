import { useBannerContext } from '@/lib/store/context/BannerContext';
import { Slider } from '../../shared';
import React from 'react';

interface IProps {}

export const ReleasesSection = ({}: IProps) => {
    const { BannerGroupBy } = useBannerContext();

    const { full } = BannerGroupBy('lancamentos');

    return (
        <section className="mt-4 px-4">
            <div className="container">
                <Slider
                    variant="full"
                    imageClasses="rounded-xl"
                    images={
                        (full &&
                            Array.isArray(full) &&
                            full.map((banner) => banner.image)) ||
                        []
                    }
                    options={{
                        gap: '0.75rem',
                        autoplay: true,
                        fixedHeight: '300px',
                        pagination: true,
                    }}
                />
            </div>
        </section>
    );
};
