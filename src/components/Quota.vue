<template>
    <div class="flex flex-col h-screen justify-center items-center">
        <quota :max-quota="maxQuota" max-quota-name="xmlte1" quota-name="xmlte2">
            <template #withinQuota>
                <div>
                    <p class="text-2xl font-semibold">You are within your quota limits.</p>
                </div>
            </template>
            <template #exceededQuota>
                <div class="flex flex-col items-center space-y-4">
                    <p class="text-2xl font-semibold">You have exceeded your quota limits.</p>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        @click="increaseQuota">Increase Quota</button>
                </div>
            </template>
        </quota>
        <expiry :expiry="expiryDate">
            <template #withinExpiry>
                <div class="mt-8">
                    <p class="text-2xl font-semibold">Your access is still valid.</p>
                </div>
            </template>
            <template #exceededExpiry>
                <div class="mt-8">
                    <p class="text-2xl font-semibold text-red-600">Your access has expired.</p>
                </div>
            </template>
        </expiry>

    </div>
</template>
<script setup>
import { ref } from 'vue';
import { Quota, Expiry } from '@solytics/vue-auth-widgets';

const maxQuota = ref(2);
const expiryDate = ref("2025-12-31");

const increaseQuota = () => {
    maxQuota.value = 5;
};
</script>
