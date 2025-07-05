


const Registration = () => {
    const user = {
        name: 'ali',
        email: 'ali@gmail.com'
    }

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const tickets = form.tickets.value;
    const paymentMethod = form.paymentMethod.value;

    console.log(name, email, phone, tickets, paymentMethod)

    // e.target.reset()
  };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
      <h2 className="text-xl font-semibold mb-4 text-center">Register for: {event.title || 'Event'}</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            readOnly
            className="w-full border border-gray-300 p-2 rounded-md bg-gray-100"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            readOnly
            className="w-full border border-gray-300 p-2 rounded-md bg-gray-100"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Phone Number</label>
          <input
            type="text"
            name="phone"
            placeholder="e.g. 017xxxxxxx"
            className="w-full border border-gray-300 p-2 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Number of Tickets</label>
          <input
            type="number"
            name="tickets"
            min={1}
            className="w-full border border-gray-300 p-2 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Payment Method</label>
          <input
            type="text"
            name="paymentMethod"
            placeholder="e.g. Card or Cash"
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md font-semibold"
        >
          Register Now
        </button>
      </form>
    </div>
    );
};

export default Registration;