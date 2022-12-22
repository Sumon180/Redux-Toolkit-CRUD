import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import axios from "axios";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { addUser } from "./userSlice";

const initialState = {
  name: "",
  email: "",
};

const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);
  const { name, email } = values;

  const handleAddUser = () => {
    if (!name || !email) {
      toast.error("Please provide input value");
    } else {
      axios
        .post("http://localhost:8080/create", {
          name,
          email,
        })
        .then(() => {
          setValues({ name: "", email: "" });
        })
        .catch((err) => toast.error(err.response.data));
      toast.success("Contact Added Successfully");
      navigate("/");
    }

    dispatch(
      addUser({
        id: uuidv4(),
        name: values.name,
        email: values.email,
      })
    );
  };

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="Name"
        value={values.name}
        onChange={(e: any) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: "text", placeholder: "Jhon Doe" }}
      />
      <br />
      <TextField
        label="Email"
        value={values.email}
        onChange={(e: any) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: "email", placeholder: "jhondoe@mail.com" }}
      />
      <Button onClick={handleAddUser}>Submit</Button>
      <Link to="/">
        <Button>Go Back</Button>
      </Link>
    </div>
  );
};

export default AddUser;
