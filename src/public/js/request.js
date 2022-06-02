async function request(path, method, body) {
    try{
        const headers = {
            token: window.localStorage.getItem('token')
        }
        if(!(body instanceof FormData)) {
            body = JSON.stringify(body)
            headers['Content-Type'] = 'application/json'
        }
    
        let response = await fetch(path, {
            method: method || 'GET',
            headers,
            body
        })

        response = await response.json()

        if(response.name === 'ForbiddenError') {
            window.localStorage.clear()
            window.location = 'login'
        }

        return response
    } catch (error) {
        console.log(error)
    }
}