import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <p>Jane Fernandez &copy; {new Date().getFullYear()}</p>
        </footer>
    );
};

export default Footer;