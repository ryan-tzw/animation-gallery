import { motion } from 'framer-motion'

export const RevealWaveHover = () => {
    return <RevealEffect href="#">Hover</RevealEffect>
}

const DURATION = 0.25
const STAGGER = 0.025

interface FlipLinkProps {
    children: string
    href: string
}

const RevealEffect = ({ children, href }: FlipLinkProps) => {
    return (
        <motion.a
            initial="initial"
            whileHover="hovered"
            href={href}
            className="relative block overflow-hidden uppercase whitespace-nowrap text-5xl font-black"
            style={{
                lineHeight: 1,
            }}
        >
            <div>
                {children.split('').map((l, i) => (
                    <motion.span
                        variants={{
                            initial: {
                                y: 0,
                            },
                            hovered: {
                                y: '-100%',
                            },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: 'easeInOut',
                            delay: STAGGER * i,
                        }}
                        className="inline-block"
                        key={i}
                    >
                        {l}
                    </motion.span>
                ))}
            </div>
            <div className="absolute inset-0">
                {children.split('').map((l, i) => (
                    <motion.span
                        variants={{
                            initial: {
                                y: '100%',
                            },
                            hovered: {
                                y: 0,
                            },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: 'easeInOut',
                            delay: STAGGER * i,
                        }}
                        className="inline-block"
                        key={i}
                    >
                        {l}
                    </motion.span>
                ))}
            </div>
        </motion.a>
    )
}
