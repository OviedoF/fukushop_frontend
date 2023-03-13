import { motion } from 'framer-motion'
import Image from 'next/image'
import TextToTopHoverCard from '../../../globals/Cards/TextToTopHoverCard'
import styles from './ShowCategories.module.scss'

function ShowCategories() {

    return (
        <motion.section data-aos="zoom-in-left" className={styles.show_categories}
            initial={{ y: -50, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.8 }}
        >
            <motion.h2
                initial={{ y: -50, opacity: 0, scale: 0.8 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.8 }}
            >Vistete con tu estilo</motion.h2>

            <motion.div className={styles.categories}
                initial={{ y: -50, opacity: 0, scale: 0.8 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.8 }}
            >
                <TextToTopHoverCard img={'https://res.cloudinary.com/syphhy/image/upload/v1674846845/s-l500_ehrluy.jpg'} text={'Remeras'} />

                <TextToTopHoverCard img={'https://res.cloudinary.com/syphhy/image/upload/v1674524558/QWEEK-Blusa-asim-trica-para-mujer-Top-de-estilo-japon-s-ropa-de-calle-Punk-camisa.jpg_640x640_mvfo1x.jpg'} text={'Blusas'} />

                <TextToTopHoverCard img={'https://res.cloudinary.com/syphhy/image/upload/v1674846846/71jencH-UmL._AC_UF350_350_QL80__junntk.jpg'} text={'Buzos'} />
            </motion.div>
        </motion.section>
    )
}

export default ShowCategories