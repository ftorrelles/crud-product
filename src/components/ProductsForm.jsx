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
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div className="contentForm">
                    <label htmlFor="product_name">Name</label>
                    <input
                        type="text"
                        id="product_name"
                        placeholder="Name product"
                        {...register("name")}
                    />
                </div>
                <div className="contentForm">
                    <label htmlFor="product_category">Category</label>
                    <input
                        type="text"
                        id="product_category"
                        placeholder="Category"
                        {...register("category")}
                    />
                </div>
                <div className="contentForm">
                    <label htmlFor="product_price">Price</label>
                    <input
                        type="number"
                        id="product_price"
                        placeholder="Price"
                        {...register("price")}
                    />
                </div>
                <div className="contentForm">
                    <label htmlFor="isAvailable">is available</label>
                    <input
                        type="checkbox"
                        id="isAvailable"
                        placeholder="is Available"
                        {...register("isAvailable")}
                    />
                </div>
                <button type="submit">send</button>
            </form>
        </div>
    );
};

export default ProductsForm;
