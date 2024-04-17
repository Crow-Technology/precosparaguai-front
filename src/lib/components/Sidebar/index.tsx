'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Menu } from 'lucide-react';

const Drawer = dynamic(() => import('@/lib/components/Sidebar/Drawer'), {
    ssr: false,
});

import { useScroll } from '@/lib/hooks';

interface ISideBarProps {
    menuBtnStyles?: React.CSSProperties;
}

export const SideBar = ({ menuBtnStyles }: ISideBarProps) => {
    const isMobile = useScroll();

    return (
        <div className="drawer z-20 mr-6 w-fit">
            <input id="main-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label
                    htmlFor="main-drawer"
                    className="btn btn-ghost drawer-button"
                    style={menuBtnStyles}
                >
                    <Menu />
                    {!isMobile && 'Menu'}
                </label>
            </div>
            <Drawer />
        </div>
    );
};
