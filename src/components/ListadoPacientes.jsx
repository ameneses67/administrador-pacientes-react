import Paciente from "./Paciente";

export const ListadoPacientes = ({ pacientes }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 mb-10">
      <h2 className="font-bold text-2xl sm:text-3xl text-center">
        Listado Pacientes
      </h2>
      <p className="text-lg mt-5 text-center mb-10">
        Administra tus <span className="text-indigo-600 font-bold">Citas</span>
      </p>

      {pacientes.map((paciente) => (
        <Paciente key={paciente.id} paciente={paciente} />
      ))}
    </div>
  );
};
