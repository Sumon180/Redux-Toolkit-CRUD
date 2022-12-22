import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { editUser } from "./userSlice";

const initialState = {
  name: "",
  email: "",
};

const EditUser = () => {
  const params = useParams();
  const dispatch = useDispatch();
  // const users = useSelector((store: any) => store.users);
  const navigate = useNavigate();
  // const existingUser = users.filter((user: any) => user.id === params.id);
  // const {name, email} = existingUser[0];
  const [values, setValues] = useState(initialState);
  const { name, email } = values;

  const { id } = useParams(); // for Updating

  // For update Get
  useEffect(() => {
    axios.get(`http://localhost:8080/read/${id}`).then((resp) => {
      setValues({ ...resp.data });
    });
  }, [id]);

  const handleEditUser = () => {
    // for Updating
    axios
      .put(`http://localhost:8080/update/${id}`, {
        name,
        email,
      })
      .then(() => {
        setValues({ name: "", email: "" });
      })
      .catch((err) => toast.error(err.response.data));
    toast.success("Contact Updated Successfully");

    setTimeout(() => navigate("/"), 500);

    dispatch(
      editUser({
        id: params.id,
        name: values.name,
        email: values.email,
      })
    );
    navigate("/");
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
      <Button onClick={handleEditUser}>Update</Button>
      <Link to="/">
        <Button onClick={handleEditUser}>Go Back</Button>
      </Link>
    </div>
  );
};

export default EditUser;
