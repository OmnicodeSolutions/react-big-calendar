import PropTypes from 'prop-types'
import React from 'react'

import Week from './Week'
import TimeGrid from './WeekTimeGrid'

function workWeekRange(date, options) {
  return Week.range(date, options)
}

class WorkWeek extends React.Component {
  render() {
    let { date, ...props } = this.props
    let range = workWeekRange(date, this.props)

    return <TimeGrid {...props} range={range} eventOffset={15} />
  }
}

WorkWeek.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
}

WorkWeek.defaultProps = TimeGrid.defaultProps

WorkWeek.range = workWeekRange

WorkWeek.navigate = Week.navigate

WorkWeek.title = (date, { localizer }) => {
  let [start, ...rest] = workWeekRange(date, { localizer })

  return localizer.format({ start, end: rest.pop() }, 'dayRangeHeaderFormat')
}

export default WorkWeek
