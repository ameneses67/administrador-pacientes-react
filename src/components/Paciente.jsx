const Paciente = () => {
  return (
    <div className="mt-5 bg-white shadow-md px-5 py-10 rounded-md">
      <p className="font-bold mb-3 text-gray-700">
        Nombre: <span className="font-normal">Hook</span>
      </p>
      <p className="font-bold mb-3 text-gray-700">
        Propietario: <span className="font-normal">Alfonso</span>
      </p>
      <p className="font-bold mb-3 text-gray-700">
        Correo: <span className="font-normal">ameneses67@gmail.com</span>
      </p>
      <p className="font-bold mb-3 text-gray-700">
        Alta: <span className="font-normal">10/Ago/23</span>
      </p>
      <p className="font-bold mb-3 text-gray-700">
        Sintomas:{" "}
        <span className="font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ut
          aliquam, laudantium inventore mollitia iste nam et aliquid harum
          soluta, obcaecati, vel modi culpa porro. Consequatur architecto
          consequuntur quis tempora.
        </span>
      </p>
    </div>
  );
};

export default Paciente;
