


const AddEvent = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value
    const date = form.date.value
    const location = form.location.value
    const category = form.category.value
    const description = form.description.value
    const seats = form.seats.value
    const registrationDeadline = form.registrationDeadline.value
    const registrationFee = form.registrationFee.value
    const photoURL = form.photoURL.value

    console.log(title, date, location, category, description, seats, registrationDeadline, registrationFee, photoURL);
    e.target.reset()
  };
    
    return (
         <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Event</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="block mb-1 font-medium">Event Name</label>
          <input
            type="text"
            name="title"
            required
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Date</label>
            <input
              type="date"
              name="date"
              required
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Location</label>
            <input
              type="text"
              name="location"
              required
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 font-medium">Category</label>
          <select
            name="category"
            required
            className="w-full border border-gray-300 p-2 rounded-md"
          >
            <option value="">Select category</option>
            <option value="Music">Music</option>
            <option value="Tech">Tech</option>
            <option value="Business">Business</option>
            <option value="Sports">Sports</option>
            <option value="Education">Education</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            name="description"
            required
            rows={3}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Number of Seats</label>
            <input
              type="number"
              name="seats"
              required
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Registration Deadline</label>
            <input
              type="date"
              name="registrationDeadline"
              required
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 font-medium">Registration Fee (৳)</label>
          <input
            type="number"
            name="registrationFee"
            required
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Photo URL</label>
          <input
            type="url"
            name="photoURL"
            required
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md font-semibold transition"
        >
          Submit Event
        </button>
      </form>
    </div>
    );
};

export default AddEvent;