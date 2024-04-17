'use client';

import React, { useState, useCallback } from 'react';
import { ICategory } from '@/lib/types/product.types';
import { Subdrawer } from './Subdrawer';
import { SidebarCloseIcon } from 'lucide-react';
import { useMediaQuery } from 'react-responsive';
import { useCategoryContext } from '@/lib/store/context/ProductContext';
import Quotation from '@/lib/components/Currency';

export default function Drawer() {
    const isMobile = useMediaQuery({
        query: '(max-width: 480px)',
    });
    const { categories } = useCategoryContext();
    const [currentCategory, setCurrentCategory] = useState<
        ICategory | undefined
    >(undefined);

    const handleSelectSubCategory = useCallback(
        (e: React.MouseEvent<HTMLLabelElement, MouseEvent>) => {
            const selectedCategoryId = e.currentTarget.dataset.id;
            const selectedCategory = categories.find(
                (item) => item._id === selectedCategoryId
            );

            setCurrentCategory(selectedCategory);
        },
        [categories, setCurrentCategory]
    );

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
                                onClick={handleSelectSubCategory}
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
}
