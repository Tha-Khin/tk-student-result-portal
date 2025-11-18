<template>
    <div class="relative flex min-h-screen w-full flex-col font-display bg-background-light text-text-primary-light">
        <header class="sticky top-0 z-10 w-full bg-card-light/80 backdrop-blur-sm border-b border-border-light">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex h-16 items-center justify-between">
                    <div class="flex items-center gap-4">
                        <div class="text-primary">
                            <NuxtImg src="/favicon.png" alt="Logo" width="32" height="32" />
                        </div>
                        <h2 @click="goBackHome()" class="text-lg font-bold cursor-pointer">{{pending ? 'Going Back Home...' : 'Back To Home'}}</h2>
                    </div>
                    <button @click="printResult()" class="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-wide hover:bg-primary/90 transition-colors">
                        <span class="material-symbols-outlined">print</span>
                        <span class="truncate">Print Result</span>
                    </button>
                </div>
            </div>
        </header>
        <main id="print-area" class="flex-1">
            <div class="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div v-if="student" class="flex flex-col gap-8">
                    <div class="space-y-6">
                        <h1 class="text-3xl sm:text-4xl font-black tracking-tighter">Student Academic Report</h1>
                        <div class="p-6 grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-2 bg-card-light rounded-xl border border-border-light">
                            <div class="flex flex-col gap-1">
                                <p class="text-sm font-normal text-text-secondary-light">Student Name</p>
                                <p class="text-sm font-medium">{{ student?.name }}</p>
                            </div>
                            <div class="flex flex-col gap-1">
                                <p class="text-sm font-normal text-text-secondary-light">Class</p>
                                <p class="text-sm font-medium">{{ cls }}</p>
                            </div>
                            <div class="flex flex-col gap-1">
                                <p class="text-sm font-normal text-text-secondary-light">Student ID</p>
                                <p class="text-sm font-medium">{{ student?.id }}</p>
                            </div>
                            <div class="flex flex-col gap-1">
                                <p class="text-sm font-normal text-text-secondary-light">Academic Year</p>
                                <p class="text-sm font-medium">2023-2024</p>
                            </div>
                        </div>
                    </div>
                    <div class="w-full overflow-hidden rounded-xl border border-border-light bg-card-light">
                        <div class="overflow-x-auto">
                            <table class="w-full text-left">
                                <thead class="bg-primary/10">
                                    <tr>
                                        <th class="px-6 py-4 text-sm font-bold text-text-primary-light">Subject</th>
                                        <th class="px-6 py-4 text-sm font-bold text-text-primary-light text-center">Score</th>
                                        <th class="px-6 py-4 text-sm font-bold text-text-primary-light text-center">Grade</th>
                                        <th class="px-6 py-4 text-sm font-bold text-text-primary-light">Remarks</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-t border-border-light">
                                        <td class="px-6 py-4 text-sm font-medium">Myanmar</td>
                                        <td class="px-6 py-4 text-sm text-text-secondary-light text-center">{{ student?.myanmar }}</td>
                                        <td class="px-6 py-4 text-sm text-center">
                                            <span :class="['inline-flex items-center justify-center rounded-full px-3 py-1 text-sm font-medium', resultClass(student?.myanmar ?? null)]">{{ getGrade(student?.myanmar ?? null) }}</span>
                                        </td>
                                        <td class="px-6 py-4 text-sm text-text-secondary-light">{{ getRemark(student?.myanmar ?? null) }}</td>
                                    </tr>
                                    <tr class="border-t border-border-light bg-background-light">
                                        <td class="px-6 py-4 text-sm font-medium">English</td>
                                        <td class="px-6 py-4 text-sm text-text-secondary-light text-center">{{ student?.eng }}</td>
                                        <td class="px-6 py-4 text-sm text-center">
                                            <span :class="['inline-flex items-center justify-center rounded-full px-3 py-1 text-sm font-medium', resultClass(student?.eng ?? null)]">{{ getGrade(student?.eng ?? null) }}</span>
                                        </td>
                                        <td class="px-6 py-4 text-sm text-text-secondary-light">{{ getRemark(student?.eng ?? null) }}</td>
                                    </tr>
                                    <tr class="border-t border-border-light">
                                        <td class="px-6 py-4 text-sm font-medium">Mathematics</td>
                                        <td class="px-6 py-4 text-sm text-text-secondary-light text-center">{{ student?.math }}</td>
                                        <td class="px-6 py-4 text-sm text-center">
                                            <span :class="['inline-flex items-center justify-center rounded-full px-3 py-1 text-sm font-medium', resultClass(student?.math ?? null)]">{{ getGrade(student?.math ?? null) }}</span>
                                        </td>
                                        <td class="px-6 py-4 text-sm text-text-secondary-light">{{ getRemark(student?.math ?? null) }}</td>
                                    </tr>
                                    <tr class="border-t border-border-light bg-background-light">
                                        <td class="px-6 py-4 text-sm font-medium">Physics</td>
                                        <td class="px-6 py-4 text-sm text-text-secondary-light text-center">{{ student?.phys }}</td>
                                        <td class="px-6 py-4 text-sm text-center">
                                            <span :class="['inline-flex items-center justify-center rounded-full px-3 py-1 text-sm font-medium', resultClass(student?.phys ?? null)]">{{ getGrade(student?.phys ?? null) }}</span>
                                        </td>
                                        <td class="px-6 py-4 text-sm text-text-secondary-light">{{ getRemark(student?.phys ?? null) }}</td>
                                    </tr>
                                    <tr class="border-t border-border-light">
                                        <td class="px-6 py-4 text-sm font-medium">Chemistry</td>
                                        <td class="px-6 py-4 text-sm text-text-secondary-light text-center">{{ student?.chem }}</td>
                                        <td class="px-6 py-4 text-sm text-center">
                                            <span :class="['inline-flex items-center justify-center rounded-full px-3 py-1 text-sm font-medium', resultClass(student?.chem ?? null)]">{{ getGrade(student?.chem ?? null) }}</span>
                                        </td>
                                        <td class="px-6 py-4 text-sm text-text-secondary-light">{{ getRemark(student?.chem ?? null) }}</td>
                                    </tr>
                                    <tr class="border-t border-border-light bg-background-light">
                                        <td class="px-6 py-4 text-sm font-medium">Biology</td>
                                        <td class="px-6 py-4 text-sm text-text-secondary-light text-center">{{ student?.bio }}</td>
                                        <td class="px-6 py-4 text-sm text-center">
                                            <span :class="['inline-flex items-center justify-center rounded-full px-3 py-1 text-sm font-medium', resultClass(student?.bio ?? null)]">{{ getGrade(student?.bio ?? null) }}</span>
                                        </td>
                                        <td class="px-6 py-4 text-sm text-text-secondary-light">{{ getRemark(student?.bio ?? null) }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
                        <h3 class="text-lg font-bold pb-4 pt-2">Performance Summary</h3>
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div class="flex flex-col gap-1 p-6 bg-card-light rounded-xl border border-border-light">
                                <p class="text-sm font-normal text-text-secondary-light">Total Score</p>
                                <p class="text-2xl font-bold">{{ total }} / 600</p>
                            </div>
                            <div class="flex flex-col gap-1 p-6 bg-card-light rounded-xl border border-border-light">
                                <p class="text-sm font-normal text-text-secondary-light">Average Percentage</p>
                                <p class="text-2xl font-bold">{{ average }}%</p>
                            </div>
                            <div :class="['flex flex-col gap-1 p-6 rounded-xl border', isPass ? 'bg-primary/10 border-primary/30' : 'bg-orange-500/10 border-orange-500/30']">
                                <p :class="['text-sm font-normal', isPass ? 'text-primary' : 'text-orange-500']">Overall Grade</p>
                                <p :class="['text-2xl font-bold',isPass ? 'text-primary' : 'text-orange-500']">{{ getOverAllGrade() }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else class="flex items-center justify-center">
                    <p class="text-2xl font-bold text-center">No Student Found!</p>
                </div>
            </div>
        </main>
        <footer class="w-full mt-auto border-t border-border-light">
            <div class="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-6">
                <div class="flex items-center justify-center text-sm text-text-secondary-light">
                    <p>© 2025 TK Education Center. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    </div>
    <LoadingOverlay v-if="pending" />
</template>    

<script setup lang="ts">
    interface StudentResult {
        id: string;
        name: string;
        myanmar: number;
        eng: number;
        math: number;
        phys: number;
        chem: number;
        bio: number;
    }

    interface Response {
        success: boolean,
        data: StudentResult,
        message: string;
    }

    const route = useRoute();
    const cls = route.query.cls;
    const id = route.query.id;

    const { data } = await useAsyncData<Response>(
        `result-${cls}-${id}`, 
        () => {
            return $fetch('/api/result', {
                method: 'POST',
                body: { cls, id },
            });
        }
    );

    const student = ref<StudentResult | undefined>(data.value?.data);

    const total = computed(() => {
        if (student.value) return student.value.myanmar + student.value.eng + student.value.math + student.value.phys + student.value.chem + student.value.bio
        return 0
    })

    const average = computed(() => {
        if (student.value) return Math.round((total.value) / 600 * 100)
        return 0
    })

    function getGrade(sub: number | null) {
        if (sub === null || sub < 0) {
            return 'N/A';
        }
        if (sub >= 80) {
            return 'A';
        } else if (sub >= 60) {
            return 'B';
        } else if (sub >= 50) {
            return 'C';
        }
        return 'D';
    }

    function getRemark(sub: number | null) {
        if (sub === null || sub < 0) {
            return 'N/A';
        }
        if (sub >= 80) {
            return 'Excellent';
        } else if (sub >= 60) {
            return 'Good';
        } else if (sub >= 50) {
            return 'Satisfactory';
        }
        return 'Needs Improvement';
    }

    function getOverAllGrade() {
        if (!student.value) return;
        if (student.value.myanmar < 50 || student.value.eng < 50 || student.value.math < 50 || student.value.phys < 50 || student.value.chem < 50 || student.value.bio < 50 || average.value < 50) {
            return 'Fail';
        }
        if (average.value >= 80) {
            return 'Distinction';
        }
        return 'Pass';
    }

    function resultClass(sub: number | null) {
        if (sub === null || sub < 0) {
            return;
        }
        if (sub >= 60) {
            return 'bg-primary/10 text-primary';
        } else if (sub >= 50) {
            return 'bg-amber-400/10 text-amber-500';
        }
        return 'bg-orange-400/10 text-orange-500';
    }

    const  isPass = computed(() => {
        if (!student.value) return false;
        if (student.value.myanmar < 50 || student.value.eng < 50 || student.value.math < 50 || student.value.phys < 50 || student.value.chem < 50 || student.value.bio < 50 || average.value < 50) {
            return false;
        }
        return true;
    })

    const printResult = () => {
        window.print();
    };

    const pending = ref(false);

    const goBackHome = () => {
        pending.value = true;
        navigateTo('/');
    };
</script>