
import { useState, useContext } from "react"
import { useOutletContext } from "react-router-dom"
import Draft from "../Draft/Draft"

const FormDashboard = () => {
  const context = useOutletContext();
  const form = context?.form || { email: "", password: "" };
  const handleChange = context?.handleChange || (() => {});
  
  return (
    <>
      <div className="container">
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={form.email}
              onChange={handleChange}
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
            />
          </div>
          </form>
      </div>
    </>
  );
}
export default FormDashboard;
