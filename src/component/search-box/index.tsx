import './style.css';

interface ISearchBox {
    placeHolder: string;
}

function SearchBox({placeHolder}: ISearchBox) {
    return (
        <button className="button-style d-flex align-items-center justify-content-center">
            { placeHolder }
        </button>
    )
}

export default SearchBox;
