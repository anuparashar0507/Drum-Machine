/* eslint-disable no-duplicate-case */
import React, { Component } from 'react'
//import Display from './Display'
import Keypad from './Keypad'


export default class DrumMachine extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          bank:0,
          volume:1,
          textDisplay:"Let's Play it"
        }
    
        this.handleClick = this.handleClick.bind(this);
        this.handleType = this.handleType.bind(this);
        this.handleBank = this.handleBank.bind(this);
        this.handleVolume = this.handleVolume.bind(this);
        this.animation = this.animation.bind(this);
      }
    
      componentDidMount()
      {
        let keypad = document.getElementById("keypad");
        let body =document.getElementById("body");
        keypad.addEventListener("click", this.handleClick);
        body.addEventListener("keydown", this.handleType);
      }
    
      handleClick(e)
      {
        if(e.target.id!=="keypad"){
          e.target.children[0].load();
          e.target.children[0].play();
          this.setState({
            textDisplay: e.target.id
          });
    
          this.animation(e.target)
        }
      }
    
      handleBank(e)
      {
        if(e.target.value == 0)
        {
          this.setState({
            bank: 0
          });
    
        }
        else  {
          this.setState({
            bank:1
          });
        }
      }
      
      handleType(e){
        let audio=document.querySelectorAll("audio");
        let drumpad=document.querySelectorAll("div.drum-pad")
          let index=audio.length;
        // eslint-disable-next-line default-case
        switch(e.keyCode){
          
          case 81:
            index=0;
            break;
            case 87:
            index=1;
            break;
            case 69:
            index=2;
            break;
            case 65:
            index=3;
            break;
            case 83:
            index=4;
            break;
            case 68:
            index=5;
            break;
            case 90:
            index=6;
            break;
            case 88:
            index=7;
            break;
            case 67:
            index=8;
            break;
            /// numeric keypad
            case 103:
            index=0;
            break;
            case 104:
            index=1;
            break;
            case 105:
            index=2;
            break;
            case 100:
            index=3;
            break;
            case 101:
            index=4;
            break;
            case 102:
            index=5;
            break;
            case 97:
            index=6;
            break;
            case 98:
            index=7;
            break;
            case 99:
            index=8;
            break;
          }
      if(index<audio.length){
              audio[index].load();
              audio[index].play();
      this.setState({
          textDisplay: drumpad[index].id
        });
      
        this.animation(drumpad[index])
      }
     
      }
     animation(obj){
     
      
      let blinkAnimationKeyframes = new KeyframeEffect(
        obj, 
        [       
         
           {backgroundColor:"#D35400"},
           { backgroundColor:"#FF8600"},
           { backgroundColor:"#F1F2F6"}
               
        ], 
        { duration: 400, fill: 'forwards' }
      );
       let blinkAnimation = new Animation(blinkAnimationKeyframes, document.timeline);
    blinkAnimation.play();
     }
      
        handleVolume(e){
        let audio=document.querySelectorAll("audio");
         audio.forEach(function(obj){
          obj.volume=parseFloat(e.target.value);
                             
                      });
      this.setState({
            volume: e.target.value
          });
      }
    render() {
        return (
            <div id="drum-machine">
            <p id='display'>{this.state.textDisplay}</p>
            <Keypad bank={this.props.bank[this.state.bank]}  /> 
         <div>
    <input id="bankSelector" onChange={this.handleBank} type="range" min="0" max="1" step="1" value={this.state.bank}  />
     <span id="bankDisplay">Bank {this.state.bank+1}</span>
         </div>
            
            <div>
    <input type="range" min="0" max="1" step="0.1" id="volumeRange" onChange={this.handleVolume} value={this.state.volume}/>
              <span id="volumeDisplay">{100*this.state.volume}%</span> 
    </div>
        </div>
        )
    }
}