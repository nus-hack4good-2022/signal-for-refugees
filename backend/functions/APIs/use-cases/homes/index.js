import makeGetAllListings from "./get-all-listings";
import listingsDb from "../data-access/listings-db";

const getAllListings = makeGetAllListings({ listingsDb });

const listingsUseCases = Object.freeze({
    getAllListings
});

export default listingsUseCases;
export { getAllListings };