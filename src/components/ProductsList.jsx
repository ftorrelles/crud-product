const ProductsList = ({ dataApi, deleteProduct, editProduct }) => {
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
                    {dataApi.map((dataApi, index) => (
                        <tr key={index}>
                            <td>{dataApi.name}</td>
                            <td>{dataApi.category}</td>
                            <td>{dataApi.price}</td>
                            <td>{dataApi.isAvailable.toString()}</td>
                            <td>
                                <button onClick={() => editProduct(dataApi)}>
                                    edit
                                </button>
                            </td>
                            <td>
                                <button
                                    onClick={() => deleteProduct(dataApi.id)}
                                >
                                    delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductsList;
