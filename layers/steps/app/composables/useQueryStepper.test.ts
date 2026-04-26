import { mockNuxtImport } from "@nuxt/test-utils/runtime";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { ref } from "vue";
import { mountComposable } from "#shared/test-utils/mountComposable";
import useQueryStepper from "./useQueryStepper";

const { route, push, navigateTo } = vi.hoisted(() => {
    return {
        route: { query: {} as Record<string, any> },
        push: vi.fn(),
        navigateTo: vi.fn(),
    };
});

mockNuxtImport("useRoute", () => () => route);
mockNuxtImport("useRouter", () => () => ({ push }));
mockNuxtImport("navigateTo", () => navigateTo);

const goTo = vi.fn();
const goToNext = vi.fn();
const goToPrevious = vi.fn();
const index = ref(0);

vi.mock("@vueuse/core", () => ({
    useStepper: () => ({
        goTo,
        goToNext,
        goToPrevious,
        index,
    }),
}));

const up = vi.fn();
const down = vi.fn();
const update = vi.fn();

let storeIndex = 2;

vi.mock("../stores/steps", () => ({
    default: () => ({
        up,
        down,
        update,
        get index() {
            return storeIndex;
        },
    }),
}));

describe("useQueryStepper composable", () => {
    beforeEach(() => {
        vi.clearAllMocks();
        index.value = 0;
        route.query = {};
        storeIndex = 2;
    });

    function setup(steps = ["a", "b", "c"]) {
        return useQueryStepper(ref(steps));
    }

    it("next updates query and store", () => {
        const { next } = setup();

        index.value = 1;

        next();

        expect(goToNext).toHaveBeenCalled();
        expect(up).toHaveBeenCalled();
        expect(push).toHaveBeenCalledWith({
            query: { step: 1 },
        });
    });

    it("uses query step on mount", async () => {
        route.query.step = "1";
        storeIndex = 3; // current = 2

        mountComposable(setup);

        expect(goTo).toHaveBeenCalledWith("b");
        expect(update).toHaveBeenCalledWith(2);
    });

    it("redirects if no store index", () => {
        storeIndex = 0;

        setup();

        expect(navigateTo).toHaveBeenCalledWith("/");
    });
});
