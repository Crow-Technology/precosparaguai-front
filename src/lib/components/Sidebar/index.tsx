import React from 'react';

import { Menu } from 'lucide-react';
import { Drawer } from './Drawer';

interface IProps {}

export const SideBar = ({}: IProps) => {
    return (
        <div className="drawer mr-auto">
            <input id="main-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label
                    htmlFor="main-drawer"
                    className="btn btn-ghost drawer-button btn-sm"
                >
                    <Menu />
                </label>
            </div>
            <Drawer />
        </div>
    );
};