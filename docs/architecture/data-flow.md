# 🔄 Fluxo de Dados

## 📊 Visão Geral do Fluxo

O sistema **Strato PJ** processa dados de análise de redes sociais através de múltiplas camadas, desde a entrada do usuário até a visualização dos resultados.

```mermaid
graph TB
    subgraph "👤 User Interface"
        UI[React Components]
        Forms[Form Inputs]
        Charts[Data Visualization]
    end
    
    subgraph "🌐 Frontend State"
        LocalState[Component State]
        Cache[Client Cache]
        Context[React Context]
    end
    
    subgraph "🔌 API Gateway"
        NextAPI[Next.js API Routes]
        Validation[Input Validation]
        Transform[Data Transform]
    end
    
    subgraph "⚙️ Backend Services"
        NestJS[NestJS Controllers]
        BusinessLogic[Business Services]
        DataProcessing[Data Processing]
    end
    
    subgraph "💾 Data Layer"
        MockAPI[Mock Data]
        FileSystem[File Storage]
        MemoryCache[In-Memory Cache]
    end
    
    UI --> LocalState
    Forms --> Context
    Charts --> Cache
    
    LocalState --> NextAPI
    Context --> Validation
    Cache --> Transform
    
    NextAPI --> NestJS
    Validation --> BusinessLogic
    Transform --> DataProcessing
    
    NestJS --> MockAPI
    BusinessLogic --> FileSystem
    DataProcessing --> MemoryCache
    
    MockAPI -.->|Response| NestJS
    FileSystem -.->|Response| BusinessLogic
    MemoryCache -.->|Response| DataProcessing
    
    classDef ui fill:#e3f2fd,stroke:#1976d2,color:#000
    classDef frontend fill:#e8f5e8,stroke:#2e7d32,color:#000
    classDef api fill:#fff3e0,stroke:#f57c00,color:#000
    classDef backend fill:#f3e5f5,stroke:#7b1fa2,color:#000
    classDef data fill:#ffebee,stroke:#c62828,color:#000
    
    class UI,Forms,Charts ui
    class LocalState,Cache,Context frontend
    class NextAPI,Validation,Transform api
    class NestJS,BusinessLogic,DataProcessing backend
    class MockAPI,FileSystem,MemoryCache data
```

## 🔐 Fluxo de Autenticação

### **Authentication Data Flow**
```mermaid
sequenceDiagram
    participant U as 👤 User
    participant F as 🎨 Frontend
    participant A as 🔐 Auth API
    participant S as ⚙️ Auth Service
    participant D as 💾 Mock Data
    
    U->>F: Enter credentials
    F->>F: Validate form inputs
    F->>A: POST /auth/login
    
    A->>S: Authenticate user
    S->>D: Check user credentials
    D-->>S: User data / null
    
    alt ✅ Valid credentials
        S->>S: Generate JWT token
        S-->>A: { token, user }
        A-->>F: 200 OK + auth data
        F->>F: Store token in localStorage
        F->>F: Update auth context
        F-->>U: Redirect to dashboard
    else ❌ Invalid credentials
        S-->>A: Unauthorized error
        A-->>F: 401 Unauthorized
        F-->>U: Show error message
    end
```

## 📈 Fluxo de Análise de Dados

### **Network Analysis Data Flow**
```mermaid
graph TB
    subgraph "🎯 User Actions"
        SelectPeriod[Select Time Period]
        FilterData[Apply Filters]
        SearchNodes[Search Network Nodes]
        ChangeMetrics[Change Metrics View]
    end
    
    subgraph "⚡ Frontend Processing"
        UpdateState[Update Component State]
        ValidateInputs[Validate Inputs]
        FormatRequest[Format API Request]
    end
    
    subgraph "🔌 API Calls"
        NetworkAPI[GET /analysis/network]
        MetricsAPI[GET /analysis/metrics]
        NodesAPI[GET /analysis/nodes]
        AlertsAPI[GET /analysis/alerts]
    end
    
    subgraph "⚙️ Backend Processing"
        ProcessFilters[Process Filters]
        CalculateMetrics[Calculate SNA Metrics]
        GenerateGraph[Generate Network Graph]
        DetectRisks[Detect Risk Patterns]
    end
    
    subgraph "💾 Data Sources"
        NetworkData[Network Dataset]
        MetricsCache[Metrics Cache]
        RiskRules[Risk Detection Rules]
    end
    
    subgraph "📊 Visualization"
        UpdateCharts[Update Charts]
        RenderGraph[Render Network Graph]
        ShowAlerts[Display Risk Alerts]
        UpdateTables[Update Data Tables]
    end
    
    SelectPeriod --> UpdateState
    FilterData --> ValidateInputs
    SearchNodes --> FormatRequest
    ChangeMetrics --> UpdateState
    
    UpdateState --> NetworkAPI
    ValidateInputs --> MetricsAPI
    FormatRequest --> NodesAPI
    UpdateState --> AlertsAPI
    
    NetworkAPI --> ProcessFilters
    MetricsAPI --> CalculateMetrics
    NodesAPI --> GenerateGraph
    AlertsAPI --> DetectRisks
    
    ProcessFilters --> NetworkData
    CalculateMetrics --> MetricsCache
    GenerateGraph --> NetworkData
    DetectRisks --> RiskRules
    
    NetworkData -.->|Response| UpdateCharts
    MetricsCache -.->|Response| RenderGraph
    NetworkData -.->|Response| ShowAlerts
    RiskRules -.->|Response| UpdateTables
    
    classDef action fill:#e3f2fd,stroke:#1976d2,color:#000
    classDef frontend fill:#e8f5e8,stroke:#2e7d32,color:#000
    classDef api fill:#fff3e0,stroke:#f57c00,color:#000
    classDef backend fill:#f3e5f5,stroke:#7b1fa2,color:#000
    classDef data fill:#ffebee,stroke:#c62828,color:#000
    classDef viz fill:#f1f8e9,stroke:#689f38,color:#000
    
    class SelectPeriod,FilterData,SearchNodes,ChangeMetrics action
    class UpdateState,ValidateInputs,FormatRequest frontend
    class NetworkAPI,MetricsAPI,NodesAPI,AlertsAPI api
    class ProcessFilters,CalculateMetrics,GenerateGraph,DetectRisks backend
    class NetworkData,MetricsCache,RiskRules data
    class UpdateCharts,RenderGraph,ShowAlerts,UpdateTables viz
```

## 🎯 Fluxo de Simulação

### **Simulation Data Flow**
```mermaid
stateDiagram-v2
    [*] --> ConfigurandoSimulacao
    
    ConfigurandoSimulacao --> ValidandoParametros : Submit Parameters
    ValidandoParametros --> ExecutandoSimulacao : Valid Parameters
    ValidandoParametros --> ConfigurandoSimulacao : Invalid Parameters
    
    ExecutandoSimulacao --> ProcessandoDados : Start Processing
    ProcessandoDados --> GerandoResultados : Data Processed
    GerandoResultados --> ExibindoResultados : Results Generated
    
    ExibindoResultados --> ComparandoResultados : Compare with Previous
    ExibindoResultados --> SalvandoCenario : Save Scenario
    ExibindoResultados --> ConfigurandoSimulacao : New Simulation
    
    ComparandoResultados --> ExibindoResultados : Show Comparison
    SalvandoCenario --> ExibindoResultados : Scenario Saved
    
    ExibindoResultados --> [*] : End Session
```

### **Simulation Processing Pipeline**
```mermaid
graph LR
    subgraph "📝 Input Parameters"
        Nodes[Network Nodes]
        Edges[Network Edges]
        Algorithms[Analysis Algorithms]
        Timeframe[Time Parameters]
    end
    
    subgraph "🔧 Preprocessing"
        Validate[Validate Input]
        Normalize[Normalize Data]
        Structure[Structure Graph]
    end
    
    subgraph "⚡ Processing Engine"
        SNA[SNA Calculations]
        Centrality[Centrality Metrics]
        Community[Community Detection]
        Influence[Influence Analysis]
    end
    
    subgraph "📊 Results Generation"
        Metrics[Generate Metrics]
        Visualizations[Create Visualizations]
        Reports[Generate Reports]
        Comparisons[Compare Scenarios]
    end
    
    subgraph "💾 Storage"
        Cache[Cache Results]
        History[Save to History]
        Export[Export Data]
    end
    
    Nodes --> Validate
    Edges --> Normalize
    Algorithms --> Structure
    Timeframe --> Validate
    
    Validate --> SNA
    Normalize --> Centrality
    Structure --> Community
    
    SNA --> Metrics
    Centrality --> Visualizations
    Community --> Reports
    Influence --> Comparisons
    
    Metrics --> Cache
    Visualizations --> History
    Reports --> Export
    Comparisons --> Cache
    
    classDef input fill:#e3f2fd,stroke:#1976d2,color:#000
    classDef preprocess fill:#e8f5e8,stroke:#2e7d32,color:#000
    classDef engine fill:#fff3e0,stroke:#f57c00,color:#000
    classDef results fill:#f3e5f5,stroke:#7b1fa2,color:#000
    classDef storage fill:#ffebee,stroke:#c62828,color:#000
    
    class Nodes,Edges,Algorithms,Timeframe input
    class Validate,Normalize,Structure preprocess
    class SNA,Centrality,Community,Influence engine
    class Metrics,Visualizations,Reports,Comparisons results
    class Cache,History,Export storage
```

## 📋 Fluxo de Relatórios

### **Report Generation Flow**
```mermaid
graph TB
    subgraph "🎯 Report Request"
        SelectType[Select Report Type]
        SetParameters[Set Parameters]
        ChooseFormat[Choose Format]
    end
    
    subgraph "🔍 Data Collection"
        QueryAnalysis[Query Analysis Data]
        QuerySimulations[Query Simulations]
        QueryClassifications[Query Classifications]
    end
    
    subgraph "📊 Data Processing"
        AggregateData[Aggregate Data]
        CalculateStats[Calculate Statistics]
        GenerateInsights[Generate Insights]
    end
    
    subgraph "📄 Report Assembly"
        CreateStructure[Create Structure]
        PopulateData[Populate Data]
        AddVisualizations[Add Charts/Graphs]
        ApplyFormatting[Apply Formatting]
    end
    
    subgraph "📤 Output"
        PDFGeneration[Generate PDF]
        ExcelExport[Export to Excel]
        JSONResponse[JSON Response]
    end
    
    SelectType --> QueryAnalysis
    SetParameters --> QuerySimulations
    ChooseFormat --> QueryClassifications
    
    QueryAnalysis --> AggregateData
    QuerySimulations --> CalculateStats
    QueryClassifications --> GenerateInsights
    
    AggregateData --> CreateStructure
    CalculateStats --> PopulateData
    GenerateInsights --> AddVisualizations
    
    CreateStructure --> ApplyFormatting
    PopulateData --> ApplyFormatting
    AddVisualizations --> ApplyFormatting
    
    ApplyFormatting --> PDFGeneration
    ApplyFormatting --> ExcelExport
    ApplyFormatting --> JSONResponse
    
    classDef request fill:#e3f2fd,stroke:#1976d2,color:#000
    classDef collection fill:#e8f5e8,stroke:#2e7d32,color:#000
    classDef processing fill:#fff3e0,stroke:#f57c00,color:#000
    classDef assembly fill:#f3e5f5,stroke:#7b1fa2,color:#000
    classDef output fill:#ffebee,stroke:#c62828,color:#000
    
    class SelectType,SetParameters,ChooseFormat request
    class QueryAnalysis,QuerySimulations,QueryClassifications collection
    class AggregateData,CalculateStats,GenerateInsights processing
    class CreateStructure,PopulateData,AddVisualizations,ApplyFormatting assembly
    class PDFGeneration,ExcelExport,JSONResponse output
```

## 📁 Fluxo de Upload de Arquivos

### **File Upload Data Flow**
```mermaid
sequenceDiagram
    participant U as 👤 User
    participant F as 🎨 Frontend
    participant M as 🔧 Multer
    participant S as ⚙️ Upload Service
    participant FS as 💾 File System
    participant V as ✅ Validator
    
    U->>F: Select file(s)
    F->>F: Validate file type/size
    F->>M: POST /upload with FormData
    
    M->>V: Validate file constraints
    
    alt ✅ Valid file
        V->>S: Process upload
        S->>FS: Save to disk
        FS-->>S: File path
        S->>S: Extract metadata
        S->>S: Generate file ID
        S-->>M: Upload success
        M-->>F: 200 OK + file info
        F-->>U: Show success message
    else ❌ Invalid file
        V-->>M: Validation error
        M-->>F: 400 Bad Request
        F-->>U: Show error message
    end
```

## 🔄 Cache e Performance

### **Caching Strategy**
```mermaid
graph TB
    subgraph "🎯 Request Types"
        FrequentData[Frequent Data Requests]
        HeavyCalc[Heavy Calculations]
        StaticData[Static Data]
    end
    
    subgraph "💾 Cache Layers"
        BrowserCache[Browser Cache]
        MemoryCache[Server Memory Cache]
        DiskCache[Disk Cache]
    end
    
    subgraph "⚡ Cache Strategies"
        TTL[Time-To-Live]
        LRU[Least Recently Used]
        Invalidation[Cache Invalidation]
    end
    
    subgraph "📊 Performance Metrics"
        HitRate[Cache Hit Rate]
        ResponseTime[Response Time]
        MemoryUsage[Memory Usage]
    end
    
    FrequentData --> BrowserCache
    HeavyCalc --> MemoryCache
    StaticData --> DiskCache
    
    BrowserCache --> TTL
    MemoryCache --> LRU
    DiskCache --> Invalidation
    
    TTL --> HitRate
    LRU --> ResponseTime
    Invalidation --> MemoryUsage
    
    classDef request fill:#e3f2fd,stroke:#1976d2,color:#000
    classDef cache fill:#e8f5e8,stroke:#2e7d32,color:#000
    classDef strategy fill:#fff3e0,stroke:#f57c00,color:#000
    classDef metrics fill:#f3e5f5,stroke:#7b1fa2,color:#000
    
    class FrequentData,HeavyCalc,StaticData request
    class BrowserCache,MemoryCache,DiskCache cache
    class TTL,LRU,Invalidation strategy
    class HitRate,ResponseTime,MemoryUsage metrics
```

---

**Próximo:** [Documentação da API →](../api/endpoints.md)

