import { Button } from '@/components/ui/button'

export function Glow() {
    return (
        <Button className="px-6 py-2 rounded-full bg-slate-900 text-white relative overflow-hidden group">
            <span className="z-10 relative">Glow</span>
            <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-40 transition duration-300 blur-md"></div>
        </Button>
    )
}

export default Glow
