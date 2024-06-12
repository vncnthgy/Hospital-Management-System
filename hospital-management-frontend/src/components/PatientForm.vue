<template>
    <div>
        <h1>{{ isEdit ? 'Edit' : 'Add' }} Patient</h1>
        <form @submit.prevent="savePatient">
            <input type="text" v-model="patient.name" placeholder="Name" required>
            <input type="email" v-model="patient.email" placeholder="Email" required>
            <input type="text" v-model="patient.phone" placeholder="Phone" required>
            <button type="submit">{{ isEdit ? 'Update' : 'Create' }}</button>
        </form>
    </div>
</template>

<script>
import axios from '@/axios';

export default {
    data() {
        return {
            patient: {
                name: '',
                email: '',
                phone: ''
            },
            isEdit: false
        };
    },
    created() {
        if (this.$route.params.id) {
            this.isEdit = true;
            this.fetchPatient();
        }
    },
    methods: {
        async fetchPatient() {
            const id = this.$route.params.id;
            const response = await axios.get(`/patients/${id}`);
            this.patient = response.data;
        },
        async savePatient() {
            if (this.isEdit) {
                await axios.put(`/patients/${this.patient.id}`, this.patient);
            } else {
                await axios.post('/patients', this.patient);
            }
            this.$router.push('/patients');
        }
    }
};
</script>
