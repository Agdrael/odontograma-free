export type NumberingSystem =
    | "UNIVERSAL"
    | "FDI";

export type DentitionType =
    | "permanent"
    | "primary"
    | "mixed";

export type ToothStatus =
    | "healthy"
    | "caries"
    | "restoration"
    | "crown"
    | "missing"
    | "extracted"
    | "implant";

export type ToothId =
    | "UR8"
    | "UR7"
    | "UR6"
    | "UR5"
    | "UR4"
    | "UR3"
    | "UR2"
    | "UR1"
    | "UL1"
    | "UL2"
    | "UL3"
    | "UL4"
    | "UL5"
    | "UL6"
    | "UL7"
    | "UL8"
    | "LL8"
    | "LL7"
    | "LL6"
    | "LL5"
    | "LL4"
    | "LL3"
    | "LL2"
    | "LL1"
    | "LR1"
    | "LR2"
    | "LR3"
    | "LR4"
    | "LR5"
    | "LR6"
    | "LR7"
    | "LR8"

export type DentalArch =
    | "upper"
    | "lower";

export type DentalSide =
    | "right"
    | "left";


export interface Tooth {
    id: string;
    number: string;
    status: ToothStatus;
}

export interface Odontogram {
    dentition: DentitionType;
    numberingSystem: NumberingSystem;
    teeth: Record<string, Tooth>;
}