import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/actions";

const DataList = () => {
    const dispatch = useDispatch();
    const { data, loading, error, searchTerm } = useSelector((state) => state);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    if (loading) return <p>Loading data...</p>;
    if (error) return <p>Error: {error}</p>;

    const filteredData = data.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <ul>
            {filteredData.length > 0 ? (
                filteredData.map((item) => (
                    <li key={item.id} style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                        <strong>{item.title}</strong>
                        <p>{item.body}</p>
                    </li>
                ))
            ) : (
                <p>No results found.</p>
            )}
        </ul>
    );
};

export default DataList;
