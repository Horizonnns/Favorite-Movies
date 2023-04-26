import { defineStore } from 'pinia';

export const useMovieStore = defineStore('movieStore', {
	state: () => ({
		movies: [
			{
				id: 1,
				original_title: 'Spider-Man',
				overview:
					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, ducimus unde quia nisi expedita laudantium autem cumque ex magnam esse impedit fugiat, quasi corporis modi atque, inventore sint odit obcaecati!',
				poster_path: '/gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg',
				release_date: '2002-05-01',
				isWatched: false,
			},
			{
				id: 2,
				original_title: 'The Batman',
				overview: 'In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.',
				poster_path: '/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg',
				release_date: '2022-03-01',
				isWatched: false,
			},
		],
	}),
});
