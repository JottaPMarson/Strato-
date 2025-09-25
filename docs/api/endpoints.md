# 🔌 Documentação da API

## 🎯 Visão Geral

A API do **Strato PJ** é construída com **NestJS** e segue padrões RESTful para máxima compatibilidade e facilidade de uso.

**Base URL:** `http://localhost:4000`

## 🔐 Autenticação

### **POST** `/auth/login`
Autentica usuário e retorna token JWT.

**Request Body:**
```json
{
  "email": "admin@stratopj.com",
  "password": "123456"
}
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "1",
      "email": "admin@stratopj.com",
      "name": "Administrador",
      "role": "admin"
    }
  }
}
```

**Response (401):**
```json
{
  "success": false,
  "message": "Credenciais inválidas"
}
```

### **POST** `/auth/logout`
Invalida token JWT (logout).

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200):**
```json
{
  "success": true,
  "message": "Logout realizado com sucesso"
}
```

---

## 📈 Análises

### **GET** `/analysis/dashboard`
Retorna dados do dashboard principal.

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "kpis": {
      "totalNodes": 1247,
      "activeConnections": 892,
      "riskAlerts": 23,
      "analysisComplete": 87.5
    },
    "recentActivity": [
      {
        "id": "1",
        "type": "analysis",
        "description": "Análise de rede concluída",
        "timestamp": "2025-01-15T10:30:00Z"
      }
    ],
    "topRisks": [
      {
        "id": "1",
        "type": "high_centrality",
        "description": "Nó com alta centralidade detectado",
        "severity": "high",
        "nodeId": "node_123"
      }
    ]
  }
}
```

### **GET** `/analysis/network`
Retorna dados da rede para visualização.

**Query Parameters:**
- `period` (optional): `7d`, `30d`, `90d` (default: `30d`)
- `nodeType` (optional): `person`, `organization`, `location`
- `minConnections` (optional): número mínimo de conexões

**Example:** `GET /analysis/network?period=30d&nodeType=person&minConnections=5`

**Response (200):**
```json
{
  "success": true,
  "data": {
    "nodes": [
      {
        "id": "node_1",
        "label": "João Silva",
        "type": "person",
        "connections": 15,
        "centrality": 0.85,
        "risk_level": "medium",
        "metadata": {
          "age": 35,
          "location": "São Paulo"
        }
      }
    ],
    "edges": [
      {
        "id": "edge_1",
        "source": "node_1",
        "target": "node_2",
        "weight": 0.7,
        "type": "communication",
        "frequency": 45
      }
    ],
    "stats": {
      "totalNodes": 1247,
      "totalEdges": 3891,
      "avgDegree": 6.2,
      "density": 0.0025
    }
  }
}
```

### **GET** `/analysis/metrics`
Retorna métricas de análise de rede social (SNA).

**Query Parameters:**
- `nodeId` (optional): ID do nó específico
- `metric` (optional): `centrality`, `clustering`, `betweenness`

**Response (200):**
```json
{
  "success": true,
  "data": {
    "centrality": {
      "degree": [
        { "nodeId": "node_1", "value": 0.85 },
        { "nodeId": "node_2", "value": 0.72 }
      ],
      "betweenness": [
        { "nodeId": "node_1", "value": 0.23 },
        { "nodeId": "node_2", "value": 0.18 }
      ],
      "closeness": [
        { "nodeId": "node_1", "value": 0.67 },
        { "nodeId": "node_2", "value": 0.54 }
      ]
    },
    "clustering": {
      "global": 0.42,
      "average": 0.38,
      "nodes": [
        { "nodeId": "node_1", "coefficient": 0.45 }
      ]
    },
    "communities": [
      {
        "id": "community_1",
        "nodes": ["node_1", "node_2", "node_3"],
        "modularity": 0.67
      }
    ]
  }
}
```

### **GET** `/analysis/alerts`
Retorna alertas de risco detectados.

**Query Parameters:**
- `severity` (optional): `low`, `medium`, `high`, `critical`
- `type` (optional): `high_centrality`, `unusual_activity`, `new_connection`
- `limit` (optional): número máximo de alertas (default: 50)

**Response (200):**
```json
{
  "success": true,
  "data": {
    "alerts": [
      {
        "id": "alert_1",
        "type": "high_centrality",
        "severity": "high",
        "title": "Nó com alta centralidade detectado",
        "description": "O nó 'João Silva' apresenta centralidade de grau muito alta (0.85)",
        "nodeId": "node_1",
        "timestamp": "2025-01-15T14:30:00Z",
        "metadata": {
          "centrality_value": 0.85,
          "threshold": 0.8
        }
      }
    ],
    "summary": {
      "total": 23,
      "critical": 2,
      "high": 8,
      "medium": 10,
      "low": 3
    }
  }
}
```

---

## 🎯 Simulador

### **POST** `/simulator/run`
Executa uma simulação de análise de rede.

**Request Body:**
```json
{
  "name": "Simulação Teste",
  "parameters": {
    "algorithm": "centrality",
    "nodeFilters": {
      "type": ["person"],
      "minConnections": 5
    },
    "edgeFilters": {
      "weight": {
        "min": 0.3,
        "max": 1.0
      }
    },
    "timeframe": {
      "start": "2024-01-01",
      "end": "2024-12-31"
    }
  },
  "options": {
    "includeVisualization": true,
    "generateReport": true
  }
}
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "simulationId": "sim_12345",
    "status": "completed",
    "results": {
      "metrics": {
        "totalNodes": 892,
        "totalEdges": 2341,
        "avgCentrality": 0.42,
        "maxCentrality": 0.89
      },
      "topNodes": [
        {
          "nodeId": "node_1",
          "label": "João Silva",
          "centrality": 0.89,
          "connections": 34
        }
      ],
      "communities": [
        {
          "id": "comm_1",
          "size": 45,
          "modularity": 0.67
        }
      ]
    },
    "visualization": {
      "graphData": "...", // Dados do grafo para visualização
      "layout": "force-directed"
    },
    "timestamp": "2025-01-15T15:45:00Z"
  }
}
```

### **GET** `/simulator/scenarios`
Lista cenários salvos de simulação.

**Response (200):**
```json
{
  "success": true,
  "data": {
    "scenarios": [
      {
        "id": "scenario_1",
        "name": "Análise Q4 2024",
        "description": "Análise de centralidade para Q4",
        "parameters": {
          "algorithm": "centrality",
          "timeframe": {
            "start": "2024-10-01",
            "end": "2024-12-31"
          }
        },
        "createdAt": "2025-01-10T10:00:00Z",
        "lastUsed": "2025-01-15T14:30:00Z"
      }
    ]
  }
}
```

### **POST** `/simulator/scenarios`
Salva um novo cenário de simulação.

**Request Body:**
```json
{
  "name": "Novo Cenário",
  "description": "Descrição do cenário",
  "parameters": {
    "algorithm": "betweenness",
    "nodeFilters": {
      "type": ["person", "organization"]
    }
  }
}
```

### **GET** `/simulator/compare`
Compara resultados de duas simulações.

**Query Parameters:**
- `simulation1`: ID da primeira simulação
- `simulation2`: ID da segunda simulação

**Response (200):**
```json
{
  "success": true,
  "data": {
    "comparison": {
      "metrics": {
        "nodesDiff": 12,
        "edgesDiff": -5,
        "centralityDiff": 0.03
      },
      "changedNodes": [
        {
          "nodeId": "node_1",
          "changes": {
            "centrality": { "before": 0.75, "after": 0.82 },
            "connections": { "before": 23, "after": 28 }
          }
        }
      ]
    }
  }
}
```

---

## 📋 Relatórios

### **GET** `/reports`
Lista relatórios disponíveis.

**Query Parameters:**
- `type` (optional): `analysis`, `simulation`, `comparison`
- `dateFrom` (optional): data inicial (YYYY-MM-DD)
- `dateTo` (optional): data final (YYYY-MM-DD)

**Response (200):**
```json
{
  "success": true,
  "data": {
    "reports": [
      {
        "id": "report_1",
        "title": "Análise Mensal - Janeiro 2025",
        "type": "analysis",
        "status": "completed",
        "createdAt": "2025-01-15T16:00:00Z",
        "fileUrl": "/reports/download/report_1.pdf",
        "summary": {
          "totalPages": 12,
          "keyFindings": 5,
          "riskAlerts": 8
        }
      }
    ]
  }
}
```

### **POST** `/reports/generate`
Gera um novo relatório.

**Request Body:**
```json
{
  "type": "analysis",
  "title": "Relatório Customizado",
  "parameters": {
    "period": "30d",
    "includeGraphs": true,
    "includeMetrics": true,
    "includeAlerts": true
  },
  "format": "pdf"
}
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "reportId": "report_new_123",
    "status": "generating",
    "estimatedTime": "2-3 minutes",
    "webhookUrl": "/reports/status/report_new_123"
  }
}
```

### **GET** `/reports/download/:id`
Faz download de um relatório.

**Response (200):**
- Content-Type: `application/pdf` ou `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`
- Arquivo binário do relatório

---

## 📁 Upload de Arquivos

### **POST** `/upload/file`
Faz upload de arquivo para análise.

**Content-Type:** `multipart/form-data`

**Form Fields:**
- `file`: arquivo (required)
- `type`: tipo do arquivo - `network`, `nodes`, `edges` (optional)
- `description`: descrição (optional)

**Response (200):**
```json
{
  "success": true,
  "data": {
    "fileId": "file_123",
    "filename": "network_data.csv",
    "size": 2048576,
    "type": "network",
    "uploadedAt": "2025-01-15T17:30:00Z",
    "status": "uploaded",
    "metadata": {
      "rows": 1247,
      "columns": 8,
      "encoding": "utf-8"
    }
  }
}
```

### **GET** `/upload/files`
Lista arquivos enviados.

**Response (200):**
```json
{
  "success": true,
  "data": {
    "files": [
      {
        "id": "file_123",
        "filename": "network_data.csv",
        "size": 2048576,
        "type": "network",
        "uploadedAt": "2025-01-15T17:30:00Z",
        "status": "processed"
      }
    ]
  }
}
```

### **DELETE** `/upload/files/:id`
Remove um arquivo enviado.

**Response (200):**
```json
{
  "success": true,
  "message": "Arquivo removido com sucesso"
}
```

---

## 🔧 Configurações

### **GET** `/config/system`
Retorna configurações do sistema.

**Response (200):**
```json
{
  "success": true,
  "data": {
    "version": "1.0.0",
    "environment": "development",
    "features": {
      "fileUpload": true,
      "reportGeneration": true,
      "realTimeAnalysis": false
    },
    "limits": {
      "maxFileSize": "10MB",
      "maxNodes": 10000,
      "maxSimulations": 100
    }
  }
}
```

---

## 📊 Status e Health Check

### **GET** `/health`
Verifica status da API.

**Response (200):**
```json
{
  "status": "ok",
  "timestamp": "2025-01-15T18:00:00Z",
  "uptime": 3600,
  "version": "1.0.0",
  "services": {
    "database": "ok",
    "fileSystem": "ok",
    "cache": "ok"
  }
}
```

---

## 🚨 Códigos de Erro

| Código | Descrição | Exemplo |
|--------|-----------|---------|
| **200** | Sucesso | Operação realizada com sucesso |
| **400** | Bad Request | Parâmetros inválidos ou ausentes |
| **401** | Unauthorized | Token inválido ou ausente |
| **403** | Forbidden | Sem permissão para acessar recurso |
| **404** | Not Found | Recurso não encontrado |
| **422** | Validation Error | Dados não passaram na validação |
| **500** | Internal Error | Erro interno do servidor |

**Formato de Erro Padrão:**
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Dados inválidos",
    "details": [
      {
        "field": "email",
        "message": "Email é obrigatório"
      }
    ]
  }
}
```

---

**Próximo:** [Schemas de Dados →](./schemas.md)

