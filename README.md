# LinkedIn Learning - GraphQL Essential Training

Coursework.

https://www.linkedin.com/learning/graphql-essential-training-14933112

## Spin up MongoDB

- `docker-compose up`

## Interact with MongoDB database

- use MongoDBCompass
- connection string: `mongodb://admin:password@localhost:27017/?authMechanism=DEFAULT`

## Interact with graphQL endpoints

- `npm start`
- navigate to `localhost:8080/graphql` to use GraphiQL interface


### Queries

```
query {
  product {
    id
    name
    description
    price
    soldout
  }
}
```

```
query {
  getAllProducts {
    id
    name
  }
}
```

### Queries using alias

```
query {
  price: getProduct(id:"63dda421816c193ad6047b28") {
    name
    price
  }
  description: getProduct(id:"63dda459ea190685d61fccb8") {
    name
    description
  }
}
```

### Queries using fragment

```
query {
  widget1: getProduct(id:"63dda421816c193ad6047b28") {
		...widgetFragment
  }
  widget2: getProduct(id:"63dda459ea190685d61fccb8") {
		...widgetFragment
  }
}

  
fragment widgetFragment on Product {
  name
  price
  description
  soldout
}
```

### Mutations

```
mutation {
  createProduct(input: {
    name: "Widget 5",
    description: "",
    price: 40.99,
    soldout: ONSALE,
    inventory: 21,
    stores: [
      {
        store: "Pasadena"
      },
        {
        store: "Ventura"
      }
  	]
  }){
    price
    name
    id
    inventory
  }
}
```

```
mutation {
  updateProduct(input: {
    id: "63dda459ea190685d61fccb8",
    name: "Widget 5 - updated",
    description: "",
    price: 14.99,
    soldout: ONSALE,
    inventory: 14,
    stores: [
      {
        store: "Pasadena"
      },
        {
        store: "Ventura"
      }
  	]
  }){
    price
    name
    id
    inventory
  }
}
```

```
mutation {
  deleteProduct(id: "63dc873a1704daed99e73190")
}
```
