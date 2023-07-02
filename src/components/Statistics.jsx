const StatisticData = ({label, percentage }) => {
  return (
    <li className="item">
          <span className="label">{label}</span>
          <span className="percentage">{percentage}%</span>
    </li>
  )
}


export const Statistics = ({stats}) => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>
      <ul className="stat-list">
        {stats.map(one=>(<StatisticData
          key={one.id}
          label={one.label}
          percentage={one.percentage}
        />))}
  </ul>
    </section>
  )
}
