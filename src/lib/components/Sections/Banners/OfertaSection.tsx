import { useBannerContext } from '@/lib/store/context/BannerContext';
import Image from 'next/image';
import React from 'react';

interface IProps {}

export const OfertaSection = ({}: IProps) => {
    const { BannerGroupBy } = useBannerContext();

    const { full } = BannerGroupBy('ofertas');

    return (
        <section className="mt-4 px-4">
            <div className="container">
                <div className="left-section flex w-full items-center justify-center">
                    <Image
                        src={full?.[0]?.image || ''}
                        alt={full?.[0]?.image_alt || ''}
                        height={600}
                        width={1280}
                        className=" w-full rounded-xl object-cover"
                    />
                </div>
            </div>
        </section>
    );
};
