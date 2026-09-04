import type { DentalArch, Odontogram, Tooth } from "./types";
import { PERMANENT_TEETH } from "./teeth";

export function getTeethByArch(chart: Odontogram, arch: DentalArch): Tooth[] {
    return PERMANENT_TEETH
        .filter(definition => definition.arch == arch)
        .map(definition => chart.teeth[definition.id]);

}