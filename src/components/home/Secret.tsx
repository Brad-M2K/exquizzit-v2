'use client';

import { Gem } from 'lucide-react';
import { showGemFoundToast } from '@/components/notifications/GemFound';



export default function Secret() {

    return (
        <Gem
            onClick={showGemFoundToast}
            className="absolute top-1 left-2 stroke-purple-900 w-4 animate-spin cursor-pointer"
        />
    );
}