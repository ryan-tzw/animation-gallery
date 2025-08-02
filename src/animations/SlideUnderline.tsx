export function SlideUnderline() {
    return (
        <span className="relative text-blue-600 group cursor-pointer font-medium">
            Hover Me
            <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </span>
    )
}
