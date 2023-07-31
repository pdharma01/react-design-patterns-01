import { useState } from 'react'
import './App.css'
import SplitScreen from './components/SplitScreen'
import { people, products } from './components/data.js'
import SplitScreenComponent from './components/SplitScreenComponent'
import RegularList from './components/RegularList'
import SmallPersonListItem from './components/people/SmallPersonListItem'
import LargePersonListItem from './components/people/LargePersonListItem'
import NumberedList from './components/NumberedList'
import Modal from './components/Modal'

function App() {

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

  console.log(products[0].name);


  // Pass SplitScreen Components as children 
  // const SplitScreenComponent = ({ children, panelProps }) => {

  //   let content = children
  //   return (
  //     <>
  //     <div style={{ backgroundColor: `${panelProps.backgroundColor}` }}
  //     >{panelProps.text}</div>
  //     {content}
  //     </>

  //   )


  return (
    <>
      <SplitScreen>

        <SplitScreenComponent
          panelProps={leftPanelProps}>
          <RegularList
            items={people}
            resourceName="person"
            itemComponent={SmallPersonListItem} />

            <Modal>
            <NumberedList
            items={people.slice(0,2)}
            resourceName="person"
            itemComponent={LargePersonListItem} />
            <div></div>
            </Modal>

        </SplitScreenComponent>

        <SplitScreenComponent
          panelProps={rightPanelProps}>
          <NumberedList
            items={people}
            resourceName="person"
            itemComponent={LargePersonListItem} />
            <div></div>
        </SplitScreenComponent>

      </SplitScreen>

    </>
  )
}

export default App
