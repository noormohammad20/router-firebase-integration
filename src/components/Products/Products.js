import React from 'react'
import useFirebase from '../../hooks/useFirebase'

const Products = () => {
    const { user } = useFirebase()
    return (
        <div>
            <h2>Knock Knock! Who Is There</h2>
            <h5>{user ? user.displayName : 'no body there'}</h5>
        </div>
    )
}

export default Products