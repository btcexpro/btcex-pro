import './style.css';

interface IButton {
    text: string;
}

function Button({text}: IButton) {
    return (
        <button className="button-style d-flex align-items-center justify-content-center">
            { text }
        </button>
    )
}

export default Button;
