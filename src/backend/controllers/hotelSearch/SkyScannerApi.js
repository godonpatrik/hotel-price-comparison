'use strict';
const HotelSearchInterface = require('./HotelSearchInterface').HotelSearchInterface;

class SkyScannerApi extends HotelSearchInterface {

  constructor(hotelData) {
    super(hotelData);
  }

  getFakeResponse() {
    return fakeResponseData;
  }

  createResponseFromData(responseData) {
    const hotelData = [];
    responseData[0].results.hotels.forEach(hotels => {
      const hotelObject = {};
      hotelObject.name = hotels.name;
      hotelObject.address = hotels.address;
      hotelObject.postal_code = hotels.postal_code;
      hotelObject.ratings = hotels.rating;
      let priceObject = {};
      priceObject.price = hotels.offers[0].price;
      priceObject.currency = hotels.offers[0].currency === 'usd' ? '$' : '$';
      hotelObject.price = priceObject;
      hotelObject.city = responseData[0].results.location[0].name;
      hotelData.push(hotelObject);
    });
    return hotelData;
  }

  craftUrlFromParams(lon, lat, checkin_date, checkout_date, adults) {
    return `https://www.skyscanner.net/g/hotels/v1/prices/search/location/${lon},${lat}?checkin_date=${checkin_date}&checkout_date=${checkout_date}&adults=${adults}`;
  }

}

module.exports.SkyScannerApi = SkyScannerApi;

const fakeResponseData = [{
  "correlation_id": "3889f7d3-65d2-40e8-8034-4accb18bade9",
  "results": {
    "location": [
      {
        "entity_type": "City",
        "entity_id": "81972530",
        "name": "Budapest"
      },
    ],
    "hotels": [
      {
        "stars": "4",
        "reviews_count": 101,
        "amenities": [
          "Lift",
          "Spa",
          "Laundry",
        ],
        "property_type": "Hotel",
        "rating": {
          "desc": "rating_satisfactory",
          "value": 8.0
        },
        "name": "Hotel Papillon",
        "hotel_id": "21054793",
        "postal_code": 1024,
        "address": "Rózsahegy u. 3/B",
        "offers": [
          {
            "partner_id": "h_hc",
            "price": 374,
            "currency": "usd",
            "available": null,
            "strike_through": null,
            "meal_plan": "breakfast_included",
            "is_official": true,
            "closed_user_groups": null,
            "dbook_link": null,
            "room_type": [
              "double_room",
              "triple_room"
            ],
            "cancellation_text": null,
            "cancellation": "non_refundable"
          },
        ],
      },
      {
        "stars": "5",
        "reviews_count": 656,
        "amenities": [
          "Lift",
          "Laundry",
        ],
        "property_type": "Hotel",
        "rating": {
          "desc": "rating_satisfactory",
          "value": 9.0
        },
        "name": "InterContinental Budapest",
        "hotel_id": "15853098",
        "postal_code": 1052,
        "address": "Apaczai Csere Janos u. 12-14",
        "offers": [
          {
            "partner_id": "h_hc",
            "price": 1670,
            "currency": "usd",
            "available": null,
            "strike_through": null,
            "meal_plan": "breakfast_included",
            "is_official": true,
            "closed_user_groups": null,
            "dbook_link": null,
            "room_type": [
              "double_room",
              "triple_room"
            ],
            "cancellation_text": null,
            "cancellation": "non_refundable"
          },
        ],
      },
      {
        "stars": "3",
        "reviews_count": 590,
        "amenities": [
          "Laundry",
        ],
        "property_type": "Hotel",
        "rating": {
          "desc": "rating_satisfactory",
          "value": 8.5
        },
        "name": "Budapest Holidays Harmony",
        "hotel_id": "35359395",
        "postal_code": 1053,
        "address": "Kossuth Lajos utca 2/B",
        "offers": [
          {
            "partner_id": "h_hc",
            "price": 444,
            "currency": "usd",
            "available": null,
            "strike_through": null,
            "meal_plan": "breakfast_included",
            "is_official": true,
            "closed_user_groups": null,
            "dbook_link": null,
            "room_type": [
              "double_room",
            ],
            "cancellation_text": null,
            "cancellation": "non_refundable"
          },
        ],
      },
      {
        "stars": "3",
        "reviews_count": 826,
        "amenities": [
          "Laundry",
          "Lift",
        ],
        "property_type": "Hotel",
        "rating": {
          "desc": "rating_satisfactory",
          "value": 6.3
        },
        "name": "Central Green Hotel",
        "hotel_id": "76983582",
        "postal_code": 1063,
        "address": "Szív utca 13",
        "offers": [
          {
            "partner_id": "h_hc",
            "price": 327,
            "currency": "usd",
            "available": null,
            "strike_through": null,
            "meal_plan": "breakfast_included",
            "is_official": true,
            "closed_user_groups": null,
            "dbook_link": null,
            "room_type": [
              "double_room",
              "triple_room",
            ],
            "cancellation_text": null,
            "cancellation": "non_refundable"
          },
        ],
      },
      {
        "stars": "4",
        "reviews_count": 349,
        "amenities": [
          "Lift"
        ],
        "property_type": "Hotel",
        "rating": {
          "desc": "rating_satisfactory",
          "value": 9.0
        },
        "name": "Vagabond Corvin",
        "hotel_id": "47053033",
        "postal_code": 1083,
        "address": "Práter u 6",
        "offers": [
          {
            "partner_id": "h_hc",
            "price": 735,
            "currency": "usd",
            "available": null,
            "strike_through": null,
            "meal_plan": "breakfast_included",
            "is_official": true,
            "closed_user_groups": null,
            "dbook_link": null,
            "room_type": [
              "triple_room"
            ],
            "cancellation_text": null,
            "cancellation": "non_refundable"
          },
        ],
      },
      {
        "stars": "3",
        "reviews_count": 421,
        "amenities": [
          "Laundry",
        ],
        "property_type": "Hotel",
        "rating": {
          "desc": "rating_satisfactory",
          "value": 8.7
        },
        "name": "AnVa House",
        "hotel_id": "65869935",
        "postal_code": 1075,
        "address": "Kazinczy utca 53",
        "offers": [
          {
            "partner_id": "h_hc",
            "price": 318,
            "currency": "usd",
            "available": null,
            "strike_through": null,
            "meal_plan": "breakfast_included",
            "is_official": true,
            "closed_user_groups": null,
            "dbook_link": null,
            "room_type": [
              "double_room",
            ],
            "cancellation_text": null,
            "cancellation": "non_refundable"
          },
        ],
      },
      {
        "stars": "2",
        "reviews_count": 49,
        "amenities": [
          "Laundry",
          "Lift",
        ],
        "property_type": "Hotel",
        "rating": {
          "desc": "rating_satisfactory",
          "value": 9.2
        },
        "name": "Bellevue Budapest B&B",
        "hotel_id": "49263421",
        "postal_code": 1015,
        "address": "Szabó Ilonka u. 15/b",
        "offers": [
          {
            "partner_id": "h_hc",
            "price": 404,
            "currency": "usd",
            "available": null,
            "strike_through": null,
            "meal_plan": "breakfast_included",
            "is_official": true,
            "closed_user_groups": null,
            "dbook_link": null,
            "room_type": [
              "double_room",
            ],
            "cancellation_text": null,
            "cancellation": "non_refundable"
          },
        ],
      },
      {
        "stars": "3",
        "reviews_count": 86,
        "amenities": [
          "Laundry",
          "Lift",
        ],
        "property_type": "Hotel",
        "rating": {
          "desc": "rating_satisfactory",
          "value": 8.5
        },
        "name": "Hotel Metro",
        "hotel_id": "56343201",
        "postal_code": 1132,
        "address": "Kresz Géza u. 1",
        "offers": [
          {
            "partner_id": "h_hc",
            "price": 551,
            "currency": "usd",
            "available": null,
            "strike_through": null,
            "meal_plan": "breakfast_included",
            "is_official": true,
            "closed_user_groups": null,
            "dbook_link": null,
            "room_type": [
              "double_room",
            ],
            "cancellation_text": null,
            "cancellation": "non_refundable"
          },
        ],
      },
      {
        "stars": "2",
        "reviews_count": 479,
        "amenities": [
          "Lift",
          "Spa",
          "Laundry",
        ],
        "property_type": "Hotel",
        "rating": {
          "desc": "rating_satisfactory",
          "value": 8.4
        },
        "name": "Avenue Hostel",
        "hotel_id": "35359395",
        "postal_code": 1067,
        "address": "Oktogon tér 4",
        "offers": [
          {
            "partner_id": "h_hc",
            "price": 140,
            "currency": "usd",
            "available": null,
            "strike_through": null,
            "meal_plan": "breakfast_included",
            "is_official": true,
            "closed_user_groups": null,
            "dbook_link": null,
            "room_type": [
              "double_room",
              "triple_room"
            ],
            "cancellation_text": null,
            "cancellation": "non_refundable"
          },
        ],
      },
      {
        "stars": "4",
        "reviews_count": 854,
        "amenities": [
          "Laundry",
        ],
        "property_type": "Hotel",
        "rating": {
          "desc": "rating_satisfactory",
          "value": 7.3
        },
        "name": "Hotel Golden Park Budapest",
        "hotel_id": "45533941",
        "postal_code": 1087,
        "address": "Baross tér 10",
        "offers": [
          {
            "partner_id": "h_hc",
            "price": 290,
            "currency": "usd",
            "available": null,
            "strike_through": null,
            "meal_plan": "breakfast_included",
            "is_official": true,
            "closed_user_groups": null,
            "dbook_link": null,
            "room_type": [
              "double_room",
            ],
            "cancellation_text": null,
            "cancellation": "non_refundable"
          },
        ],
      },
      {
        "stars": "3",
        "reviews_count": 265,
        "amenities": [
          "Laundry",
        ],
        "property_type": "Hotel",
        "rating": {
          "desc": "rating_satisfactory",
          "value": 7.2
        },
        "name": "Atlas City Hotel",
        "hotel_id": "45533941",
        "postal_code": 1081,
        "address": "Népszínház u. 39-41",
        "offers": [
          {
            "partner_id": "h_hc",
            "price": 352,
            "currency": "usd",
            "available": null,
            "strike_through": null,
            "meal_plan": "breakfast_included",
            "is_official": true,
            "closed_user_groups": null,
            "dbook_link": null,
            "room_type": [
              "double_room",
            ],
            "cancellation_text": null,
            "cancellation": "non_refundable"
          },
        ],
      },
      {
        "stars": "3",
        "reviews_count": 216,
        "amenities": [
          "Laundry",
        ],
        "property_type": "Hotel",
        "rating": {
          "desc": "rating_satisfactory",
          "value": 7.7
        },
        "name": "SOUS44",
        "hotel_id": "45533941",
        "postal_code": 1072,
        "address": "Rákóczi út 44",
        "offers": [
          {
            "partner_id": "h_hc",
            "price": 1815,
            "currency": "usd",
            "available": null,
            "strike_through": null,
            "meal_plan": "breakfast_included",
            "is_official": true,
            "closed_user_groups": null,
            "dbook_link": null,
            "room_type": [
              "double_room",
            ],
            "cancellation_text": null,
            "cancellation": "non_refundable"
          },
        ],
      },
      {
        "stars": "3",
        "reviews_count": 192,
        "amenities": [
          "Laundry",
        ],
        "property_type": "Hotel",
        "rating": {
          "desc": "rating_satisfactory",
          "value": 8.5
        },
        "name": "Budapest Museum Central",
        "hotel_id": "45533941",
        "postal_code": 1053,
        "address": "Múzeum körút 39",
        "offers": [
          {
            "partner_id": "h_hc",
            "price": 412,
            "currency": "usd",
            "available": null,
            "strike_through": null,
            "meal_plan": "breakfast_included",
            "is_official": true,
            "closed_user_groups": null,
            "dbook_link": null,
            "room_type": [
              "double_room",
            ],
            "cancellation_text": null,
            "cancellation": "non_refundable"
          },
        ],
      },
    ],
    "price_includes": [
      "vat",
      "other_taxes"
    ],
    "average_min_price": 528.5,
  }

}];
