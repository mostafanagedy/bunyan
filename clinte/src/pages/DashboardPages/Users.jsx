
import { Outlet } from "react-router-dom";
import { useUsersForm } from "../../contexts/UsersFormContext";

const Users = () => {
  const { form, handleChange } = useUsersForm();

  return (
    <section className="py-4">
      <h2>User Management</h2>
      <Outlet context={{ form, handleChange }} />
    </section>
  );
}
export default Users
