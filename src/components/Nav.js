import React from "react";
import '../styles/style.css';
import logo from '../images/OURganizer.jpg';

const styles = {
    button: {
        display: "flex",
        justifyContent: "center",

    },
    buttonHolder: {
        display: "flex",
        justifyContent: "Center",
        alignItems: "center"
    }

}

function Nav() {

    return (
        <div>
            <div className="navitron" style={styles.nav}>
                <img className="logo" src={logo}></img>
                {/* <a style={styles.text}>Login</a>
                    <a style={styles.dashboard}>Dashboard</a> */}
                <div style={styles.buttonHolder}>
                    <button className="buttons logo" style={styles.button}>Login</button>
                    <button className="buttons logo" style={styles.button}>Sign-Up</button>
                </div>
            </div>

        </div>
    );

}

export default Nav;