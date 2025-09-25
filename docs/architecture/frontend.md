# 🎨 Arquitetura Frontend

## 🏗️ Estrutura Next.js 15

O frontend utiliza **Next.js 15** com **App Router** para uma arquitetura moderna e performática.

```mermaid
graph TB
    subgraph "📁 app/"
        subgraph "🔐 (auth)"
            Login[login/page.tsx]
            AuthLayout[layout.tsx]
        end
        
        subgraph "📊 (dashboard)"
            DashPage[dashboard/page.tsx]
            AnalysisPage[analises/page.tsx]
            NetworkPage[analises/rede/page.tsx]
            SimulatorPage[simulador/page.tsx]
            ReportsPage[relatorios/page.tsx]
            ClassPage[classificacao/page.tsx]
            ConfigPage[configuracoes/page.tsx]
            DashLayout[layout.tsx]
        end
        
        RootLayout[layout.tsx]
        GlobalsCSS[globals.css]
    end
    
    subgraph "🎨 components/"
        UI[ui/ - shadcn components]
        Charts[charts/ - Recharts wrappers]
        Forms[forms/ - Form components]
        Layout[layout/ - Layout components]
    end
    
    subgraph "🔧 lib/"
        Utils[utils.ts - Utilities]
        Validations[validations.ts - Zod schemas]
    end
    
    subgraph "📝 types/"
        Interfaces[index.ts - TypeScript interfaces]
    end
    
    RootLayout --> AuthLayout
    RootLayout --> DashLayout
    
    Login --> UI
    DashPage --> Charts
    AnalysisPage --> Charts
    SimulatorPage --> Forms
    
    Charts --> Utils
    Forms --> Validations
    
    classDef route fill:#e8f5e8,stroke:#2e7d32,color:#000
    classDef component fill:#e3f2fd,stroke:#1976d2,color:#000
    classDef utility fill:#fff3e0,stroke:#f57c00,color:#000
    
    class Login,DashPage,AnalysisPage,NetworkPage,SimulatorPage,ReportsPage,ClassPage,ConfigPage route
    class UI,Charts,Forms,Layout component
    class Utils,Validations,Interfaces utility
```

## 🎯 Padrões de Componentes

### **Component Hierarchy**
```mermaid
graph TB
    subgraph "📄 Page Level"
        Page[Page Component]
        Loading[Loading Component]
        Error[Error Boundary]
    end
    
    subgraph "🧩 Feature Level"
        Dashboard[Dashboard Container]
        Analysis[Analysis Container]
        Simulator[Simulator Container]
    end
    
    subgraph "🎨 UI Level"
        Charts[Chart Components]
        Forms[Form Components]
        Tables[Table Components]
        Modals[Modal Components]
    end
    
    subgraph "🔧 Primitive Level"
        Button[Button]
        Input[Input]
        Card[Card]
        Badge[Badge]
    end
    
    Page --> Dashboard
    Page --> Analysis
    Page --> Simulator
    
    Dashboard --> Charts
    Analysis --> Charts
    Analysis --> Tables
    Simulator --> Forms
    
    Charts --> Card
    Forms --> Input
    Forms --> Button
    Tables --> Badge
    Modals --> Button
    
    Loading -.-> Page
    Error -.-> Page
    
    classDef page fill:#ffebee,stroke:#c62828,color:#000
    classDef feature fill:#e8f5e8,stroke:#2e7d32,color:#000
    classDef ui fill:#e3f2fd,stroke:#1976d2,color:#000
    classDef primitive fill:#f3e5f5,stroke:#7b1fa2,color:#000
    
    class Page,Loading,Error page
    class Dashboard,Analysis,Simulator feature
    class Charts,Forms,Tables,Modals ui
    class Button,Input,Card,Badge primitive
```

## 🔄 Fluxo de Estados

### **State Management Pattern**
```mermaid
stateDiagram-v2
    [*] --> Loading
    
    Loading --> Success : Data fetched
    Loading --> Error : Fetch failed
    
    Success --> Updating : User action
    Success --> Refreshing : Auto refresh
    
    Updating --> Success : Update success
    Updating --> Error : Update failed
    
    Refreshing --> Success : Refresh success
    Refreshing --> Error : Refresh failed
    
    Error --> Loading : Retry
    Error --> [*] : Reset
    
    Success --> [*] : Unmount
```

### **Component State Flow**
```mermaid
graph LR
    subgraph "🎯 User Actions"
        Click[Click Event]
        Form[Form Submit]
        Search[Search Input]
    end
    
    subgraph "⚡ State Updates"
        useState[useState Hook]
        useEffect[useEffect Hook]
        Custom[Custom Hooks]
    end
    
    subgraph "🔌 API Layer"
        Fetch[Fetch API]
        Cache[Response Cache]
    end
    
    subgraph "🎨 UI Updates"
        Render[Re-render]
        Animation[Animations]
        Feedback[User Feedback]
    end
    
    Click --> useState
    Form --> Custom
    Search --> useEffect
    
    useState --> Fetch
    Custom --> Fetch
    useEffect --> Fetch
    
    Fetch --> Cache
    Cache --> Render
    
    Render --> Animation
    Render --> Feedback
    
    classDef action fill:#ffebee,stroke:#c62828,color:#000
    classDef state fill:#e8f5e8,stroke:#2e7d32,color:#000
    classDef api fill:#e3f2fd,stroke:#1976d2,color:#000
    classDef ui fill:#f3e5f5,stroke:#7b1fa2,color:#000
    
    class Click,Form,Search action
    class useState,useEffect,Custom state
    class Fetch,Cache api
    class Render,Animation,Feedback ui
```

## 📊 Componentes de Visualização

### **Chart Components Architecture**
```mermaid
graph TB
    subgraph "📈 Recharts Integration"
        LineChart[LineChart Wrapper]
        BarChart[BarChart Wrapper]
        PieChart[PieChart Wrapper]
        AreaChart[AreaChart Wrapper]
    end
    
    subgraph "🎨 Custom Charts"
        NetworkGraph[Network Graph]
        HeatMap[Heat Map]
        Timeline[Timeline Chart]
        Metrics[Metrics Dashboard]
    end
    
    subgraph "🔧 Chart Utils"
        DataFormatter[Data Formatter]
        ColorScheme[Color Schemes]
        Animations[Chart Animations]
        Tooltips[Custom Tooltips]
    end
    
    subgraph "📊 Data Sources"
        API[API Data]
        Mock[Mock Data]
        Cache[Cached Data]
    end
    
    LineChart --> DataFormatter
    BarChart --> ColorScheme
    PieChart --> Animations
    AreaChart --> Tooltips
    
    NetworkGraph --> API
    HeatMap --> Mock
    Timeline --> Cache
    Metrics --> API
    
    DataFormatter --> Mock
    ColorScheme --> Cache
    
    classDef chart fill:#e8f5e8,stroke:#2e7d32,color:#000
    classDef custom fill:#e3f2fd,stroke:#1976d2,color:#000
    classDef util fill:#fff3e0,stroke:#f57c00,color:#000
    classDef data fill:#f3e5f5,stroke:#7b1fa2,color:#000
    
    class LineChart,BarChart,PieChart,AreaChart chart
    class NetworkGraph,HeatMap,Timeline,Metrics custom
    class DataFormatter,ColorScheme,Animations,Tooltips util
    class API,Mock,Cache data
```

## 🎨 Design System

### **Component Library Structure**
```mermaid
graph TB
    subgraph "🎨 Design Tokens"
        Colors[Color Palette]
        Typography[Typography Scale]
        Spacing[Spacing System]
        Shadows[Shadow Levels]
    end
    
    subgraph "🧩 Primitive Components"
        Button[Button Variants]
        Input[Input Types]
        Card[Card Layouts]
        Badge[Badge States]
    end
    
    subgraph "🔧 Composite Components"
        DataTable[Data Table]
        SearchBar[Search Bar]
        Navigation[Navigation]
        Sidebar[Sidebar]
    end
    
    subgraph "📱 Layout Components"
        Container[Container]
        Grid[Grid System]
        Stack[Stack Layout]
        Flex[Flex Layout]
    end
    
    Colors --> Button
    Typography --> Input
    Spacing --> Card
    Shadows --> Badge
    
    Button --> DataTable
    Input --> SearchBar
    Card --> Navigation
    Badge --> Sidebar
    
    Container --> Grid
    Grid --> Stack
    Stack --> Flex
    
    DataTable --> Container
    SearchBar --> Flex
    Navigation --> Container
    Sidebar --> Stack
    
    classDef token fill:#ffebee,stroke:#c62828,color:#000
    classDef primitive fill:#e8f5e8,stroke:#2e7d32,color:#000
    classDef composite fill:#e3f2fd,stroke:#1976d2,color:#000
    classDef layout fill:#f3e5f5,stroke:#7b1fa2,color:#000
    
    class Colors,Typography,Spacing,Shadows token
    class Button,Input,Card,Badge primitive
    class DataTable,SearchBar,Navigation,Sidebar composite
    class Container,Grid,Stack,Flex layout
```

## 🔧 Hooks Customizados

### **Custom Hooks Pattern**
```mermaid
graph LR
    subgraph "🎯 Business Logic Hooks"
        useAuth[useAuth]
        useAnalysis[useAnalysis]
        useSimulation[useSimulation]
        useReports[useReports]
    end
    
    subgraph "🔧 Utility Hooks"
        useLocalStorage[useLocalStorage]
        useDebounce[useDebounce]
        useFetch[useFetch]
        useToggle[useToggle]
    end
    
    subgraph "🎨 UI Hooks"
        useModal[useModal]
        useToast[useToast]
        useTheme[useTheme]
        useBreakpoint[useBreakpoint]
    end
    
    subgraph "⚡ React Hooks"
        useState[useState]
        useEffect[useEffect]
        useCallback[useCallback]
        useMemo[useMemo]
    end
    
    useAuth --> useState
    useAuth --> useLocalStorage
    
    useAnalysis --> useEffect
    useAnalysis --> useFetch
    
    useSimulation --> useCallback
    useSimulation --> useDebounce
    
    useReports --> useMemo
    useReports --> useFetch
    
    useModal --> useState
    useToast --> useEffect
    useTheme --> useLocalStorage
    useBreakpoint --> useEffect
    
    classDef business fill:#e8f5e8,stroke:#2e7d32,color:#000
    classDef utility fill:#fff3e0,stroke:#f57c00,color:#000
    classDef ui fill:#e3f2fd,stroke:#1976d2,color:#000
    classDef react fill:#f3e5f5,stroke:#7b1fa2,color:#000
    
    class useAuth,useAnalysis,useSimulation,useReports business
    class useLocalStorage,useDebounce,useFetch,useToggle utility
    class useModal,useToast,useTheme,useBreakpoint ui
    class useState,useEffect,useCallback,useMemo react
```

## 📱 Responsividade

### **Breakpoint Strategy**
```mermaid
graph TB
    subgraph "📱 Mobile First"
        Mobile[Mobile: 0-640px]
        Tablet[Tablet: 641-1024px]
        Desktop[Desktop: 1025px+]
    end
    
    subgraph "🎨 Layout Adaptations"
        MobileNav[Hamburger Menu]
        TabletGrid[2-Column Grid]
        DesktopSidebar[Fixed Sidebar]
    end
    
    subgraph "📊 Chart Adaptations"
        MobileCharts[Stacked Charts]
        TabletCharts[Side-by-side]
        DesktopCharts[Dashboard Grid]
    end
    
    Mobile --> MobileNav
    Mobile --> MobileCharts
    
    Tablet --> TabletGrid
    Tablet --> TabletCharts
    
    Desktop --> DesktopSidebar
    Desktop --> DesktopCharts
    
    classDef device fill:#e8f5e8,stroke:#2e7d32,color:#000
    classDef layout fill:#e3f2fd,stroke:#1976d2,color:#000
    classDef chart fill:#fff3e0,stroke:#f57c00,color:#000
    
    class Mobile,Tablet,Desktop device
    class MobileNav,TabletGrid,DesktopSidebar layout
    class MobileCharts,TabletCharts,DesktopCharts chart
```

---

**Próximo:** [Arquitetura Backend →](./backend.md)

