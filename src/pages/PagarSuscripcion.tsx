import { useEffect, useState } from "react";
import axios from "axios";
import swal from 'sweetalert';
import { Form, Button } from "react-bootstrap";
import io from 'socket.io-client';

const PagarSuscripcion =() => {
  const [nombre, setNombre] = useState("");
  const [producto, setProducto] = useState("");
  const [tarjeta, setTarjeta] = useState("");
  const [precio, setPrecio] = useState("");
  const id_Pago = Math.floor(Math.random()*1000000);

  const handleRegistrarPago = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const registroPago = await axios.post("https://api-hexagonal-alavazarez.onrender.com/pago/", 
      {
        id_Pago,
        nombre,
        producto,
        tarjeta,
        precio
      });
      console.log(registroPago.data.message);
      if (registroPago.data.message) {
        setNombre("");
        setProducto("");
        setTarjeta("");
        setPrecio("");
        swal("¡ Realizada!", "El Pago se ha realizado correctamente.", "success");
      }
    } catch (error) {
      console.log("Error en el Pago:", error);
      swal("¡Error!", "Ha ocurrido un error en el Pago.", "error");
    }
  };

  useEffect(()=>{
    const socket = io("https://api-hexagonal-socket.onrender.com/");

    socket.on("newClient", (message)=>{
      console.log("Ciclo concluido");

      alert("Finalizado" + message);
    });
  },[]);

  return (
    <Form onSubmit={handleRegistrarPago}>
      <h1 className="text-center mb-4">Formulario de Pago</h1>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Ingrese el Nombre</Form.Label>
        <Form.Control
        type="text"
        placeholder="Usuario"
        value={nombre}
        onChange={(e)=>setNombre(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Ingrese el Producto</Form.Label>
        <Form.Control
        type="text"
        placeholder="Producto"
        value={producto}
        onChange={(e)=>setProducto(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Ingrese la Tarjeta</Form.Label>
        <Form.Control
        type="text"
        placeholder="Tarjeta"
        value={tarjeta}
        onChange={(e)=>setTarjeta(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Ingrese el Precio</Form.Label>
        <Form.Control
        type="number"
        placeholder="Precio"
        value={precio}
        onChange={(e)=>setPrecio(e.target.value)}/>
      </Form.Group>

      <Button  variant="primary" type="submit">
        Pagar
      </Button>
    </Form>
  );
};

export default PagarSuscripcion;