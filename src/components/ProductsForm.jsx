import { useForm } from "react-hook-form";
import { useEffect } from "react";
const ProductsForm = ({
    createProduct,
    productSelectToEdit,
    modifiedProduct,
}) => {
    const { register, handleSubmit, reset } = useForm();
    const submit = (data) => {
        productSelectToEdit
            ? modifiedProduct(data)
            : (createProduct(data), reset(resetForm()));
    };
    useEffect(() => {
        productSelectToEdit ? reset(productSelectToEdit) : reset(resetForm());
    }, [productSelectToEdit]);
    const resetForm = () => {
        return { name: null, category: null, price: null, isAvailable: false };
    };
    return (
        <div className="PrincipalContainer">
            <h2 className="textStock">Administar productos</h2>
            <form className="principalForm" onSubmit={handleSubmit(submit)}>
                <div className="contentForm">
                    <label htmlFor="product_name">Name of product</label>
                    <div className="containerInpBtn">
                        <button className="btInp">
                            <i className="bx bx-package"></i>
                        </button>
                        <input
                            className="inp"
                            type="text"
                            id="product_name"
                            {...register("name")}
                        />
                    </div>
                </div>
                <div className="contentForm">
                    <label htmlFor="product_category">Category</label>
                    <div className="containerInpBtn">
                        <button className="btInp">
                            <i className="bx bxs-category"></i>
                        </button>
                        <input
                            className="inp"
                            type="text"
                            id="product_category"
                            {...register("category")}
                        />
                    </div>
                </div>
                <div className="contentForm">
                    <label htmlFor="product_price">Price</label>
                    <div className="containerInpBtn">
                        <button className="btInp">
                            <i className="bx bx-dollar"></i>
                        </button>
                        <input
                            className="inp"
                            type="number"
                            id="product_price"
                            {...register("price")}
                        />
                    </div>
                </div>
                <div className="checkB">
                    <label htmlFor="isAvailable">is available</label>
                    <input
                        type="checkbox"
                        id="isAvailable"
                        placeholder="is Available"
                        {...register("isAvailable")}
                    />
                </div>
                {productSelectToEdit ? (
                    <button className="btnForm" type="submit">
                        Modify
                    </button>
                ) : (
                    <button className="btnForm" type="submit">
                        send
                    </button>
                )}
            </form>
        </div>
    );
};

export default ProductsForm;
