export function HighlightSweep() {
    return (
        <a
            href="#"
            className="
                relative
                inline-block
                text-gray-800
                before:content-['']
                before:absolute before:inset-0
                before:bg-yellow-200
                before:scale-x-0 before:origin-left
                before:transition-transform before:duration-300
                hover:before:scale-x-100
                z-10
            "
        >
            <span className="relative z-20">Highlight Sweep</span>
        </a>
    )
}
