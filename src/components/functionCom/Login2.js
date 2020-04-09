import React, { useState } from "react";

const inicialState = {
    username: "",
    password: "",
    email: "",
    phone: ""
}
export default function Login() {
  const [form, setForm] = useState(inicialState);
  const [user, setUser] = useState(null);

  const handleChange = event => {
    setForm({
        ...form,
      [event.target.name]: event.target.value
    });
  };
  const handleSubmit = event => {
      event.preventDefault();
      setUser(form);
      setForm(inicialState)
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
        onSubmit={handleSubmit}
      >
        <input type="text" placeholder="Username" value={form.username} name='username' onChange={handleChange} />
        <input type="password" placeholder="Password" value={form.password} name='password' onChange={handleChange}/>
        <input type="text" placeholder="Email" value={form.email} name='email' onChange={handleChange}/>
        <input type="number" placeholder="Phone Number" value={form.phone} name='phone' onChange={handleChange}/>
        <button type="submit">Submit</button>
      </form>
      {user && JSON.stringify(user, null, 2)}
    </div>
  );
}
