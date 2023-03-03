import { motion } from 'framer-motion'
import Image from 'next/image'
import TextToTopHoverCard from '../../../globals/Cards/TextToTopHoverCard'
import styles from './ShowCategories.module.scss'

function ShowCategories() {

    return (
        <motion.section data-aos="zoom-in-left" className={styles.show_categories} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <h2>Vistete con tu estilo</h2>

            <motion.div className={styles.categories} initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{duration: 1.5, delay: 0.5}}>
                <TextToTopHoverCard img={'https://res.cloudinary.com/syphhy/image/upload/v1674846845/s-l500_ehrluy.jpg'} text={'Remeras'} />

                <TextToTopHoverCard img={'https://res.cloudinary.com/syphhy/image/upload/v1674524558/QWEEK-Blusa-asim-trica-para-mujer-Top-de-estilo-japon-s-ropa-de-calle-Punk-camisa.jpg_640x640_mvfo1x.jpg'} text={'Blusas'} />
            
                <TextToTopHoverCard img={'https://res.cloudinary.com/syphhy/image/upload/v1674846846/71jencH-UmL._AC_UF350_350_QL80__junntk.jpg'} text={'Buzos'} />
            </motion.div>
        </motion.section>
    )
}

export default ShowCategories