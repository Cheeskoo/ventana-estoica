export function sendResponse(res, statusCode, contentType, content){
    res.setHeader('Content-Type', contentType)
    res.statusCode = statusCode
    res.end(content)
}