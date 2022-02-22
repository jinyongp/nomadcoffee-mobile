module.exports = {
  client: {
    service: {
      name: 'NomadCoffee Backend',
      url: 'https://nomadcoffee-jinyongp.herokuapp.com/graphql',
    },
    tagName: 'gql',
    excludes: ['./src/generated/graphql.ts'],
    includes: ['./src/documents/*.ts'],
  },
};
