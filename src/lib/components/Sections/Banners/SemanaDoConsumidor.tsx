import React from 'react';
import Image from 'next/image';
import { Slider } from '@/lib/components/shared/Slider';
import { useMediaQuery } from 'react-responsive';
import { IGroupedBanners } from '@/lib/types/ui.types';
import { useExtractImages } from '@/lib/hooks';

type SemanaDoConsumidorProps = Partial<IGroupedBanners>;

export const SemanaDoConsumidor = ({
    left,
    right,
}: SemanaDoConsumidorProps) => {
    const isMobile = useMediaQuery({ query: '(max-width: 520px)' });

    const imagesLeft = useExtractImages(left, isMobile);
    const imagesRight = useExtractImages(right, isMobile);

    return (
        <section className="container relative mt-0 flex justify-between lg:container lg:mt-5">
            <div className="grid w-full grid-cols-4 grid-rows-1 justify-between lg:grid-rows-1 ">
                <div className="relative col-span-4 row-span-1 h-full w-full justify-between  sm:px-0 lg:col-span-3 ">
                    <Slider
                        variant="full"
                        images={imagesLeft
                            ?.toReversed()
                            .map((banner) => banner)}
                        progress={true}
                        options={{
                            fixedHeight: isMobile ? '480px' : '600px',
                            gap: '0rem',
                            autoplay: false,
                        }}
                        imageClasses="lg:rounded-xl object-cover "
                    />
                </div>
                <div className="relative col-span-4 row-span-2 mt-4 w-full justify-self-center lg:col-span-1 lg:row-span-1 lg:mt-0 lg:justify-self-end">
                    <Image
                        src={imagesRight?.[0] || ''}
                        alt="aside banner"
                        objectFit="contain"
                        loading="lazy"
                        className="ml-auto w-full rounded-xl object-cover lg:h-[600px]"
                        width={isMobile ? 320 : 1920}
                        height={isMobile ? 420 : 500}
                    />
                </div>
            </div>
        </section>
    );
};
