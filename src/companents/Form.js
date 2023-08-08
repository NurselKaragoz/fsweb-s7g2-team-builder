import { useEffect, useState } from "react";

function Form() {
  const [formData, setFormData] = useState({ name: "", email: "", job: "" });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const hadleSubmit = (e) => {
    e.preventDefault();
    console.log("formm submit", formData);
  };
  useEffect(() => {
    console.log("Login Data", formData);
  }, [formData]);
  return (
    <form onSubmit={(e) => hadleSubmit(e)}>
      <label htmlFor="user-name">Name</label>
      <input id="user-name" type="text" name="name" onChange={changeHandler} />
      <label htmlFor="user-mail">Email</label>
      <input
        id="user-mail"
        type="email"
        name="email"
        onChange={changeHandler}
      />
      <label htmlFor="user-job">Rol</label>
      <input id="user-job" type="text" name="job" onChange={changeHandler} />
      <button type="submit">Submit</button>
    </form>
  );
}
export default Form;
