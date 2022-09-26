import React from "react"

//import palavras from "./palavras"
//import forca0 from "./assets/forca0.png"
//import forca1 from "./assets/forca1.png"
//import forca2 from "./assets/forca2.png"
//import forca3 from "./assets/forca3.png"
//import forca4 from "./assets/forca4.png"
//import forca5 from "./assets/forca5.png"
import forca6 from "./assets/forca6.png"


export default function App() {

    //  const arrayForca = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    const [letrasDesativadas, setLetrasDesativadas] = React.useState(false)
    const [disable, setDisable] = React.useState(true)

    function iniciarJogo() {
        setLetrasDesativadas(true)
        setDisable(false)
    }

    return (
        <div>
            <div className="caixa-forca">
                <div className="caixa-esquerda">
                    <img src={forca6} alt={''} />
                </div>
                <div className="caixa-direita">
                    <button onClick={() => iniciarJogo()} >Escolher palavra</button>
                    <div className="palavra">_ _ _ _ _ _ _ _ _ _ _ _ _ _</div>
                </div>

            </div>
            <div className="caixa-letras">

                <div className="alfabeto">

                    {alfabeto.map((l, i) => (
                        <div className={`${letrasDesativadas ? "letras-ativadas" : "letras-desativadas"}` `${disable ? "disable" : ""}`}
                            letra={l} key={i} index={i}> {l.toLocaleUpperCase()}</div>
                    ))}
                </div>
                <div className="caixa-input">
                    <p>Já sei a palavra!</p>
                    <input></input>
                    <button>Chutar</button>
                </div>
            </div>
        </div>
    )
}
