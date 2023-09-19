import React, { useState } from "react";

const ControlledOnboardingFlow = ({ children, onFinish, currentIndex, onNext }) => {


    const goToNext = (stepData) => {
        // let isFinished
        let isFinished = !(currentIndex < children.length-1)
        onNext(stepData, isFinished)
    }

    // toArray incase children is singlular
    const currentChild = React.Children.toArray(children)[currentIndex];

    if (React.isValidElement(currentChild)) {
        return React.cloneElement(currentChild, { goToNext })
    }


    return currentChild

}

export default ControlledOnboardingFlow