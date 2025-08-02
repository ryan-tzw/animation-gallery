import { motion } from 'framer-motion'

export function Rotate() {
    return (
        <motion.div
            className="w-32 h-32 bg-blue-600 rounded-md flex items-center justify-center text-white font-semibold"
            whileHover={{ rotate: 10 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
            Rotate
        </motion.div>
    )
}
