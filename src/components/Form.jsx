import React, { useState } from "react";
import "./Form.css";
function Form() {
  const [form, setForm] = useState({
    date: "",
    category: "",
    description: "",
    amount: "",
    payment: "",
  });

  const [records, setRecords] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      const updated = [...records];
      updated[editIndex] = form;
      setRecords(updated);
      setEditIndex(null);
    } else {
      setRecords([...records, form]);
    }

    setForm({
      date: "",
      category: "",
      description: "",
      amount: "",
      payment: "",
    });
  };

  const handleEdit = (index) => {
    setForm(records[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const confirm = window.confirm("Are you sure you want to delete?");
    if (confirm) {
      const filtered = records.filter((_, i) => i !== index);
      setRecords(filtered);
    }
  };

  return (
    <div className="contact-right" style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>{editIndex !== null ? "Edit" : "Submit"} Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date:</label>
          <br />
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Category</label>
          <br />
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            required
          >
            <option value="">--Select--</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
          </select>
        </div>
        <div>
          <label>Description:</label>
          <br />
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <label>Amount:</label>
          <br />
          <input
            type="text"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Payment Method:</label>
          <br />
          <select
            name="payment"
            value={form.payment}
            onChange={handleChange}
            required
          >
            <option value="">--Select--</option>
            <option value="cash">Cash</option>
            <option value="card">Card</option>
          </select>
        </div>
        <button type="submit" style={{ marginTop: "10px" }}>
          {editIndex !== null ? "Update" : "Submit"}
        </button>
      </form>

      <hr />

      <h3>Submitted Records</h3>
      {records.length === 0 && <p>No records found</p>}
      <ul>
        {records.map((record, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            <strong>{record.name}</strong> | {record.date} | {record.card}
            <br />
            <em>{record.description}</em>
            <br />
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button
              onClick={() => handleDelete(index)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Form;
