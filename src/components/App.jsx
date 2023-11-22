import '../App.css';

function App() {
  return (
    <div className="container">
    <h1 className="title">Tecnoyorch<span aria-label="emoji"role="img">📱</span></h1>
    
    <h2>El Hospital para tu Cel</h2>
    
    <div class="Display">
    <h3>Servicios que ofrece Tecnoyorch</h3>
      <ul>
        <li>Cambio de display</li>
        <li>reparación y/o cambio de cristal</li>
        <li>Venta de micas de cristal</li>
      </ul>

    </div>

    <table>
      <td class="tel"><strong>Servicio para Telefonos que no prenden</strong></td>
      <tr>Diagnotico de bateria</tr>
      <tr>Diagnostico boton power</tr>
      <tr>Diagnostico tarjeta madre</tr>
    </table>
    <div class="clean">
      <h3>Mantenimiento</h3>
      <ul>
        <li>Limpieza exterior</li>
        <li>Limpieza interna (tarjeta, bocinas, microfoono, ect.)</li>
        
      </ul>

    </div>


   <div class="Soft"><h3>Software</h3>
    <p>Para las Fallas por Sofware se ofrece 2 opciones que son:</p>
    <ul>
      <li>Cambio de Tarjeta Madre</li>
      <li>carga de nuevo Software</li>
    </ul>
    </div>
    <div class="Formu">
    <form>
      <label class="NC">Nombre del cliente</label>
      <input type='text' id='nombre' name='nombre' required></input><br></br>
      <label class="Model">Modelo del Equipo</label>
      <input type='text' id='Model' name='Model' required></input><br></br>
      <label class="Marca">Marca del Equipo</label>
      <input type='text' id='Marca' name='Marca' required></input><br></br>
      <label class="Falla">Falla o Daño</label>
      <input type='text' id='Falla' name='Falla' required></input><br></br>
      <input class="boton" type="submit" value="Enviar"></input>
    



    </form>

    </div>
    


    </div>
    


   
   
  );
}

export default App;
