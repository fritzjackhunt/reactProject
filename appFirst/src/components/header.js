import react from 'react';

function Header(props){
    return (
        <react.Fragment>
            <h1>{props.info}</h1>
        </react.Fragment>
    )
}

export { Header };