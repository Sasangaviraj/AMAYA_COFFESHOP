import React, { useState } from 'react';
import { MdClose, MdAdd, MdRemove } from 'react-icons/md'; 

const MobileMenu = ({ isOpen, onClose, navItems }) => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (dropdownName) => {
        setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
    };

    const MobileMenuItem = ({ title, items, dropdownName }) => (
        <div className="border-b border-gray-200">
            <div
                className="flex justify-between items-center py-4 px-6 cursor-pointer hover:bg-gray-100"
                onClick={() => toggleDropdown(dropdownName)}
            >
                <p className="text-base font-semibold tracking-wide text-gray-800">{title}</p>
                {items && items.length > 0 && (
                    openDropdown === dropdownName ? (
                        <MdRemove size={30} className="text-gray-600" />
                    ) : (
                        <MdAdd size={30} className="text-gray-600" />
                    )
                )}
            </div>
            {openDropdown === dropdownName && items && items.length > 0 && (
                <div className="flex flex-col pl-8 bg-white pb-2">
                    {items.map((item, idx) => (
                        <p
                            key={idx}
                            className="py-2 text-sm text-gray-700 hover:text-orange-500 cursor-pointer"
                            onClick={onClose}
                        >
                            {item}
                        </p>
                    ))}
                </div>
            )}
        </div>
    );

    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 z-[140]"
                    onClick={onClose}
                ></div>
            )}

           
            <div
                className={`fixed inset-y-0 right-0 w-full sm:w-3/4 md:w-full bg-white text-gray-800 h-2/3 md:h-1/2 shadow-lg overflow-y-auto z-[150]
                           transform transition-transform duration-300 ease-in-out
                           ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                {/*  Menu Header */}
                <div className="flex justify-start p-4 border-b border-gray-200">
                    <MdClose size={24} className="cursor-pointer text-gray-800" onClick={onClose} />
                </div>

                {/* Navigation Items */}
                <nav>
                    <MobileMenuItem title="HOME" items={navItems.home} dropdownName="home" />
                    <MobileMenuItem title="PAGES" items={navItems.about} dropdownName="pages" />
                    <MobileMenuItem title="ARTICLES" items={navItems.articles} dropdownName="articles" />

                    <div className="py-4 px-6 border-b border-gray-200">
                        <p className="text-base font-semibold tracking-wide cursor-pointer text-gray-800 hover:bg-gray-100">WHOLESALE</p>
                    </div>

                    <MobileMenuItem title="SHOP" items={navItems.shop} dropdownName="shop" />

                    <div className="py-4 px-6 border-b border-gray-200">
                        <p className="text-base font-semibold tracking-wide cursor-pointer text-gray-800 hover:bg-gray-100">LOCATIONS</p>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default MobileMenu;