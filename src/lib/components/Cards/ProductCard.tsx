import React from 'react';
import { IProduct } from '@/lib/interfaces';
import Image from 'next/image';
import { Stars } from '@/lib/components';
import { useCalculateAverageRating } from '@/lib/hooks';
import { HeartIcon } from 'lucide-react';
import { Button } from '@/lib/components/shared';
import Link from 'next/link';

interface IProductCardProps {
    item: IProduct;
}

export const ProductCard = ({ item }: IProductCardProps) => {
    const averageRate = useCalculateAverageRating({ ...item.rating });

    return (
        <div className="card relative flex h-[520px] w-64 border-spacing-2 flex-col items-center justify-around -space-x-2 border bg-white pt-8 shadow-sm ">
            <div className="absolute right-0 top-0 z-10 flex flex-row-reverse items-center">
                <Button
                    variant="link"
                    Icon={HeartIcon}
                    className=" text-red-600"
                />
                <Link
                    className="badge  mr-auto block text-xs hover:badge-accent"
                    href="#"
                >
                    #{item.category}
                </Link>
            </div>
            <Link className="flex flex-col" href="#">
                <figure className="relative mx-auto  block h-40 w-full">
                    <Image
                        className="m-auto max-h-full min-w-full rounded-t-lg object-contain p-6"
                        src={item.image}
                        alt={item.title}
                        width={200}
                        height={200}
                        loading="lazy"
                    />
                </figure>
                <div className="divider px-3.5"></div>
                <div
                    className="card-body m-0 flex items-center justify-between py-3 "
                    style={{ flex: '1 1 300px' }}
                >
                    <h6 className="card-title mx-auto line-clamp-2 block h-10 text-ellipsis  text-center text-sm font-normal">
                        {item.title}
                    </h6>
                    <div className=" mt-2 flex flex-col items-center justify-center">
                        <div className="card-actions flex flex-col items-center justify-center">
                            <span className="base-content block text-sm text-gray-400 line-through">
                                $799
                            </span>
                            <span className="base-content -mt-1 block text-2xl font-bold text-success">
                                $599 <span className="text-sm">No pix</span>
                            </span>
                        </div>
                        <div className="mt-5">
                            <p className="text-center text-xs text-gray-400">
                                <strong>R$&nbsp;4.369,00</strong> à vista ou em
                                até <br />{' '}
                                <strong>12x de R$&nbsp;400,30</strong> iguais no
                                cartão{' '}
                            </p>
                        </div>
                    </div>
                    <div className="card-footer my-8 flex flex-col items-center">
                        <div className="flex items-center">
                            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                <Stars averageRate={averageRate} />
                            </div>
                            <span className="ms-3 rounded bg-base-300 px-2.5 py-0.5 text-xs font-semibold text-base-content">
                                {averageRate}
                            </span>
                        </div>
                        <span className="mt-2 block text-center text-[10px] text-gray-400">
                            *Juros de 1.49% a.m. e 19.42% a.a.
                        </span>
                        <span className="block text-center text-[10px] text-gray-400">
                            R$ 4.803,61
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    );
};
