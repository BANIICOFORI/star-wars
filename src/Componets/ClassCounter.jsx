import React,{Component} from 'react';


class ClassCounter extends Component{
    constructor(){
        super();
        this.state={Number : 0 };
        //this.Increament = Increament.bind(this);
    }
    Increament=()=>{
        this.setState({Number:this.state.Number + 1});
    }
    Decreament=()=>{
        this.setState({Number:this.state.Number - 1});
    }
    
    render(){
        return(
            <div>
                <h1>Count {this.state.Number }</h1>
                <button onClick={this.Increament } style={{color:"green", textAlign:"center"}}>Increase</button>
                <button onClick={this.Decreament } style={{color:"red", textAlign:"center"}}> Decrease</button>
            </div>
        );
    }
}
export default ClassCounter;