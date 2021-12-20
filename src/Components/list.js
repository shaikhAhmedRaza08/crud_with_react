
import '../App.css'
import React from 'react'




const List = ({data, onDelete, getId}) => {
    const onEdit = (id) => {
        getId(id)
    }

    const deleteData = (id) => {
        console.log(id);
        onDelete(id);
    }

    return (
        <div>
            <div id="table">
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Gender</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {data !== null ?
                        <tbody id="list">
                            {data.map((obj) => {
                                let { id, name, role, gender } = obj;
                                return (
                                    <tr key={id}>
                                        <td>{id}</td>
                                        <td>{name}</td>
                                        <td>{role}</td>
                                        <td>{gender}</td>
                                        <td><button onClick={() => onEdit(id)}>Edit</button> <button onClick={() => deleteData(id)}>Delete</button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                        : <div>No Records Found</div>}
                </table>
            </div>
        </div>
    )
}

export default List;