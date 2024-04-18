import React from 'react';
import { useBannerContext } from '@/lib/store/context/BannerContext';
import Image from 'next/image';
import { Slider } from '@/lib/components/shared';
import { useMediaQuery } from 'react-responsive';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { IBanner } from '@/lib/types/ui.types';

export const MultiBannerSection = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 520px)' });
    const { BannerGroupBy } = useBannerContext();

    const { full, left, right } = BannerGroupBy('multibanner');
    const lastBanner = (full ?? [])[(full ?? []).length - 1] ?? {};

    const MultiBannerSlider = [...(left ?? []), ...(right ?? [])].map(
        (banner) => banner.image
    );

    return (
        <section className="overflow-x-hidden">
            <div className="container ">
                <div className="relative flex h-fit w-full flex-col items-center">
                    {full
                        ?.splice(0, full.length - 1)
                        ?.map(({ _id, image, image_alt }) => (
                            <Link
                                className="mb-0 block  h-auto w-full px-0 md:mb-0"
                                href="#"
                            >
                                <Image
                                    key={_id}
                                    src={image}
                                    alt={image_alt}
                                    loading="lazy"
                                    className="w-full rounded-xl object-cover"
                                    width={isMobile ? 320 : 1920}
                                    height={isMobile ? 600 : 600}
                                />
                            </Link>
                        ))}
                </div>
                <div className="banner-grid lg-mt-0 relative -mt-2 lg:mt-2">
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
                <div className="relative mt-4  flex h-fit w-full flex-col items-center ">
                    <Link
                        className="mb-0 block  h-auto w-full px-0 md:mb-0"
                        href="#"
                    >
                        <Image
                            src={lastBanner.image}
                            alt={lastBanner.image_alt}
                            loading="lazy"
                            className="w-full rounded-xl object-cover"
                            width={isMobile ? 320 : 1920}
                            height={isMobile ? 600 : 600}
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
};
