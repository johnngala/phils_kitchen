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
                   Phil's Kitchen
                </div>
                <div className = "cta-top__textbox--story">
                    Welcome to Phil's Kitchen.We offer the tastiest meals 
                    all of Town!!
                </div>
                {/* <div className = "cta-top__textbox--story">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div> */}
                {/* <input 
                 className = "cta-top__textbox--button"
                 type = "submit"
                 value ="Learn Automation"
                 onClick = { () => navProduct()}
                /> */}
            </div>
        </div>
    )
}

export default withRouter(CtaTop)

