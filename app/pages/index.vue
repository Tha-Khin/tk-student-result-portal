<template>
    <div class="relative flex min-h-screen w-full flex-col items-center justify-center font-display bg-background text-text p-4">
        <div class="flex w-full max-w-md flex-col">
            <header class="mb-8 flex flex-col items-center justify-center text-center">
                <div class="mb-4 flex items-center gap-3 text-primary">
                    <div class="size-8">
                        <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z"></path>
                        </svg>
                    </div>
                    <h1 class="text-2xl font-bold tracking-tighter text-text">TK Student Result Portal</h1>
                </div>
            </header>
            <main class="w-full rounded-xl bg-card p-6 sm:p-8 shadow-lg">
                <div class="flex flex-col gap-2 mb-6 text-center sm:text-left">
                    <p class="text-3xl font-black tracking-tighter text-text text-center">Check Your Academic Results</p>
                    <p class="text-base font-normal text-text/70 text-center">Enter your details below to proceed.</p>
                </div>
                <form @submit.prevent="checkResult" class="flex flex-col gap-6">
                    <div class="flex flex-col gap-4">
                        <label class="flex flex-col">
                            <p class="text-base font-medium pb-2 text-text">Select Class</p>
                            <select v-model="selectedClass" class="form-select w-full appearance-none resize-none rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/30 h-14 p-4 text-base font-normal text-text placeholder:text-placeholder select-arrow" required>
                                <option value="" disabled>Choose your class</option>
                                <option v-for="cls in classes" :key="cls" :value="cls">{{ cls }}</option>
                            </select>
                        </label>
                        <label class="flex flex-col">
                            <p class="text-base font-medium pb-2 text-text">Enter Student ID</p>
                            <input v-model="studentId" class="form-input w-full resize-none rounded-lg border border-border bg-background focus:border-primary/30 focus:ring-2 focus:ring-primary/30 h-14 p-4 text-base font-normal text-text placeholder:text-placeholder" placeholder="e.g. ST-xxxx-xxx" type="text" required/>
                        </label>
                    </div>
                    <button class="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-4 text-base font-bold text-white transition-all hover:bg-primary/90 active:scale-95" type="submit">
                        <span>{{ pending ? 'Checking Your Result...' : 'Check Result'}}</span>
                        <span class="material-symbols-outlined">arrow_forward</span>
                    </button>
                    <p class="text-sm font-normal text-center text-text/70">Please select your class and enter your ID to view your results.</p>
                </form>
            </main>
            <footer class="mt-8 text-center text-sm text-text/60">
                <p>© 2025 TK Education Center. All Rights Reserved.</p>
            </footer>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    interface ClassesSuccess {
        success: true;
        data: string[];
    }

    interface ClassesError {
        success: false;
        message: string;
    }

    type ClassesResponse = ClassesSuccess | ClassesError;

    const { data } = await useFetch<ClassesResponse>('/api/classes');
    const classes = data.value?.success ? ref(data.value.data) : ref([])

    const selectedClass = ref('');
    const studentId = ref('');
    const pending = ref(false);
    const checkResult = () => {
        if (!selectedClass.value || !studentId.value) return;
        pending.value = true;
        const cls = selectedClass.value;
        const id = studentId.value;
        navigateTo('/result?cls=' + cls + '&id=' + id); // navigateTo('/result?cls=cls&id=12345');
    };
</script>