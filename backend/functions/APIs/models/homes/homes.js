export default function buildMakeHomeListing({ listingValidator }) {
    return function makeHomeListing ({
        id,
        title,
        address,
        description,
        image,
        createdOn,
        owner,
        status,
        location,
        type,
        numBedroom,
        numBathroom,
        requests
    } = {}) {
        if (!id) {
            throw new Error('Home ID is required')
        }

        if (!title) {
            throw new Error('Title is required')
        }

        if (!address) {
            throw new Error('Home address is required')
        }

        if (!image) {
            throw new Error('Home image is required')
        }

        if (!createdOn) {
            throw new Error('Home createdOn is required')
        }

        if (!owner) {
            throw new Error('Home owner is required')
        }

        if (!status) {
            throw new Error('Home status is required')
        }

        if (!location) {
            throw new Error('Home location is required')
        }

        if (!type) {
            throw new Error('Home type is required')
        }

        if (!numBedroom) {
            throw new Error('Home numBedroom is required')
        }

        if (!numBathroom) {
            throw new Error('Home numBathroom is required')
        }

        let { error } = listingValidator({
            id,
            title,
            address,
            createdOn,
            owner,
            status,
            location,
            type,
            numBedroom,
            numBathroom
        })

        if (error) {
            throw new Error(error)
        }

        return Object.freeze({
            getId: () => id,
            getTitle: () => title,
            getAddress: () => address,
            getDescription: () => description,
            getImage: () => image,
            getCreatedOn: () => createdOn,
            getOwner: () => owner,
            getStatus: () => status,
            getLocation: () => location,
            getType: () => type,
            getNumBedroom: () => numBedroom,
            getNumBathroom: () => numBathroom,
            getRequests: () => requests
        })
    }
}