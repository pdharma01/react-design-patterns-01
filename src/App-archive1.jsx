import { useState } from 'react'
import './App.css'
import SplitScreen from './components/SplitScreen'
import { people, products, nestedObject } from './components/data.js'
import SplitScreenComponent from './components/SplitscreenPanelComponent'
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
import withEditableResource from './components/withEditableResource'
import UserInfoForm from './components/UserInfoForm'
import ProductInfoForm from './components/ProductInfoForm'
import LargePersonListItemWithHook from './components/people/LargePersonListItemWithHook'
import LargeProductListItem from './components/people/LargeProductListItem'
import LargeProductListItemWithUseDataSource from './components/people/LargeProductListItemWithUseDataSource'
import RecursiveComponent from './components/RecursiveComponent'
import { SmallRedButton, LargeGreenButton } from './components/composition'
import { PartialLargeButton, PartialSmallRedButton } from './components/partiallyApplyHOC'

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
  const ResourceUserFormWithEditable = withEditableResource(UserInfoForm, "users", "user", 2)
  const ProductInfoFormWithEditable = withEditableResource(ProductInfoForm, "products", "product", 2)



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

          <div className='section'>
            <h3>usePerson</h3>
            <LargePersonListItemWithHook personId={1} />
            <LargePersonListItemWithHook personId={3} />
            <h3>useResource</h3>
            <LargeProductListItem productId={1}/>
            <LargeProductListItem productId={4}/>
            <h3>useDataSource</h3>
            <LargeProductListItemWithUseDataSource productId={4}/>
          </div>
          <div className="section">
            <h3>Recursive Component</h3>
            <RecursiveComponent data={nestedObject}/>
          </div>
          <div className="section">
            <h3>Composition</h3>
            <p>Different versions of original component by adding props</p>
            <SmallRedButton text="Small Red Button"/>
            <LargeGreenButton text="Large Green Button"/>
          </div>
          <div className="section">
            <h3>Partial Props</h3>
            <p>Component in Partial Props Wrapper that combines partial subset of props with add-on props </p>
            <PartialSmallRedButton text="Partial Red Button"/>
            <PartialLargeButton text="Partial Large Green Button"/>
          </div>

        </SplitScreenComponent>


        {/*---------- Right Panel -----  */}
        <SplitScreenComponent
          panelProps={rightPanelProps}>
          <NumberedList
            items={people.slice(0, 2)}
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
          <UserFormWithEditableUser />
          <ResourceUserFormWithEditable />
          <ProductInfoFormWithEditable />

        </SplitScreenComponent>

      </SplitScreen>

    </>
  )
}

export default App
