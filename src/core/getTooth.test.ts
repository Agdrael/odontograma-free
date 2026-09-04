import { describe,expect,it } from "vitest";

import { createOdontogram,getTooth, setNumberingSystem } from "./index";

describe("getTooth",()=>{
    it("returns a tooth by anatomical id",()=>{
        const chart = createOdontogram();

        const tooth = getTooth(chart,"UR8");

        expect(tooth.id).toBe("UR8");
        expect(tooth.number).toBe("1");
        expect(tooth.status).toBe("healthy");
    });


    it("returns the same anatomical tooth when using FDI",()=>{
        const chart = createOdontogram({numberingSystem: "FDI"});

        const tooth = getTooth(chart, "UR8");

        expect(tooth.id).toBe("UR8");
        expect(tooth.number).toBe("18");
    })
})