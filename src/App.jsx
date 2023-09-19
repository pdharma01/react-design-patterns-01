import { useState } from 'react';
import './App.css';
import Splitscreen from './components/Splitscreen';
import SplitscreenPanelComponent from './components/SplitscreenPanelComponent';

// Layout Components - 
// splitscreen
// splitscreen Component 
// regular list, numbered list . large list itme, small list item,
//  Controled Form
// Controlled modal 

// Higher order wrappers 
// Custom hooks 

function App() {
    return (
        <>
            <Splitscreen>
                <SplitscreenPanelComponent fr={10}>
                    <p>panel1</p>
                </SplitscreenPanelComponent>

                <SplitscreenPanelComponent fr={2}>
                    <p>panel2</p>
                </SplitscreenPanelComponent>

                <SplitscreenPanelComponent fr={5}>
                    <p>panel3</p>
                </SplitscreenPanelComponent>
                
            </Splitscreen>
        </>
    )
}

export default App