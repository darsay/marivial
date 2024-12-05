import datoMariano from '/src/assets/questions/dato-mariano.json'
import urjc from '/src/assets/questions/urjc.json'
import cuestionSexo from '/src/assets/questions/cuestion-sexo.json'
import eurovision from '/src/assets/questions/eurovision.json'
import gafoide from '/src/assets/questions/gafoide.json'
import torrihoes from '/src/assets/questions/torrihoes.json'

export const themes = [
    {
        theme: 'Tema Random',
        questions: undefined
    },
    {
        theme: 'Datos Marianos',
        questions: datoMariano
    },
    {
        theme: 'URJC',
        questions: urjc
    },
    {
        theme: 'Cuestion de Sexo',
        questions: cuestionSexo
    },
    {
        theme: 'Eurovision',
        questions: eurovision
    },
    {
        theme: 'Vaya gafoide!',
        questions: gafoide
    },
    {
        theme: 'Torrihoes',
        questions: torrihoes
    }
]

export const defaultQuestion =
{
    "number": "0",
    "question": "Aquí va la pregunta.",
    "answer": "Y aquí la respuesta.",
}