import React, {Component} from 'react'

export default class Content extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }

    addNum=()=>{
        this.setState({count:this.state.count+1})
    }

    render(){
        return(
            <div>
                <button onClick={this.addNum}>num {this.state.count}</button>
            </div>
        )
    }
}