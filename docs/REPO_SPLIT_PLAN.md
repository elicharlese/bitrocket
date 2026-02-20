# BitRocket Repository Split Plan

## Overview

This plan details the split of the BitRocket repository into three distinct, cohesive parts aligned with the operational needs of the company:

1. **Software Resources** - Applications, code libraries, and development tools
2. **Hardware Resources** - Schematics, component specifications, and prototype designs  
3. **Middleware Resources** - Integration frameworks, communication protocols, and data processing pipelines

## Current Repository Structure Analysis

The current repository is a Next.js 14 application with the following main components:
- Frontend application (app/ directory)
- UI components (components/ directory)
- API routes (app/api/ directory)
- Contexts, hooks, and utilities
- Public assets (public/ directory)

## Split Strategy

### 1. Hardware Resources (/hardware)

**Purpose:** Manage all hardware-related components, specifications, and designs for BitRocket's EV charging infrastructure.

**Content to Include:**
- EV charger hardware specifications
- Circuit schematics and PCB layouts
- Component datasheets and sourcing information
- Prototype designs and test reports
- Hardware integration guides

**Files to Create:**
```
hardware/
├── README.md                  # Hardware team documentation
├── specifications/           # Hardware specs and datasheets
│   ├── charger-models/       # Specific charger model specifications
│   │   ├── rondo/            # Rondo charger specs
│   │   │   ├── electrical-specs.md
│   │   │   ├── mechanical-dimensions.md
│   │   │   └── component-list.csv
│   │   └── [other-models]/
│   └── component-library/    # Standard component specifications
├── schematics/               # Electrical schematics
│   ├── power-electronics/
│   ├── communication/
│   └── safety-circuits/
├── designs/                   # CAD and 3D models
│   ├── enclosures/
│   ├── mounting-brackets/
│   └── cable-assemblies/
├── prototypes/               # Prototype documentation
│   ├── v1/
│   │   ├── test-results.md
│   │   └── photos/
│   └── v2/
└── integration/              # Hardware-software integration
    ├── communication-protocols.md
    └── api-interfaces.md
```

### 2. Software Resources (/software)

**Purpose:** Manage all software applications, libraries, and development tools for BitRocket's platform.

**Content to Include:**
- Frontend web application (Next.js)
- Mobile applications (React Native)
- Desktop applications
- Software libraries and SDKs
- Development tools and scripts

**Files to Move/Create:**
```
software/
├── README.md                  # Software team documentation
├── web-app/                   # Next.js web application
│   ├── app/                  # Next.js app directory
│   ├── components/           # UI components
│   ├── contexts/             # React contexts
│   ├── hooks/                # Custom hooks
│   ├── lib/                  # Utilities
│   ├── utils/                # Helper functions
│   ├── public/               # Static assets (logos, images)
│   ├── package.json
│   ├── tsconfig.json
│   ├── next.config.mjs
│   ├── postcss.config.mjs
│   ├── tailwind.config.ts
│   └── .gitignore
├── mobile-app/               # React Native mobile app
│   ├── ios/
│   ├── android/
│   ├── src/
│   ├── package.json
│   └── README.md
├── desktop-app/              # Electron desktop app
│   ├── src/
│   ├── package.json
│   └── README.md
└── libraries/                # Shared libraries
    ├── bitrocket-sdk/        # JavaScript/TypeScript SDK
    ├── charging-api-client/  # API client library
    └── ui-components/        # Reusable UI components library
```

### 3. Middleware Resources (/middleware)

**Purpose:** Manage integration frameworks, communication protocols, and data processing pipelines that connect hardware and software systems.

**Content to Include:**
- Backend APIs and services
- Integration middleware
- Communication protocols
- Data processing pipelines
- Blockchain integration
- Cloud infrastructure configurations

**Files to Move/Create:**
```
middleware/
├── README.md                  # Middleware team documentation
├── api-gateway/              # API gateway and routing
│   ├── routes/
│   │   ├── charging-stations/
│   │   ├── users/
│   │   ├── payments/
│   │   └── blockchain/
│   ├── middleware.ts         # Auth and request handling
│   └── package.json
├── integration-services/    # Service integration
│   ├── charging-station-connector/  # Hardware integration
│   ├── payment-processor/   # Payment gateway integration
│   └── blockchain-node/     # Blockchain integration
├── data-processing/         # Data pipelines
│   ├── real-time-data/      # Streaming data processing
│   ├── analytics/           # Data analytics
│   └── reporting/           # Report generation
├── communication/           # Protocol implementations
│   ├── ocpp/                # Open Charge Point Protocol
│   ├── mqtt/                # MQTT messaging
│   └── websockets/          # Real-time communication
├── blockchain/              # Blockchain infrastructure
│   ├── smart-contracts/     # Solidity contracts
│   ├── node-management/     # Node configuration
│   └── integration/         # Web3 integration
└── infrastructure/          # Cloud and DevOps
    ├── docker/              # Docker configurations
    ├── kubernetes/          # Kubernetes manifests
    ├── terraform/           # Infrastructure as code
    └── monitoring/          # Prometheus/Grafana
```

## Execution Steps

### Phase 1: Prepare for Split
1. Create the new directory structure
2. Review all current files and assign to appropriate categories
3. Create README files for each category
4. Set up package.json files for each part

### Phase 2: Execute Split
1. Move existing files to new locations
2. Update import/export statements
3. Update configuration files (tsconfig, next.config, etc.)
4. Update API routes and endpoints

### Phase 3: Verify and Test
1. Install dependencies for all parts
2. Build each application
3. Run tests to ensure functionality
4. Verify API endpoints are working
5. Test hardware-software integration

### Phase 4: Finalize
1. Update documentation
2. Create a migration guide for team members
3. Set up CI/CD pipelines for each part
4. Archive old files and clean up

## Benefits of Split

1. **Improved Team Focus:** Each team can work independently without interference
2. **Clear Ownership:** Defined boundaries for each discipline
3. **Easier Maintenance:** Changes to one part don't affect others
4. **Scalability:** Each part can scale independently
5. **Specialized Tooling:** Each team can use tools specific to their discipline

## Challenges and Mitigations

1. **Integration Complexity:**
   - Mitigation: Define clear APIs and communication protocols
   - Establish integration testing procedures

2. **Dependency Management:**
   - Mitigation: Use package managers and version control
   - Create shared libraries for common functionality

3. **Knowledge Sharing:**
   - Mitigation: Regular cross-team meetings and documentation
   - Create integration guides and examples

## Timeline

- **Phase 1:** 1 week (planning and preparation)
- **Phase 2:** 2 weeks (execution and migration)
- **Phase 3:** 1 week (testing and verification)
- **Phase 4:** 1 week (finalization and documentation)

Total: 5 weeks
