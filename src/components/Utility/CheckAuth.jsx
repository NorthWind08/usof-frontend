import React from 'react';
import {useSelector} from 'react-redux'

const CheckAuth = ({inverted = false, children}) => {

    const data = useSelector(state => state.auth.data);

    if (data && !inverted) {
        return (
            <>
                {children}
            </>
        );
    }
    else if (!data && inverted) {
        return (
            <>
                {children}
            </>
        )
    }
    else return (<></>)
};

export default CheckAuth;