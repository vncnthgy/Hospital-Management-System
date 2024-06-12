<template>
    <div>
        <h1>Medical Record Details</h1>
        <p>Patient: {{ record.patient.name }}</p>
        <p>Record: {{ record.record }}</p>
        <button @click="editRecord">Edit</button>
    </div>
</template>

<script>
import axios from '@/axios';

export default {
    data() {
        return {
            record: {}
        };
    },
    created() {
        this.fetchRecord();
    },
    methods: {
        async fetchRecord() {
            const id = this.$route.params.id;
            const response = await axios.get(`/records/${id}`);
            this.record = response.data;
        },
        editRecord() {
            this.$router.push(`/records/${this.record.id}/edit`);
        }
    }
};
</script>
