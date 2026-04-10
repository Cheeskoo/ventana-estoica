import path from 'node:path'
import fs from 'node:fs/promises'
import { getContentType } from './getContentType.js'
import { sendResponse } from './sendResponse.js'

export async function serveStatic(req, res, basedir){
    const publicDir = path.join(basedir, 'public')
    const filePath = path.join(publicDir, req.url === '/' ? 'index.html': req.url)
    
    const ext = path.extname(filePath)

    const contentType = getContentType(ext)
    try{
        const data = await fs.readFile(filePath)
        sendResponse(res, 200, contentType, data)
    }catch(error){

        if (error.code === 'ENOENT'){ 
            console.log(`error: ${error}`)
            sendResponse(res, 404, 'application/json', {
                "message": "404 Not Found"
        })
        }else{
            sendResponse(res, 500, 'application/json', {
            "message": "500 Server failed"
        })
                                    }

                }
    
}