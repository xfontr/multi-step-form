export default defineEventHandler(async (event) => {
    const body = await readBody<Usage>(event);

    // eslint-disable-next-line no-console
    console.table(body);

    return {
        success: true,
        message: JSON.stringify(body, null, 4),
    };
});
