import React from "react";

function SessionLength(props) {
    function increaseSessionCounter () {
        if (props.sessionLength === 60) {
         return;
        }
        props.increaseSession();
    }


    function decreaseSessionCounter () {
        if (props.sessionLength === 1) {
         return;
        }
        props.decreaseSession();
    }

    return (
        <section>
            <h4>Session Length</h4>
        <section className="interval-container">
            <button disabled={props.isPlay === true ? "disabled"
            : ""} onClick={decreaseSessionCounter}>Down</button>
            <p className="interval-length">{props.sessionLength}</p>
            <button disabled={props.isPlay === true ? "disabled"
            : ""} onClick={increaseSessionCounter}>Up</button>
        </section>
        </section>
    )
}
export default SessionLength;