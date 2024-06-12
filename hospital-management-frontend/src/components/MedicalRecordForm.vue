<template>
    <div>
        <h1>{{ isEdit ? 'Edit' : 'Add' }} Medical Record</h1>
        <form @submit.prevent="saveRecord">
            <select v-model="record.patient_id" required>
                <option v-for="patient in patients" :key="patient.id" :value="patient.id">{{ patient.name }}</option>
            </select>
            <textarea v-model="record.record" placeholder="Record" required></textarea>
            <button type="submit">{{ isEdit ? 'Update' : 'Create' }}</button>
        </form>
    </div>
</template>

<script>
import axios from '@/axios';

export default {
    data() {
        return {
            record: {
                patient_id: '',
                record: ''
            },
            patients: [],
            isEdit: false
        };
    },
    created() {
        this.fetchPatients();
        if (this.$route.params.id) {
            this.isEdit = true;
            this.fetchRecord();
        }
    },
    methods: {
        async fetchPatients() {
            const response = await axios.get('/patients');
            this.patients = response.data;
        },
        async fetchRecord() {
            const id = this.$route.params.id;
            const response = await axios.get(`/records/${id}`);
            this.record = response.data;
        },
        async saveRecord() {
            if (this.isEdit) {
                await axios.put(`/records/${this.record.id}`, this.record);
            } else {
                await axios.post('/records', this.record);
            }
            this.$router.push('/records');
        }
    }
};
</script>
