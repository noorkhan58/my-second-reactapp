class geo {

    constructor(lat,lng) {
        this.lat = lat;
        this.lng = lng
    }
}

class company {
    constructor(name, catchPhrase, bs) {
        this.name = name;
        this.catchPhrase = catchPhrase;
        this.bs = bs;
    }
}

class address {
    constructor(street, suite, city, zipcode, geo) {
        this.street = street;
        this.suite = suite;
        this.city = city;
        this.zipcode = zipcode;
        this.geo = geo;
    }
}

class User {

    constructor(id, name, username, email, address, phone, website, company) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.website = website;
        this.company = company;
    }
}

let com1 = new company("Romaguera-Crona", "Multi-layered client-server neural-net", "harness real-time e-markets");
let geo1 = new geo("-37.3159", "81.1496");
let add1 = new address("Kulas Light", "Apt. 556", "Gwenborough", "92998-3874", geo1);

let user1 = new User(1, "Fardin Khan", "fardin1234", "Sincere@april.biz", add1, "1-770-736-8031 x56442", "hildegard.org", com1);

