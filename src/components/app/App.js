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
        <p>Select</p>
        <Select />
        <p>MultiSelect</p>
        <MultiSelect />
      </div>

    );
  }
}

export default App;
