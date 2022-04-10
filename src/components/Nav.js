import React from "react";
import '../styles/style.css';
import logo from '../images/logo.png';

const styles = {
    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonHolder: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
}

function Nav() {

    return (
        <div>
            <div className="navitron" style={styles.nav}>
                <img className="logo" src={logo}></img>
                <div style={styles.buttonHolder} className="buttonHolder">
                    <button className="buttons logo" style={styles.button}>Login</button>
                    <button className="buttons logo" style={styles.button}>Sign-Up</button>
                </div>
            </div>
        </div>
    );

}

export default Nav;