import { useCart } from "@/app/cart/CartContext";
import { useState } from "react";

export default function CheckoutForm() {
  const [form, setForm] = useState({ name: "", email: "", address: "" });
  const [success, setSuccess] = useState(false);
  const { cart, setCart } = useCart();

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSuccess(true);
    setCart([]);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white p-6 rounded-lg shadow-lg"
    >
      <div>
        <label className="block text-sm font-medium text-secondary-800secondary">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="mt-1 block w-full border-secondary-300 border rounded p-2"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-secondary-800">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="mt-1 block w-full border-secondary-300 border rounded p-2"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-secondary-800">
          Address
        </label>
        <input
          type="text"
          name="address"
          value={form.address}
          onChange={handleChange}
          className="mt-1 block w-full border-secondary-300 border rounded p-2"
          required
        />
      </div>
      <button
        type="submit"
        disabled={cart.length === 0}
        className="px-4 py-2 bg-primary-500 text-white rounded hover:bg-primary-600 disabled:bg-primary-300"
      >
        Submit Order
      </button>
      {success && (
        <p className="text-green-500">Order submitted successfully!</p>
      )}
    </form>
  );
}
