import process from "node:process";

if (process.env.NODE_ENV === "production" || process.env.CI === "true") {
    process.exit(0);
}

void (async () => {
    await import("husky").default;
})();
