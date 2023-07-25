import { IPrice, IService } from '_lib/types';
import React from 'react';

const Pricing = (props: IPrice ) => {
  const { service } = props;

  return (
    <div className="mx-auto mt-8 max-w-5xl">
    <span className='text-lg font-bold'>Hieronta</span>

      {service.map((service: IService) => (
        <div key={service._key} className="flex items-center justify-between border-b border-gray-300 px-4 py-2">
          <div>{service.title}</div>
          <div>
            <span className="px-4">{service.price}</span>
            <button className="rounded bg-accent p-2 text-white hover:accent hover:opacity-70">Varaa aika</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pricing;
