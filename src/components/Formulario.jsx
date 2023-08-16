export const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5 relative">
      <h2 className="font-bold text-2xl sm:text-3xl text-center">
        Seguimiento Pacientes
      </h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y{" "}
        <span className="text-indigo-600 font-bold">Adminístralos</span>
      </p>
      <form className="bg-white shadow-md rounded-md py-10 px-5 mb-10 md:sticky top-0">
        <div className="mb-5">
          <label
            className="text-gray-600 block font-bold mb-1"
            htmlFor="mascota"
          >
            Mascota
          </label>
          <input
            id="mascota"
            className="rounded-md w-full placeholder-gray-400"
            type="text"
            placeholder="Nombre de la mascota"
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
            rows="10"
            placeholder="Síntomas de tu mascota"
            className="rounded-md w-full placeholder-gray-400"
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-indigo-700 cursor-pointer transition"
          value="Agregar paciente"
        />
      </form>
    </div>
  );
};
