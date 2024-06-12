
import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';
import Login from '@/components/Login.vue';
import Dashboard from '@/components/Dashboard.vue';
import Patients from '@/components/Patients.vue';
import Doctors from '@/components/Doctors.vue';
import Appointments from '@/components/Appointments.vue';
import MedicalRecords from '@/components/MedicalRecords.vue';
import PatientDetail from '@/components/PatientDetail.vue';
import DoctorDetail from '@/components/DoctorDetail.vue';
import AppointmentDetail from '@/components/AppointmentDetail.vue';
import MedicalRecordDetail from '@/components/MedicalRecordDetail.vue';
import PatientForm from '@/components/PatientForm.vue';
import DoctorForm from '@/components/DoctorForm.vue';
import AppointmentForm from '@/components/AppointmentForm.vue';
import MedicalRecordForm from '@/components/MedicalRecordForm.vue';

Vue.use(Router);

const routes = [
    { path: '/login', component: Login },
    { path: '/dashboard', component: Dashboard },
    { path: '/patients', component: Patients, meta: { requiresAuth: true, role: 'admin' } },
    { path: '/patients/:id', component: PatientDetail, meta: { requiresAuth: true, role: 'admin' } },
    { path: '/patients/:id/edit', component: PatientForm, meta: { requiresAuth: true, role: 'admin' } },
    { path: '/patients/new', component: PatientForm, meta: { requiresAuth: true, role: 'admin' } },
    { path: '/doctors', component: Doctors, meta: { requiresAuth: true, role: 'admin' } },
    { path: '/doctors/:id', component: DoctorDetail, meta: { requiresAuth: true, role: 'admin' } },
    { path: '/doctors/:id/edit', component: DoctorForm, meta: { requiresAuth: true, role: 'admin' } },
    { path: '/doctors/new', component: DoctorForm, meta: { requiresAuth: true, role: 'admin' } },
    { path: '/appointments', component: Appointments, meta: { requiresAuth: true } },
    { path: '/appointments/:id', component: AppointmentDetail, meta: { requiresAuth: true } },
    { path: '/appointments/:id/edit', component: AppointmentForm, meta: { requiresAuth: true, role: 'doctor' } },
    { path: '/appointments/new', component: AppointmentForm, meta: { requiresAuth: true, role: 'patient' } },
    { path: '/records', component: MedicalRecords, meta: { requiresAuth: true } },
    { path: '/records/:id', component: MedicalRecordDetail, meta: { requiresAuth: true, role: 'doctor' } },
    { path: '/records/:id/edit', component: MedicalRecordForm, meta: { requiresAuth: true, role: 'doctor' } },
    { path: '/records/new', component: MedicalRecordForm, meta: { requiresAuth: true, role: 'doctor' } },
];

const router = new Router({
    mode: 'history',
    routes,
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const role = to.meta.role;
    const isAuthenticated = store.state.token !== '';
    const userRole = store.state.role;

    if (requiresAuth && !isAuthenticated) {
        next('/login');
    } else if (requiresAuth && role && role !== userRole) {
        next('/dashboard');
    } else {
        next();
    }
});

export default router;
