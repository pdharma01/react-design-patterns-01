import { useState } from 'react'
import './App.css'
import SplitScreen from './components/SplitScreen'
import { people, products } from './components/data.js'
import SplitScreenComponent from './components/SplitScreenComponent'
import RegularList from './components/RegularList'
import SmallPersonListItem from './components/people/SmallPersonListItem'
import LargePersonListItem from './components/people/LargePersonListItem'
import NumberedList from './components/NumberedList'
import UnControlledModal from './components/UnControlledModal'
import ControlledForm from './components/ControlledForm'
import ControlledModal from './components/ControlledModal'
import UncontrolledOnboardingFlow from './components/UncontrolledOnboardingFlow'
import ControlledOnboardingFlow from './components/ControlledOnboardingFlow'
import printPropsHOC from './components/printPropsHOC'
import withUser from './components/withUser'
import withEditableUser from './components/withEditableUser'
import UserForm from './components/UserForm'

function App() {
  const [shouldShow, setShouldShow] = useState(false)
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  // SplitScreen 
  let leftPanelProps = {
    text: "OK Left!!",
    backgroundColor: "salmon",
    gridFR: 1
  }

  let rightPanelProps = {
    text: "Um Right!!",
    backgroundColor: "magenta",
    gridFR: 1.5

  }

  // Controlled Modal 
  const onRequestClose = () => {
    setShouldShow(false);

  }

  // Onboarding Flow 
  const onNext = (stepData, isFinished) => {

    setCurrentIndex(currentIndex + 1);
    setOnboardingData({ ...onboardingData, ...stepData })
    if (isFinished) console.log("FINISHED" + { ...onboardingData, ...stepData });

  }

  const StepOne = ({ goToNext }) => (
    <>
      <h3>Step 1: Name</h3>
      <form>

        <button onClick={() => goToNext({ name: "John Doe" })} >Next</button>
      </form>
    </>
  );
  const StepTwo = ({ goToNext }) => (
    <>
      <h3>Step 2: Age</h3>
      <button onClick={() => goToNext({ age: 33 })}>Next</button>
    </>
  );

  // Higher Order Components (HOC) 

  const LargePersonListWrapped = printPropsHOC(LargePersonListItem);
  const LargePersonListWithUser = withUser(LargePersonListItem, 2);
  const UserFormWithEditableUser = withEditableUser(UserForm, 2)




  return (
    <>
      <SplitScreen>

        {/*---------- Left Panel -----  */}
        <SplitScreenComponent
          panelProps={leftPanelProps}>
          <RegularList
            items={people}
            resourceName="person"
            itemComponent={SmallPersonListItem} />

          <UnControlledModal>
            <NumberedList
              items={people.slice(0, 1)}
              resourceName="person"
              itemComponent={LargePersonListItem} />
          </UnControlledModal>

          <ControlledForm />
          <ControlledModal></ControlledModal>

          <UncontrolledOnboardingFlow onFinish={(data) => {
            console.log(data.name + data.age);
          }}>
            <StepOne />
            <StepTwo />
          </UncontrolledOnboardingFlow>

          <ControlledOnboardingFlow
            currentIndex={currentIndex}
            onNext={onNext}>
            <StepOne />
            <StepTwo />
          </ControlledOnboardingFlow>
          <h3>{Object.values(onboardingData)}</h3>

        </SplitScreenComponent>


        {/*---------- Right Panel -----  */}
        <SplitScreenComponent
          panelProps={rightPanelProps}>
          <NumberedList
            items={people.slice(0,2)}
            resourceName="person"
            itemComponent={LargePersonListItem} />

          {/*--------------- Controlled Modal  ------------*/}
          <button onClick={() => setShouldShow(true)}>Show Uncontrolled Modal</button>
          <ControlledModal
            shouldShow={shouldShow}
            onRequestClose={onRequestClose}>
          </ControlledModal>

          <LargePersonListWrapped person={people[0]} printProp={"printProp"} />
          <LargePersonListWithUser />
          <UserFormWithEditableUser/>
          <UserForm/>

        </SplitScreenComponent>

      </SplitScreen>

    </>
  )
}

export default App
