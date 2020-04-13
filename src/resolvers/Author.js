const Author = {
  register_by: (parent, args, { db }, info) => {
    return db.users.find(user => parent.register_by === user.id)
  }
}

export default Author
