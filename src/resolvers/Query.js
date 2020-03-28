const Query = {
  hello: (parent, args, ctx, info) => {
    const { name  } = args

    return `Hello ${name || 'world'}`
  },
  quantity: () => 1,
  getUser: () => { return {name: 'Pablo', lastName: 'Cardozo' }},
}

export default Query
