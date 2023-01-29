# LinkedIn Learning - GraphQL Essential Training

Coursework.

https://www.linkedin.com/learning/graphql-essential-training-14933112

## Query the product endpoint

- `npm start`
- navigate to `localhost:8080/graphql` to use GraphiQL interface
- run query

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
