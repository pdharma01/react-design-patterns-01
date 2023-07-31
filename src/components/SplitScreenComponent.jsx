const SplitScreenComponent = ({ children, panelProps }) => {
  return (
    <>
      <div style={{ backgroundColor: `${panelProps.backgroundColor}` }}
      >{panelProps.text}</div>
      
      {children}
    </>

  )
}



export default SplitScreenComponent