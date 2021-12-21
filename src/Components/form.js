import React from 'react'
import '../App.css';

const Form = ({ addForm, formDataById, setDataById, data, updateForm }) => {

    const submit = (event) => {
        event.preventDefault();
        let employee = data.find(employee => employee.id === formDataById.id)
        if(employee !== undefined){
            updateForm(employee.id, formDataById);
        } else {
            addForm(formDataById);
        }
    }

    return (
        <div>
            <div className="form-card">
                <div className="form-card-body">
                    <form onSubmit={submit} autoComplete='off'>
                        <div>
                            <label htmlFor="stuId">Id</label>
                            <input value={formDataById.id} onChange={(e) => setDataById({ ...formDataById, id: Number(e.target.value) })} type="number" name="stuId" id="stuId" autoComplete='off' />
                        </div>
                        <div>
                            <label htmlFor="fullName">Full Name</label>
                            <input value={formDataById.name} onChange={(e) => setDataById({ ...formDataById, name: e.target.value })} type="text" name="fullName" id="fullName" autoComplete='off' />
                        </div>
                        <div>
                            <label htmlFor="role">Role</label>
                            <input value={formDataById.role} onChange={(e) => setDataById({ ...formDataById, role: e.target.value })} type="text" name="role" id="role" autoComplete='off' />
                        </div>
                        <div>
                            <label htmlFor="gender">Gender</label>
                            <select value={formDataById.gender} onChange={(e) => setDataById({ ...formDataById, gender: e.target.value })} name="gender" id="gender">
                                <option value="M">M</option>
                                <option value="F">F</option>
                            </select>
                        </div>
                        <div>
                            <input type="submit" value="submit" id="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form
