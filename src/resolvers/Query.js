const Query = {
  hello: (parent, args, ctx, info) => 'Hello World!!',
  quantity: () => 1,
  getUser: () => { return {name: 'Pablo', lastName: 'Cardozo' }},
}

export default Query
