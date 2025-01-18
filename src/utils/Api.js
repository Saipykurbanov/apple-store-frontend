const Api = {}

// Api.url = 'https://api.ifixstore.ru/'
Api.url = 'http://localhost:5000/'
Api.domain = 'api.ifixstore.ru'

Api.get = async (path) => {

    try {
        let res = await fetch(`${Api.url}${path}`, {
            next: { revalidate: 10 }
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
        
        if(res.status || res.success) {
            return res.data
        } else {
            return 'error'
        }
    } catch(e) {
        return 'error'
    }

}


export default Api;