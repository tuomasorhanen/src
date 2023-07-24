import React from 'react';

const Pricing = () => {
  const services = [
    { name: 'Hieronta 30 min', duration: '30 min', price: '30€' },
    { name: 'Hieronta 60 min', duration: '60 min', price: '50€' },
    { name: 'Hieronta 30 min', duration: '30 min', price: '30€' },
    { name: 'Hieronta 60 min', duration: '60 min', price: '50€' },
  ];

  const servicesH = [
    { name: 'Fysioterapia 45 min', duration: '45 min', price: '60€' },
    { name: 'Fysioterapia 45 min', duration: '45 min', price: '60€' },
    { name: 'Fysioterapia 45 min', duration: '45 min', price: '60€' },
  ];

  return (
    <>
    <div className="mx-auto mt-8 max-w-5xl">
    <span className='text-lg font-bold'>Hieronta</span>

      {services.map((service, index) => (
        <div key={index} className="flex items-center justify-between border-b border-gray-300 px-4 py-2">
          <div>{service.name}</div>
          <div>
            <span className="px-4">{service.price}</span>
            <button className="rounded bg-accent p-2 text-white hover:accent hover:opacity-70">Varaa aika</button>
          </div>
        </div>
      ))}
    </div>
    <div className="mx-auto mt-8 max-w-5xl">
        <span className='text-lg font-bold'>Fysioterapia</span>
      {servicesH.map((service, index) => (
        <div key={index} className="flex items-center justify-between border-b border-gray-300 px-4 py-2">
          <div>{service.name}</div>
          <div>
            <span className="px-4">{service.price}</span>
            <button className="rounded bg-accent p-2 text-white hover:accent hover:opacity-70">Varaa aika</button>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Pricing;
