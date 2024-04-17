'use client';

import React, { useCallback, useState } from 'react';
import { motion } from 'framer-motion';

interface ISubCategoryItemProps {
    items: [string, string[]];
}

export const SubCategoryItem = ({ items }: ISubCategoryItemProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [key, value] = items;

    const toggleDropdown = useCallback(
        () => setIsOpen((prevIsOpen) => !prevIsOpen),
        [setIsOpen]
    );

    return (
        <>
            <li>
                <motion.a
                    href="#"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    onClick={toggleDropdown}
                >
                    {key}
                    <span className="badge shadow-sm">{value.length}</span>
                </motion.a>
                {isOpen && (
                    <motion.ul
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                    >
                        {value.map((item, index) => (
                            <li key={index}>
                                <a href="#">{item}</a>
                            </li>
                        ))}
                    </motion.ul>
                )}
            </li>
        </>
    );
};
