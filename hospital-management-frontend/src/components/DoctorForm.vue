<template>
    <div>
        <h1>{{ isEdit ? 'Edit' : 'Add' }} Doctor</h1>
        <form @submit.prevent="saveDoctor">
            <input type="text" v-model="doctor.name" placeholder="Name" required>
            <input type="email" v-model="doctor.email" placeholder="Email" required>
            <input type="text" v-model="doctor.specialization" placeholder="Specialization" required>
            <button type="submit">{{ isEdit ? 'Update' : 'Create' }}</button>
        </form>
    </div>
</template>

<script>
import axios from '@/axios';

export default {
    data() {
        return {
            doctor: {
                name: '',
                email: '',
                specialization: ''
            },
            isEdit: false
        };
    },
    created() {
        if (this.$route.params.id) {
            this.isEdit = true;
            this.fetchDoctor();
        }
    },
    methods: {
        async fetchDoctor() {
            const id = this.$route.params.id;
            const response = await axios.get(`/doctors/${id}`);
            this.doctor = response.data;
        },
        async saveDoctor() {
            if (this.isEdit) {
                await axios.put(`/doctors/${this.doctor.id}`, this.doctor);
            } else {
                await axios.post('/doctors', this.doctor);
            }
            this.$router.push('/doctors');
        }
    }
};
</script>
