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
      {
        id: "0",
        text: "What an angel"
      }
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
      {
        id: "0",
        text: "Thinks she's bigger than she is"
      },
      {
        id: "1",
        text: "Beats up fluffy"
      }
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
      { id: "0", text: "Inability to be around other pets" }, 
      { id: "1", text: "Prone to attacking staff" }, 
      { id: "2", text: "Opened what seemed to be dimension to another world. 2 Staff members missing" },
      { id: "3", text: "Don't let this cat back into the facility"}
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
      { id: "0", text: "Never see her" },
      { id: "1", text: "Does she actually attend? Who cares charge them anyways" }
    ],
    archivedComments: [],
    inboxMessages: []
  }
]