import { StatisticData } from './StatisticData/StatisticData'
import PropTypes from "prop-types";
import css from './Statistics.module.css'


export const Statistics = ({title, stats}) => {
  return (
    <section className={css.statistics}>
      {title && (<h2 className={css.title}>{title}</h2>)}
      <ul className={css.list}>
        {stats.map(one=>(<StatisticData
          key={one.id}
          label={one.label}
          percentage={one.percentage}
        />))}
  </ul>
    </section>
  )
}

Statistics.propTypes = {
  stats: PropTypes.array.isRequired,
  title: PropTypes.string,
}
