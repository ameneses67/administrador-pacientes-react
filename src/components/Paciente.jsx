import PropTypes from "prop-types";

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { nombre, propietario, email, fecha, sintomas, id } = paciente;

  const handleEliminar = () => {
    const respuesta = confirm("¿Seguro que deseas eliminar este paciente?");

    if (respuesta) {
      eliminarPaciente(id);
    }
  };

  return (
    <div className="mt-5 bg-white shadow-md px-5 py-10 rounded-md">
      <p className="font-bold mb-3 text-gray-700">
        Nombre: <span className="font-normal">{nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700">
        Propietario: <span className="font-normal">{propietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700">
        Correo: <span className="font-normal">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700">
        Alta: <span className="font-normal">{fecha}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700">
        Sintomas: <span className="font-normal">{sintomas}</span>
      </p>
      <div className="flex gap-8 mt-10">
        <button
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 hover:shadow-md text-white font-bold uppercase rounded-md transition"
          type="button"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          className="py-2 px-10 bg-red-600 hover:bg-red-700 hover:shadow-md text-white font-bold uppercase rounded-md transition"
          type="button"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

Paciente.propTypes = {
  paciente: PropTypes.object.isRequired,
  setPaciente: PropTypes.func.isRequired,
  eliminarPaciente: PropTypes.func.isRequired,
};

export default Paciente;
