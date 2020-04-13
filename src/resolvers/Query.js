const Query = {
  hello: (parent, args, ctx, info) => {
    const { name  } = args

    return `Hello ${name || 'world'}`
  },
  quantity: () => 1,
  user: (parent, { id }, ctx, info) => {
    const { db } = ctx

    if (!id) {
      return db.users
    }

    return db.users.filter(user => user.id === id)
  },
}

export default Query
