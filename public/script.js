const text = document.getElementById('text');
const author = document.getElementById('author');
const btn = document.getElementById('btn');

async function getQuote(){
   try{
    await fetch('http://localhost:3000/api/quote')
    .then(res => res.json())
    .then(data =>{
        text.textContent = data.text;
        author.textContent = data.author;
    })
    }catch(error){
        text.textContent = "Incluso los estoicos fallan: no pudimos obtener una cita en este momento"
        author.textContent = '- Desconocido'
        console.error(`Hubo un problema: ${error}`)}
}

btn.addEventListener('click', getQuote);