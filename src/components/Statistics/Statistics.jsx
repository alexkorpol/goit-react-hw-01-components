// import { TaskNumber } from 'components/Profile/TaskNumber.styled';
import { StatItem, StatLabel, StatList, StatPercentage, StatSection, Title } from './Statistics.styled';
import PropTypes from 'prop-types';
import {getRandomHexColor} from './getRandomHexColor';


export const Statistics = ({
    title,
    stats,
}) => {
  return (
    <>

 <StatSection>

      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(stat => (
          <StatItem
            key={stat.id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <StatLabel>{stat.label}</StatLabel>
            <StatPercentage>{stat.percentage}%</StatPercentage>
          </StatItem>
        ))}
      </StatList>
      </StatSection>
      </>

    )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
