import pug from '../assets/pug.jpg'

export const customers = [
  { 
    id: '0',
    name: 'Fluffy', 
    nickname: 'Tripod', 
    sex: "male",
    age: "6",
    owner: "Cesar Avitia",
    joinDate: new Date(), 
    profileImage: pug,
    enrollment: "Enrolled",
    comments: [
      "What an angel"
    ],
    archivedComments: [],
    inboxMessages: []
  },
  { 
    id: '1',
    name: 'Mikasa', 
    nickname: 'Titan', 
    age: "0.5",
    sex: "female",
    owner: "Cesar Avitia",
    joinDate: new Date(), 
    profileImage: pug,
    enrollment: "Enrolled",
    comments: [
      "Thinks she's bigger than she is"
    ],
    archivedComments: [],
    inboxMessages: []
  },
  { 
    id: "2",
    name: 'Peanut', 
    nickname: 'Lucifer', 
    sex: "male",
    age: "4",
    owner: "Cesar Avitia",
    joinDate: new Date(), 
    profileImage: pug,
    enrollment: "Expelled",
    comments: [
      "Inability to be around other pets", 
      "Prone to attacking staff", 
      "Opened what seemed to be dimension to another world",
      "Don't let this cat back into the facility"
    ],
    archivedComments: [],
    inboxMessages: []
  },
  { 
    id: "3",
    name: 'Eevee', 
    nickname: 'Rose', 
    sex: "female",
    age: "2",
    owner: "Cesar Avitia",
    joinDate: new Date(), 
    profileImage: pug,
    enrollment: "Enrolled",
    comments: [
      "Never see her",
      "Does she actually attend? Who cares charge them anyways"
    ],
    archivedComments: [],
    inboxMessages: []
  }
]