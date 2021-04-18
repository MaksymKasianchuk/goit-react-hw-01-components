import PropTypes from 'prop-types';

const Title = ({ title }) => {
    if (title) {
      return <h2 className="title">{title}</h2>;
    }
    else return false;
};
const Statistics = ({title, stats}) => {
    return (
        <section className="statistics">
            <Title title = {title}/>

            <ul className="stat-list">
            {stats.map(element => (
                        <li className="item">
                        <span className="label">{element.label}</span>
                        <span className="percentage">{element.percentage}%</span>
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