import React, { PureComponent  } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faAngleDown, faAngleUp
} from '@fortawesome/free-solid-svg-icons';
import './App.css';
import Select from "../select";

library.add(faAngleDown, faAngleUp);

class App extends PureComponent {
  render() {
    return (
      <div className='content'>
        <Select options={[ { id: 1, name: 'First' }, { id: 2, name: 'Second' } ]} />
      </div>

    );
  }
}

export default App;
