const LoginWithEmailAndPassword = ()=>{
    const LoginForm = (e)=>{

        e.preventDefault()
        console.log(e)
    }
    return (
        <div className={'formContainer'}>
            <form onSubmit={LoginForm} className={'interForm'} >
            <label>User ID</label>
            <input type='text'/>
                <label>Key</label>
                <input type='password'/>
                <button>Log In</button>
        </form>
        </div>
    )
}
export default LoginWithEmailAndPassword