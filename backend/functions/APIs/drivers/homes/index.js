import {
    getAllListings
} from "../../use-cases/homes";

import makeGetListings from "./get-listings";

const getListings = makeGetListings({ getAllListings });

const listingsController = Object.freeze({
    getListings
});

export default listingsController;
export { getListings };
