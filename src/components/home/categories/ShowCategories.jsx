import TextToTopHoverCard from '../../../globals/Cards/TextToTopHoverCard'
import styles from './ShowCategories.module.scss'

function ShowCategories({categories}) {
    console.log(categories)

    return (
        <section className={styles.show_categories}>
            <h2>disfruta lo que te gusta!</h2>

            <div className={styles.categories}>
                {categories.map((category, index) => (
                    <div key={index} className={index === 1 ? styles.category_1 : ''}>
                        <TextToTopHoverCard img={category.image} text={category.name} align={index === 1 ? 'vertical' : 'horizontal'} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ShowCategories