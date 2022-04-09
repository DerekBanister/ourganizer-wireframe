import React from "react";

const styles = {
    buttons: {
        display: "flex",
        justifyContent: "center",
        borderBottom: "1px solid black",
        padding: "10px"
    },
}
function Main() {
    return (
        <div style={styles.buttons}>
            <div className="buttonHolder" >
                <button className="buttons">Passwords</button>
                <button className="buttons">Documents</button>
                <button className="buttons">Web Site's</button>
            </div>
        </div>
    );

}

export default Main;