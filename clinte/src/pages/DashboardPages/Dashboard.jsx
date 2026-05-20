import { Routes , Route } from "react-router-dom";
import { useState } from "react";
import Footer from "../../components/Dashborad/Footer/Footer";
import Navbar from "../../components/Dashborad/Navbar/Navbar";
import Sidebar from "../../components/Dashborad/Sidebar/Sidebar";
import HomeDashboard from "./HomeDashboard";
import Users from "./Users.jsx";
import Projects from "./Projects";
import TableDashboard from "../../components/layouts/ui/TableDashboard/TableDashboard.jsx";
import FormDashboard from "../../components/layouts/ui/FormDashboard/FormDashboard.jsx";
import { UsersFormProvider } from "../../contexts/UsersFormContext";

function Dashboard() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar adminName="mohamed" />
      <UsersFormProvider value={{ form, setForm, handleChange }}>
        <div className="d-flex">
          <Sidebar form={form} />
          <main className="flex-grow-1 p-4">
            <Routes>
              <Route path="/" element={<HomeDashboard />} />
              <Route path="/users" element={<Users />}>
                  <Route index element={<TableDashboard />} />
                  <Route path="add" element={<FormDashboard />} />
              </Route>
              <Route path="/Projects" element={<Projects />} />
              <Route path="/Projects" element={<Projects />} />
              <Route path="/Projects" element={<Projects />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </UsersFormProvider>
    </>
  );
}

export default Dashboard;
