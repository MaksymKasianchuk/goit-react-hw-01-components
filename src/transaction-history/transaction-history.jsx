import PropTypes from 'prop-types';
import styles from './Transactions.module.css';

const TransactionHistory = ({items}) => {
    return (
            <table className={styles.transactionHistory}>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>
                
                <tbody>
                {items.map(item => (
                            <tr>
                                <td>{item.type}</td>
                                <td>{item.amount}</td>
                                <td>{item.currency}</td>
                            </tr>
                        )
                    )
                }
                </tbody>
            </table>
    );
}
TransactionHistory.propTypes = {
    items: PropTypes.array,
};
export default TransactionHistory;