let db= {
    users: [
        {
            userId: 'dh23hfb3u2849d9djn33938s',
            email: 'user@email.com',
            handle: 'user', 
            createdAt: '2019-09-11T12:07:48.510Z',
            imageUrl: 'image/dgfhdgfhjdh/gfhdhdghf',
            bio: 'Hello, my name is user, nice to meet you',
            website: 'https://user.com',
            location: 'London, UK'
        }
    ],
    screams: [
        {
            userHandle: 'user',
            body: 'this is the scream body',
            createdAt: '2019-09-11T12:07:48.510Z',
            likeCount: 5,
            commentCount: 3
        }
    ],
    comments: [
        {
            userHandle: 'user',
            screamId: 'jajghjsdfkas82z3r8',
            body: 'Nice one mate!',
            createdAt: '2019-09-11T12:07:48.510Z'
        }
    ],
    notifications: [
        {
            recipient: 'user',
            sender: 'john',
            read: 'true | false',
            screamId: 'kahsfjsdiahfdakfnia',
            type: 'like | comment',
            createdAt: '2019-09-11T12:07:48.510Z'
        }
    ]
}

const userDeatils={
    // Redux data
    credentials: {
        userId: 'NAHDG/u38dz8ewhnhdsabc83u2e98',
        email: 'user@email.com',
        handle:'user',
        createdAt: '2019-09-11T12:07:48.510Z',
        imageUrl: 'image/dgfhdgfhjdh/gfhdhdghf',
        bio: 'Hello, my name is user, nice to meet you',
        website: 'https://user.com',
        location: 'London, UK'
    },
    likes:[
        {
            userHandle:'user',
            screamId: 'hfh3hfe983jd23ejdu382'
        },
        {
            userHandle:'user',
            screamId: 'hfuhdz7238398ze9us18j'
        }
    ]
}