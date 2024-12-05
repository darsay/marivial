function ThemeSelector({setTheme, themeDisplay, setQuestion}) {
    
    return (
        <div className="d-flex w-100 gap-2 justify-content-center">
            <div className="dropdown w-50 d-flex justify-content-center">
                <button className="btn btn-warning dropdown-toggle w-100"  type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    {themeDisplay.theme}
                </button>
                <ul className="dropdown-menu bg-warning" aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item " onClick={() => setTheme(0)}>Tema Random</a></li>
                    <li><a className="dropdown-item"  onClick={() => setTheme(1)}>Datos Marianos</a></li>
                    <li><a className="dropdown-item"  onClick={() => setTheme(2)}>URJC</a></li>
                    <li><a className="dropdown-item"  onClick={() => setTheme(3)}>Cuestion de Sexo</a></li>
                    <li><a className="dropdown-item"  onClick={() => setTheme(4)}>Eurovision</a></li>
                    <li><a className="dropdown-item"  onClick={() => setTheme(5)}>Vaya gafoide!</a></li>
                    <li><a className="dropdown-item"  onClick={() => setTheme(6)}>Torrihoes</a></li>
                </ul>
            </div>
            <button type="button" className="btn  w-25" style={{backgroundColor: "purple", color: "white"}} onClick={() => setQuestion()}>¡Generar!</button>
        </div>
        
    )
}

export default ThemeSelector;