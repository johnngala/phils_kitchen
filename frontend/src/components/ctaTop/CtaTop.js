import React from 'react'
import {withRouter} from 'react-router-dom'

const  CtaTop = (props) => {
    
    const navProduct = () => {
        props.history.push('/product')
    }

    return (
        <div className = "cta-top">
            <div className = "cta-top__img"/>
            <div className = "cta-top__textbox">
                <div className = "cta-top__textbox--headline">
                    Automate your Future
                </div>
                <div className = "cta-top__textbox--story">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <div className = "cta-top__textbox--story">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <input 
                 className = "cta-top__textbox--button"
                 type = "submit"
                 value ="Learn Automation"
                 onClick = { () => navProduct()}
                />
            </div>
        </div>
    )
}

export default withRouter(CtaTop)

