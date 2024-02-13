import './Navbar.scss'

const Navbar = () => {
    return (
        <header className="header">
            <section className="flex">
                <a href="#" className="logo"> <span> IN</span>SHAPE </a>
                <div id="menu-btn" className="fas fa-bars"></div>
                <nav className="navbar">
                    <a href="#">home</a>
                    <a href="#About">about</a>
                    <a href="#Pricing">pricing</a>
                    <a href="#Trainers">trainers</a>
                    <a href="#Blogs">blogs</a>

                </nav>

            </section>
        </header>
    )
}

export default Navbar