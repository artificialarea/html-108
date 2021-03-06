import React from "react";
import styles from "./ResetButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ResetButton = props => (
    <div 
        className={styles.root} 
        onClick={props.onReset} 
        onKeyPress={props.onReset} 
        tabIndex="0" 
        aria-label="reset track">
        <span className={styles.label}>
            <FontAwesomeIcon icon="recycle" />
        </span>
    </div>
);

export default ResetButton;
