import { useState, useEffect, MouseEvent } from 'react'

type Ripple = { x: number; y: number; id: number }

export function RippleButton() {
    const [ripples, setRipples] = useState<Ripple[]>([])
    let nextId = 0

    useEffect(() => {
        if (ripples.length === 0) return

        const timer = setTimeout(() => {
            setRipples((prev) => prev.slice(1)) // Remove the oldest ripple
        }, 600)

        return () => clearTimeout(timer)
    }, [ripples])

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = e.clientX - rect.left - 10 // center the 20px ripple
        const y = e.clientY - rect.top - 10
        const newRipple = { x, y, id: nextId++ }
        setRipples((prev) => [...prev, newRipple])
    }

    return (
        <button
            onClick={handleClick}
            className="relative overflow-hidden bg-blue-600 text-white px-6 py-2 rounded-md"
        >
            Click Me
            {ripples.map((r) => (
                <span key={r.id} className="ripple" style={{ top: r.y, left: r.x }} />
            ))}
        </button>
    )
}
