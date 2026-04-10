import http from 'node:http';
import path from 'node:path';
import fs from 'node:fs/promises';
import { sendResponse } from './utils/sendResponse.js'
import { serveStatic } from './utils/serveStatic.js'

const PORT = 3000;
const __dirname = import.meta.dirname

const server = http.createServer(async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', "GET")

    if (req.url === '/api/quote'){
        try{ 
        const route = path.join(__dirname, 'package.json')
        const data = await fs.readFile(route)
        const quotes = JSON.parse(data)
        
        const randomIndex = Math.floor(Math.random() * quotes.length)
        const randomQuote = quotes[randomIndex]
        
        sendResponse(res, 201, 'application/json', randomQuote)

        }catch(error){
            console.log(`error al leer las frases : ${error}`)
            sendResponse(res, 500, 'application/json', {
                "message": "Error servidor 500"
            })

        }

    }else if(!req.url.startsWith('/api')){
        return await serveStatic(req, res, __dirname)
    }
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))
