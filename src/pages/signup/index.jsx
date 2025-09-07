import { CornerUpLeft, House } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate()
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    day: "1",
    month: "Jan",
    year: "2000",
    gender: "",
    email: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log(form);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md text-center">
          <h2 className="text-2xl font-semibold mb-4">
            You have successfully signed up! 🥳🎉
          </h2>
          <p className="text-gray-600">You can now log in to your account.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="absolute top-5 left-5 text-green-500">
        <button
          onClick={() => navigate("/")}
          className="flex items-center flex-col select-none mb-[10px]"
        >
          <House size={35} />
        </button>
        <button
          onClick={() => navigate(-1)}
          className="flex items-center flex-col select-none"
        >
          <CornerUpLeft size={28} />
        </button>
      </div>d
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
      >
        <p className="text-center font-semibold mb-6">Create a new account</p>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={form.firstName}
            onChange={handleChange}
            className="w-1/2 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={form.lastName}
            onChange={handleChange}
            className="w-1/2 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
            required
          />
        </div>

        <label className="block mb-2 font-semibold">Birthday</label>
        <div className="flex gap-2 mb-4">
          <select
            name="day"
            value={form.day}
            onChange={handleChange}
            className="flex-1 p-2 border border-gray-300 rounded-md focus:border-gray-500"
          >
            {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
          <select
            name="month"
            value={form.month}
            onChange={handleChange}
            className="flex-1 p-2 border border-gray-300 rounded-md focus:border-gray-500"
          >
            {[
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ].map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
          <select
            name="year"
            value={form.year}
            onChange={handleChange}
            className="flex-1 p-2 border border-gray-300 rounded-md focus:border-gray-500"
          >
            {Array.from({ length: 100 }, (_, i) => 2025 - i).map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>

        <label className="block mb-2 font-semibold">Gender</label>
        <div className="flex gap-2 mb-4">
          {["Woman", "Male", "Special"].map((g) => (
            <label
              key={g}
              className={`flex-1 p-2 border border-gray-300 rounded-md cursor-pointer items-center justify-between flex 
                ${form.gender === g ? "border-blue-500" : "border-gray-300"}
                focus-within:ring-2 focus-within:ring-blue-500`}
            >
              <span>{g}</span>
              <input
                type="radio"
                name="gender"
                value={g}
                checked={form.gender === g}
                onChange={handleChange}
                className="ml-2"
              />
            </label>
          ))}
        </div>

        <input
          type="text"
          name="email"
          placeholder="Mobile phone number or email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="New Password"
          value={form.password}
          onChange={handleChange}
          className="w-full p-2 mb-6 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
          required
        />

        <p className="text-[10px] text-gray-500 mb-3">
          People who use our service may have uploaded your contact information
          to Facebook. Learn more.
        </p>
        <p className="text-[10px] text-gray-500 mb-5">
          By clicking signup, you agree to our Terms, Privacy Policy and Cookies
          Policy. You may receive SMS Notifications from us and can opt out any
          time.
        </p>

        <button
          type="submit"
          className="w-[200px] mx-auto block bg-green-500 text-white py-2 rounded-md font-semibold hover:bg-green-600 transition"
        >
          Sign up
        </button>

        <p className="text-center text-blue-600 mt-4 cursor-pointer hover:underline">
          Already have an account?
        </p>
      </form>
    </div>
  );
};

export default Signup;
