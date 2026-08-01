import { useState } from "react";

export default function NotificationForm({ onClose }) {
  const [formData, setFormData] = useState({
    title: "",
    message: "",
    recipient: "",
    type: "Announcement",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Notification Added Successfully!");

    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      {/* Title */}
      <div>
        <label className="block font-medium mb-1">
          Title
        </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border rounded-lg p-2"
          required
        />
      </div>

      {/* Message */}
      <div>
        <label className="block font-medium mb-1">
          Message
        </label>
        <textarea
          rows="4"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full border rounded-lg p-2"
          required
        />
      </div>

      {/* Recipient */}
      <div>
        <label className="block font-medium mb-1">
          Recipient
        </label>
        <input
          type="text"
          name="recipient"
          value={formData.recipient}
          onChange={handleChange}
          className="w-full border rounded-lg p-2"
          placeholder="Example: III IT / All Students"
          required
        />
      </div>

      {/* Type */}
      <div>
        <label className="block font-medium mb-1">
          Type
        </label>
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full border rounded-lg p-2"
        >
          <option>Announcement</option>
          <option>Reminder</option>
          <option>Update</option>
          <option>Success</option>
        </select>
      </div>

      {/* Date */}
      <div>
        <label className="block font-medium mb-1">
          Date
        </label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full border rounded-lg p-2"
          required
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3 pt-3">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 border rounded-lg"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Save Notification
        </button>
      </div>
    </form>
  );
}