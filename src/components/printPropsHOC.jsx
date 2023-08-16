const printPropsHOC = (Component) => {


    const ReturnedComponent = (props) => {
        console.log(props);
        return (
            <>
                <h5>LargeListItemComponent in printProps Wrapper</h5>
                <Component {...props} />
            </>
        )
    }


    return (ReturnedComponent)
}

export default printPropsHOC