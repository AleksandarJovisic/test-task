import axios from "axios"

export default {
    namespaced: true,
    state: {
        registrationFormData: [],
        payload: {
            email: "",
            firstName: "",
            lastName: "",
            password: "",
            privacyPolicy: false,
            terms: false,
            salutation: "",
        },
    },

    getters: {

    },

    mutations: {
        addDataToPayload(state, objInput) {
            state.payload[objInput.key] = objInput.value
        },
        setRegistrationFormData(state, payload){
            state.registrationFormData = payload
        }
    },

    actions: {
        getRegistrationFormData({ commit }) {
            return new Promise((resolve, reject) => {
                axios.get('http://localhost:3000/registrationLabels').then(res => {
                    console.log(res.data);
                        commit('setRegistrationFormData', res.data);
                        resolve(res);
                    })
                    .catch(err => {
                        reject(err);
                    })
            })
        },
        register(payload) {
            return new Promise((resolve, reject) => {
                axios.post('http://localhost:3000/createUser', payload, {
                }).then(res => {
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
            })
        },
    }

}