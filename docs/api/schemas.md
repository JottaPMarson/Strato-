# 📋 Schemas de Dados

## 🎯 Tipos TypeScript

### **Autenticação**
```typescript
interface User {
  id: string
  email: string
  name: string
  role: 'admin' | 'user' | 'analyst'
  createdAt: string
  lastLogin?: string
}

interface AuthResponse {
  success: boolean
  data: {
    token: string
    user: User
  }
}

interface LoginRequest {
  email: string
  password: string
}
```

### **Análise de Rede**
```typescript
interface NetworkNode {
  id: string
  label: string
  type: 'person' | 'organization' | 'location' | 'event'
  connections: number
  centrality: number
  risk_level: 'low' | 'medium' | 'high' | 'critical'
  metadata: Record<string, any>
  position?: {
    x: number
    y: number
  }
}

interface NetworkEdge {
  id: string
  source: string
  target: string
  weight: number
  type: 'communication' | 'financial' | 'social' | 'business'
  frequency: number
  metadata?: Record<string, any>
}

interface NetworkData {
  nodes: NetworkNode[]
  edges: NetworkEdge[]
  stats: {
    totalNodes: number
    totalEdges: number
    avgDegree: number
    density: number
  }
}
```

### **Métricas SNA**
```typescript
interface CentralityMetrics {
  degree: Array<{ nodeId: string; value: number }>
  betweenness: Array<{ nodeId: string; value: number }>
  closeness: Array<{ nodeId: string; value: number }>
  eigenvector?: Array<{ nodeId: string; value: number }>
}

interface ClusteringMetrics {
  global: number
  average: number
  nodes: Array<{ nodeId: string; coefficient: number }>
}

interface Community {
  id: string
  nodes: string[]
  modularity: number
  size: number
  density: number
}

interface NetworkMetrics {
  centrality: CentralityMetrics
  clustering: ClusteringMetrics
  communities: Community[]
  diameter?: number
  averagePathLength?: number
}
```

### **Alertas de Risco**
```typescript
interface NetworkAlert {
  id: string
  type: 'high_centrality' | 'unusual_activity' | 'new_connection' | 'isolated_node' | 'bridge_node'
  severity: 'low' | 'medium' | 'high' | 'critical'
  title: string
  description: string
  nodeId?: string
  edgeId?: string
  timestamp: string
  metadata: Record<string, any>
  status: 'active' | 'investigating' | 'resolved' | 'dismissed'
}

interface AlertSummary {
  total: number
  critical: number
  high: number
  medium: number
  low: number
}
```

### **Simulação**
```typescript
interface SimulationParameters {
  algorithm: 'centrality' | 'betweenness' | 'clustering' | 'community' | 'influence'
  nodeFilters: {
    type?: string[]
    minConnections?: number
    maxConnections?: number
    riskLevel?: string[]
  }
  edgeFilters: {
    type?: string[]
    weight?: {
      min: number
      max: number
    }
    frequency?: {
      min: number
      max: number
    }
  }
  timeframe: {
    start: string
    end: string
  }
  options?: {
    includeVisualization?: boolean
    generateReport?: boolean
    compareWithPrevious?: boolean
  }
}

interface SimulationResult {
  simulationId: string
  name: string
  status: 'running' | 'completed' | 'failed'
  parameters: SimulationParameters
  results: {
    metrics: {
      totalNodes: number
      totalEdges: number
      avgCentrality: number
      maxCentrality: number
      communities: number
    }
    topNodes: Array<{
      nodeId: string
      label: string
      centrality: number
      connections: number
    }>
    communities: Array<{
      id: string
      size: number
      modularity: number
      topNodes: string[]
    }>
  }
  visualization?: {
    graphData: NetworkData
    layout: 'force-directed' | 'hierarchical' | 'circular'
  }
  timestamp: string
  executionTime?: number
}

interface SimulationComparison {
  simulation1: string
  simulation2: string
  comparison: {
    metrics: {
      nodesDiff: number
      edgesDiff: number
      centralityDiff: number
      communitiesDiff: number
    }
    changedNodes: Array<{
      nodeId: string
      changes: {
        centrality?: { before: number; after: number }
        connections?: { before: number; after: number }
        riskLevel?: { before: string; after: string }
      }
    }>
    newNodes: string[]
    removedNodes: string[]
  }
}

interface CenarioSalvo {
  id: string
  name: string
  description?: string
  parameters: SimulationParameters
  createdAt: string
  lastUsed?: string
  usageCount: number
}
```

### **Relatórios**
```typescript
interface Report {
  id: string
  title: string
  type: 'analysis' | 'simulation' | 'comparison' | 'custom'
  status: 'generating' | 'completed' | 'failed'
  parameters: {
    period?: string
    includeGraphs: boolean
    includeMetrics: boolean
    includeAlerts: boolean
    includeComparisons?: boolean
  }
  format: 'pdf' | 'excel' | 'json'
  createdAt: string
  completedAt?: string
  fileUrl?: string
  fileSize?: number
  summary: {
    totalPages: number
    keyFindings: number
    riskAlerts: number
    graphsGenerated: number
  }
  metadata?: Record<string, any>
}

interface ReportGenerationRequest {
  type: Report['type']
  title: string
  parameters: Report['parameters']
  format: Report['format']
}
```

### **Upload de Arquivos**
```typescript
interface UploadedFile {
  id: string
  filename: string
  originalName: string
  size: number
  type: 'network' | 'nodes' | 'edges' | 'report' | 'other'
  mimeType: string
  uploadedAt: string
  status: 'uploaded' | 'processing' | 'processed' | 'failed'
  description?: string
  metadata: {
    rows?: number
    columns?: number
    encoding?: string
    delimiter?: string
    headers?: string[]
  }
  processedData?: {
    nodesCount?: number
    edgesCount?: number
    validationErrors?: string[]
  }
}

interface FileUploadRequest {
  file: File
  type?: UploadedFile['type']
  description?: string
}
```

### **Dashboard e KPIs**
```typescript
interface KPIData {
  totalNodes: number
  activeConnections: number
  riskAlerts: number
  analysisComplete: number
  trendsData: {
    nodes: Array<{ date: string; count: number }>
    connections: Array<{ date: string; count: number }>
    alerts: Array<{ date: string; count: number }>
  }
}

interface RecentActivity {
  id: string
  type: 'analysis' | 'simulation' | 'upload' | 'report' | 'alert'
  description: string
  timestamp: string
  userId?: string
  metadata?: Record<string, any>
}

interface DiagnosticoItem {
  id: string
  type: 'performance' | 'security' | 'data_quality' | 'system'
  title: string
  description: string
  severity: 'info' | 'warning' | 'error'
  status: 'active' | 'resolved'
  timestamp: string
  recommendation?: string
}

interface TendenciaData {
  mes: string
  entradas: number
  saidas: number
  saldo: number
}

interface ComparativaData {
  categoria: string
  atual: number
  anterior: number
  variacao: number
}
```

### **Configurações do Sistema**
```typescript
interface SystemConfig {
  version: string
  environment: 'development' | 'staging' | 'production'
  features: {
    fileUpload: boolean
    reportGeneration: boolean
    realTimeAnalysis: boolean
    advancedMetrics: boolean
  }
  limits: {
    maxFileSize: string
    maxNodes: number
    maxEdges: number
    maxSimulations: number
    maxReports: number
  }
  ui: {
    theme: 'light' | 'dark' | 'auto'
    language: 'pt' | 'en'
    timezone: string
  }
}

interface UserPreferences {
  userId: string
  theme: 'light' | 'dark' | 'auto'
  language: 'pt' | 'en'
  notifications: {
    email: boolean
    push: boolean
    alerts: boolean
    reports: boolean
  }
  dashboard: {
    defaultPeriod: string
    favoriteCharts: string[]
    layout: 'compact' | 'expanded'
  }
}
```

---

## 🔍 Validação de Dados

### **Schemas Zod (Frontend)**
```typescript
import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres')
})

export const simulationSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  algorithm: z.enum(['centrality', 'betweenness', 'clustering', 'community']),
  nodeFilters: z.object({
    type: z.array(z.string()).optional(),
    minConnections: z.number().min(0).optional(),
    maxConnections: z.number().min(1).optional()
  }),
  timeframe: z.object({
    start: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Data inválida'),
    end: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Data inválida')
  })
})

export const reportSchema = z.object({
  title: z.string().min(1, 'Título é obrigatório'),
  type: z.enum(['analysis', 'simulation', 'comparison']),
  format: z.enum(['pdf', 'excel']),
  parameters: z.object({
    period: z.string().optional(),
    includeGraphs: z.boolean().default(true),
    includeMetrics: z.boolean().default(true),
    includeAlerts: z.boolean().default(true)
  })
})
```

### **DTOs NestJS (Backend)**
```typescript
import { IsEmail, IsString, MinLength, IsEnum, IsOptional, IsNumber, IsBoolean } from 'class-validator'

export class LoginDto {
  @IsEmail({}, { message: 'Email inválido' })
  email: string

  @IsString()
  @MinLength(6, { message: 'Senha deve ter pelo menos 6 caracteres' })
  password: string
}

export class CreateSimulationDto {
  @IsString()
  name: string

  @IsEnum(['centrality', 'betweenness', 'clustering', 'community'])
  algorithm: string

  @IsOptional()
  nodeFilters?: {
    type?: string[]
    minConnections?: number
    maxConnections?: number
  }

  @IsOptional()
  edgeFilters?: {
    type?: string[]
    weight?: { min: number; max: number }
  }

  timeframe: {
    start: string
    end: string
  }
}

export class CreateReportDto {
  @IsString()
  title: string

  @IsEnum(['analysis', 'simulation', 'comparison'])
  type: string

  @IsEnum(['pdf', 'excel'])
  format: string

  @IsOptional()
  parameters?: {
    period?: string
    includeGraphs?: boolean
    includeMetrics?: boolean
    includeAlerts?: boolean
  }
}
```

---

## 📊 Exemplos de Resposta da API

### **Análise de Rede Completa**
```json
{
  "success": true,
  "data": {
    "nodes": [
      {
        "id": "person_001",
        "label": "João Silva",
        "type": "person",
        "connections": 15,
        "centrality": 0.85,
        "risk_level": "high",
        "metadata": {
          "age": 35,
          "location": "São Paulo, SP",
          "occupation": "Empresário",
          "documents": ["CPF", "RG"]
        },
        "position": { "x": 100, "y": 150 }
      }
    ],
    "edges": [
      {
        "id": "comm_001_002",
        "source": "person_001",
        "target": "person_002",
        "weight": 0.8,
        "type": "communication",
        "frequency": 45,
        "metadata": {
          "firstContact": "2024-01-15",
          "lastContact": "2024-12-30",
          "platform": "WhatsApp"
        }
      }
    ],
    "stats": {
      "totalNodes": 1247,
      "totalEdges": 3891,
      "avgDegree": 6.24,
      "density": 0.0025,
      "components": 3,
      "diameter": 8
    }
  }
}
```

---

**Voltar:** [← Documentação da API](./endpoints.md)

