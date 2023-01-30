# LinkedIn Learning - GraphQL Essential Training

Coursework.

https://www.linkedin.com/learning/graphql-essential-training-14933112

## Query the product endpoint

- `npm start`
- navigate to `localhost:8080/graphql` to use GraphiQL interface

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