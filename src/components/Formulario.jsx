import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Error from "./Error";

export const Formulario = ({
  pacientes,
  setPacientes,
  paciente,
  setPaciente,
}) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar formulario
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setError(true);
      return;
    }

    setError(false);

    // Construir objeto paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    };

    if (paciente.id) {
      // Editando registro
      objetoPaciente.id = paciente.id;

      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? objetoPaciente : pacienteState
      );

      setPacientes(pacientesActualizados);
      setPaciente({});
    } else {
      // Nuevo registro
      objetoPaciente.id = generarId();

      setPacientes([...pacientes, objetoPaciente]);
    }

    //Reiniciar el formulario
    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 relative">
      <h2 className="font-bold text-2xl sm:text-3xl text-center">
        Seguimiento Pacientes
      </h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y{" "}
        <span className="text-indigo-600 font-bold">Adminístralos</span>
      </p>
      <form
        className="bg-white shadow-md rounded-md py-10 px-5 mb-10 md:sticky top-8"
        onSubmit={handleSubmit}
      >
        {error && (
          <Error>
            <p>Todos los campos son obligatorios</p>
          </Error>
        )}
        <div className="mb-5">
          <label
            className="text-gray-600 block font-bold mb-1"
            htmlFor="mascota"
          >
            Mascota
          </label>
          <input
            id="mascota"
            className="rounded-md w-full placeholder-gray-400 "
            type="text"
            placeholder="Nombre de la mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="text-gray-600 block font-bold mb-1"
            htmlFor="propietario"
          >
            Propietario
          </label>
          <input
            id="propietario"
            className="rounded-md w-full placeholder-gray-400"
            type="text"
            placeholder="Nombre del propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label className="text-gray-600 block font-bold mb-1" htmlFor="email">
            Correo electrónico
          </label>
          <input
            id="email"
            className="rounded-md w-full placeholder-gray-400"
            type="email"
            placeholder="Correo contacto propietario"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label className="text-gray-600 block font-bold mb-1" htmlFor="alta">
            Alta
          </label>
          <input
            id="alta"
            className="rounded-md w-full placeholder-gray-400"
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="text-gray-600 block font-bold mb-1"
            htmlFor="sintomas"
          >
            Sintomas
          </label>
          <textarea
            name="sintomas"
            id="sintomas"
            cols="30"
            rows="5"
            placeholder="Síntomas de tu mascota"
            className="rounded-md w-full placeholder-gray-400"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-indigo-700 cursor-pointer transition"
          value={paciente.id ? "Editar paciente" : "Agregar paciente"}
        />
      </form>
    </div>
  );
};

Formulario.propTypes = {
  pacientes: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  setPacientes: PropTypes.func.isRequired,
  paciente: PropTypes.object.isRequired,
  setPaciente: PropTypes.func.isRequired,
};
