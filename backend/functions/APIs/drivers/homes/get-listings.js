export default function makeGetListings({ getAllListings }) {
    return async function(httpRequest) {
        const headers = {
            'Content-Type': 'application/json'
        }
        try {
            const listings = await getAllListings()
            return {
                headers,
                statusCode: 200,
                body: listings
            }
        } catch (e) {
            return {
                headers,
                statusCode: 500,
                body: {
                    error: e.message
                }
            }
        }
    }
}