const printPropsHOC = (Component) => {


    const ReturnedComponent = (props)=>{
        console.log(props);
        return (<Component {...props}/>)
    }


  return (ReturnedComponent)
}

export default printPropsHOC