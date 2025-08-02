import { useRef } from 'react'

export function RippleEffect() {
    const btnRef = useRef<HTMLButtonElement>(null)

    const handleClick = () => {
        const btn = btnRef.current
        if (!btn) return
        btn.classList.remove('ripple-active')
        // Force reflow to restart animation
        void btn.offsetWidth
        btn.classList.add('ripple-active')
        // Remove the class after animation ends
        setTimeout(() => btn.classList.remove('ripple-active'), 500)
    }

    return (
        <button
            ref={btnRef}
            className="px-8 py-4 text-white bg-blue-400 ripple-out"
            onClick={handleClick}
            type="button"
        >
            Click Me
        </button>
    )
}
