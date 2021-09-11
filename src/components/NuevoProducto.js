import React from "react";
import { useDispatch, useSelect } from "react-redux";

//actions
import { crearNuevoProductoAction } from "../actions/productoActions";

const NuevoProducto = () => {
  //utilizar useDispatch y te crea una función
  const dispatch = useDispatch();

  //mandar a llamar el action de agregar productos
  const agregarProducto = () => dispatch(crearNuevoProductoAction());

  const submitNuevoProducto = (e) => {
    e.preventDefault();

    //crear el nuevo producto
    agregarProducto();
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar Nuevo Producto
            </h2>

            <form onSubmit={submitNuevoProducto}>
              <div className="form-group">
                <label>Nombre producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre del producto"
                  name="nombre"
                />
              </div>

              <div className="form-group">
                <label>Precio del Producto</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio del producto"
                  name="precio"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Agregar Producto
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoProducto;
