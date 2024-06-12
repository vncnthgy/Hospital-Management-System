<template>
    <div>
        <h1>{{ isEdit ? 'Edit' : 'Add' }} Appointment</h1>
        <form @submit.prevent="saveAppointment">
            <select v-model="appointment.patient_id" required>
                <option v-for="patient in patients" :key="patient.id" :value="patient.id">{{ patient.name }}</option>
            </select>
            <select v-model="appointment.doctor_id" required>
                <option v-for="doctor in doctors" :key="doctor.id" :value="doctor.id">{{ doctor.name }}</option>
            </select>
            <input type="datetime-local" v-model="appointment.appointment_date" required>
            <button type="submit">{{ isEdit ? 'Update' : 'Create' }}</button>
        </form>
    </div>
</template>

<script>
import axios from '@/axios';

export default {
    data() {
        return {
            appointment: {
                patient_id: '',
                doctor_id: '',
                appointment_date: ''
            },
            patients: [],
            doctors: [],
            isEdit: false
        };
    },
    created() {
        this.fetchPatients();
        this.fetchDoctors();
        if (this.$route.params.id) {
            this.isEdit = true;
            this.fetchAppointment();
        }
    },
    methods: {
        async fetchPatients() {
            const response = await axios.get('/patients');
            this.patients = response.data;
        },
        async fetchDoctors() {
            const response = await axios.get('/doctors');
            this.doctors = response.data;
        },
        async fetchAppointment() {
            const id = this.$route.params.id;
            const response = await axios.get(`/appointments/${id}`);
            this.appointment = response.data;
        },
        async saveAppointment() {
            if (this.isEdit) {
                await axios.put(`/appointments/${this.appointment.id}`, this.appointment);
            } else {
                await axios.post('/appointments', this.appointment);
            }
            this.$router.push('/appointments');
        }
    }
};
</script>
