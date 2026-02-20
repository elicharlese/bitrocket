# Hardware-Software Communication Protocols

## Overview

This document describes the communication protocols used between BitRocket's EV charging stations (hardware) and software systems.

## Primary Communication Protocols

### 1. OCPP 2.0.1 (Open Charge Point Protocol)

**Purpose:** Standard communication between charging stations and central management system.

**Key Features:**
- Bi-directional communication
- Support for firmware updates
- Remote control of charging sessions
- Status monitoring and diagnostics
- Security features (TLS 1.3)

**Implementation:**
```
Charging Station ←→ OCPP Server ←→ API Gateway
```

**Message Types:**
- BootNotification: Station initialization
- StatusNotification: State updates
- StartTransaction: Begin charging session
- StopTransaction: End charging session
- RemoteStartTransaction: Remote control
- RemoteStopTransaction: Remote control

### 2. MQTT (Message Queuing Telemetry Transport)

**Purpose:** Real-time data streaming for monitoring and analytics.

**Key Features:**
- Lightweight publish/subscribe protocol
- Low bandwidth consumption
- Quality of Service (QoS) levels 0, 1, 2
- Last Will and Testament (LWT) for device status
- Persistent sessions for reliable communication

**Implementation:**
```
Charging Station → MQTT Broker → Data Processing Pipeline
```

**Topics:**
- `chargers/{station-id}/status`: Real-time status
- `chargers/{station-id}/metrics`: Telemetry data
- `chargers/{station-id}/events`: Fault and alert events

### 3. Modbus RTU

**Purpose:** Local communication for maintenance and debugging.

**Key Features:**
- Serial communication protocol
- Simple and robust
- Support for up to 247 devices on a single bus
- Read/write registers and coils
- Used for configuration and diagnostics

**Implementation:**
```
Charging Station ←→ Modbus Master (Maintenance Tool)
```

**Baud Rates:** 9600, 19200, 38400, 57600, 115200

### 4. WebSocket

**Purpose:** Real-time communication for web applications.

**Key Features:**
- Full-duplex communication over a single TCP connection
- Low latency
- Connection persistence
- Binary and text data support
- Subprotocol negotiation

**Implementation:**
```
Charging Station → WebSocket Server → Web Application
```

**Use Cases:**
- Live charging session monitoring
- Real-time status updates
- Firmware update progress
- Remote diagnostics

## Security Considerations

### Authentication and Authorization

- OCPP: TLS 1.3 with client certificates
- MQTT: Username/password + TLS
- Modbus: Physical access control
- WebSocket: Token-based authentication

### Data Encryption

- All communication channels use TLS 1.3
- Data at rest encryption for stored data
- Secure key exchange using ECDHE

### Network Isolation

- Charging stations on separate VLAN
- Firewall rules restricting access
- Network monitoring and intrusion detection

## Protocol Selection Guidelines

| Use Case | Recommended Protocol |
|----------|---------------------|
| Central management | OCPP 2.0.1 |
| Real-time monitoring | MQTT |
| Maintenance/debugging | Modbus RTU |
| Web application updates | WebSocket |
| Firmware updates | OCPP or HTTPS |

## Integration Points

### Charging Station Connection

```
Charging Station
├── OCPP 2.0.1 → OCPP Server
├── MQTT → Data Processing
├── Modbus → Maintenance Tool
└── WebSocket → Web App
```

### Software Architecture

```
API Gateway
├── OCPP Server → Charging Stations
├── MQTT Broker → Data Pipeline
├── WebSocket Server → Web App
└── REST API → External Systems
```

## Testing and Validation

### Protocol Conformance

- OCPP 2.0.1 certification
- MQTT performance testing
- Modbus compatibility testing

### Load Testing

- Simulate thousands of charging stations
- Test message throughput
- Verify protocol scalability

### Security Testing

- Penetration testing
- Vulnerability assessments
- Compliance with ISO 27001

## Future Developments

- Support for OCPP 2.1
- Integration with 5G networks
- Quantum-resistant cryptography
- Edge computing integration
