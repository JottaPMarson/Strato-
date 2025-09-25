# 💻 Guia do Desenvolvedor

## 🚀 Setup Inicial

### **Pré-requisitos**
- **Node.js** 22.x LTS
- **npm** ou **pnpm** (recomendado)
- **Git**
- **VSCode** (recomendado)

### **Clonando o Repositório**
```bash
git clone https://github.com/JottaPMarson/strato.git
cd strato
```

### **Instalação de Dependências**
```bash
# Frontend
npm install --legacy-peer-deps

# Backend
cd backend
npm install
cd ..
```

### **Configuração do Ambiente**
```bash
# Copie o arquivo de exemplo
cp .env.example .env.local

# Configure as variáveis necessárias
NEXT_PUBLIC_API_URL=http://localhost:4000
```

---

## 🏃‍♂️ Executando o Projeto

### **Desenvolvimento Local**

**Terminal 1 - Frontend:**
```bash
npm run dev
# Acesse: http://localhost:3000
```

**Terminal 2 - Backend:**
```bash
npm run dev:backend
# API disponível em: http://localhost:4000
```

### **Scripts Disponíveis**

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia frontend em modo desenvolvimento |
| `npm run dev:backend` | Inicia backend em modo desenvolvimento |
| `npm run build` | Build de produção do frontend |
| `npm run start` | Inicia frontend em modo produção |
| `npm run lint` | Executa linting |
| `npm run type-check` | Verifica tipos TypeScript |

---

## 🏗️ Estrutura do Projeto

```
strato/
├── 📁 app/                    # Next.js App Router
│   ├── (auth)/               # Grupo de rotas de autenticação
│   │   ├── login/
│   │   └── layout.tsx
│   ├── (dashboard)/          # Grupo de rotas do dashboard
│   │   ├── dashboard/
│   │   ├── analises/
│   │   ├── simulador/
│   │   ├── relatorios/
│   │   ├── classificacao/
│   │   ├── configuracoes/
│   │   └── layout.tsx
│   ├── layout.tsx            # Layout raiz
│   └── globals.css           # Estilos globais
├── 📁 components/            # Componentes React
│   ├── ui/                   # shadcn/ui components
│   ├── charts/               # Componentes de gráficos
│   └── layout/               # Componentes de layout
├── 📁 lib/                   # Utilitários e configurações
├── 📁 types/                 # Definições TypeScript
├── 📁 backend/               # API NestJS
│   ├── src/
│   │   ├── auth/
│   │   ├── analysis/
│   │   ├── simulator/
│   │   ├── reports/
│   │   └── upload/
│   └── uploads/              # Arquivos enviados
├── 📁 docs/                  # Documentação técnica
└── 📁 public/                # Assets estáticos
```

---

## 🎯 Fluxo de Desenvolvimento

### **1. Criando uma Nova Feature**

```bash
# Crie uma nova branch
git checkout -b feature/nova-funcionalidade

# Faça suas alterações
# ...

# Commit seguindo convenções
git commit -m "feat: adiciona nova funcionalidade"

# Push da branch
git push origin feature/nova-funcionalidade
```

### **2. Padrões de Commit**
Seguimos [Conventional Commits](https://conventionalcommits.org/):

- `feat:` nova funcionalidade
- `fix:` correção de bug
- `docs:` alterações na documentação
- `style:` formatação, espaços em branco
- `refactor:` refatoração de código
- `test:` adição ou correção de testes
- `chore:` tarefas de manutenção

### **3. Criando Componentes**

**Frontend (React):**
```typescript
// components/ui/example-component.tsx
import { cn } from "@/lib/utils"

interface ExampleComponentProps {
  title: string
  className?: string
  children?: React.ReactNode
}

export function ExampleComponent({ 
  title, 
  className, 
  children 
}: ExampleComponentProps) {
  return (
    <div className={cn("p-4 border rounded-lg", className)}>
      <h3 className="text-lg font-semibold">{title}</h3>
      {children}
    </div>
  )
}
```

**Backend (NestJS):**
```typescript
// backend/src/example/example.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common'
import { ExampleService } from './example.service'

@Controller('example')
export class ExampleController {
  constructor(private readonly exampleService: ExampleService) {}

  @Get()
  findAll() {
    return this.exampleService.findAll()
  }

  @Post()
  create(@Body() createDto: CreateExampleDto) {
    return this.exampleService.create(createDto)
  }
}
```

---

## 🧪 Testes

### **Frontend (Jest + Testing Library)**
```typescript
// __tests__/components/example-component.test.tsx
import { render, screen } from '@testing-library/react'
import { ExampleComponent } from '@/components/ui/example-component'

describe('ExampleComponent', () => {
  it('renders title correctly', () => {
    render(<ExampleComponent title="Test Title" />)
    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })
})
```

### **Backend (Jest)**
```typescript
// backend/src/example/example.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing'
import { ExampleService } from './example.service'

describe('ExampleService', () => {
  let service: ExampleService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExampleService],
    }).compile()

    service = module.get<ExampleService>(ExampleService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
```

---

## 🔧 Ferramentas de Desenvolvimento

### **VSCode Extensions Recomendadas**
```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-typescript-next",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-eslint",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense"
  ]
}
```

### **Configuração do VSCode**
```json
// .vscode/settings.json
{
  "typescript.preferences.importModuleSpecifier": "relative",
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "tailwindCSS.experimental.classRegex": [
    ["cn\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ]
}
```

---

## 🐛 Debug

### **Frontend Debug**
```typescript
// Usando React DevTools
const MyComponent = () => {
  const [state, setState] = useState(initialState)
  
  // Debug no console
  console.log('Component state:', state)
  
  // Debug com breakpoint
  debugger
  
  return <div>...</div>
}
```

### **Backend Debug**
```typescript
// backend/src/main.ts
import { Logger } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  
  // Logger personalizado
  const logger = new Logger('Bootstrap')
  logger.log('Application starting...')
  
  await app.listen(4000)
  logger.log('Application listening on port 4000')
}
```

---

## 📊 Performance

### **Frontend Optimization**
- Use `React.memo()` para componentes que não mudam frequentemente
- Implemente `useMemo()` e `useCallback()` para cálculos pesados
- Lazy load de rotas e componentes grandes
- Otimize imagens com Next.js Image

### **Backend Optimization**
- Use cache em memória para dados frequentes
- Implemente paginação em endpoints que retornam listas
- Use interceptors para logging e transformação de dados
- Configure CORS adequadamente

---

## 🔒 Segurança

### **Frontend Security**
- Nunca exponha secrets no código frontend
- Valide todos os inputs do usuário
- Use HTTPS em produção
- Implemente CSP (Content Security Policy)

### **Backend Security**
- Use Helmet para headers de segurança
- Valide todos os inputs com pipes do NestJS
- Implemente rate limiting
- Use JWT com expiração adequada

---

## 📚 Recursos Úteis

### **Documentação Oficial**
- [Next.js 15 Docs](https://nextjs.org/docs)
- [NestJS Docs](https://docs.nestjs.com/)
- [React 19 Docs](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/docs)

### **Ferramentas**
- [shadcn/ui](https://ui.shadcn.com/) - Componentes UI
- [Recharts](https://recharts.org/) - Gráficos React
- [Lucide React](https://lucide.dev/) - Ícones

---

**Próximo:** [Padrões de Código →](./coding-standards.md)

