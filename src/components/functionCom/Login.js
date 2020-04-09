import React, { useState }  from "react";

export default function Login() {
    //tương tự như class , khởi tạo user & pass rỗng
     const [userName, setUsername] = useState("")
     const [password, setPassword] = useState("")
     //dùng quản lý user & pass
     const [user, setUser] = useState(null)
     
     const handleSubmit = event =>{
         event.preventDefault();
        const userData = {userName, password}
        setUser(userData)
        setUsername("")
        setPassword("")
     }
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Form Login</h2>
      <form
        style={{
          display: "grid",
          justifyItems: "center",
          alignItems: "center"
        }}
        onSubmit = { handleSubmit}
      >
        <input type="text" placeholder="Username" value={userName} onChange = {event => setUsername(event.target.value)}/>
        <input type="password" placeholder="Password" value= {password} onChange = {event => setPassword(event.target.value)}/>
        <button type="submit" >Submit</button>
      </form>
      {/* nếu user có data,  */}
     {user && JSON.stringify(user, null, 2)}
    </div>
  );
}
