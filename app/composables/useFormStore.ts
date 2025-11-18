import { ref } from 'vue';
import type { Ref } from 'vue';

interface FormData {
    cls: string;
    id: string;
}

const formData: Ref<FormData | null> = shallowRef(null);

export const useFormStore = () => {
    
    // Function to save data before navigating
    const saveFormData = (data: FormData) => {
        formData.value = data;
    };

    // Function to retrieve data on the next page
    const getFormData = () => {
        return formData.value;
    };

    return {
        formData,
        saveFormData,
        getFormData,
    };
};