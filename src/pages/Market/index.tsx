import Table from "./components/Table";
import './index.css';
const Market = () => {
    return (
        <div className="container-fluid">
            <nav aria-label="breadcrumb" className="my-5">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Market</li>
                </ol>
            </nav>
            <Table />
        </div>
    );
}

export default Market;
