import { motion } from "framer-motion"
import { FlowerPot } from "./FlowerPot"
import { WineGlass } from "./WineGlass"
import { SparklingWine } from "./SparklingWine"

export const Spinner = () => {
    return (
        <div className="flex items-end">
            <motion.div animate={{ y: [0, -10, 0], transition: { duration: 0.4, repeat: Infinity, ease: "easeOut" } }}>
                <FlowerPot className="w-12" />
            </motion.div>
            <motion.div animate={{ y: [0, -7, 0], transition: { duration: 0.4, delay: 0.1, repeat: Infinity, ease: "easeOut" } }}>
                <WineGlass className="w-10" />
            </motion.div>
            <motion.div animate={{ y: [0, -9, 0], transition: { duration: 0.4, delay: 0.2, repeat: Infinity, ease: "easeOut" } }}>
                <SparklingWine className="w-16" />
            </motion.div>
        </div>
    )
}