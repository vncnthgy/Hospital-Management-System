<template>
    <div>
        <h1>Dashboard</h1>
        <nav>
            <router-link v-if="isAdmin" to="/patients">Patients</router-link>
            <router-link v-if="isAdmin" to="/doctors">Doctors</router-link>
            <router-link v-if="isDoctor" to="/appointments">Appointments</router-link>
            <router-link v-if="isPatient" to="/appointments/new">Book Appointment</router-link>
            <router-link v-if="isDoctor" to="/records">Medical Records</router-link>
        </nav>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState(['role']),
        isAdmin() {
            return this.role === 'admin';
        },
        isDoctor() {
            return this.role === 'doctor';
        },
        isPatient() {
            return this.role === 'patient';
        }
    }
};
</script>
