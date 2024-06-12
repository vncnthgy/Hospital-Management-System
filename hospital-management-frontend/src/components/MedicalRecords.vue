<template>
    <div>
        <h1>Medical Records</h1>
        <button @click="fetchRecords">Load Medical Records</button>
        <ul>
            <li v-for="record in records" :key="record.id">
                {{ record.patient.name }} - {{ record.record }}
            </li>
        </ul>
    </div>
</template>

<script>
import axios from '@/axios';

export default {
    data() {
        return {
            records: []
        };
    },
    methods: {
        async fetchRecords() {
            try {
                const response = await axios.get('/records');
                this.records = response.data;
            } catch (error) {
                console.error('Failed to fetch medical records', error);
            }
        }
    }
};
</script>
