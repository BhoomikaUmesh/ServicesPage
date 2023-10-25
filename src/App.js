// app.js
import React from 'react';
import ServicesPage from './ServicesPage';  // Update the path based on your project structure

const App = () => {
  // Dummy data for services
  const dummyServices = [
    {
      _id: 1,
      service_name: 'Web Development',
      service_image: 'https://via.placeholder.com/300',
      service_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      _id: 2,
      service_name: 'Graphic Design',
      service_image: 'https://via.placeholder.com/300',
      service_description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    },
    // Add more dummy services as needed
  ];

  return (
    <div>
      {/* Other components or content can go here */}

      {/* Render the ServicesPage component with dummy data */}
      <ServicesPage services={dummyServices} />
    </div>
  );
};

export default App;
