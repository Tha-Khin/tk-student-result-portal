export interface StudentResult {
  id: string;
  name: string;
  myanmar: number;
  eng: number;
  math: number;
  phys: number;
  chem: number;
  bio: number;
}

interface GasResponse {
  success: boolean,
  data: StudentResult | null,
  message: string;
}

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const body: { cls: string, id: string } = await readBody(event); 

    if (!body.cls || !body.id) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Missing required parameters: cls or id.',
        });
    }

    try {
        const result: GasResponse = await $fetch(config.gasUrl, {
            method: 'POST',
            body: { 
                cls: body.cls,
                id: body.id
            }
        });
        return {
            success: true,
            data: result.data,
        };
    } catch (error: any) {
        return {
            success: false,
            message: error.message,
        };
    }

});