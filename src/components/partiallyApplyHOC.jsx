export const partiallyApplyHOC = (Component, partialProps) => {

    const CombinedPropsComponent=(props)=>{
        return (<Component {...partialProps} {...props}/>)
    }
  return CombinedPropsComponent
}

export const Button = ({size, color, text, ...props}) => {
    return (
      <button style = {{
          padding: size === "large" ? "32px" : "8px",
          fontSize: size === "large" ? "32px" : "16px",
          backgroundColor : color
  
      }} {...props} >{text}</button>
    )
  }
  export const PartialSmallRedButton = partiallyApplyHOC(Button, {color: "red"})
  export const PartialLargeButton = partiallyApplyHOC(Button, {color: "green", size:"large"})