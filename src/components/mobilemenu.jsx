import React, { useState } from 'react';
import { MdClose, MdAdd, MdRemove } from 'react-icons/md';
import { Link } from 'react-router-dom';

const MobileMenu = ({ isOpen, onClose, navItems }) => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (dropdownName) => {
        setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
    };

    const MobileMenuItem = ({ item, onClose }) => {
        const hasDropdown = item.dropdown && item.dropdown.length > 0;
        const isDropdownOpen = openDropdown === item.name;

        return (
            <div className="border-b border-gray-200">
                <div
                    className="flex justify-between items-center py-4 px-6 cursor-pointer hover:bg-gray-100"
                    onClick={() => hasDropdown ? toggleDropdown(item.name) : onClose()}
                >
                    <Link
                        to={item.path}
                        onClick={onClose}
                        className="text-base font-semibold tracking-wide text-gray-800 flex-grow"
                    >
                        {item.name}
                    </Link>
                    {hasDropdown && (
                        isDropdownOpen ? (
                            <MdRemove size={30} className="text-gray-600" />
                        ) : (
                            <MdAdd size={30} className="text-gray-600" />
                        )
                    )}
                </div>
                {isDropdownOpen && hasDropdown && (
                    <div className="flex flex-col pl-8 bg-white pb-2">
                        {item.dropdown.map((subItem, idx) => (
                            <Link
                                key={idx}
                                to={subItem.path}
                                className="py-2 text-sm text-gray-700 hover:text-orange-500 cursor-pointer"
                                onClick={onClose}
                            >
                                {subItem.name}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        );
    };

    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 z-[140]"
                    onClick={onClose}
                ></div>
            )}
            
            <div
                className={`fixed inset-y-0 right-0 w-full sm:w-3/4 md:w-1/2 bg-white text-gray-800 shadow-lg overflow-y-auto z-[150]
                           transform transition-transform duration-300 ease-in-out
                           ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                {/* Menu Header with Close Button */}
                <div className="flex justify-start p-4 border-b border-gray-200">
                    <MdClose size={24} className="cursor-pointer text-gray-800" onClick={onClose} />
                </div>

                {/* Navigation Items */}
                <nav>
                    {navItems.map((item, index) => (
                        <MobileMenuItem
                            key={index}
                            item={item}
                            onClose={onClose}
                        />
                    ))}
                </nav>
            </div>
        </>
    );
};

export default MobileMenu;