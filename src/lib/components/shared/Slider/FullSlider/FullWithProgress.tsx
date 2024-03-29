import React, { useCallback, useState } from 'react';
import {
    Splide,
    SplideTrack,
    SplideSlide,
    SplideProps,
} from '@splidejs/react-splide';
import { IFullSliderProps } from '@/lib/types/ui.types';
import Image from 'next/image';
import { SliderProgressBar } from './styles';
import { cn } from '@/lib/styles/utils';

export const FullWithProgess = ({
    options,
    images,
    imageClasses,
}: IFullSliderProps & SplideProps) => {
    const [barIsMoving, setBarIsMoving] = useState<boolean>(true);
    const [barWidth, setBarWidth] = useState<number>(0);

    const handleProgressBar = useCallback(
        (length: number, index: number) => {
            const end = length;
            const rate = Math.min((index + 1) / end, 1);
            setBarWidth(100 * rate);
            setBarIsMoving(true);
        },
        [setBarIsMoving, setBarWidth]
    );

    return (
        <Splide
            hasTrack={false}
            options={options}
            onMounted={(spl) => {
                spl.on('move drag', (index) =>
                    handleProgressBar(spl.length, index)
                );
            }}
            onMoved={() => setBarIsMoving(false)}
            className="relative"
        >
            <SplideTrack>
                {images.map((image, key) => (
                    <SplideSlide className="relative" key={key}>
                        <Image
                            src={image}
                            alt={`image ${key}`}
                            fill={true}
                            loading="lazy"
                            className={cn(
                                'h-full w-full object-center',
                                imageClasses || ''
                            )}
                        />

                        <SliderProgressBar
                            $width={barWidth}
                            $isMoving={barIsMoving}
                        />
                    </SplideSlide>
                ))}
            </SplideTrack>
        </Splide>
    );
};
