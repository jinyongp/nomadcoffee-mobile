import { gql } from '@apollo/client';

gql`
  query SeeCoffeeShops($items: Int!, $lastId: Int, $userId: Int) {
    seeCoffeeShops(items: $items, lastId: $lastId, userId: $userId) {
      ok
      error
      coffeeShops {
        id
        name
        photos(items: 10) {
          id
          url
        }
        categories(items: 5) {
          id
          slug
        }
      }
    }
  }
`;
