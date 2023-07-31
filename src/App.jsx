import { useState } from 'react'
import './App.css'
import SplitScreen from './components/SplitScreen'
import { people, products } from './components/data.js'
import RegularList from './components/RegularList'
import SmallPersonListItem from './components/people/SmallPersonListItem'
import LargePersonListItem from './components/people/LargePersonListItem'
import NumberedList from './components/NumberedList'

function App() {

  let leftPanelProps = {
    text: "OK Left!!",
    backgroundColor: "salmon",
    gridFR: 1
  }

  let rightPanelProps = {
    text: "Um Right!!",
    backgroundColor: "magenta",
    gridFR: 5
  }

  console.log(products[0].name);


  // Pass SplitScreen Components as children 
  const SplitScreenComponent = ({ panelProps }) => {
    return (
      <div style={{ backgroundColor: `${panelProps.backgroundColor}` }}
      >{panelProps.text}</div>
    )
  }

  return (
    <>
      <SplitScreen>
        <SplitScreenComponent panelProps={leftPanelProps}>

        </SplitScreenComponent>
        <SplitScreenComponent panelProps={rightPanelProps} />
      </SplitScreen>
      
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={SmallPersonListItem} />
      <NumberedList
        items={people}
        resourceName="person"
        itemComponent={LargePersonListItem} />
    </>
  )
}

export default App
