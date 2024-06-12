/* eslint-disable vue/multi-word-component-names */
<template>
    <div>
        <h1>Patients</h1>
        <button @click="fetchPatients">Load Patients</button>
        <ul>
            <li v-for="patient in patients" :key="patient.id">
                {{ patient.name }} - {{ patient.email }}
            </li>
        </ul>
    </div>
</template>

<script>
import axios from '@/axios';

export default {
    data() {
        return {
            patients: []
        };
    },
    methods: {
        async fetchPatients() {
            try {
                const response = await axios.get('/patients');
                this.patients = response.data;
            } catch (error) {
                console.error('Failed to fetch patients', error);
            }
        }
    }
};
</script>
