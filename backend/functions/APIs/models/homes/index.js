import buildMakeHomeListing from './homes';
import { listingValidator } from '../validator';

let makeHomeListing = buildMakeHomeListing({ listingValidator });

module.exports = makeHomeListing;