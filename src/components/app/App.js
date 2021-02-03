import React, { PureComponent  } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faAngleDown, faAngleUp, faArrowRight, faArrowLeft
} from '@fortawesome/free-solid-svg-icons';
import './App.css';
import Select from "../select";
import MultiSelect from "../multiselect";

library.add(faAngleDown, faAngleUp, faArrowRight, faArrowLeft);

class App extends PureComponent {
  render() {
    return (
      <div className='content'>
        <Select options={[ { id: 1, name: 'First' }, { id: 2, name: 'Second' } ]} />
        <MultiSelect options={[ { id: 1, name: 'First' }, { id: 2, name: 'Second' }, { id: 3, name: 'Third' } ]} />
      </div>

    );
  }
}

export default App;
