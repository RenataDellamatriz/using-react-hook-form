import "./App.css";
import "./global.css";

import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addPost = (values) => console.log(values);

  return (
    <main>
      <div className="card-post">
        <h1>Formulário teste</h1>

        <div className="line-post"></div>

        <div className="card-body-post">
          <form onSubmit={handleSubmit(addPost)}>
            <div className="fields">
              <label>Título</label>
              <input
                type="text"
                name="title"
                {...register("title", { required: true })}
              />
              {errors.title && <span>This field is required</span>}
            </div>

            <div className="fields">
              <label>Descrição</label>
              <input
                type="text"
                name="description"
                {...register("description")}
              />
            </div>

            <div className="fields">
              <label>Conteúdo</label>
              <textarea
                type="text"
                name="content"
                {...register("content")}
              ></textarea>
            </div>

            <div className="btn-post">
              <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default App;
