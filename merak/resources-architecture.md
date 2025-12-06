# Resources Architecture

## Data Types & Enums

### User Management Enums

### Service & Application Enums

### Organization & Policy Enums

- **PolicyType**: ServiceDialPolicy, ServiceBindPolicy, RouterPolicy

## Admin RBAC

```mermaid
classDiagram
  namespace AdminUser {
    class User {
      +Integer id
      +String username
      +String DisplayName
      +String email
      +String phone
      +String avatar
      +String password
      +UserStatus status
      +DateTime CreatedAt
      +String CreatedBy
      +DateTime UpdatedAt
      +String UpdatedBy
      +DateTime LastLogin
      +Boolean TwoFaEnabled
    }
    class Role {
      +Integer id
      +String name
      +String DisplayName
      +String description
      +DateTime CreatedAt
      +String CreatedBy
      +DateTime UpdatedAt
      +String UpdatedBy
    }
    class Permission {
      +Integer id
      +String code
      +String name
      +String DisplayName
      +String description
      +DateTime CreatedAt
      +String CreatedBy
      +DateTime UpdatedAt
      +String UpdatedBy
    }
  }

  User "1" --> "many" Role
  Role "many" --> "many" Permission
```

## Core Architecture

```mermaid
classDiagram
  namespace Core {
    class Service {
      +Integer id
      +String name
      +String description
      +DateTime CreatedAt
      +String CreatedBy
      +DateTime UpdatedAt
      +String UpdatedBy
      +ServiceStatus status
      +String endpoint
    }
    class Identity {
      +Integer id
      +String name
      +String description
      +String OS
      +String AgentVersion
      +DateTime CreatedAt
      +String CreatedBy
      +DateTime UpdatedAt
      +String UpdatedBy
    }
    class Route {
      +Integer id
      +String name
      +String description
      +DateTime CreatedAt
      +String CreatedBy
      +DateTime UpdatedAt
      +String UpdatedBy
      +Boolean IsActive
      +Integer priority
    }
    class ServiceHostConfiguration {
      +Integer id
      +Integer ServiceId
      +String hostname
      +Integer port
      +String protocol
      +DateTime CreatedAt
      +String CreatedBy
      +DateTime UpdatedAt
      +String UpdatedBy
    }
    class ServiceInterceptorConfiguration {
      +Integer id
      +Integer ServiceId
      +String name
      +String type
      +String hostname
      +Integer port
      +String protocol
    }
    class Policy {
      +Integer id
      +String name
      +String description
      +DateTime CreatedAt
      +String CreatedBy
      +DateTime UpdatedAt
      +String UpdatedBy
      +PolicyType type
      +Boolean status
    }
    class Configuration {
      +Integer id
      +String name
      +String description
      +DateTime CreatedAt
      +String CreatedBy
      +DateTime UpdatedAt
      +String UpdatedBy
      +ConfigType type
      +Integer ConfigServiceId
    }
  }

  Identity <--> ServiceInterceptorConfiguration : Service Dial Policy
  Route <--> ServiceHostConfiguration : Service Bind Policy
  Identity <--> Route : Router Policy
  ServiceInterceptorConfiguration <--> Service
  ServiceHostConfiguration <--> Service
```

## Domain Architecture

```mermaid
classDiagram

  class PolicyGroup {
    Policy ServiceDialPolicy
    Policy ServiceBindPolicy
    Policy RouterPolicy
  }

  namespace MemberUser {
    class Member {
      +Integer id
      +String username
      +String DisplayName
      +String email
      +String phone
      +MemberStatus status
      +Boolean TwoFaEnabled
      +String password
      +DateTime CreatedAt
      +String CreatedBy
      +DateTime UpdatedAt
      +String UpdatedBy
    }
    class MemberDevice {
      +Integer id
      +String name
      +String type
      +String fingerprint
      +String jwt
      +String UserAgent
      +String IpAddress
      +Boolean IsTrusted
      +DateTime CreatedAt
      +String CreatedBy
      +DateTime UpdatedAt
      +String UpdatedBy
      +Object Identity
    }
    class Identity
  }
  namespace PermissionGroup {
    class MemberPermission {
      +List MemberDevice
    }
    class ApplicationPermission {
      +Object ServiceHost
      +List ServiceInterceptor
    }
  }

  namespace ApplicationService {
    class Application {
      +Integer id
      +String AppName
      +String description
      +String version
      +AppStatus status
      +String endpoint
      +DateTime CreatedAt
      +String CreatedBy
      +DateTime UpdatedAt
      +String UpdatedBy
    }

    class ServiceHost
    class ServiceInterceptor
    class Service
  }

  Member "1" --> "many" MemberDevice
  Identity "1" --> "1" MemberDevice

  Application "1" --> "many" ServiceInterceptor
  Application "1" --> "1" ServiceHost
  ServiceHost "1" --> "1" Service
  ServiceInterceptor "many" --> "1" Service

  MemberPermission "many" --> "many" Member
  MemberPermission "1" --> "many" PolicyGroup
  ApplicationPermission "many" --> "many" Application
  ApplicationPermission "1" --> "many" PolicyGroup
```

## Organization

```mermaid
classDiagram

  namespace Core {
    class Policy
    class Route
  }

  namespace MemberUser {
    class Member
  }

  namespace ApplicationService {
    class Service {
      +Integer id
      +String ServiceName
      +String description
      +ServiceStatus status
      +String endpoint
      +String version
      +DateTime CreatedAt
      +String CreatedBy
      +DateTime UpdatedAt
      +String UpdatedBy
    }
  }

  namespace OrganizationPermission {
    class Organization {
      +Integer id
      +String name
      +String description
      +OrgStatus status
      +String ParentId
      +DateTime CreatedAt
      +String CreatedBy
      +DateTime UpdatedAt
      +String UpdatedBy
    }
  }

  Member "many" --> "many" Organization
  Service "many" --> "many" Organization
  Organization "many" --> "many" Policy
  Organization "many" --> "many" Route
```
