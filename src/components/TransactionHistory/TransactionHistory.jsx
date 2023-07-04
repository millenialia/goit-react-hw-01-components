import { TransactionHistoryData } from './TransactionHistoryData/TransactionHistoryData'
import PropTypes from "prop-types";
import css from './TransactionHistory.module.css'


export const TransactionHistory = ({items}) => {
  return (
  <table className={css.transaction}>
      <thead className={css.table}>
        <tr>
          <th className={css.type}>Type</th>
          <th className= {css.amount}>Amount</th>
          <th className= {css.currency}>Currency</th>
       </tr>
      </thead>
      <tbody>
        {items.map(transaction => (<TransactionHistoryData
          type={transaction.type}
          amount={transaction.amount}
          currency={transaction.currency}
          key={transaction.id}
          />))}
      </tbody>
    </table>
  )
}

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
}
