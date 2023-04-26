import { defineStore } from 'pinia';

export const useMovieStore = defineStore('movieStore', {
	state: () => ({
		movies: [
			{
				id: 1,
				original_title: 'Spider-Man',
				overview:
					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, ducimus unde quia nisi expedita laudantium autem cumque ex magnam esse impedit fugiat, quasi corporis modi atque, inventore sint odit obcaecati!',
				poster_path: '/static.wikia.nocookie.net/spidermanps4/images/d/d4/Marvel%27s_Spider-Man_front_cover_%28US%29.png/revision/latest/scale-to-width-down/1200?cb=20201003182432',
				release_date: '2002-05-01',
				isWatched: false,
			},
			{
				id: 2,
				original_title: 'The Batman',
				overview:
					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, ducimus unde quia nisi expedita laudantium autem cumque ex magnam esse impedit fugiat, quasi corporis modi atque, inventore sint odit obcaecati!',
				poster_path: '/static.wikia.nocookie.net/spidermanps4/images/d/d4/Marvel%27s_Spider-Man_front_cover_%28US%29.png/revision/latest/scale-to-width-down/1200?cb=20201003182432',
				release_date: '2022-03-01',
				isWatched: false,
			},
		],
	}),
});
