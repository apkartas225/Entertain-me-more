import Vue from 'vue'
import Vuex from 'vuex'

Vue.use( Vuex )

export default new Vuex.Store( {

    state: {
        data: [
            {
                "site": "trainyrbrain",
                "subscribed": true,
                'picture': '2.png',
                'title': 'True/False Quiz. Keep your brain fit'
            },
            {
                "site": "ynquiz",
                "subscribed": true,
                'picture': '3.png',
                'title': 'Fun photo Quiz. Match words and names to pictures of objects and people'
            },
            {
                "site": "finditquiz",
                "subscribed": true,
                'picture': '4.png',
                'title': 'Celebrity Photo to Quiz. Guess the star by the photo'
            },
            {
                "site": "moviequizonline",
                "subscribed": true,
                'picture': '5.png',
                'title': 'Easy yes/no Quiz. Distinguish facts from fiction'
            },
            {
                "site": "findsuperstar",
                "subscribed": true,
                'picture': '6.png',
                'title': 'Movie photo Quiz. Guess the film by a still'
            },
            {
                "site": "whatcountry",
                "subscribed": true,
                'picture': '1.png',
                'title': 'Geography quiz. Guess the country by the photo (fact/description)'
            }
        ],
        prevData: [],
    },

    actions: {
        actionSubscribe: ( { commit }, key ) => {
            commit( 'setSubscribeData', key );
        },
    },

    getters: {
        getDifference( { data } ) {
            return ( initialData ) => {
                const old = initialData.filter( el => el.subscribed ).length
                const newVal = data.filter( el => el.subscribed ).length
                initialData = structuredClone( data );
                if ( old === 0 ) {
                    return { diff: 100, initialData }
                }
                return { diff: Number( ( ( ( newVal - old ) / old ) * 100 ).toFixed( 2 ) ), initialData }
            }

        },

        getCurrentProcent( { data } ) {
            return (data.filter( el => el.subscribed ).length / data.length) * 100
        }


    },
    mutations: {
        setSubscribeData( state, key ) {
            state.prevData = structuredClone( state.data );
            if ( key !== undefined ) {
                state.data[ key ].subscribed = !state.data[ key ].subscribed
            } else {
                state.data.forEach( ( item ) => {
                    item.subscribed = false
                } )

            }
            console.log( 'data', state.data )
        }
    },

} )
