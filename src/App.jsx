import { useState, useEffect } from "react";
import "./App.css";
import ProductsForm from "./components/ProductsForm";
import ProductsList from "./components/ProductsList";
import axios from "axios";

function App() {
    // estados
    const [dataProducts, setDataProduct] = useState([]);
    const [productToEdit, setProductToEdit] = useState(null);
    const [isVisibleCreate, setIsVisibleCreate] = useState(false);
    const [isVisibleUpdate, setIsVisibleUpdate] = useState(false);
    const [isVisibleDelete, setIsVisibleDelete] = useState(false);
    //function toggle
    const toggleCreate = () => {
        setIsVisibleCreate(!isVisibleCreate);
    };
    const toggleUpdate = () => {
        setIsVisibleUpdate(!isVisibleUpdate);
    };
    const toggleDelete = () => {
        setIsVisibleDelete(!isVisibleDelete);
    };

    //Get data API
    const getDataProducts = () => {
        axios
            .get("https://products-crud.academlo.tech/products/")
            .then((resp) => setDataProduct(resp.data))
            .catch((error) => console.error(error));
    };
    useEffect(() => {
        getDataProducts();
    }, []);

    ///create Product
    const createProduct = (data) => {
        axios
            .post("https://products-crud.academlo.tech/products/", data)
            .then(() => (getDataProducts(), toggleCreate()))
            .catch((error) => console.error(error));
    };
    // delete Product
    const deleteProduct = (id) => {
        axios
            .delete(`https://products-crud.academlo.tech/products/${id}/`)
            .then(() => (getDataProducts(), toggleDelete()))
            .catch((error) => console.error(error));
    };
    // edit Product
    const editProduct = (dataProduct) => {
        setProductToEdit(dataProduct);
    };
    const modifiedProduct = (modifiedData) => {
        axios
            .put(
                `https://products-crud.academlo.tech/products/${modifiedData.id}/`,
                modifiedData
            )
            .then(() => (getDataProducts(), toggleUpdate()))
            .catch((error) => console.error(error));
        setProductToEdit(null);
    };
    return (
        <div className="App">
            <ProductsForm
                createProduct={(data) => createProduct(data)}
                productSelectToEdit={productToEdit}
                modifiedProduct={(modifiedData) =>
                    modifiedProduct(modifiedData)
                }
            />
            <hr />
            <br />
            <ProductsList
                dataApi={dataProducts}
                deleteProduct={(id) => deleteProduct(id)}
                editProduct={(dataProduct) => editProduct(dataProduct)}
            />
            {isVisibleCreate && (
                <div className="container_popUp">
                    <div className="popUp">
                        <i className="bx bxs-badge-check"></i>
                        <h3>¡product created!</h3>
                        <button onClick={() => toggleCreate()} className="btn">
                            ok
                        </button>
                    </div>
                </div>
            )}
            {isVisibleUpdate && (
                <div className="container_popUp">
                    <div className="popUp">
                        <i className="bx bx-edit"></i>
                        <h3>¡edited product!</h3>
                        <button onClick={() => toggleUpdate()} className="btn">
                            ok
                        </button>
                    </div>
                </div>
            )}
            {isVisibleDelete && (
                <div className="container_popUp">
                    <div className="popUp">
                        <i className="bx bxs-trash-alt"></i>
                        <h3>¡ removed product!</h3>
                        <button onClick={() => toggleDelete()} className="btn">
                            ok
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
