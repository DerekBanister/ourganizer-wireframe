import React from "react";
import '../styles/style.css';
import logo from '../images/OURganizer.jpg';

const styles = {
    nav: {
        backgroundColor: "#505254",
        display: "flex",
        justifyContent: "Center",
        height: "300px"
    },
    text: {
        position: "absolute",
        fontSize: "20px",
        top: "0",
        right: "0",
        padding: "15px",
        color: "black",
    },
    dashboard: {
        position: "absolute",
        fontSize: "20px",
        top: "0",
        left: "0",
        padding: "15px",

    }
}

function Nav() {

    return (
        <div>
            <div className="nav" style={styles.nav}>
                <img className="logo" src={logo}></img>
                <a style={styles.text}>Login</a>
                <a style={styles.dashboard}>Dashboard</a>
            </div>
        </div>

    );

}

export default Nav;