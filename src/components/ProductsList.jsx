const ProductsList = ({ dataApi, deleteProduct, editProduct }) => {
    return (
        <div className="container-table">
            <table className="table">
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
                                <button
                                    className="bt_edit"
                                    onClick={() => editProduct(dataApi)}
                                >
                                    <i className="bx bx-edit-alt"></i>
                                </button>
                            </td>
                            <td>
                                <button
                                    className="bt_trash"
                                    onClick={() => deleteProduct(dataApi.id)}
                                >
                                    <i className="bx bxs-trash"></i>
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
