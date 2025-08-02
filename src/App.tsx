import { useState } from 'react'

// Animations and Components Imports
import { Glow } from '@/animations/Glow'
import { SlideUnderline } from '@/animations/SlideUnderline'
import { SpringButton } from './animations/SpringButton'
import { DrawOutlineButtonExample } from './animations/DrawOutline'
import { RevealWaveHover } from './animations/RevealWaveHover'
import { ShadowInsetButton } from './animations/ShadowInsetHover'
import { SlideTabs } from './components/SlideTabs'
import { Example } from './animations/HoverTilt'
import { LoadingButton } from './animations/LoadingButton'
import { AnimatedGradientExample } from './animations/AnimatedGradient'
import { RippleEffect } from './animations/RippleEffect'

const categories = ['All', 'Hover', 'Click', 'Other']

function App() {
    const items = [
        { title: 'Slide Underline', Component: SlideUnderline, category: 'Hover' },
        { title: 'Hover Glow', Component: Glow, category: 'Hover' },
        { title: 'Loading Button', Component: LoadingButton, category: 'Other' },
        { title: 'Spring Button', Component: SpringButton, category: 'Click' },
        { title: 'Outline Button', Component: DrawOutlineButtonExample, category: 'Hover' },
        { title: 'Shadow Inset Button', Component: ShadowInsetButton, category: 'Hover' },
        { title: 'Animated Gradient', Component: AnimatedGradientExample, category: 'Other' },
        { title: 'Hover Tilt', Component: Example, category: 'Hover' },
        { title: 'Reveal Wave Hover', Component: RevealWaveHover, category: 'Hover' },
        { title: 'Ripple Effect', Component: RippleEffect, category: 'Click' },
    ]

    const [selectedCategory, setSelectedCategory] = useState(categories[0])

    // Filter items based on selected category
    const filteredItems =
        selectedCategory === 'All'
            ? items
            : items.filter((item) => item.category === selectedCategory)

    return (
        <main className="min-h-screen px-8 py-12 text-foreground">
            <h1 className="mb-10 text-3xl text-center">🎨 Animation Gallery</h1>
            <SlideTabs
                tabs={categories}
                selectedTab={selectedCategory}
                setSelectedTab={setSelectedCategory}
                className="mb-10"
            />
            <div className="grid gap-6 justify-center grid-cols-[repeat(auto-fit,minmax(200px,300px))]">
                {filteredItems.map(({ title, Component }, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col items-center justify-center text-center space-y-3 min-h-[120px]"
                    >
                        <Component />
                        <p className="text-sm text-muted-foreground">{title}</p>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default App
