'use strict';
const HotelSearchInterface = require('./HotelSearchInterface').HotelSearchInterface;

class BookingApi extends HotelSearchInterface {

  constructor(hotelData) {
    super(hotelData);
  }

  getFakeResponse() {
    return fakeResponseData;
  }

  createResponseFromData(responseData) {
    const hotelData = [];
    responseData.forEach(hotel => {
      Object.values(hotel).forEach(values => {
        const hotelObject = {};
        hotelObject.name = values.name;
        hotelObject.address = values.address;
        hotelObject.stars = values.ratings;
        hotelObject.price = values.price;
        hotelObject.statistics = values.statistics;
        hotelObject.checkin_date = values.checkin_date;
        hotelObject.checkout_date = values.checkout_date;
        hotelObject.image = values.image.url;
        hotelData.push(hotelObject);
      });
    });
    return hotelData;
  }

  craftUrlFromParams(lon, lat, checkin_date, checkout_date, adults) {
    return `https://distribution-xml.booking.com/2.5/json/hotelAvailability/${lon}+${lat}+10?checkin_date=${checkin_date}&checkout_date=${checkout_date}&adults=${adults}`
  }

}

module.exports.BookingApi = BookingApi;

const fakeResponseData = [{
  "10001": {
    "property_id": "10001",
    "name": "Hotel Papillon",
    "address": {
      "line_1": "Rózsahegy u. 3/B",
      "city": "Budapest",
      "state_province_name": "Budapest",
      "postal_code": "1024",
      "country_code": "HU",
    },
    "ratings": {
      "rating": "3",
      "type": "Star"
    },
    "checkin": {
      "begin_time": "3:00 PM",
      "end_time": "11:00 PM",
      "min_age": 18
    },
    "checkout": {
      "time": "11:00 AM"
    },
    "checkin_date": {
      "date": "2020-06-04"
    },
    "checkout_date": {
      "date": "2020-06-09"
    },
    "price": {
      "price": "370",
      "currency": "$"
    },
    "image": {
      "url": "https://r-cf.bstatic.com/xdata/images/hotel/square200/139074134.webp?k=127904dc9db18f0ce416fd52ed6580bbbcfd94394fdcb89b85f2fed180afc9e3&o="
    },
    "airports": {
      "preferred": {
        "airport_code": "BUD"
      }
    }
  },
  "10002": {
    "property_id": "10002",
    "name": "InterContinental Budapest",
    "address": {
      "line_1": "Apaczai Csere Janos u. 12-14",
      "city": "Budapest",
      "state_province_name": "Budapest",
      "postal_code": "1052",
      "country_code": "HU",
    },
    "ratings": {
      "rating": "5",
      "type": "Star"
    },
    "checkin": {
      "begin_time": "3:00 PM",
      "end_time": "11:00 PM",
      "min_age": 18
    },
    "checkout": {
      "time": "11:00 AM"
    },
    "checkin_date": {
      "date": "2020-06-04"
    },
    "checkout_date": {
      "date": "2020-06-09"
    },
    "price": {
      "price": "1668",
      "currency": "$"
    },
    "image": {
      "url": "https://r-cf.bstatic.com/xdata/images/hotel/square200/223995010.webp?k=426c6247a9bbfe6278d81db77dad2e36c0b3013eebe6a2806240884eb644708e&o="
    },
    "airports": {
      "preferred": {
        "airport_code": "BUD"
      }
    }
  },
  "10003": {
    "property_id": "10003",
    "name": "Vagabond Corvin",
    "address": {
      "line_1": "Práter u 6",
      "city": "Budapest",
      "state_province_name": "Budapest",
      "postal_code": "1083",
      "country_code": "HU",
    },
    "ratings": {
      "rating": "4",
      "type": "Star"
    },
    "checkin": {
      "begin_time": "3:00 PM",
      "end_time": "11:00 PM",
      "min_age": 18
    },
    "checkout": {
      "time": "11:00 AM"
    },
    "checkin_date": {
      "date": "2020-06-04"
    },
    "checkout_date": {
      "date": "2020-06-09"
    },
    "price": {
      "price": "738",
      "currency": "$"
    },
    "image": {
      "url": "https://r-cf.bstatic.com/xdata/images/hotel/square200/206928974.webp?k=eaf79ea76e5833c14b38d17cddc1881b6b61f99b665c38fd4541b5c425e7920e&o="
    },
    "airports": {
      "preferred": {
        "airport_code": "BUD"
      }
    }
  },
  "10004": {
    "property_id": "10004",
    "name": "Avenue Hostel",
    "address": {
      "line_1": "Oktogon tér 4",
      "city": "Budapest",
      "state_province_name": "Budapest",
      "postal_code": "1067",
      "country_code": "HU",
    },
    "ratings": {
      "rating": "2",
      "type": "Star"
    },
    "checkin": {
      "begin_time": "3:00 PM",
      "end_time": "11:00 PM",
      "min_age": 18
    },
    "checkout": {
      "time": "11:00 AM"
    },
    "checkin_date": {
      "date": "2020-06-04"
    },
    "checkout_date": {
      "date": "2020-06-09"
    },
    "price": {
      "price": "142",
      "currency": "$"
    },
    "image": {
      "url": "https://q-cf.bstatic.com/xdata/images/hotel/square200/33547697.webp?k=1eeca3fcea5bb7926b3c069de526f248a696d8fec4d0df703d6c00f43e554d4c&o="
    },
    "airports": {
      "preferred": {
        "airport_code": "BUD"
      }
    }
  },
  "10005": {
    "property_id": "10005",
    "name": "Budapest Holidays Harmony",
    "address": {
      "line_1": "Kossuth Lajos utca 2/B",
      "city": "Budapest",
      "state_province_name": "Budapest",
      "postal_code": "1053",
      "country_code": "HU",
    },
    "ratings": {
      "rating": "3",
      "type": "Star"
    },
    "checkin": {
      "begin_time": "3:00 PM",
      "end_time": "11:00 PM",
      "min_age": 18
    },
    "checkout": {
      "time": "11:00 AM"
    },
    "checkin_date": {
      "date": "2020-06-04"
    },
    "checkout_date": {
      "date": "2020-06-09"
    },
    "price": {
      "price": "441",
      "currency": "$"
    },
    "image": {
      "url": "https://r-cf.bstatic.com/xdata/images/hotel/square200/87035431.webp?k=f8a3361a4f16a3b5ff8a83d1a9d2253e742ee01e6645822ddedfaf0fef8448ce&o="
    },
    "airports": {
      "preferred": {
        "airport_code": "BUD"
      }
    }
  },
  "10006": {
    "property_id": "10006",
    "name": "AnVa House",
    "address": {
      "line_1": "Kazinczy utca 53",
      "city": "Budapest",
      "state_province_name": "Budapest",
      "postal_code": "1075",
      "country_code": "HU",
    },
    "ratings": {
      "rating": "2",
      "type": "Star"
    },
    "checkin": {
      "begin_time": "3:00 PM",
      "end_time": "11:00 PM",
      "min_age": 18
    },
    "checkout": {
      "time": "11:00 AM"
    },
    "checkin_date": {
      "date": "2020-06-04"
    },
    "checkout_date": {
      "date": "2020-06-09"
    },
    "price": {
      "price": "310",
      "currency": "$"
    },
    "image": {
      "url": "https://q-cf.bstatic.com/xdata/images/hotel/square200/118354287.webp?k=0d9092fbaaaa925f201db232537b1498b80ec05cb96f8da902fdac2090c9f5cb&o="
    },
    "airports": {
      "preferred": {
        "airport_code": "BUD"
      }
    }
  },
  "10007": {
    "property_id": "10007",
    "name": "Bellevue Budapest B&B",
    "address": {
      "line_1": "Szabó Ilonka u. 15/b",
      "city": "Budapest",
      "state_province_name": "Budapest",
      "postal_code": "1015",
      "country_code": "HU",
    },
    "ratings": {
      "rating": "3",
      "type": "Star"
    },
    "checkin": {
      "begin_time": "3:00 PM",
      "end_time": "11:00 PM",
      "min_age": 18
    },
    "checkout": {
      "time": "11:00 AM"
    },
    "checkin_date": {
      "date": "2020-06-04"
    },
    "checkout_date": {
      "date": "2020-06-09"
    },
    "price": {
      "price": "410",
      "currency": "$"
    },
    "image": {
      "url": "https://q-cf.bstatic.com/xdata/images/hotel/square200/40818822.webp?k=964371b821290a15e323334946f5eddf64d630c35636fb849598dbbe7aa5dd5f&o="
    },
    "airports": {
      "preferred": {
        "airport_code": "BUD"
      }
    }
  },
  "10008": {
    "property_id": "10008",
    "name": "Hotel Metro",
    "address": {
      "line_1": "Kresz Géza u. 1",
      "city": "Budapest",
      "state_province_name": "Budapest",
      "postal_code": "1132",
      "country_code": "HU",
    },
    "ratings": {
      "rating": "3",
      "type": "Star"
    },
    "checkin": {
      "begin_time": "3:00 PM",
      "end_time": "11:00 PM",
      "min_age": 18
    },
    "checkout": {
      "time": "11:00 AM"
    },
    "checkin_date": {
      "date": "2020-06-04"
    },
    "checkout_date": {
      "date": "2020-06-09"
    },
    "price": {
      "price": "556",
      "currency": "$"
    },
    "image": {
      "url": "https://r-cf.bstatic.com/xdata/images/hotel/square200/189101409.webp?k=90c208dc747d45f10e7094edf4e29f5a6fdf6f2f47e73c2e3b253f14d8743a41&o="
    },
    "airports": {
      "preferred": {
        "airport_code": "BUD"
      }
    }
  },
  "10009": {
    "property_id": "10009",
    "name": "Central Green Hotel",
    "address": {
      "line_1": "Szív utca 13",
      "city": "Budapest",
      "state_province_name": "Budapest",
      "postal_code": "1063",
      "country_code": "HU",
    },
    "ratings": {
      "rating": "3",
      "type": "Star"
    },
    "checkin": {
      "begin_time": "3:00 PM",
      "end_time": "11:00 PM",
      "min_age": 18
    },
    "checkout": {
      "time": "11:00 AM"
    },
    "checkin_date": {
      "date": "2020-06-04"
    },
    "checkout_date": {
      "date": "2020-06-09"
    },
    "price": {
      "price": "325.55",
      "currency": "$"
    },
    "image": {
      "url": "https://q-cf.bstatic.com/xdata/images/hotel/square200/159139703.webp?k=6b9248aa9cfe8f69a7fd6aee83e4c04d9bb27243d133064a788f8b1f1d496607&o="
    },
    "airports": {
      "preferred": {
        "airport_code": "BUD"
      }
    }
  },
  "10010": {
    "property_id": "10010",
    "name": "Hotel Golden Park Budapest",
    "address": {
      "line_1": "Baross tér 10",
      "city": "Budapest",
      "state_province_name": "Budapest",
      "postal_code": "1087",
      "country_code": "HU",
    },
    "ratings": {
      "rating": "4",
      "type": "Star"
    },
    "checkin": {
      "begin_time": "3:00 PM",
      "end_time": "11:00 PM",
      "min_age": 18
    },
    "checkout": {
      "time": "11:00 AM"
    },
    "checkin_date": {
      "date": "2020-06-04"
    },
    "checkout_date": {
      "date": "2020-06-09"
    },
    "price": {
      "price": "292",
      "currency": "$"
    },
    "image": {
      "url": "https://r-cf.bstatic.com/xdata/images/hotel/square200/167834297.webp?k=856e2fdac2f4a3411f40a6ba61c6da5ff815eea8cd6e292a5d934a50607027f8&o="
    },
    "airports": {
      "preferred": {
        "airport_code": "BUD"
      }
    }
  },
  "10011": {
    "property_id": "10011",
    "name": "SOUS44",
    "address": {
      "line_1": "Rákóczi út 44",
      "city": "Budapest",
      "state_province_name": "Budapest",
      "postal_code": "1072",
      "country_code": "HU",
    },
    "ratings": {
      "rating": "3",
      "type": "Star"
    },
    "checkin": {
      "begin_time": "3:00 PM",
      "end_time": "11:00 PM",
      "min_age": 18
    },
    "checkout": {
      "time": "11:00 AM"
    },
    "checkin_date": {
      "date": "2020-06-04"
    },
    "checkout_date": {
      "date": "2020-06-09"
    },
    "price": {
      "price": "1827",
      "currency": "$"
    },
    "image": {
      "url": "https://r-cf.bstatic.com/xdata/images/hotel/square200/85581853.webp?k=b6766737c7319058918bac4ab2610df24c22ac9b11bd813ae909793b7b52d026&o="
    },
    "airports": {
      "preferred": {
        "airport_code": "BUD"
      }
    }
  },
  "10012": {
    "property_id": "10012",
    "name": "Atlas City Hotel",
    "address": {
      "line_1": "Népszínház u. 39-41",
      "city": "Budapest",
      "state_province_name": "Budapest",
      "postal_code": "1081",
      "country_code": "HU",
    },
    "ratings": {
      "rating": "3",
      "type": "Star"
    },
    "checkin": {
      "begin_time": "3:00 PM",
      "end_time": "11:00 PM",
      "min_age": 18
    },
    "checkout": {
      "time": "11:00 AM"
    },
    "checkin_date": {
      "date": "2020-06-04"
    },
    "checkout_date": {
      "date": "2020-06-09"
    },
    "price": {
      "price": "347.80",
      "currency": "$"
    },
    "image": {
      "url": "https://q-cf.bstatic.com/xdata/images/hotel/square200/50505297.webp?k=d1efd67f6ae379df361f64c47761b8e5a3b080e86b45fc2809d26c2290eab1ce&o="
    },
    "airports": {
      "preferred": {
        "airport_code": "BUD"
      }
    }
  },
  "10013": {
    "property_id": "10013",
    "name": "LOFT Astoria",
    "address": {
      "line_1": "Múzeum körút 1/b",
      "city": "Budapest",
      "state_province_name": "Budapest",
      "postal_code": "1050",
      "country_code": "HU",
    },
    "ratings": {
      "rating": "4",
      "type": "Star"
    },
    "checkin": {
      "begin_time": "3:00 PM",
      "end_time": "11:00 PM",
      "min_age": 18
    },
    "checkout": {
      "time": "11:00 AM"
    },
    "checkin_date": {
      "date": "2020-06-04"
    },
    "checkout_date": {
      "date": "2020-06-09"
    },
    "price": {
      "price": "970",
      "currency": "$"
    },
    "image": {
      "url": "https://q-cf.bstatic.com/xdata/images/hotel/square200/161861055.webp?k=d9880f9d3a354ad97f85013473fac9c6b182127c4782869a1d33f7dbe588410f&o="
    },
    "airports": {
      "preferred": {
        "airport_code": "BUD"
      }
    }
  }
}];

