export default function makeHomeListingDb({ makeDb }) {
    return Object.freeze({
        getAllListings,
        // getListingById,
        // addListing,
        // updateListing,
        // deleteListing
    })
    async function getAllListings() {
        const db = await makeDb();
        const result = await db.collection('homes')
            .get()
            .then((data) => {
                return data.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
            })
            .catch((err) => {
                throw err;
            })
        return (await result); // might be able to remove result
    }

    // async function getListingById({ id: _id }) {
    //     const db = await makeDb();
    //     const result = await db.collection('homes')
    //         .doc(_id)
    //         .get()
    //         .then((data) => {
    //             return {
    //                 id: data.id,
    //                 ...data.data()
    //             }
    //         })
    //         .catch((err) => {
    //             throw err;
    //         })

    //     return (await result);
        
    // }

}