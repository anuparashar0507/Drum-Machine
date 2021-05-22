import React, { Component } from 'react'
import Drumpad from './Drumpad'
    

export default class Keypad extends Component {
    

    render() {
   
        return (
            
                  <div id="keypad">
         <Drumpad bank={this.props.bank} index={0}/>
         <Drumpad bank={this.props.bank} index={1}/>
         <Drumpad bank={this.props.bank} index={2}/>
         <Drumpad bank={this.props.bank} index={3}/>
         <Drumpad bank={this.props.bank} index={4}/>
         <Drumpad bank={this.props.bank} index={5}/>
         <Drumpad bank={this.props.bank} index={6}/>
         <Drumpad bank={this.props.bank} index={7}/>
         <Drumpad bank={this.props.bank} index={8}/>
      
            </div>
        )
    }
}