import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Tech Monk</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Beautiful Downtown chennai City, Techmonk Repairs  provides a trained staff ready to meet your tech repair needs.</p>
                <address className="public__addr">
                    TechMonk. Repairs<br />
                    555 Temple Drive<br />
                    chennai City, pincode - 600106<br />
                    <a href="tel:+15555555555">+91 7871250750</a>
                </address>
                <br />
                <p>Owner: Human Being</p>
            </main>
            <footer>
                <Link to="/auth">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public