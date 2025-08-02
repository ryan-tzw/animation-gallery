import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

// Tab configuration
const EXAMPLE_TABS = ['Home', 'Pricing', 'Features', 'Docs', 'Blog']

export const SlideTabsExample = () => {
    const [selectedTab, setSelectedTab] = useState(EXAMPLE_TABS[0])
    return (
        <SlideTabs tabs={EXAMPLE_TABS} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
    )
}

type SlideTabsProps = React.OlHTMLAttributes<HTMLUListElement> & {
    tabs: string[]
    selectedTab: string
    setSelectedTab: (tab: string) => void
    className?: string
}

export const SlideTabs = ({ tabs, selectedTab, setSelectedTab, className }: SlideTabsProps) => {
    // Track cursor position and dimensions
    const [position, setPosition] = useState({
        left: 0,
        width: 0,
    })

    const mergedClasses = twMerge(
        clsx(
            'relative mx-auto flex w-fit rounded-full border-2 border-violet-400 bg-white p-1',
            className
        )
    )

    // Store references to all tab elements for positioning calculations
    const tabRefs = useRef<{ [key: string]: HTMLLIElement | null }>({})

    // Update cursor position when selected tab changes
    useEffect(() => {
        const selectedTabElement = tabRefs.current[selectedTab]
        if (selectedTabElement) {
            const { width } = selectedTabElement.getBoundingClientRect()
            setPosition({
                left: selectedTabElement.offsetLeft,
                width,
            })
        }
    }, [selectedTab])

    return (
        <ul
            onMouseLeave={() => {
                // Return cursor to selected tab when mouse leaves the tab area
                const selectedTabElement = tabRefs.current[selectedTab]
                if (selectedTabElement) {
                    const { width } = selectedTabElement.getBoundingClientRect()
                    setPosition({
                        left: selectedTabElement.offsetLeft,
                        width,
                    })
                }
            }}
            className={mergedClasses}
        >
            {tabs.map((tab) => (
                <Tab
                    key={tab}
                    name={tab}
                    setPosition={setPosition}
                    setSelectedTab={setSelectedTab}
                    tabRefs={tabRefs}
                >
                    {tab}
                </Tab>
            ))}

            <Cursor position={position} />
        </ul>
    )
}

type TabProps = {
    name: string
    children: React.ReactNode
    setSelectedTab: (tab: string) => void
    setPosition: (position: { left: number; width: number }) => void
    tabRefs: React.MutableRefObject<{ [key: string]: HTMLLIElement | null }>
}

const Tab = ({ name, children, setSelectedTab, setPosition, tabRefs }: TabProps) => {
    return (
        <li
            ref={(el) => {
                tabRefs.current[name] = el
            }}
            onClick={() => setSelectedTab(name)}
            onMouseEnter={() => {
                // Move cursor to hovered tab
                const tabElement = tabRefs.current[name]
                if (!tabElement) return

                const { width } = tabElement.getBoundingClientRect()

                setPosition({
                    left: tabElement.offsetLeft,
                    width,
                })
            }}
            className="font-medium relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-lime-700 mix-blend-difference md:px-5 md:py-3 md:text-base"
        >
            {children}
        </li>
    )
}

type CursorProps = {
    position: {
        left: number
        width: number
    }
}

const Cursor = ({ position }: CursorProps) => {
    return (
        <motion.li
            animate={{
                ...position,
            }}
            className="absolute z-0 rounded-full bg-violet-300 h-7 md:h-12"
        />
    )
}
