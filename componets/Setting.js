import React, { useEffect, useState } from 'react';

const Setting = () => {
    const [formDate,setFormData]=useState({})

    const url=test_admin_page?.ajax_url
    const nonce=test_admin_page?.nonce


    const handleSubmit =e=>{
        e.preventDefault();
        fetch(`${url}?action=form_data_post&nonce=${nonce}&email=${formDate?.email}&gender=${formDate?.gender}&city=${formDate?.city}&name=${formDate?.name}&position=${formDate?.position}`)
        .then(res=>res.json())
        .then(data=>console.log(data))
        // console.log(formDate);



    }
    useEffect(()=>{
         fetch(`${url}?action=form_data_get&nonce=${nonce}`)
        .then(res=>res.json())
        .then(data=>setFormData(data.data))

    },[])
    return (
        <div className='' style={{marginTop:"50px"}}>
          {/* <form onSubmit={handleSubmit}>
            <label>Title </label>
            <input type='text' value={formDate?.title} onChange={e=>setFormData({...formDate,title:e.target.value})} ></input>
            <label>Name </label>
            <input type='text' value={formDate?.name} onChange={e=>setFormData({...formDate,name:e.target.value})} ></input>

            <button>Submit</button>
          </form> */}
          <div
      style={{
        backgroundColor: "#fff",
        maxWidth: "480px",
        margin: "auto",
        padding: "30px 40px",
        borderRadius: "12px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        background: "#fff",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#222", marginBottom: "30px" }}>
        User Information
      </h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "20px" }}>
          <label style={labelStyle}>Email:</label>
          <input
            type="email"
            name="email"
            value={formDate?.email}
            onChange={e=>setFormData({...formDate,email:e.target.value})}
            placeholder="example@mail.com"
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label style={labelStyle}>Name:</label>
          <input value={formDate?.name}  onChange={e=>setFormData({...formDate,name:e.target.value})} type="text" name="name" style={inputStyle} />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label style={labelStyle}>Position:</label>
          <input value={formDate?.position} onChange={e=>setFormData({...formDate,position:e.target.value})}  type="text" name="position" style={inputStyle} />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label style={labelStyle}>Gender:</label>
          <div style={{ paddingLeft: "10px" }}>
            <label>
              <input  checked={formDate.gender === "male"} onChange={e=>setFormData({...formDate,gender:e.target.value})}  type="radio" name="gender" value="male" /> Male
            </label>
            <label style={{ marginLeft: "15px" }}>
              <input checked={formDate.gender === "female"} onChange={e=>setFormData({...formDate,gender:e.target.value})} type="radio" name="gender" value="female" /> Female
            </label>
            <label style={{ marginLeft: "15px" }}>
              <input checked={formDate.gender === "other"} onChange={e=>setFormData({...formDate,gender:e.target.value})} type="radio" name="gender" value="other" /> Other
            </label>
          </div>
        </div>

        <div style={{ marginBottom: "30px" }}>
          <label style={labelStyle}>City:</label>
          <select value={formDate?.city} onChange={e=>setFormData({...formDate,city:e.target.value})} name="city" style={inputStyle}>
            <option value="">Select City</option>
            <option value="dhaka">Dhaka</option>
            <option value="chittagong">Chittagong</option>
            <option value="khulna">Khulna</option>
            <option value="rajshahi">Rajshahi</option>
            <option value="barisal">Barisal</option>
          </select>
        </div>

        <button type="submit" style={buttonStyle}>
          Submit
        </button>
      </form>
    </div>
            
        </div>
    );
};

const inputStyle = {
  width: "100%",
  padding: "10px 12px",
  border: "1px solid #ccc",
  borderRadius: "6px",
  fontSize: "15px",
};

const labelStyle = {
  display: "block",
  marginBottom: "6px",
  color: "#444",
  fontWeight: 500,
};

const buttonStyle = {
  width: "100%",
  padding: "12px 0",
  backgroundColor: "black",
  color: "white",
  fontSize: "16px",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight:"bold"
};

export default Setting;