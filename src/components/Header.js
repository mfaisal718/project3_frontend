import 'bulma/css/bulma.min.css';
import { Navbar } from 'react-bulma-components';

function Header(props) {
    return (
        <nav>
            <Navbar.Item href="/" >
                <img
                    src="https://i.imgur.com/BZvqNCA.jpg"
                    alt="South Park"
                    height="30"
                    width="60"
                    color="primary"
                />
                <Navbar.Link >FANTASY NEWS</Navbar.Link>
            </Navbar.Item>
        </nav>
    );
}

export default Header;