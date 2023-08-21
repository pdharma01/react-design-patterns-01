export const Button = ({size, color, text, ...props}) => {
  return (
    <button style = {{
        padding: size === "large" ? "32px" : "8px",
        fontSize: size === "large" ? "32px" : "16px",
        backgroundColor : color

    }} {...props} >{text}</button>
  )
}

export const SmallRedButton=(props)=>{
    return (
        <Button {...props} color="red"/>
    )
}

export const LargeGreenButton=(props)=>{
    return (
        <Button {...props} color="green" size="large"/>
    )
}