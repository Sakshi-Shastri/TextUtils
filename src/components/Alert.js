import React from 'react'

function Alert(props) {
    const capitalise = (word) =>{
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

  return (
    props.alert && //This syntax is used to conditionally render the alert component only when there is an alert to show. If props.alert is null or undefined, the component will not render anything.
    <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalise(props.alert.type)}</strong>: {props.alert.msg}
    </div>
  );
}

export default Alert
