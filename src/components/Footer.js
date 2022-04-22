import React from "react";
import '../styles/style.css';

const styles = {
    creator: {
        fontSize: "10px"
    }
}

function Footer() {
    return (
        <div class="footer">
            <p>OURGanizer™<span style={styles}>Creator:<a href="https://github.com/DerekBanister" target="_blank">Derek Banister</a></span></p>

        </div>
    );

}

export default Footer;