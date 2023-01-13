const ProductsList = ({ dataApi, deleteProduct, editProduct }) => {
    const { name, category, price, isAvailable } = dataApi;
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>is Available</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{name}</td>
                        <td>{category}</td>
                        <td>{price}</td>
                        <td>{isAvailable.toString()}</td>
                        <td>
                            <button onClick={() => editProduct(dataApi)}>
                                edit
                            </button>
                        </td>
                        <td>
                            <button onClick={() => deleteProduct(dataApi.id)}>
                                delete
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ProductsList;
