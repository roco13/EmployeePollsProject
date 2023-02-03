import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        questions: {
            '8xf0y6ziyjabvozdd253nd': {
                id:'xyz',
                author: "8xf0y6ziyjabvozdd253nd",
                timestamp: 1467166872634,
                optionOne: {
                    votes: ['sarahedo'],
                    text: 'Build our new application with Javascript',
                },
                optionTwo: {
                    votes: [],
                    text: 'Build our new application with Typescript'
                }
            },
        },
        users: {
            sarahedo: {
                id: 'sarahedo',
                name: 'Sarah Edo',
                avatarURL: 'https://ui.dev/would-you-rather/sarah.jpg',
                
              },
        },
        authedUser: 'sarahedo',
    },
   
    
});