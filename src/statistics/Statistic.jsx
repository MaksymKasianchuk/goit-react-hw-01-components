import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function randColor() {
    return `rgb( ${Math.random() * 256},  
    ${Math.random() * 256}, 
    ${Math.random() * 256})`;
}


const Statistics = ({title, stats}) => {
    return (
        <section className={styles.statistics}>
              {title && <h3 className={styles.title}>{title}</h3>}

            <ul className={styles.statList}>
            {stats.map(element => (
                        <li className={styles.item} style={{ backgroundColor: randColor() }} >
                        <span className={styles.label}>{element.label}</span>
                        <span className={styles.percentage}>{element.percentage}%</span>
                        </li>
                    )
                )
            }
            </ul>
        </section>  
    );
}
Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
};
export default Statistics;