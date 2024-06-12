<template>
    <div>
        <h1>Doctor Details</h1>
        <p>Name: {{ doctor.name }}</p>
        <p>Email: {{ doctor.email }}</p>
        <p>Specialization: {{ doctor.specialization }}</p>
        <button @click="editDoctor">Edit</button>
    </div>
</template>

<script>
import axios from '@/axios';

export default {
    data() {
        return {
            doctor: {}
        };
    },
    created() {
        this.fetchDoctor();
    },
    methods: {
        async fetchDoctor() {
            const id = this.$route.params.id;
            const response = await axios.get(`/doctors/${id}`);
            this.doctor = response.data;
        },
        editDoctor() {
            this.$router.push(`/doctors/${this.doctor.id}/edit`);
        }
    }
};
</script>
