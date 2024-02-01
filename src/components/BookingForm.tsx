import React, { useState } from "react";

interface BookingFormProps {
  showName: string;
}

interface FormData {
  name: string;
  email: string;
}

const BookingForm: React.FC<BookingFormProps> = ({ showName }): JSX.Element => {
  const initialFormData: FormData = {
    name: "",
    email: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const existingData: FormData[] = JSON.parse(
      localStorage.getItem("bookingData") || "[]"
    );
    const updatedData: FormData[] = [...existingData, formData];
    localStorage.setItem("bookingData", JSON.stringify(updatedData));
    setFormData(initialFormData);
  };

  return (
    <div className="border border-black max-w-96 p-6 rounded-lg shadow-md mt-10">
      <h2 className="text-xl font-semibold mb-4">
        Book <span className="italic underline">{showName}</span> Tickets
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="mt-1 block w-[90%] pl-3 h-10 border border-gray-300 focus:border-purple-500 rounded-md focus:right-1 focus:ring-purple-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="mt-1 block w-[90%] pl-3 h-10 border border-gray-300 focus:border-purple-500 rounded-md focus:right-1 focus:ring-purple-500"
          />
        </div>
        <button
          type="submit"
          className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
