# Odontogram SDK

A modular and extensible TypeScript SDK for building interactive dental charts.

The goal of this project is to provide developers with a reusable foundation for creating odontograms in dental and clinical applications without having to build the entire charting logic from scratch.

The project is designed around a framework-agnostic core that manages teeth, dental states, numbering systems and state changes independently from the user interface.

---

## Why Odontogram SDK?

Building a dental chart involves more than drawing teeth.

Applications often need to manage:

* Tooth identification
* Dental numbering systems
* Tooth conditions
* State changes
* Custom conditions
* Serialization
* UI interactions
* Clinical history
* Future API integrations

Odontogram SDK aims to provide these capabilities through a simple and predictable TypeScript API.

---

## Project Goals

The main goals of the project are:

* Provide a lightweight odontogram engine written in TypeScript.
* Keep business logic independent from React and other UI frameworks.
* Make dental charts easy to integrate into existing applications.
* Support extensibility for different dental workflows.
* Allow developers to define custom dental conditions.
* Provide a useful free edition with optional professional functionality.

---

## Architecture

The project separates dental logic from visualization.

| Layer       | Responsibility                                 |
| ----------- | ---------------------------------------------- |
| Application | Uses the SDK and stores application data       |
| UI package  | Renders and manages user interaction           |
| Core        | Manages odontogram state and business logic    |
| API         | Optional persistence and professional services |

The core package is designed without dependencies on:

* React
* DOM
* SVG
* Browser APIs
* Backend APIs

This makes it possible to reuse the core in environments such as:

* React
* Vue
* Svelte
* Node.js
* Electron
* React Native

---

## Packages

The project is planned around independent packages.

### `@odontogram/core`

Framework-independent TypeScript engine.

Responsibilities include:

* Creating odontograms
* Managing teeth
* Dental numbering
* Tooth states
* State transitions
* Validation
* Serialization
* Events

Example:

```ts
import {
  createOdontogram,
  setToothStatus
} from "@odontogram/core";

const chart = createOdontogram();

const updatedChart = setToothStatus(
  chart,
  "16",
  "caries"
);
```

---

### `@odontogram/react`

React components built on top of the core package.

Example:

```tsx
import { Odontogram } from "@odontogram/react";

function PatientChart() {
  return (
    <Odontogram
      numbering="FDI"
      onChange={(event) => {
        console.log(event);
      }}
    />
  );
}
```

The React package should remain focused on visualization and interaction.

Dental state logic should remain inside the core package.

---

## Initial Data Model

The first version uses a lightweight tooth model.

```ts
export type ToothStatus =
  | "healthy"
  | "caries"
  | "restoration"
  | "crown"
  | "missing"
  | "extracted"
  | "implant";

export interface Tooth {
  id: string;
  number: string;
  status: ToothStatus;
}
```

An odontogram contains a collection of teeth.

```ts
export interface Odontogram {
  dentition: "permanent";
  numberingSystem: "FDI";
  teeth: Record<string, Tooth>;
}
```

Example:

```ts
const chart: Odontogram = {
  dentition: "permanent",
  numberingSystem: "FDI",

  teeth: {
    "16": {
      id: "16",
      number: "16",
      status: "caries"
    },

    "17": {
      id: "17",
      number: "17",
      status: "healthy"
    }
  }
};
```

---

## Lightweight Tooth Model

One of the main design decisions is to keep the free version intentionally lightweight.

Instead of requiring five individually managed surfaces for every tooth, the basic version represents one primary state per tooth.

For example:

```ts
{
  number: "16",
  status: "caries"
}
```

This approach reduces:

* Rendering complexity
* Application state complexity
* Data size
* Integration effort
* Learning curve

while still allowing developers to build functional dental charts.

---

## Professional Surface Model

The professional edition may support individual tooth surfaces.

| Surface            | Description                          |
| ------------------ | ------------------------------------ |
| Mesial             | Surface toward the dental midline    |
| Distal             | Surface away from the dental midline |
| Vestibular         | Surface toward lips or cheeks        |
| Lingual / Palatal  | Internal surface                     |
| Occlusal / Incisal | Biting or cutting surface            |

A possible model is:

```ts
export interface ToothSurfaces {
  mesial?: ToothStatus;
  distal?: ToothStatus;
  vestibular?: ToothStatus;
  lingual?: ToothStatus;
  occlusal?: ToothStatus;
}
```

This allows the professional edition to provide more detailed charting without increasing the complexity of the free edition.

---

## Numbering Systems

The initial release will use the Universal Numbering System.

### Universal Permanent Dentition

| Upper Arch      |                        |
| --------------- | ---------------------- |
| 1 2 3 4 5 6 7 8 | 9 10 11 12 13 14 15 16 |

| Lower Arch              |                         |
| ----------------------- | ----------------------- |
| 32 31 30 29 28 27 26 25 | 24 23 22 21 20 19 18 17 |

Future versions are planned to support:

* FDI notation
* Palmer notation
* Primary dentition
* Mixed dentition

The numbering system is intentionally modeled as a separate concept so additional systems can be introduced without changing the core tooth state model.

---

## State Management

The core uses immutable state updates.

Instead of modifying a tooth directly:

```ts
chart.teeth["16"].status = "caries";
```

the SDK provides functions such as:

```ts
const updatedChart = setToothStatus(
  chart,
  "16",
  "caries"
);
```

This approach makes integrations easier with modern frontend frameworks and enables future functionality such as:

* History
* Undo
* Redo
* State comparison
* Event tracking

---

## Actions

Future versions of the core may use a unified action model.

```ts
const result = applyAction(chart, {
  type: "SET_TOOTH_STATUS",
  tooth: "16",
  status: "caries"
});
```

An action could return both the updated state and information about the change.

```ts
{
  chart: updatedChart,

  event: {
    type: "TOOTH_STATUS_CHANGED",
    tooth: "16",
    previousValue: "healthy",
    newValue: "caries"
  }
}
```

This architecture makes it possible to build an event-based history system later.

---

## Custom Conditions

Applications should eventually be able to define custom dental conditions.

```ts
const conditions = [
  {
    id: "healthy",
    label: "Healthy"
  },
  {
    id: "caries",
    label: "Caries"
  },
  {
    id: "custom-condition",
    label: "Custom condition"
  }
];
```

The core understands the condition identifier.

The UI decides how that condition should be displayed.

For example:

```ts
{
  id: "caries",
  label: "Caries"
}
```

The React package could decide to associate that condition with a specific:

* Color
* Icon
* Pattern
* SVG representation
* Tooltip

This keeps clinical state separate from presentation.

---

## Free Edition

The free edition is intended to remain useful by itself.

Planned features:

* Permanent dentition
* FDI numbering
* 32 permanent teeth
* One primary state per tooth
* Basic conditions
* Tooth selection
* State changes
* TypeScript types
* JSON import/export
* Events
* Custom integrations

---

## Professional Edition

The professional edition may extend the free version with advanced functionality.

Planned features may include:

* Five surfaces per tooth
* Primary dentition
* Mixed dentition
* Additional numbering systems
* Advanced conditions
* Detailed restorations
* Treatment states
* Complete change history
* Undo and redo
* Audit trail
* Comparison between dates
* Advanced React components
* Cloud synchronization
* API integrations
* Reporting

The professional edition should extend the same core architecture instead of requiring developers to replace their existing implementation.

---

## Basic Usage

```ts
import {
  createOdontogram,
  setToothStatus
} from "@odontogram/core";

let chart = createOdontogram();

chart = setToothStatus(
  chart,
  "16",
  "caries"
);

chart = setToothStatus(
  chart,
  "21",
  "restoration"
);

console.log(chart.teeth["16"]);
```

Output:

```ts
{
  id: "16",
  number: "16",
  status: "caries"
}
```

---

## Roadmap

### Phase 1 — Core

* [ ] Tooth model
* [ ] Odontogram model
* [ ] FDI numbering
* [ ] Permanent dentition
* [ ] `createOdontogram()`
* [ ] `getTooth()`
* [ ] `setToothStatus()`
* [ ] Validation
* [ ] Serialization
* [ ] Unit tests

### Phase 2 — State Engine

* [ ] Actions
* [ ] Events
* [ ] Change tracking
* [ ] Custom conditions

### Phase 3 — React

* [ ] `<Odontogram />`
* [ ] `<Tooth />`
* [ ] Tooth selection
* [ ] Condition selector
* [ ] Responsive layout
* [ ] SVG tooth representation

### Phase 4 — Developer Experience

* [ ] Documentation
* [ ] Interactive examples
* [ ] npm package
* [ ] TypeScript API documentation
* [ ] Demo application

### Phase 5 — Professional Features

* [ ] Tooth surfaces
* [ ] Clinical history
* [ ] Undo / redo
* [ ] Advanced states
* [ ] Primary dentition
* [ ] Mixed dentition
* [ ] Additional numbering systems
* [ ] Cloud and API integration

---

## Design Principles

### Core First

Clinical state and odontogram logic should not depend on the UI framework.

### Lightweight by Default

Applications should not be required to use complex dental models when a simple representation is sufficient.

### Extensible

Developers should be able to add their own conditions, visual styles and workflows.

### Predictable

State transitions should produce consistent and serializable data.

### Framework Independent

The dental engine should remain usable outside React.

---

## Project Status

> This project is currently in early development.

The initial focus is building a stable TypeScript core before implementing advanced visual and professional functionality.

The public API may change while the project is under active development.

---

## Disclaimer

Odontogram SDK is a software development toolkit intended to help developers build dental charting interfaces.

It does not provide medical diagnosis, treatment recommendations or clinical decision-making.

Applications integrating this SDK are responsible for validating their own clinical workflows, terminology, regulatory requirements and data protection practices.

---

## License

The licensing model is currently being defined.

The project is expected to provide a free core edition with optional professional functionality.
