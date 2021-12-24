
import '../App.css'
import React, { useState } from 'react'
import { Button, Modal, Input, Space, Form, Select } from 'antd';
const { Option } = Select;
const { Search } = Input;
const List = ({ data, onDelete, getId }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const onEdit = (id) => {
        getId(id)
    }

    const deleteData = (id) => {
        console.log(id);
        onDelete(id);
    }

    const handleAdd = () => {
        setIsModalVisible(true);
    }

    const submit = () => {
        //Do something
    }
    const handleOk = () => {
        setIsModalVisible(false);
    }

    const handleCancel = () => {
        setIsModalVisible(false);
    }

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Search
                    style={{ width: '50%' }}
                    placeholder="input search text"
                    allowClear
                    enterButton="Search"
                    size="large"
                //   onSearch={onSearch}
                />
            </div>
            <br />
            <div style={{
                margin: 10,
                textAlign: 'center'
            }}>

                <Button onClick={handleAdd} type='primary'>Add New</Button>
            </div>
            <Modal title="Enter Records" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            
                    <Form onSubmit={submit} autoComplete='off'>
                        <Space direction='vertical'>

                        <div>
                            <label htmlFor="stuId">Id</label>
                            <Input  type="number" name="stuId" id="stuId" autoComplete='off' />
                        </div>
                        <div>
                            <label htmlFor="fullName">Full Name</label>
                            <Input  type="text" name="fullName" id="fullName" autoComplete='off' />
                        </div>
                        <div>
                            <label htmlFor="role">Role</label>
                            <Input  type="text" name="role" id="role" autoComplete='off' />
                        </div>
                        <div>
                            <Space>

                            <label htmlFor="gender">Gender</label>
                            <Select  name="gender" id="gender">
                                <Option  value="M">M</Option >
                                <Option  value="F">F</Option >
                            </Select>
                            </Space>
                        </div>
                        </Space>
                    </Form> 
          
            </Modal>
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
                            {/* <Space direction='vertical'> */}
                            {data.map((obj) => {
                                let { id, name, role, gender } = obj;
                                return (
                                    <tr key={id}>
                                        <td>{id}</td>
                                        <td>{name}</td>
                                        <td>{role}</td>
                                        <td>{gender}</td>
                                        <td><Space><Button size='small' type='primary' onClick={() => onEdit(id)}>Edit</Button><Button size='small' type='default' onClick={() => deleteData(id)}>Delete</Button></Space></td>  
                                    </tr>
                                )
                            })}
                            {/* </Space> */}
                        </tbody>
                        : <div>No Records Found</div>}
                </table>
            </div>
        </>
    )
}

export default List;