/* eslint-disable vue/multi-word-component-names */
<template>
    <div>
        <h1>Doctors</h1>
        <button @click="fetchDoctors">Load Doctors</button>
        <ul>
            <li v-for="doctor in doctors" :key="doctor.id">
                {{ doctor.name }} - {{ doctor.specialization }}
            </li>
        </ul>
    </div>
</template>

<script>
import axios from '@/axios';

export default {
    data() {
        return {
            doctors: []
        };
    },
    methods: {
        async fetchDoctors() {
            try {
                const response = await axios.get('/doctors');
                this.doctors = response.data;
            } catch (error) {
                console.error('Failed to fetch doctors', error);
            }
        }
    }
};
</script>
