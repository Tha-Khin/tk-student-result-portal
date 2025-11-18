interface GasResponse {
  success: boolean,
  data: string[],
}

export default defineEventHandler(async () => {
  const config = useRuntimeConfig()
  try {
    const response: GasResponse = await $fetch(config.gasUrl);

    return {
      success: true,
      data: response.data,
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
});