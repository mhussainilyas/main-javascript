let obj = {
  fname: "Hussain",
  age: 19,
  address: {
    city: "lahore",
    country: "PAK",
    detail: {
      street: 4,
      houseNo: 5,
      mohalla: "Makhdoomabad",
    },
  },
};

console.log(obj);
console.log(obj.fname);
console.log(obj.address);
console.log(obj.address.city);
console.log(obj.address.detail);
console.log(obj.address.detail.houseNo);
console.log(obj.address.detail.mohalla);