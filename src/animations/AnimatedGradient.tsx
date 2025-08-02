import React from 'react'

export function AnimatedGradientExample() {
    return (
        <AnimatedGradient>
            <div className="flex items-center justify-center h-full">
                <p className="text-lg font-semibold text-white ">Hello!</p>
            </div>
        </AnimatedGradient>
    )
}

export function AnimatedGradient({ children }: React.PropsWithChildren<object>) {
    return (
        <div className="w-48 h-24 rounded-lg pointer-events-none bg-animated-gradient -z-10">
            {children}
        </div>
    )
}
