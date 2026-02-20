# BitRocket Hardware Resources

This repository contains all hardware-related resources for BitRocket's EV charging infrastructure.

## Overview

BitRocket designs and manufactures advanced EV charging stations with cutting-edge technology. This repository includes:

- Hardware specifications and component datasheets
- Circuit schematics and PCB layouts
- CAD designs and 3D models
- Prototype documentation and test results
- Integration guides for hardware-software communication

## Directory Structure

```
hardware/
├── specifications/          # Hardware specs and datasheets
│   ├── charger-models/      # Specific charger model specifications
│   │   ├── rondo/           # Rondo charger specs
│   │   │   ├── electrical-specs.md
│   │   │   ├── mechanical-dimensions.md
│   │   │   └── component-list.csv
│   │   └── [other-models]/
│   └── component-library/   # Standard component specifications
├── schematics/              # Electrical schematics
│   ├── power-electronics/
│   ├── communication/
│   └── safety-circuits/
├── designs/                  # CAD and 3D models
│   ├── enclosures/
│   ├── mounting-brackets/
│   └── cable-assemblies/
├── prototypes/              # Prototype documentation
│   ├── v1/
│   │   ├── test-results.md
│   │   └── photos/
│   └── v2/
└── integration/             # Hardware-software integration
    ├── communication-protocols.md
    └── api-interfaces.md
```

## Getting Started

### Prerequisites

- CAD software: AutoCAD, SolidWorks, or Fusion 360
- Circuit design software: Altium Designer, KiCad, or Eagle
- Test equipment: Oscilloscopes, multimeters, power supplies

### Documentation

- [Rondo Charger Specifications](./specifications/charger-models/rondo/electrical-specs.md)
- [Component Library](./specifications/component-library/)
- [Integration Guide](./integration/communication-protocols.md)

## Team Structure

- Hardware Engineering: Design and validation
- Mechanical Engineering: Enclosure and mounting design
- Electrical Engineering: Circuit and power electronics
- Quality Assurance: Testing and certification

## Workflow

1. Design phase: Create schematics and CAD models
2. Prototype phase: Build and test prototypes
3. Validation phase: Performance and safety testing
4. Production phase: Mass manufacturing preparation

## Communication

- Hardware team meetings: Weekly
- Documentation updates: After each design iteration
- Issue tracking: GitHub Issues
