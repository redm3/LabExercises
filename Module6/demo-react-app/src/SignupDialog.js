//code taken from https://reactjs.org/docs/composition-vs-inheritance.html, see there for more detail

import React from 'react'

function FancyBorder(props) {
    return (
        <div className={'FancyBorder componentBox FancyBorder-' + props.color}>
            {props.children} {/* everything in between the opening <FancyBorder> and closing </FancyBorder> tags on lines 15-19 */}
        </div>
    );
}

function Dialog(props) {
    return (
      <FancyBorder color="frostedglass">
            <h1 className="Dialog-title">{props.title}</h1>
            <p className="Dialog-message">{props.message}</p>
            {props.children} {/* everything in between the opening <Dialog> and closing </Dialog> tags on lines 35-39 */}
      </FancyBorder>
    );
}
  
function SignUpDialog() {
    const [login, setLogin] = React.useState('')
  
    const handleChange = (e) => {
        setLogin(e.target.value);
    }
    
    const handleSignUp = () => {
        alert(`Welcome aboard, ${login}!`);
    }

    return (
        <Dialog title="Mars Exploration Program" message="How should we refer to you?">
            <input value={login} onChange={handleChange} /> {/* these are 'children' of the Dialog component */}

            <button onClick={handleSignUp}>Sign Me Up!</button>
        </Dialog>
    );
  
}

export default SignUpDialog;


//add support to FancyBorder for another colour or style
//extract FancyBorder to its own file and use it to wrap around and style another component, eg. clock or weather
//create another composition component (similar to FancyBorder) that uses children and renders the wrapped component with a background image