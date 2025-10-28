import { useState } from 'react';
import PropTypes from 'prop-types';

function UserCard({ name, email, street, city, ...rest }) {
  // Gunakan array destructuring
  const [clicked, setClicked] = useState(false);

  console.log(Object.entries(rest));

  // Fungsi handler
  function handleClick() {
    setClicked(true );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
      <p className="text-gray-600">
        <span className="font-medium">Email:</span> {email}
      </p>
      <p className="text-gray-600">
        <span className="font-medium">Address:</span> {street}, {city}
      </p>

            {/* Menampilkan data tambahan dari rest */}
      {Object.entries(rest).map(([key, value]) => (
        <p key={key} className="text-gray-600">
          <span className="font-medium capitalize">{key}:</span> {value}
        </p>
      ))}

      <button
        className={`${clicked ? "bg-special-green" : "bg-gray-01"} text-white p-2 rounded-md`}
        onClick={handleClick}
      >
        {clicked ? 'Tombol sudah diklik' : 'Silakan Klik'}
      </button>
    </div>
  );
}

// Validasi props agar bebas warning ESLint
UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};

export default UserCard;
