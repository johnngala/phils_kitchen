import React ,{Fragment} from 'react'
import HeaderCenter from './HeaderCenter'
import HeaderLeft from './HeaderLeft'
import HeaderRight from './HeaderRight'


const  Header = () => {
    return (
        <Fragment>
        <div className = "header">
            <HeaderLeft />
            <HeaderCenter />
            <HeaderRight />
        </div>
        </Fragment>
    )
}

export default Header

