'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, CircleX } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { LogOut } from 'lucide-react'
import '@/styles/animations.css';

export default function Nav() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false); //TODO to update once users properly hooked up

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
                    className='cursor-pointer w-12 h-12 lg:w-14 lg:h-14 stroke-purple-500 hover:stroke-cyan-500 fixed top-8 right-4 z-50 p-2'
                />
            ) : (
                <Menu
                onClick={() => setMenuOpen((prev) => !prev)}
                className='cursor-pointer w-12 h-12 lg:w-14 lg:h-14 stroke-purple-500 hover:stroke-cyan-500 fixed top-8 right-4 z-50 p-2'
                />
                )
            }
        
            {menuOpen && (
                <div
                    ref={menuRef}
                    className="fixed top-20 lg:top-24 right-4 z-40 p-4 rounded-3xl shadow-lg flex flex-col items-end space-y-4 backdrop-blur-lg border border-[rgba(168,85,247,0.15)]"
                >
                    <button
                        onClick={() => handleNavClick('./')}
                        className='text-purple-300 text-4xl lg:text-5xl font-bold  drop-shadow cursor-pointer font-bitcount'
                    >
                        <span className='magic-shimmer-text'>Home</span>
                    </button>
                    <button
                        onClick={() => window.alert('Profiles coming soon')}
                        className='text-purple-300 text-2xl lg:text-4xl font-bold hover:text-cyan-400/90 drop-shadow cursor-pointer'
                    >
                        Profile
                    </button>
                    <button
                        onClick={() => window.alert('Leaderboard\'s coming soon')}
                        className='text-purple-300 text-2xl lg:text-4xl font-bold hover:text-cyan-400/90 drop-shadow cursor-pointer'
                    >
                        Leaderboard&apos;s
                    </button>
                    <button
                        onClick={() => window.alert('Settings coming soon')}
                        className='text-purple-300 text-2xl lg:text-4xl font-bold hover:text-cyan-400/90 drop-shadow cursor-pointer'
                    >
                        Settings
                    </button>
                    {loggedIn ? (
                        <LogOut
                            onClick={() => window.alert('Feature coming soon')}
                            size={26}
                            className='stroke-purple-300 hover:stroke-red-400/80 drop-shadow cursor-pointer' />
                    ) : (
                            <button
                                onClick={() => window.alert('Log in coming soon')}
                                className='text-purple-300 text-2xl font-bold hover:text-cyan-400/90 drop-shadow cursor-pointer lg:text-4xl'
                            >
                                Log in
                            </button>
                    )}
                </div>
            )}
        </div>
    )
}
