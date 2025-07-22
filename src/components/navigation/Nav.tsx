'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, CircleX } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { LogOut} from 'lucide-react'

export default function Nav() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

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
                    className='cursor-pointer w-12 h-12 stroke-purple-500 hover:stroke-purple-700 fixed top-8 right-4 z-50 p-2'
                />
            ) : (
                <Menu
                onClick={() => setMenuOpen((prev) => !prev)}
                className='cursor-pointer w-12 h-12 stroke-purple-500 hover:stroke-purple-700 fixed top-8 right-4 z-50 p-2'
                />
                )
            }
        
            {menuOpen && (
                <div
                    ref={menuRef}
                    className="fixed top-20 right-4 z-40 p-4 rounded-3xl shadow-lg flex flex-col items-end space-y-4 backdrop-blur-lg border border-[rgba(168,85,247,0.15)]"
                >
                    <p
                        onClick={() => handleNavClick('./')}
                        className='text-purple-300 text-2xl font-bold hover:text-[#00ffee] drop-shadow cursor-pointer'
                    >
                        Home
                    </p>
                    <p
                        onClick={() => window.alert('Feature coming soon')}
                        className='text-purple-300 text-2xl font-bold hover:text-[#00ffee] drop-shadow cursor-pointer'
                    >
                        Profile
                    </p>
                    <p
                        onClick={() => window.alert('Feature coming soon')}
                        className='text-purple-300 text-2xl font-bold hover:text-[#00ffee] drop-shadow cursor-pointer'
                    >
                        Leaderboard&apos;s
                    </p>
                    <p
                        onClick={() => window.alert('Feature coming soon')}
                        className='text-purple-300 text-2xl font-bold hover:text-[#00ffee] drop-shadow cursor-pointer'
                    >
                        Settings
                    </p>
                    {loggedIn ? (
                        <LogOut
                            onClick={() => window.alert('Feature coming soon')}
                            size={26}
                            className='stroke-purple-300 hover:stroke-red-400 drop-shadow cursor-pointer' />
                    ) : (
                            <p
                                onClick={() => window.alert('Feature coming soon')}
                                className='text-purple-300 text-2xl font-bold hover:text-[#00ffee] drop-shadow cursor-pointer'>Log in</p>
                    )}
                </div>
            )}
        </div>
    )
}
