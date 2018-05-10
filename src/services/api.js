const baseURL = process.env.API_URL

export async function getJsonResponse (response) {
    let json
    try {
        json = await response.json()
        if (response.ok) return json
    } catch (error) {
        console.error('Failed to fetch', json)
        return false
    }
}

export async function restGet (uri, headers = {}) {
    const authorizationHeaders = {}

    return fetch(`${baseURL}${uri}`, {
        mode: 'cors',
        headers: {
        ...headers,
        ...authorizationHeaders,
        'content-type': 'application/json'
        }
    })
    .then(getJsonResponse)
}

export async function restPost (uri, body, headers = {}) {
    const authorizationHeaders = {}
    return fetch(`${baseURL}${uri}`, {
        method: 'POST',
        mode: 'cors',
        headers: {
        ...headers,
        ...authorizationHeaders,
        'content-type': 'application/json'
        },
        body: JSON.stringify(body) }
    )
    .then(getJsonResponse)
}