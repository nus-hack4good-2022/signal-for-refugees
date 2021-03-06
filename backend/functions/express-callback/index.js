export default function makeCallback(controller) {
    return (req, res) => {
        const httpRequest = {
            body: req.body,
            params: req.params,
            query: req.query,
            ip: req.ip,
            path: req.path,
            method: req.method,
            headers: {
                'Content-Type': req.get('Content-Type'),
                Referer: req.get('referer'),
                'User-Agent': req.get('User-Agent'),
            }
        }
        controller(httpRequest)
            .then(httpResponse => {
                if (httpResponse.headers) {
                    res.set(httpResponse.headers)
                }
                res.type('json')
                res.status(httpResponse.statusCode).send(httpResponse.body)
            })
            .catch(e => {
                res.status(500).send({ error: e.message })
            })
    }
}