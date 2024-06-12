/* eslint-disable vue/multi-word-component-names */
<template>
    <div>
        <h1>Appointments</h1>
        <button @click="fetchAppointments">Load Appointments</button>
        <ul>
            <li v-for="appointment in appointments" :key="appointment.id">
                {{ appointment.patient.name }} with {{ appointment.doctor.name }} on {{ appointment.appointment_date }}
            </li>
        </ul>
    </div>
</template>

<script>
import axios from '@/axios';

export default {
    data() {
        return {
            appointments: []
        };
    },
    methods: {
        async fetchAppointments() {
            try {
                const response = await axios.get('/appointments');
                this.appointments = response.data;
            } catch (error) {
                console.error('Failed to fetch appointments', error);
            }
        }
    }
};
</script>
