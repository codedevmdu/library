import React, { useEffect, useState } from 'react'
import "../AdminDashboard.css"
import axios from "axios"
import { Dropdown } from 'semantic-ui-react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import moment from 'moment';

function AddMember() {

    const API_URL = process.env.REACT_APP_API_URL
    const [isLoading, setIsLoading] = useState(false)

    const [userFullName, setUserFullName] = useState(null)
    const [admissionId, setAdmissionId] = useState(null)
    const [employeeId, setEmployeeId] = useState(null)
    const [address, setAddress] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [mobileNumber, setMobileNumber] = useState(null)
    const [recentAddedMembers, setRecentAddedMembers] = useState([])
    const [userType, setUserType] = useState(null)
    const [gender, setGender] = useState(null)
    const [age, setAge] = useState(null)
    const [dob, setDob] = useState(null)
    const [dobString, setDobString] = useState(null)
    const [doj, setDoj] = useState(null)
    const [dojString, setDojString] = useState(null)
    // const [shiftTiming, setShiftTiming] = useState(null)
    // const [shiftTimingString, setShiftTimingString] = useState(null)
    const [shiftNumber, setShiftNumber] = useState(null)
    const [counterNumber, setCounterNumber] = useState(null)
    const [paymentStatus, setPaymentStatus] = useState(null)
    const [examPrep, setExamPrep] = useState(null)
    const [aadharNumber, setAadharNumber] = useState(null)


    const genderTypes = [
        { value: "Male", text: "Male" },
        { value: "Female", text: "Female" }
    ]

    const userTypes = [
        { value: 'Staff', text: 'Staff' },
        { value: 'Student', text: 'Student' }
    ]
    const ShiftTypes = [
        { value: '06:00AM-10:00AM', text:'06:00AM-10:00AM'},
        { value: '10:00AM-02:00PM', text:'10:00AM-02:00PM'},
        { value: '02:00PM-06:00PM', text:'02:00PM-06:00PM'},
        { value: '06:00PM-10:00PM', text:'06:00PM-10:00PM'},
        { value: '10:00PM-05:00AM', text:'10:00PM-05:00AM'},
        { value: '05:00AM-04:59AM', text:'05:00AM-04:59AM'}
    ]
    const CounterNumberTypes = [
        { value: '1', text:'1'},
        { value: '2', text:'2'},
        { value: '3', text:'3'},
        { value: '4', text:'4'},
        { value: '5', text:'5'}
    ]
    const paymentTypes = [
        { value : '1 Month', text:'1 Month'},
        { value : '2 Months', text:'2 Months'},
        { value : '4 Months', text:'4 Months'},
        { value : '6 Months', text:'6 Months'},
        { value : '12 Months', text:'12 Months'},
    ]
    //Add a Member
    const addMember = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        if (userFullName !== null && userType !== null && age !== null && dobString !== null && gender !== null && address !== null && mobileNumber !== null && email !== null && password !== null && doj !== null && dojString !== null &&  shiftNumber !== null && counterNumber !== null && paymentStatus !==null && examPrep !==null && aadharNumber !== null) {
            //  && shiftTiming !== null && setShiftTimingString !==null &&
            const userData = {
                userType: userType,
                userFullName: userFullName,
                admissionId: admissionId,
                employeeId: employeeId,
                age: age,
                dob: dobString,
                gender: gender,
                address: address,
                mobileNumber: mobileNumber,
                email: email,
                password: password,
                doj:dojString,
                // shiftTiming:shiftTimingString,
                shiftNumber:shiftNumber,
                counterNumber:counterNumber,
                paymentStatus:paymentStatus,
                examPrep:examPrep,
                aadharNumber:aadharNumber,

            }
            try {
                const response = await axios.post(API_URL + "api/auth/register", userData)
                if (recentAddedMembers.length >= 5) {
                    recentAddedMembers.splice(-1)
                }
                setRecentAddedMembers([response.data, ...recentAddedMembers])
                setUserFullName(null)
                setUserType("Student")
                setAdmissionId(null)
                setEmployeeId(null)
                setAddress(null)
                setMobileNumber(null)
                setEmail(null)
                setPassword(null)
                setGender(null)
                setAge(null)
                setDob(null)
                setDobString(null)
                setDoj(null)
                setDojString(null)
                // setShiftTiming(null)
                // setShiftTimingString(null)
                setShiftNumber(null)
                setCounterNumber(null)
                setPaymentStatus(null)
                setExamPrep(null)
                setAadharNumber(null)

                alert("Member is Successfully Added")
            }
            catch (err) {
                console.log(err)
            }
        }
        else {
            alert("All the fields must be filled")
        }
        setIsLoading(false)
    }

    //Fetch Members
    useEffect(() => {
        const getMembers = async () => {
            try {
                const response = await axios.get(API_URL + "api/users/allmembers")
                const recentMembers = await response.data.slice(0, 5)
                setRecentAddedMembers(recentMembers)
            }
            catch (err) {
                console.log(err)
            }
        }
        getMembers()
    }, [API_URL])

    return (
        <div>
            <p className="dashboard-option-title">Add a Member</p>
            <div className="dashboard-title-line"></div>
            <form className="addmember-form" onSubmit={addMember}>
                <div className='semanticdropdown'>
                    <Dropdown
                        placeholder='User Type'
                        fluid
                        selection
                        options={userTypes}
                        onChange={(event, data) => setUserType(data.value)}
                    />
                </div>
                <label className="addmember-form-label" htmlFor="userFullName">Full Name<span className="required-field">*</span></label><br />
                <input className="addmember-form-input" type="text" name="userFullName" value={userFullName} required onChange={(e) => setUserFullName(e.target.value)}></input><br />

                <label className="addmember-form-label" htmlFor={userType === "Student" ? "admissionId" : "employeeId"}>{userType === "Student" ? "Admission Id" : "Employee Id"}<span className="required-field">*</span></label><br />
                <input className="addmember-form-input" type="text" value={userType === "Student" ? admissionId : employeeId} required onChange={(e) => { userType === "Student" ? setAdmissionId(e.target.value) : setEmployeeId(e.target.value) }}></input><br />

                <label className="addmember-form-label" htmlFor="mobileNumber">Mobile Number<span className="required-field">*</span></label><br />
                <input className="addmember-form-input" type="number" name="phone" maxLength="10" pattern="[1-9]{1}[0-9]{9}" value={mobileNumber} required onChange={(e) => setMobileNumber(e.target.value)}></input><br />

                <label className="addmember-form-label" htmlFor="aadharNumber">Aadhar Number<span className="required-field">*</span></label><br />
                <input className="addmember-form-input" type="text" data-type="adhaar-number" maxLength="12" value={aadharNumber} required onChange={(e) => setAadharNumber(e.target.value)}></input><br />

                <label className="addmember-form-label" htmlFor="doj">Date of Admission<span className="required-field">*</span></label><br />
                {/* <input className="addmember-form-input" type="date" value={doj} required onChange={(e) => setDoj(e.target.value)}></input><br /> */}
                <DatePicker
                    className="date-picker"
                    placeholderText="MM/DD/YYYY"
                    selected={doj}
                    onChange={(date) => { setDoj(date); setDojString(moment(date).format("MM/DD/YYYY")) }}
                    dateFormat="MM/dd/yyyy"
                />
                <br />

                <label className="addmember-form-label" htmlFor="paymentStatus">Payment For<span className="required-field">*</span></label><br />
                {/* <input className="addmember-form-input" type="date" value={doj} required onChange={(e) => setDoj(e.target.value)}></input><br /> */}
                <div className='semanticdropdown'>
                    <Dropdown
                        placeholder='Valid For'
                        fluid
                        selection
                        value={paymentStatus}
                        options={paymentTypes}
                        onChange={(event, data) => setPaymentStatus(data.value)}
                    />
                </div>
                <br />

                <label className="addmember-form-label" htmlFor="examPrep">Exam Preparation<span className="required-field">*</span></label><br />
                <input className="addmember-form-input" type="text" value={examPrep} required onChange={(e) => setExamPrep(e.target.value)}></input><br />


                {/* <label className="addmember-form-label" htmlFor="shiftTiming">Shift Timing<span className="required-field">*</span></label><br />
               
                <TimePicker
                    label="Time"
                    selected={shiftTiming}
                    onChange={(time) => { setShiftTiming(time); setShiftTimingString(moment().format("HH:MM A")) }}
                    
                />
                <span> To </span>
                <TimePicker
                    label="Time"
                    selected={shiftTiming}
                    onChange={(time) => { setShiftTiming(time); setShiftTimingString(moment().format("HH:MM A")) }}
                    
                /> */}
                <br />

                <label className="addmember-form-label" htmlFor="shiftNumber">Shift Number<span className="required-field">*</span></label><br />
                <div className='semanticdropdown'>
                    <Dropdown
                        placeholder='Choose Shift Number'
                        fluid
                        selection
                        value={shiftNumber}
                        options={ShiftTypes}
                        onChange={(event, data) => setShiftNumber(data.value)}
                    />
                </div>

                <label className="addmember-form-label" htmlFor="counterNumber">Counter Number<span className="required-field">*</span></label><br />
                <div className='semanticdropdown'>
                    <Dropdown
                        placeholder='Select Counter Number'
                        fluid
                        selection
                        value={counterNumber}
                        options={CounterNumberTypes}
                        onChange={(event, data) => setCounterNumber(data.value)}
                    />
                </div>

                <label className="addmember-form-label" htmlFor="gender">Gender<span className="required-field">*</span></label><br />
                <div className='semanticdropdown'>
                    <Dropdown
                        placeholder='User Type'
                        fluid
                        selection
                        value={gender}
                        options={genderTypes}
                        onChange={(event, data) => setGender(data.value)}
                    />
                </div>

                <label className="addmember-form-label" htmlFor="age">Age<span className="required-field">*</span></label><br />
                <input className="addmember-form-input" type="text" value={age} required onChange={(e) => setAge(e.target.value)}></input><br />

                <label className="addmember-form-label" htmlFor="dob">Date of Birth<span className="required-field">*</span></label><br />
                <DatePicker
                    className="date-picker"
                    placeholderText="MM/DD/YYYY"
                    selected={dob}
                    onChange={(date) => { setDob(date); setDobString(moment(date).format("MM/DD/YYYY")) }}
                    dateFormat="MM/dd/yyyy"
                />
                <br />

                <label className="addmember-form-label" htmlFor="address">Address<span className="required-field">*</span></label><br />
                <input className="addmember-form-input address-field" value={address} type="text" required onChange={(e) => setAddress(e.target.value)}></input><br />

                <label className="addmember-form-label" htmlFor="email">Email<span className="required-field">*</span></label><br />
                <input className="addmember-form-input" type="email" value={email} required onChange={(e) => setEmail(e.target.value)}></input><br />

                <label className="addmember-form-label" htmlFor="password">Password<span className="required-field">*</span></label><br />
                <input className="addmember-form-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input><br />

                <input className="addmember-submit" type="submit" value="SUBMIT" disabled={isLoading} ></input>

            </form>
            <p className="dashboard-option-title">List of Member</p>
            <div className="dashboard-title-line"></div>
            <table className='admindashboard-table'>
                <tr>
                    <th>S.No</th>
                    <th>Member Type</th>
                    <th>Member ID</th>
                    <th>Member Name</th>
                </tr>
                {
                    recentAddedMembers.map((member, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{member.userType}</td>
                                <td>{member.userType === "Student" ? member.admissionId : member.employeeId}</td>
                                <td>{member.userFullName}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default AddMember
