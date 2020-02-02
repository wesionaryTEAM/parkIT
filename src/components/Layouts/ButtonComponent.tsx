import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import green from "@material-ui/core/colors/green";
import { makeStyles } from "@material-ui/core/styles";
import * as React from "react";

const useStyles = makeStyles({
    primary: {
        background: "linear-gradient(142.47deg, #4e5bb9 38.89%, #4faf8f 119.56%)",
        borderRadius: "5px",
        margin: '5px'
    },
    secondary: {
        background: "#FFFFFF",
        border: "1px solid #0A48E9",
        borderRadius: "80px"
    },
    largeSize: {
        fontSize: "16px",
        padding: "10px 30px"
    },
    mediumSize: {
        fontSize: "14px",
        padding: "5px 15px"
    },
    primaryText: {
        fontStyle: "normal",
        textAlign: "center",
        color: "#FFFFFF",
    },
    secondaryText: {
        textAlign: "center",
        color: "#0A48E9",
        textTransform: 'capitalize'
    },
    disabled: {
        opacity: 0.5,
        cursor: "auto"
    },
    buttonWrapper: {
        position: "relative",
        display: "inline-block",
        width: '100%'
    },
    buttonProgress: {
        color: green[500],
        position: "absolute",
        
    }
});

interface StyledButtonProps {
    primary?: boolean;
    disabled?: boolean;
    size?: "large" | "medium";
    children: string | object;
    onClick?: (event?: any) => void;
    type?: "submit";
    loading?: boolean;
   
}


export const ButtonComponent: React.SFC<StyledButtonProps> = props => {
    
    const buttonStyles = useStyles();
    let buttonClasses = `${
        props.primary ? buttonStyles.primary : buttonStyles.secondary
        }
  ${props.size === "medium" ? buttonStyles.mediumSize : buttonStyles.largeSize}
  ${props.disabled || props.loading ? buttonStyles.disabled : ""}`;
    let textClasses = `${
        props.primary ? buttonStyles.primaryText : buttonStyles.secondaryText
        }`;
    return (
        <div className={buttonStyles.buttonWrapper}>
            <Button
                fullWidth
                type={props.type || "button"}
                className={buttonClasses}
                disabled={props.disabled}
                onClick={props.onClick}
            >
                <span className={textClasses}>{props.children}</span>
                {props.loading && (<CircularProgress className={buttonStyles.buttonProgress} size={30}  />)}
            </Button>
            
        </div>
    );
};
