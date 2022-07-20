const UDC_KM_TO_MILES = 0.621371;
const UDC_MILES_TO_KM = 1.60934;
const UDC_FEET_TO_METERS = 0.3048;
const UDC_METERS_TO_FEET = 3.28084;
const UDC_CENTIMETERS_TO_INCHES = 0.3048;
const UDC_INCHES_TO_CENTIMETERS = 3.28084;

const units = [
  {
    input: "km",
    result: "miles",
    indexChange: 1,
    udc: UDC_KM_TO_MILES,
  },
  {
    input: "miles",
    result: "km",
    indexChange: 0,
    udc: UDC_MILES_TO_KM,
  },
  {
    input: "feet",
    result: "mt",
    indexChange: 3,
    udc: UDC_FEET_TO_METERS,
  },
  {
    input: "mt",
    result: "feet",
    indexChange: 2,
    udc: UDC_METERS_TO_FEET,
  },
  {
    input: "cm",
    result: "inches",
    indexChange: 5,
    udc: UDC_CENTIMETERS_TO_INCHES,
  },
  {
    input: "inches",
    result: "cm",
    indexChange: 4,
    udc: UDC_INCHES_TO_CENTIMETERS,
  },
];

export {
  units as default,
  UDC_KM_TO_MILES,
  UDC_MILES_TO_KM,
  UDC_FEET_TO_METERS,
  UDC_METERS_TO_FEET,
  UDC_CENTIMETERS_TO_INCHES,
  UDC_INCHES_TO_CENTIMETERS,
};
