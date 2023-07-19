import { useState } from "react"


export default function BuscarTransferencias(){

    const [dataDeInicio, setDataDeInicio] = useState([]);
    const [dataFinal, setDataFinal] = useState([]);
    const [nomeOperador, setNomeOperador] = useState('');
    const [valor, setValor] = useState('');

    const handleChange = (e) => {
        setValor(e.target.value);
        console.log(e.target.value)
    };



    return(
            <div className="transf-buscar">
                <h2>Pesquisar Transações</h2>
                    <div className="inp-tb">
                        
                        <div className="inp-tbt">
                            <p>Data inicial</p>
                            <input type="date" 
                                id="data-inicial" 
                                value={dataDeInicio} 
                                onChange={(e) => setDataDeInicio(e.target.value)} />
                        </div>
                        <div>
                            <p>Data final</p>
                            <input type="date" 
                                id="data-final" 
                                value={dataFinal} 
                                onChange={(e) => setDataFinal(e.target.value)} />
                        </div>
                        <div>
                            <p>Nome do operador</p>
                            <input type="text" 
                                id="nomeOperador" 
                                value={nomeOperador} 
                                onChange={(e) => setNomeOperador(e.target.value)} />
                                <p>{valor}</p>
                        </div>

                    </div>

                    <div>
                        <button className="btn" onChange={handleChange} >Pesquisar</button>
                    </div>
            </div>
    )
}