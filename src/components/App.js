
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
 const [users, setUsers] = useState([{ name: "", age: "" }]);

  // Handle input field changes dynamically based on index and field name
  const handleChange = (index, e) => {
  const{name,value}=e.target;
  console.log(name,value);
  setUsers((prev) =>
      prev.map((user, i) => (i === index ? { ...user, [name]: value } : user))
    );
  };

  // Add a new empty row of name and age fields
  const handleAddFields = () => {
   setUsers(prev=>[...prev,{name:"",age:""}])
  };

  // Optional: Remove a specific row if needed
  const handleRemoveFields = (index) => {
    setUsers(prev=> prev.filter((user,i)=>i!==index));
  };

  // Handle form submission
  const handleSubmit = (e) => {
e.preventDefault();
console.log(users);
  }
  return (
    <main id="main">
      <div className="form-container" style={{ maxWidth: "500px", margin: "40px auto", padding: "20px" }}>
        <h2>Dynamic User Form</h2>
        <form onSubmit={handleSubmit}>
          {users.map((user, index) => (
            <div key={index} className="form-row" style={{ display: "flex", gap: "10px", marginBottom: "15px", alignItems: "center" }}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={user.name}
                onChange={(e) => handleChange(index, e)}
                required
                style={{ padding: "8px", flex: 1 }}
              />
              <input
                type="number"
                name="age"
                placeholder="Age"
                value={user.age}
                onChange={(e) => handleChange(index, e)}
                required
                style={{ padding: "8px", width: "80px" }}
              />
              {users.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemoveFields(index)}
                  style={{ padding: "8px 12px", background: "#ff4d4d", color: "#fff", border: "none", cursor: "pointer" }}
                >
                  ✕
                </button>
              )}
            </div>
          ))}

          <div className="button-group" style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
            <button
              type="button"
              onClick={handleAddFields}
              style={{ padding: "10px 16px", background: "#007bff", color: "#fff", border: "none", cursor: "pointer" }}
            >
              Add More
            </button>
            <button
              type="submit"
              style={{ padding: "10px 16px", background: "#28a745", color: "#fff", border: "none", cursor: "pointer" }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};


export default App;