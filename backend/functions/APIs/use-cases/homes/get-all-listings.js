export default function makeGetAllListings({ listingsDb }) {
    return async function getAllListings() {
        const listings = await listingsDb.getAllListings()
        return listings.map(listing => {
            return {
                id: listing.id,
                title: listing.title,
                address: listing.address,
                description: listing.description,
                image: listing.image,
                createdOn: listing.createdOn,
                owner: listing.owner,
                status: listing.status,
                location: listing.location,
                type: listing.type,
                numBedroom: listing.numBedroom,
                numBathroom: listing.numBathroom,
                requests: listing.requests
            }
        })
    }
} 