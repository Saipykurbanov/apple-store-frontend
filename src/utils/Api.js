const Api = {}

Api.url = 'http://localhost:5000/'
Api.domain = ''

Api.get = async (path) => {

    try {
        let res = await fetch(`${Api.url}${path}`)

        res = await res.json()

        if(res.status) {
            return res.data
        } else {
            return 'error'
        }
    } catch(e) {
        return 'error'
    }

}

Api.post = async (path, body) => {

    try {
        let res = await fetch(`${Api.url}${path}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify(body)
        })

        res = await res.json()
        
        if(res.status) {
            return res.data
        } else {
            return 'error'
        }
    } catch(e) {
        return 'error'
    }

}


export default Api;