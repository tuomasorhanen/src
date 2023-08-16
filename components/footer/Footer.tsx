import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const MyFooter = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 text-center bg-bg text-text">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-2"><FaMapMarkerAlt className="inline-block mr-2" />Lielahti</h3>
          <p>Kauppakeskus Like</p>
          <p>Antti Possin kuja 1</p>
          <h3 className="text-lg font-bold mt-4 mb-2"><FaMapMarkerAlt className="inline-block mr-2" />Pirkkala</h3>
          <p>Kauppakeskus Veska</p>
          <p>Saapastie 2</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2"><FaPhone className="inline-block mr-2" />Puhelin</h3>
          <p>+358 41 5022 403</p>
          <h3 className="text-lg font-bold mt-4 mb-2"><FaEnvelope className="inline-block mr-2" />Sähköposti</h3>
          <p>sarianne@gmail.com</p>
        </div>
        <div className=''>
          <h3 className="text-lg font-bold mb-2">Sosiaalinen media</h3>
          <div className="flex flex-wrap justify-center">
            <a href="https://www.facebook.com/" className="m-2 hover:text-blue-600"><FaFacebook className='h-8 w-8' /></a>
            <a href="https://twitter.com/" className="m-2 hover:text-blue-400"><FaTwitter className='h-8 w-8' /></a>
            </div>
            <div className="flex flex-wrap justify-center">
            <a href="https://www.linkedin.com/" className="m-2 hover:text-blue-700"><FaLinkedin className='h-8 w-8' /></a>
            <a href="https://www.instagram.com/fysiosarianne/" className="m-2 hover:text-pink-500"><FaInstagram className='h-8 w-8' /></a>
            </div>
        </div>
      </div>
      <p className="mt-8 text-center text-xs leading-5">
        &copy; 2023 MyCompany, Inc. All rights reserved.
      </p>
    </div>
  );
};

export default MyFooter;
