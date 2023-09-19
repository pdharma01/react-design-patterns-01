const Splitscreen = ({ children }) => {
  let columns = ""
  children.forEach((child) => {
    columns += `${child.props.fr}fr `;
  })


  return (
    <div className="d-grid splitscreen-container"
      style={{gridTemplateColumns: columns}}>

      {children}

    </div>
  )
}

export default Splitscreen