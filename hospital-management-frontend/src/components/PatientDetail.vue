<template>
    <div>
        <h1>Patient Details</h1>
        <p>Name: {{ patient.name }}</p>
        <p>Email: {{ patient.email }}</p>
        <p>Phone: {{ patient.phone }}</p>
        <button @click="editPatient">Edit</button>
    </div>
</template>

<script>
import axios from '@/axios';

export default {
    data() {
        return {
            patient: {}
        };
    },
    created() {
        this.fetchPatient();
    },
    methods: {
        async fetchPatient() {
            const id = this.$route.params.id;
            const response = await axios.get(`/patients/${id}`);
            this.patient = response.data;
        },
        editPatient() {
            this.$router.push(`/patients/${this.patient.id}/edit`);
        }
    }
};
</script>
