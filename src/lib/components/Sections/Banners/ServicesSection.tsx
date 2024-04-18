import { useBannerContext } from '@/lib/store/context/BannerContext';
import Image from 'next/image';
import React from 'react';

export const ServicesSection = () => {
    const { BannerGroupBy } = useBannerContext();

    const { full } = BannerGroupBy('services');

    return (
        <section className="mt-4 px-4">
            <div className="container">
                {full &&
                    Array.isArray(full) &&
                    full.map(({ _id, image, image_alt }) => (
                        <Image
                            key={_id}
                            src={image}
                            alt={image_alt}
                            loading="lazy"
                            className="w-full rounded-xl object-cover"
                            width={1920}
                            height={600}
                        />
                    ))}
            </div>
        </section>
    );
};
