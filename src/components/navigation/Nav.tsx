'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, CircleX } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Nav() {

    const [menuOpen, setMenuOpen] = useState(false);

    const router = useRouter();

    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setMenuOpen(false); 
            }
        };

        if (menuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen]);


    const handleNavClick = (path: string) => {

        try {
            setMenuOpen(false);
            router.push(path)
            
        } catch (err) {
            console.error(err);
        }
    }


    return (
        <div>
            {menuOpen ? (
                <CircleX
                    onClick={() => setMenuOpen(false)}
                    className='cursor-pointer w-12 h-12 stroke-fuchsia-800 fixed top-8 right-4 z-50 p-2'
                />
            ) : (
                <Menu
                onClick={() => setMenuOpen((prev) => !prev)}
                className='cursor-pointer w-12 h-12 stroke-fuchsia-800 fixed top-8 right-4 z-50 p-2'
                />
                )
            }
        
            {menuOpen && (
                <div
                    ref={menuRef}
                    className="fixed top-20 right-4 z-40 p-4 rounded-xl shadow-lg flex flex-col items-end space-y-4 cursor-pointer backdrop-blur-lg bg-[rgba(30,27,75,0.7)] border border-[rgba(168,85,247,0.15)]"
                >
                    <p
                        onClick={() => handleNavClick('./')}
                        className='text-white text-2xl font-bold hover:text-purple-300 drop-shadow'
                    >
                        Home
                    </p>
                    <p
                        className='text-white text-2xl font-bold hover:text-purple-300 drop-shadow'
                    >
                        Profile
                    </p>
                </div>
            )}
        </div>
    )
}
