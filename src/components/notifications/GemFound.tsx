import { toast } from 'sonner';
import { Gem } from 'lucide-react';

export function showGemFoundToast() {
    toast(
        <div className="flex flex-col items-center justify-center">
        <span className="font-bold text-white lg:text-md">You found the secret gem!</span>
        <div className="lg:text-md text-xs text-purple-200">See what I do in a future update!</div>
        </div>,
        {
        icon: <Gem className="w-6 h-6" />
        }
    );
}