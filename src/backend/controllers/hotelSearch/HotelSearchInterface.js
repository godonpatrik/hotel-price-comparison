'use strict';

class HotelSearchInterface {

  constructor(hotelData) {
    this.hotelData = hotelData;
  }

  createResponseFromData(responseData) {
  }

  getHotelProperty(keyToFind) {
    return new Promise((resolve) => {
      const hotelNames = [];
      this.hotelData.map(data => {
        const filteredObject = Object.keys(data)
          .filter(key => key === keyToFind)
          .reduce((obj, key) => {
            obj[key] = data[key];
            return obj[key];
          }, {});
        hotelNames.push(filteredObject);
      });
      resolve(hotelNames);
    })
  }

  craftUrlFromParams() {
  }

}

module.exports.HotelSearchInterface = HotelSearchInterface;
