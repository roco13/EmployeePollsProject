import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        questions: {
            'xyz': {
                id:'xyz',
                author: "sarahedo",
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
    },
   
    
});