'use client';

import React from 'react';
import { useBannerContext } from '@/lib/store/context/BannerContext';
import { Button } from '../shared';
import Image from 'next/image';
import { Slider } from '../Slider';
import { useMediaQuery } from 'react-responsive';
import Link from 'next/link';

export const MultiBannerSection = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 520px)' });
    const { BannerGroupBy } = useBannerContext();

    const bannerGroup = BannerGroupBy('multibanner');
    const { full, left, right } = bannerGroup;

    const MultiBannerSlider = [...(left ?? []), ...(right ?? [])].map(
        (banner) => banner.image
    );

    return (
        <section>
            <div className="container">
                <div className="relative flex h-fit w-full flex-col items-center">
                    {full?.map(({ _id, image, image_alt }) => (
                        <Link
                            className="mb-0 block  h-auto w-full px-0 md:mb-0"
                            href="#"
                        >
                            <Image
                                key={_id}
                                src={image}
                                alt={image_alt}
                                loading="lazy"
                                className="w-full rounded-xl object-cover drop-shadow-md"
                                width={isMobile ? 320 : 1920}
                                height={isMobile ? 600 : 600}
                            />
                        </Link>
                    ))}
                </div>
                <div className="banner-grid lg-mt-0 relative -mt-2">
                    {isMobile ? (
                        <Slider
                            variant="full"
                            imageClasses="rounded-xl"
                            images={MultiBannerSlider}
                            options={{
                                gap: '0.75rem',
                                autoplay: true,
                                fixedHeight: '300px',
                            }}
                        />
                    ) : (
                        <div className="left-section flex w-full items-center justify-center">
                            <Image
                                src={left?.[0]?.image || ''}
                                alt={left?.[0]?.image_alt || ''}
                                height={600}
                                width={1280}
                                className=" w-full rounded-xl object-cover"
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
