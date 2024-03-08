'use client';

import React, { useState } from 'react';

import { ICategories } from '@/lib/interfaces';
import { useGetProductCategories } from '@/lib/hooks/products';
import { Subdrawer } from './Subdrawer';
import { Quotation } from '../Currency';
import { SidebarCloseIcon } from 'lucide-react';
import { Button } from '../shared';
import { useMediaQuery } from 'react-responsive';

export const Drawer = () => {
    const isMobile = useMediaQuery({
        query: '(max-width: 480px)',
    });
    const { categories, isLoading } = useGetProductCategories();
    const [currentCategory, setCurrentCategory] = useState<
        ICategories | undefined
    >(undefined);

    const handleSelectSubCategory = (
        e: React.MouseEvent<HTMLLabelElement, MouseEvent>
    ) => {
        setCurrentCategory(
            categories.find((item) => item._id === e.currentTarget.dataset.id)
        );
    };

    return (
        <>
            <div className={`drawer-side `}>
                <label
                    htmlFor="main-drawer"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>
                <ul className="menu min-h-full w-full bg-base-200 p-4 text-base-content md:w-1/2 lg:w-80">
                    <div className="flex w-full items-center justify-between pt-5">
                        <div className="flex items-center">
                            <li>
                                <h4 className="block cursor-default bg-transparent hover:bg-transparent focus:bg-transparent">
                                    Categories
                                </h4>
                            </li>

                            {isMobile && <Quotation />}
                        </div>

                        <label
                            htmlFor="main-drawer"
                            className="btn drawer-button btn-sm drawer-open mr-3 flex items-center shadow-none"
                        >
                            <SidebarCloseIcon height={24} width={24} />
                        </label>
                    </div>
                    <div className="divider"></div>
                    {categories.map((item) => (
                        <li key={item._id}>
                            <input
                                type="checkbox"
                                className="drawer-toggle"
                                id="sub-drawer"
                            />{' '}
                            <label
                                htmlFor="sub-drawer"
                                onClick={(e) => handleSelectSubCategory(e)}
                                data-id={item._id}
                                key={item._id}
                            >
                                {item.title}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
            <Subdrawer
                currentCategory={currentCategory}
                setCurrentCategory={setCurrentCategory}
            />
        </>
    );
};
