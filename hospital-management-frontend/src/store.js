
import Vue from 'vue';
import Vuex from 'vuex';
import axios from '@/axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        token: localStorage.getItem('token') || '',
        user: {},
        role: '',
        patients: [],
        doctors: [],
        appointments: [],
        records: [],
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
        },
        setUser(state, user) {
            state.user = user;
            state.role = user.role;  // Add role to state
        },
        setPatients(state, patients) {
            state.patients = patients;
        },
        setDoctors(state, doctors) {
            state.doctors = doctors;
        },
        setAppointments(state, appointments) {
            state.appointments = appointments;
        },
        setRecords(state, records) {
            state.records = records;
        },
    },
    actions: {
        async login({ commit }, credentials) {
            try {
                const response = await axios.post('/login', credentials);
                const token = response.data.token;
                const user = response.data.user;
                localStorage.setItem('token', token);
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                commit('setToken', token);
                commit('setUser', user);
            } catch (error) {
                console.error('Login failed', error);
            }
        },
        async fetchPatients({ commit }) {
            try {
                const response = await axios.get('/patients');
                commit('setPatients', response.data);
            } catch (error) {
                console.error('Failed to fetch patients', error);
            }
        },
        async fetchDoctors({ commit }) {
            try {
                const response = await axios.get('/doctors');
                commit('setDoctors', response.data);
            } catch (error) {
                console.error('Failed to fetch doctors', error);
            }
        },
        async fetchAppointments({ commit }) {
            try {
                const response = await axios.get('/appointments');
                commit('setAppointments', response.data);
            } catch (error) {
                console.error('Failed to fetch appointments', error);
            }
        },
        async fetchRecords({ commit }) {
            try {
                const response = await axios.get('/records');
                commit('setRecords', response.data);
            } catch (error) {
                console.error('Failed to fetch medical records', error);
            }
        }
    }
});
