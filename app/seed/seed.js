export const seed = [
  {
    userId: '1',
    name: 'Daniel González',
    postId: '1',
    title: 'First post',
    photo: 'https://images.freeimages.com/images/large-previews/da0/diwali-1179941.jpg',
    comment: 'Es es el comentartio del userasdfsafgsdgh sdghdfhsdhg',
    createdAT: '',
    updatedAt: '',
    likes: 20,
    commentsArray: [
      {
        commentId: '1',
        user: '2',
        postId: '1',
        likes: 10,
        comment: 'comentario del user 2 sobre el post del user 1 lñksadfñljkasdf'
      },
      {
        commentId: '2',
        user: '4',
        postId: '1',
        likes: 2,
        comment: 'comentario del user 4 sobre el post del user 1'
      }
    ]
  },
  {
    userId: '2',
    name: 'Veronica Iniesta',
    postId: '2',
    title: 'Second post',
    photo: 'https://images.freeimages.com/images/large-previews/da0/diwali-1179941.jpg',
    comment: 'Es es el comentartio del user',
    createdAT: '',
    updatedAt: '',
    likes: 0,
    commentsArray: [
      {
        commentId: '1',
        user: '1',
        postId: '2',
        likes: 1,
        comment: 'comentario del user 1 sobre el post del user 2'
      },
      {
        commentId: '2',
        user: '2',
        postId: '2',
        likes: 2,
        comment: 'comentario del user 2 sobre el post del user 2'
      }
    ]
  }
]
