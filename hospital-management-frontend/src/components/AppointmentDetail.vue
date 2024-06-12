<template>
    <div>
        <h1>Appointment Details</h1>
        <p>Patient: {{ appointment.patient.name }}</p>
        <p>Doctor: {{ appointment.doctor.name }}</p>
        <p>Appointment Date: {{ appointment.appointment_date }}</p>
        <button @click="editAppointment">Edit</button>
    </div>
</template>

<script>
import axios from '@/axios';

export default {
    data() {
        return {
            appointment: {}
        };
    },
    created() {
        this.fetchAppointment();
    },
    methods: {
        async fetchAppointment() {
            const id = this.$route.params.id;
            const response = await axios.get(`/appointments/${id}`);
            this.appointment = response.data;
        },
        editAppointment() {
            this.$router.push(`/appointments/${this.appointment.id}/edit`);
        }
    }
};
</script>
