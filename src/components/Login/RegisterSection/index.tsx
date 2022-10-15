import "./index.css"

export const RegisterSection = () => {
    return(
        <section className="RegisterSection">
            <h2 className="RegisterSection-title">Join Jestter today.</h2>
            <div>
                <button>Registrar con google</button>
            </div>
            <p>or</p>
            <div>
                <button>Registrar con email</button>
            </div>
            <footer>
                <p>By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</p>
            </footer>
        </section>
    )
}