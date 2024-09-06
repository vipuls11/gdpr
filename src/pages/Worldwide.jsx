import React, { useState } from 'react'
import Minimenu from "./mini_menu/Minimenu"
import './css/Worldwide.css'


const Worldwide = () => {
    const [toggle, setToggle] = useState(true)
    const arrow = "Assets/arrowdownload.svg"
    const table = "Assets/sort-by-attributes.svg"
    const edit = "Assets/edit.svg"
    const trash = "Assets/rubbish-bin.svg"
    return (
        <div className="Dashboard">
            <div className="">
                <Minimenu icon={arrow} dashboard="Country Manager" />
            </div>
            <div className="Form_Dashboard">
                <div className="Cointry_list">
                    <p>Country List</p>
                    <button className="Add_button" onClick={() => setToggle(!toggle)}>Add New Country</button>
                </div>
                {toggle && (
                    <div class="form">
                        <h4>Add New Country</h4>
                        <div className="form_country">
                            <div class="input-group">
                                <label >Country</label>
                                <select id="country">
                                    <option value="">Select</option>
                                </select>
                            </div>
                            <div class="input-group">
                                <label >Company</label>
                                <select id="company">
                                    <option value="">Select</option>
                                </select>
                            </div>
                            <div class="input-group">
                                <label >Vertical</label>
                                <select id="vertical">
                                    <option value="">Select</option>
                                </select>
                            </div>
                        </div>
                        <div className="form_date">
                            <div class="input-group">
                                <label>Status</label>
                                <select id="status">
                                    <option value="">Select</option>
                                </select>
                            </div>
                            <div class="input-group">
                                <label>Effective date</label>
                                <input type="date" class="" />
                            </div>
                            <div class="input-group">
                                <label for="remarks">Remarks</label>
                                <textarea id="remarks" placeholder="" rows={6}></textarea>
                            </div>
                            <button type="submit" className="add_btn">Add</button>
                        </div>
                    </div>
                )}
                <div className="Search_Box">
                    <div>
                        <select id="data_value">
                            <option value="" selected>5</option>
                            <option value="" selected>2</option>
                            <option value="" selected>3</option>
                            <option value="" selected>4</option>
                        </select>
                    </div>
                    <div>
                        <input type="text" placeholder="Search" className='Search_input' />
                    </div>
                </div>
                <div className="">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Sr.no <img src={table} alt="" className='table_icon' /></th>
                                <th>Vertical <img src={table} alt="" className='table_icon' /></th>
                                <th>Company <img src={table} alt="" className='table_icon' /></th>
                                <th>Effectivev date <img src={table} alt="" className='table_icon' /></th>
                                <th>Status <img src={table} alt="" className='table_icon' /></th>
                                <th>Actions <img src={table} alt="" className='table_icon' /></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Banking</td>
                                <td>ABC</td>
                                <td>10-July-2016</td>
                                <td>Active</td>
                                <td >
                                    <div className="actions">
                                        <button className='actions_btn'><img src={edit} alt="" className='table_icon_btn' /></button>
                                        <button className='actions_btn'><img src={trash} alt="" className='table_icon_btn' /></button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Digital Media</td>
                                <td>DigitalGuru</td>
                                <td>11-Aug-2016</td>
                                <td>Inactive</td>
                                <td >
                                    <div className="actions">
                                        <button className='actions_btn'><img src={edit} alt="" className='table_icon_btn' /></button>
                                        <button className='actions_btn'><img src={trash} alt="" className='table_icon_btn' /></button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Construction</td>
                                <td>SP Group</td>
                                <td>10-July-2016</td>
                                <td>Active</td>
                                <td >
                                    <div className="actions">
                                        <button className='actions_btn'><img src={edit} alt="" className='table_icon_btn' /></button>
                                        <button className='actions_btn'><img src={trash} alt="" className='table_icon_btn' /></button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Import-Export</td>
                                <td>Arex Enterprises</td>
                                <td>11-Aug-2016</td>
                                <td>Pending</td>
                                <td >
                                    <div className="actions">
                                        <button className='actions_btn'><img src={edit} alt="" className='table_icon_btn' /></button>
                                        <button className='actions_btn'><img src={trash} alt="" className='table_icon_btn' /></button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Healthcare</td>
                                <td>Health First</td>
                                <td>10-July-2016</td>
                                <td>Active</td>
                                <td >
                                    <div className="actions">
                                        <button className='actions_btn'><img src={edit} alt="" className='table_icon_btn' /></button>
                                        <button className='actions_btn'><img src={trash} alt="" className='table_icon_btn' /></button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="page_counter">
                    <div className="Sub_btn">
                        <button className='Submit_btn'>Submit</button>
                        <button className='cancel'>Cancel</button>
                    </div>
                    <div class="pagination">
                        <button className='perview_btn'>Previous</button>
                        <button class="actives">1</button>
                        <button className='page_btn'>2</button>
                        <button className='page_btn'>3</button>
                        <button className='page_btn'>Next</button>
                    </div>
                </div>
            </div>
        </div >


    )
}

export default Worldwide