function Pago(){
    return (
        <>
            <h1>Hola</h1>
            <div className="texto">
                <label>Hola como estas</label>
                <input type="text" placeholder="Nombre del pagador" list="jugadores"/>
                <datalist id="jugadores">
                    <option>Messi</option>
                    <option>Ronaldo</option>
                    <option>Neymar</option>
                    <option>Messi</option>
                    <option>Ronaldo</option>
                    <option>Neymar</option>
                    <option>Messi</option>
                    <option>Ronaldo</option>
                    <option>Neymar</option>
                </datalist>

                    <ul>
                        <li>Pao me quiere mucho</li>
                        <li>Pao me quiere mucho</li>
                        <li>Pao me quiere mucho</li>
                    </ul>

                <button>Enviar</button>
                {/* <select>
                    <option>Messi</option>
                    <option>Ronaldo</option>
                    <option>Neymar </option>
                </select> */}
            </div>
        </>
    );
}
export default Pago;