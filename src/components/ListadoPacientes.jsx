import Paciente from "./Paciente";

export const ListadoPacientes = ({ pacientes }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 mb-10">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-bold text-2xl sm:text-3xl text-center">
            Listado Pacientes
          </h2>
          <p className="text-lg mt-5 text-center mb-10">
            Administra tus{" "}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>

          {pacientes.map((paciente) => (
            <Paciente key={paciente.id} paciente={paciente} />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-bold text-2xl sm:text-3xl text-center">
            No hay pacientes
          </h2>
          <p className="text-lg mt-5 text-center mb-10">
            Comienza agregando pacientes{" "}
            <span className="text-indigo-600 font-bold">
              y aparecerán acá abajo
            </span>
          </p>
        </>
      )}
    </div>
  );
};
