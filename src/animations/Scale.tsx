import { motion } from 'framer-motion'

function Scale() {
    return (
        <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="w-16 h-16 bg-green-500 rounded"
        />
    )
}

export default Scale
