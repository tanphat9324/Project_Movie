import React, { Component,Fragment } from 'react'

export default class GheComponent extends Component {
    renderSoGhe = () =>{
      
        return this.props.soGhe.map((ghe,index) =>{
            return(
                <button onClick={()=>this.datGhe(ghe.daDat)} style={{marginRight:'5px', marginBottom:'5px',minWidth:'52px'}} className=''>{ghe.stt}</button>
            )
        })
    }
    render() {
        
        return (
            <Fragment>
                {this.renderSoGhe()}
            </Fragment>
        )
    }
}
