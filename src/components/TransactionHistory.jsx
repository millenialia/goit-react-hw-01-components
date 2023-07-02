const TransactionHistoryData = ({type, amount, currency}) => {
  return (
    <tr>
      <td className="type">{type}</td>
      <td className="amount">{amount}</td>
      <td className="currency">{currency}</td>
    </tr>
  )
}

export const TransactionHistory = ({items}) => {
  return (
    <table className="transaction-history">
      <thead className="table-head">
        <tr>
          <th className="type-head">Type</th>
          <th className="amount-head">Amount</th>
          <th className="currency-head">Currency</th>
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
