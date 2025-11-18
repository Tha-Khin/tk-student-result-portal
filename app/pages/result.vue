<template>
    <div class="relative flex min-h-screen w-full flex-col font-display bg-background-light text-text-primary-light">
        <header class="sticky top-0 z-10 w-full bg-card-light/80 backdrop-blur-sm border-b border-border-light">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex h-16 items-center justify-between">
                    <div class="flex items-center gap-4">
                        <div class="text-primary">
                            <svg class="h-8 w-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.263 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z" fill="currentColor"></path>
                                <path clip-rule="evenodd" d="M10.4485 13.8519C10.4749 13.9271 10.6203 14.246 11.379 14.7361C12.298 15.3298 13.7492 15.9145 15.6717 16.3735C18.0007 16.9296 20.8712 17.2655 24 17.2655C27.1288 17.2655 29.9993 16.9296 32.3283 16.3735C34.2508 15.9145 35.702 15.3298 36.621 14.7361C37.3796 14.246 37.5251 13.9271 37.5515 13.8519C37.5287 13.7876 37.4333 13.5973 37.0635 13.2931C36.5266 12.8516 35.6288 12.3647 34.343 11.9175C31.79 11.0295 28.1333 10.4437 24 10.4437C19.8667 10.4437 16.2099 11.0295 13.657 11.9175C12.3712 12.3647 11.4734 12.8516 10.9365 13.2931C10.5667 13.5973 10.4713 13.7876 10.4485 13.8519ZM37.5563 18.7877C36.3176 19.3925 34.8502 19.8839 33.2571 20.2642C30.5836 20.9025 27.3973 21.2655 24 21.2655C20.6027 21.2655 17.4164 20.9025 14.7429 20.2642C13.1498 19.8839 11.6824 19.3925 10.4436 18.7877V34.1275C10.4515 34.1545 10.5427 34.4867 11.379 35.027C12.298 35.6207 13.7492 36.2054 15.6717 36.6644C18.0007 37.2205 20.8712 37.5564 24 37.5564C27.1288 37.5564 29.9993 37.2205 32.3283 36.6644C34.2508 36.2054 35.702 35.6207 36.621 35.027C37.4573 34.4867 37.5485 34.1546 37.5563 34.1275V18.7877ZM41.5563 13.8546V34.1455C41.5563 36.1078 40.158 37.5042 38.7915 38.3869C37.3498 39.3182 35.4192 40.0389 33.2571 40.5551C30.5836 41.1934 27.3973 41.5564 24 41.5564C20.6027 41.5564 17.4164 41.1934 14.7429 40.5551C12.5808 40.0389 10.6502 39.3182 9.20848 38.3869C7.84205 37.5042 6.44365 36.1078 6.44365 34.1455L6.44365 13.8546C6.44365 12.2684 7.37223 11.0454 8.39581 10.2036C9.43325 9.3505 10.8137 8.67141 12.343 8.13948C15.4203 7.06909 19.5418 6.44366 24 6.44366C28.4582 6.44366 32.5797 7.06909 35.657 8.13948C37.1863 8.67141 38.5667 9.3505 39.6042 10.2036C40.6278 11.0454 41.5563 12.2684 41.5563 13.8546Z" fill="currentColor" fill-rule="evenodd"></path>
                            </svg>
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