import type { Odontogram, Tooth, ToothId } from "./types";

export function getTooth(chart: Odontogram, toohId: ToothId): Tooth {
    return chart.teeth[toohId];
}