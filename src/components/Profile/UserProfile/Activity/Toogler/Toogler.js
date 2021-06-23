import React, { Component } from 'react';
import Auxiliry from '../../../../../hoc/Auxiliry';

class App extends Component {

   state = {
      id: 'customSwitches',
      htmlFor: 'customSwitches',
      status: 'readOnly'
   }

   toogleNotification = () => {
      this.setState({ id: "customSwitchesChecked", htmlFor: "customSwitchesChecked", status: 'defaultChecked' })
   }

   render() {

      return (
         <Auxiliry>
            <div className='custom-control custom-switch ' >
               <input
                  type='checkbox'
                  className='custom-control-input'
                  id={this.state.id}
                  status={this.state.status}
               />
               <label className='custom-control-label' htmlFor={this.state.htmlFor}></label>
            </div>

            {/* <div className='custom-control custom-switch'>
               <input
                  type='checkbox'
                  className='custom-control-input'
                  id='customSwitchesChecked'
                  defaultChecked='false'
               />
               <label className='custom-control-label' htmlFor='customSwitchesChecked'></label>
            </div> */}
         </Auxiliry>
      );
   }
};

export default App;