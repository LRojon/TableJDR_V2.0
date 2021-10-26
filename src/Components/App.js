import { useState } from 'react';
import '../Styles/App.css';
import Main from './Main';
import Timeline from './Timeline';

function App() {

    const [timeline, updateTimeline] = useState([])

    return (
        <div className="App">
            <Main className="Main" timeline={timeline} updateTimeline={updateTimeline} />
            <Timeline className="Timeline" timeline={timeline} updateTimeline={updateTimeline} />
        </div>
    );
}

export default App;
