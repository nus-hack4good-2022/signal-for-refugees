import { db } from './util/admin';
import makeHomeListingDb from './homes-db';

export async function makeDb() {
    return db;
}

const homeListingDb = makeHomeListingDb({ makeDb });
export default homeListingDb;