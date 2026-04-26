export default defineEventHandler(async (event) => {
    const body = await readBody<Diet>(event);

    await new Promise((r) => setTimeout(r, 1_000));

    // eslint-disable-next-line no-console
    console.table(body);

    return {
        success: true,
        message: JSON.stringify(body, null, 4),
    };
});
