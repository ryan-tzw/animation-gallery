import { motion } from 'framer-motion'

export function SpringButton() {
    return (
        <motion.button
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 500, damping: 20 }}
            className="px-4 py-2 bg-blue-500 text-white rounded"
        >
            Click me
        </motion.button>
    )
}
