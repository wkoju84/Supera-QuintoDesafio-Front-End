import { useEffect, useState } from "react"


export default function TransferenciaTabela(){

    const [transferencia, setTransferencia] = useState ([]);

   useEffect(() => {
    fetch('http://localhost:8080/transferencia',{
        method : "GET",
        headers: {
            'Content-type': 'aplication/json',
        },
    }).then((resp) => resp.json())
      .then((data) => {
        setTransferencia(data)
      })
      .catch((err) => console.log(err))
   }, [])


    return(
    <div>
                

        <div className="table-box">
            <table className="table" >
                <thead className="thead">
                    <tr><th className="saldo">Saldo total: R$ 50,00  </th><th className="saldo"></th> <th className="saldo"></th><th className="saldo">Saldo no período: R$ 50,00</th></tr>
                    <tr>
                        <th>Dados</th>
                        <th>Valência</th>
                        <th>Tipo</th>
                        <th>Nome Operador</th>
                    </tr>
                </thead>
                <tbody className="tbody-box">
                    {
                        transferencia.map((transferencia) => (
                            <tr key={transferencia.id}>
                                
                                <td>{transferencia.data_transferencia}</td>
                                <td>{transferencia.valor}</td>
                                <td>{transferencia.tipo}</td>
                                <td>{transferencia.nome_operador_transacao}</td>

                            </tr>
                        ))
                    }
                </tbody>
                <tfoot className="tfoot"><p>1 2 3 4</p></tfoot>
            </table>
        </div>
    </div>
    )
}