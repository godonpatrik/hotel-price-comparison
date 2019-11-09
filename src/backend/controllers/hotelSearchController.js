const BookingApi = require('./hotelSearch/BookingApi').BookingApi;
const SkyScannerApi = require('./hotelSearch/SkyScannerApi').SkyScannerApi;
const HotelSearch = require('./hotelSearch/HotelSearchInterface').HotelSearchInterface;
const _ = require('lodash');
const geoCoder = require('./geoCoder');
const axios = require('axios');

async function getHotelData(city, checkin_date, checkout_date, adults) {
  const objectToMerge = {};
  objectToMerge.Booking = await getBookingApiData(city, checkin_date, checkout_date, adults);
  objectToMerge.SkyScanner = await getSkyScannerApiData(city, checkin_date, checkout_date, adults);
  return await createResponse(objectToMerge);
}

function createResponse(mergedData) {
  const bookingDataSize = _.size(mergedData.Booking.name);
  const skyScannerDataSize = _.size(mergedData.SkyScanner.name);
  return new Promise(resolve => {
    let hotelArray = [];
    for (let i = 0; i < bookingDataSize; i++) {
      for (let j = 0; j < skyScannerDataSize; j++) {
        if (mergedData.Booking.name[i] === mergedData.SkyScanner.name[j]) {
          let hotelObject = {};
          Object.keys(mergedData.Booking).forEach(key => {
            hotelObject[key] = mergedData.Booking[key][i];
          });
          Object.keys(mergedData.SkyScanner).forEach(key => {
            hotelObject[key] = mergedData.SkyScanner[key][j];
          });
          hotelArray.push(hotelObject);
        }
      }
    }
    resolve(hotelArray)
  });
}

async function getBookingApiData(city, checkin_date, checkout_date, adults) {
  const bookingApi = new BookingApi();
  const geocodeResponse = await geoCoder(city);
  const geoCode = geocodeResponse['data']['results'][0]['locations'][0]['latLng'];
  const url = bookingApi.craftUrlFromParams(geoCode['lng'], geoCode['lat'], checkin_date, checkout_date, adults);
  try {
    const response = await axios.get(url);
    const bookingApiResponse = bookingApi.createResponseFromData(response);
    const bookingApiData = new HotelSearch(bookingApiResponse);
    return await createBookingObject(bookingApiData)
  } catch (e) {
    const bookingApiResponse = bookingApi.createResponseFromData(bookingApi.getFakeResponse());
    const bookingApiData = new HotelSearch(bookingApiResponse);
    return await createBookingObject(bookingApiData)
  }
}

async function getSkyScannerApiData(city, checkin_date, checkout_date, adults) {
  const skyScannerApi = new SkyScannerApi();
  const geocodeResponse = await geoCoder(city);
  const geoCode = geocodeResponse['data']['results'][0]['locations'][0]['latLng'];
  const url = skyScannerApi.craftUrlFromParams(geoCode['lng'], geoCode['lat'], checkin_date, checkout_date, adults);
  try {
    const response = await axios.get(url);
    const skyScannerApiResponse = skyScannerApi.createResponseFromData(response);
    const skyScannerApiData = new HotelSearch(skyScannerApiResponse);
    return await createSkyScannerObject(skyScannerApiData)
  } catch (e) {
    const skyScannerApiResponse = skyScannerApi.createResponseFromData(skyScannerApi.getFakeResponse());
    const skyScannerApiData = new HotelSearch(skyScannerApiResponse);
    return await createSkyScannerObject(skyScannerApiData)
  }
}

async function createSkyScannerObject(skyScannerApiData) {
  let hotelData = {};
  hotelData.name = await skyScannerApiData.getHotelProperty('name');
  hotelData.skyScannerPrice = await skyScannerApiData.getHotelProperty('price');
  hotelData.skyScannerAddress = await skyScannerApiData.getHotelProperty('address');
  hotelData.ratings = await skyScannerApiData.getHotelProperty('ratings');
  hotelData.city = await skyScannerApiData.getHotelProperty('city');
  return hotelData;
}

async function createBookingObject(bookingApiData) {
  let hotelData = {};
  hotelData.name = await bookingApiData.getHotelProperty('name');
  hotelData.bookingPrice = await bookingApiData.getHotelProperty('price');
  hotelData.bookingAddress = await bookingApiData.getHotelProperty('address');
  hotelData.checkinDate = await bookingApiData.getHotelProperty('checkin_date');
  hotelData.checkoutDate = await bookingApiData.getHotelProperty('checkout_date');
  hotelData.stars = await bookingApiData.getHotelProperty('stars');
  hotelData.image = await bookingApiData.getHotelProperty('image');
  return hotelData;
}

module.exports.getHotelData = getHotelData;
