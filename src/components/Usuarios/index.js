import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "../General/Spinner";
import Fatal from "../General/Fatal";
import Tabla from "./Tabla";

import * as usuariosActions from "../../actions/usuariosActions";

class Usuarios extends Component {
  //Se ejecuta luego de renderizar render()
  componentDidMount() {
    if(!this.props.usuarios.length){
      this.props.traerTodos();
    }
  }

  ponerContenido = () => {
    if (this.props.cargando) {
      return <Spinner />;
    }
    if (this.props.error) {
      return <Fatal mensaje={this.props.error} />;
    }
    return <Tabla />;
  };

  render() {
    return (
      <div>
        <h1>Usuarios</h1>
        {this.ponerContenido()}{" "}
      </div>
    );
  }
}
//Mapea el estado del usuarioReducer en los props de este componente
const mapStateToProps = (reducers) => {
  return reducers.usuariosReducer;
};
//Connect the actions to our component
export default connect(mapStateToProps, usuariosActions)(Usuarios);
