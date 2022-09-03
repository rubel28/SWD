import axiosClient from "@/axios";

export default {
    namespaced: true,
    state: {
        countries: {
            loading: false,
            data: []
        },
        country: {
            loading: false,
            data: {}
        },
    },
    getters: {

    },
    mutations: {
        setCountries: (state, countries) => {
            state.countries.data = countries;
        },
        setCountry: (state, country) => {
            state.country.data = country;
        },
        setCountriesLoading: (state, loading) => {
            state.countries.loading = loading;
        },
        setCountryLoading: (state, loading) => {
            state.country.loading = loading;
        },
    },
    actions: {
        getCountries({commit}){
            commit('setCountriesLoading',true);
            return axiosClient.get('/countries')
                .then((res) => {
                    //console.log(res.data.data)
                    commit('setCountries', res.data.data);
                    return res;
                })
        },
        getCountry({commit},id){
            commit('setCountryLoading',true);
            return axiosClient.get(`/countries/${id}`)
                .then((res) => {
                    console.log(res.data.data)
                    commit('setCountry', res.data.data);
                    return res;
                })
        },
        saveCountry({ commit, dispatch }, country) {

            delete country.image_url;

            let response;
            if (country.id) {
                response = axiosClient
                    .put(`/countries/${country.id}`, country)
                    .then((res) => {
                        commit('setCountry', res.data.data)
                        return res;
                    });
            } else {
                response = axiosClient.post("/countries", country).then((res) => {
                    commit('setCountry', res.data.data)
                    return res;
                });
            }

            return response;
        },
    }
}
