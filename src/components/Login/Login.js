import React from 'react'

const Login = () => {
    return (
        <div>
            <h3>Please Login</h3>
            <div style={{ margin: "20px" }}>
                <button>Login With Google</button>
            </div>
            <form>
                <input type="email" name="" id="" placeholder='enter your email' />
                <br />
                <input type="password" name="" id="" placeholder='enter your password' />
                <br />
                <input type="submit" value="Login" />

            </form>
        </div>
    )
}

export default Login