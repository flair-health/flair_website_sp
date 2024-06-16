const Pricing = () => {
  return (
    <div className="text-center font-roboto">
      <h1 className="text-accent text-4xl font-black uppercase mt-8 mb-0">
        pricing
      </h1>
      <p className="text-lg mt-0">plans that work for everyone</p>
      <div className="flex justify-center flex-wrap my-8">
        <div className="bg-blue-400 w-64 p-8 rounded-xl m-2 text-white bg-gradient-to-br from-accent to-blue-700">
          <h2 className="plan-title uppercase mb-4">super</h2>
          <p className="plan-price text-4xl font-black">
            $19.99<span className="block text-xl font-light">/month</span>
          </p>
          <p className="plan-description my-8 leading-loose">
            Eleifend cursus volutpat risus convallis nam sed quam sollicitudin
            eget leo at erat cursus justo
          </p>
          <a
            href="#"
            className="btn inline-block py-2 px-3 rounded-md uppercase font-bold text-gray-700 bg-white transition-opacity duration-300 hover:opacity-70"
          >
            Join Now
          </a>
        </div>

        <div className="plan-light w-64 p-8 rounded-xl m-2 text-gray-700 bg-gradient-to-br from-gray-200 to-gray-50">
          <h2 className="plan-title uppercase mb-4">Enterprise</h2>
          <p className="plan-price text-4xl font-black text-accent">
            $49.99<span className="block text-xl font-light">/month</span>
          </p>
          <p className="plan-description my-8 leading-loose">
            Eleifend cursus volutpat risus convallis nam sed quam sollicitudin
            eget leo at erat cursus justo
          </p>
          <a
            href="#"
            className="btn inline-block py-2 px-3 rounded-md uppercase font-bold text-white bg-gray-700 transition-opacity duration-300 hover:opacity-70"
          >
            Join Now
          </a>
        </div>
      </div>
      <p className="text-lg mb-2">Need something different? No problem!</p>
      <a
        href="#"
        className="btn-mb inline-block py-2 px-3 rounded-md uppercase font-bold text-white bg-accent transition-opacity duration-300 hover:opacity-70 mb-12"
      >
        Get in touch
      </a>
    </div>
  );
};

export default Pricing;
