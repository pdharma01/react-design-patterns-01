import PropTypes from 'prop-types'

const SplitScreen = ({ children }) => {
  const [left, right] = children;
  const leftGridFR = left.props.panelProps.gridFR
  const rightGridFR = right.props.panelProps.gridFR

  return (
    <div className="d-grid splitscreen-container"
      style={{
        gridTemplateColumns:
          `${leftGridFR}fr 
            ${rightGridFR}fr`
      }}>
      <div>
        {left}
      </div>
      <div>
        {right}
      </div>
    </div>
  )
}


SplitScreen.propTypes = {
  children: PropTypes.array.isRequired
}
export default SplitScreen