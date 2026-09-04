import type { NumberingSystem, ToothId, DentalArch, DentalSide } from "./types";

export interface ToothDefinition {
    id: ToothId;

    universal: string;
    fdi: string;

    arch: DentalArch;
    side: DentalSide;

    positionFromMidline: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
}

export function getToothNumber(toothId: ToothId, system: NumberingSystem): string {
    const tooth = PERMANENT_TEETH.find(item => item.id == toothId);

    if (!tooth) {
        throw new Error(`Unknown tooth: ${toothId}`);
    }

    return system === "UNIVERSAL" ? tooth.universal : tooth.fdi;
}

export const PERMANENT_TEETH: ToothDefinition[] = [
    {
        id: "UR8",
        universal: "1",
        fdi: "18",
        arch: "upper",
        side: "right",
        positionFromMidline: 8
    },
    {
        id: "UR7",
        universal: "2",
        fdi: "17",
        arch: "upper",
        side: "right",
        positionFromMidline: 7
    },
    {
        id: "UR6",
        universal: "3",
        fdi: "16",
        arch: "upper",
        side: "right",
        positionFromMidline: 6
    },
    {
        id: "UR5",
        universal: "4",
        fdi: "15",
        arch: "upper",
        side: "right",
        positionFromMidline: 5
    },
    {
        id: "UR4",
        universal: "5",
        fdi: "14",
        arch: "upper",
        side: "right",
        positionFromMidline: 4
    },
    {
        id: "UR3",
        universal: "6",
        fdi: "13",
        arch: "upper",
        side: "right",
        positionFromMidline: 3
    },
    {
        id: "UR2",
        universal: "7",
        fdi: "12",
        arch: "upper",
        side: "right",
        positionFromMidline: 2
    },
    {
        id: "UR1",
        universal: "8",
        fdi: "11",
        arch: "upper",
        side: "right",
        positionFromMidline: 1
    },
    {
        id: "UL1",
        universal: "9",
        fdi: "21",
        arch: "upper",
        side: "left",
        positionFromMidline: 1
    },
    {
        id: "UL2",
        universal: "10",
        fdi: "22",
        arch: "upper",
        side: "left",
        positionFromMidline: 2
    },
    {
        id: "UL3",
        universal: "11",
        fdi: "23",
        arch: "upper",
        side: "left",
        positionFromMidline: 3
    },
    {
        id: "UL4",
        universal: "12",
        fdi: "24",
        arch: "upper",
        side: "left",
        positionFromMidline: 4
    },
    {
        id: "UL5",
        universal: "13",
        fdi: "25",
        arch: "upper",
        side: "left",
        positionFromMidline: 5
    },
    {
        id: "UL6",
        universal: "14",
        fdi: "26",
        arch: "upper",
        side: "left",
        positionFromMidline: 6
    },
    {
        id: "UL7",
        universal: "15",
        fdi: "27",
        arch: "upper",
        side: "left",
        positionFromMidline: 7
    },
    {
        id: "UL8",
        universal: "16",
        fdi: "28",
        arch: "upper",
        side: "left",
        positionFromMidline: 8
    }, {
        id: "LL8",
        universal: "17",
        fdi: "38",
        arch: "lower",
        side: "left",
        positionFromMidline: 8
    },
    {
        id: "LL7",
        universal: "18",
        fdi: "37",
        arch: "lower",
        side: "left",
        positionFromMidline: 7
    },
    {
        id: "LL6",
        universal: "19",
        fdi: "36",
        arch: "lower",
        side: "left",
        positionFromMidline: 6
    },
    {
        id: "LL5",
        universal: "20",
        fdi: "35",
        arch: "lower",
        side: "left",
        positionFromMidline: 5
    },
    {
        id: "LL4",
        universal: "21",
        fdi: "34",
        arch: "lower",
        side: "left",
        positionFromMidline: 4
    },
    {
        id: "LL3",
        universal: "22",
        fdi: "33",
        arch: "lower",
        side: "left",
        positionFromMidline: 3
    },
    {
        id: "LL2",
        universal: "23",
        fdi: "32",
        arch: "lower",
        side: "left",
        positionFromMidline: 2
    },
    {
        id: "LL1",
        universal: "24",
        fdi: "31",
        arch: "lower",
        side: "left",
        positionFromMidline: 1
    },

    {
        id: "LR1",
        universal: "25",
        fdi: "41",
        arch: "lower",
        side: "right",
        positionFromMidline: 1
    },
    {
        id: "LR2",
        universal: "26",
        fdi: "42",
        arch: "lower",
        side: "right",
        positionFromMidline: 2
    },
    {
        id: "LR3",
        universal: "27",
        fdi: "43",
        arch: "lower",
        side: "right",
        positionFromMidline: 3
    },
    {
        id: "LR4",
        universal: "28",
        fdi: "44",
        arch: "lower",
        side: "right",
        positionFromMidline: 4
    },
    {
        id: "LR5",
        universal: "29",
        fdi: "45",
        arch: "lower",
        side: "right",
        positionFromMidline: 5
    },
    {
        id: "LR6",
        universal: "30",
        fdi: "46",
        arch: "lower",
        side: "right",
        positionFromMidline: 6
    },
    {
        id: "LR7",
        universal: "31",
        fdi: "47",
        arch: "lower",
        side: "right",
        positionFromMidline: 7
    },
    {
        id: "LR8",
        universal: "32",
        fdi: "48",
        arch: "lower",
        side: "right",
        positionFromMidline: 8
    }
]

