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

export default SplitScreen