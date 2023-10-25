// ServicesPage.jsx
import React from 'react';

const ServicesPage = ({ services }) => {
  const handleDelete = (serviceId) => {
    console.log(`Deleting service with ID: ${serviceId}`);
    // Implement the logic to delete the service
  };

  const handleUpdate = (serviceId) => {
    console.log(`Updating service with ID: ${serviceId}`);
    // Implement the logic to update the service
  };

  const handleUpload = () => {
    console.log('Handling upload...');
    // Implement your upload logic here
  };

  return (
    <div className="container mx-auto mt-8 bg-gradient-to-b from-blue-100 to-blue-500 p-8">
      <h1 className="text-3xl font-bold mb-4 text-center">SERVICES</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-9 ">
        {services.map((service) => (
          <div
            key={service._id}
            className="max-w-sm rounded overflow-hidden shadow-lg bg-gradient-to-b from-pink-500 to-purple-400 transform hover:scale-105 transition-transform"
          >
            <img
              src={service.service_image || 'https://via.placeholder.com/300'}
              alt={service.service_name}
              className="w-full h-60 object-cover"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{service.service_name}</div>
              <p className="text-gray-700 text-base">
                {service.service_description}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-between">
              <button
                onClick={() => handleUpdate(service._id)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 mr-2"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(service._id)}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-8">
        <button className="bg-green-400 text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-900 hover:bg-green-900 hover:text-white shadow-md py-3 px-8 inline-flex items-center">
          <svg
            fill="#FFF"
            height="18"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" />
          </svg>
          <span className="ml-2">Upload</span>
        </button>
      </div>
    </div>
  );
};

export default ServicesPage;
