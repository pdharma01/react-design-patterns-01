const SplitScreenComponent = ({ children, panelProps }) => {
  return (
    <>
    <p>panelComponent</p>
      <div style={{ backgroundColor: `${panelProps.backgroundColor}` }}
      >{panelProps.text}</div>
      
      {children}
    </>

  )
}



export default SplitScreenComponent