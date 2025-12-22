# Diseño de Componentes Card Reutilizables
## Rachetti & Asociados - Propuesta de Arquitectura

**Fecha**: Diciembre 2024  
**Estado**: Propuesta de diseño (sin implementación)

---

## 1. Análisis de Patrones Repetidos

### 1.1 ServiceCard
**Ubicaciones actuales:**
- `components/services.tsx` (líneas 48-65)
- `app/servicios/page.tsx` (líneas 32-44)

**Patrón identificado:**
- Icono (Lucide React)
- Título del servicio
- Descripción
- Estilos: fondo oscuro, borde, efectos hover
- Animaciones opcionales de entrada

### 1.2 TeamMemberCard
**Ubicaciones actuales:**
- `components/team.tsx` (líneas 31-53)
- `app/equipo/page.tsx` (líneas 32-54)

**Patrón identificado:**
- Imagen del miembro (con efectos grayscale)
- Nombre completo
- Rol/Posición
- Especialidad
- Iconos sociales (LinkedIn, Mail) - no funcionales actualmente
- Wrapper Link para navegación
- Efectos hover complejos

### 1.3 NewsCard
**Ubicaciones actuales:**
- `components/news.tsx` (líneas 31-58)
- `app/novedades/page.tsx` (líneas 32-60)

**Patrón identificado:**
- Imagen de la noticia
- Fecha con icono Calendar
- Título
- Excerpt/Resumen
- Botón "Leer más" con Link
- Estilos: fondo blanco, sombra, efectos hover

---

## 2. Propuesta de Componentes

### 2.1 ServiceCard

#### Propósito
Componente reutilizable para mostrar información de un servicio legal. Presenta icono, título y descripción con estilos consistentes y efectos hover.

#### Props Interface
```typescript
import { LucideIcon } from "lucide-react"
import { Service } from "@/lib/types"

interface ServiceCardProps {
  // Datos del servicio
  service: Service
  
  // Icono a mostrar (componente de Lucide)
  icon: LucideIcon
  
  // Variantes de estilo
  variant?: "default" | "dark" | "light"
  
  // Animación de entrada
  animationDelay?: number
  
  // Clases CSS adicionales
  className?: string
  
  // Callback opcional para clicks (si se necesita en el futuro)
  onClick?: () => void
}
```

#### Ejemplo de Uso
```tsx
import { ServiceCard } from "@/components/features/service-card"
import { Building2 } from "lucide-react"
import { allServices } from "@/lib/data"

// Uso básico
<ServiceCard 
  service={allServices[0]} 
  icon={Building2}
/>

// Con variante y animación
<ServiceCard 
  service={allServices[0]} 
  icon={Building2}
  variant="dark"
  animationDelay={100}
/>
```

#### Responsabilidades
✅ **DEBE hacer:**
- Renderizar icono, título y descripción
- Aplicar estilos consistentes según variant
- Manejar animaciones de entrada si se proporciona delay
- Aplicar efectos hover estándar

❌ **NO DEBE hacer:**
- Mapear iconos a servicios (responsabilidad del componente padre)
- Decidir qué servicios mostrar (lógica de negocio)
- Manejar navegación o routing
- Gestionar estado de animación (debe ser controlado externamente)
- Contener lógica de filtrado o ordenamiento

#### Notas Arquitectónicas
- **Separación de concerns**: El componente padre es responsable de mapear iconos a servicios
- **Flexibilidad**: Variantes permiten usar en diferentes contextos (dark/light backgrounds)
- **Performance**: Componente puro, sin estado interno innecesario
- **Accesibilidad**: Debe incluir aria-labels apropiados para el icono

---

### 2.2 TeamMemberCard

#### Propósito
Componente reutilizable para mostrar información de un miembro del equipo. Incluye imagen, datos personales y opciones de contacto social.

#### Props Interface
```typescript
import { TeamMember } from "@/lib/types"

interface TeamMemberCardProps {
  // Datos del miembro
  member: TeamMember
  
  // URL de navegación (para el Link wrapper)
  href: string
  
  // Variantes de estilo
  variant?: "default" | "compact" | "detailed"
  
  // Mostrar iconos sociales
  showSocialIcons?: boolean
  
  // Callbacks para acciones sociales (opcionales)
  onLinkedInClick?: (member: TeamMember) => void
  onEmailClick?: (member: TeamMember) => void
  
  // Clases CSS adicionales
  className?: string
  
  // Tamaño de imagen
  imageSize?: "default" | "small" | "large"
}
```

#### Ejemplo de Uso
```tsx
import { TeamMemberCard } from "@/components/features/team-member-card"
import { teamMembers } from "@/lib/data"

// Uso básico
<TeamMemberCard 
  member={teamMembers[0]} 
  href={`/empleado/${teamMembers[0].id}`}
/>

// Con variante compacta y sin iconos sociales
<TeamMemberCard 
  member={teamMembers[0]} 
  href={`/empleado/${teamMembers[0].id}`}
  variant="compact"
  showSocialIcons={false}
/>

// Con callbacks para acciones sociales
<TeamMemberCard 
  member={teamMembers[0]} 
  href={`/empleado/${teamMembers[0].id}`}
  showSocialIcons={true}
  onEmailClick={(member) => window.location.href = `mailto:${member.email}`}
/>
```

#### Responsabilidades
✅ **DEBE hacer:**
- Renderizar imagen con efectos grayscale/hover
- Mostrar nombre, rol y especialidad
- Renderizar iconos sociales si se solicitan
- Manejar navegación mediante Link wrapper
- Aplicar estilos y efectos hover consistentes

❌ **NO DEBE hacer:**
- Decidir qué miembros mostrar (lógica de negocio del padre)
- Gestionar estado de hover complejo (usar CSS)
- Implementar lógica de envío de emails (debe ser callback)
- Contener lógica de filtrado o búsqueda
- Manejar autenticación o permisos

#### Notas Arquitectónicas
- **Navegación**: El componente usa Next.js Link, pero la URL viene como prop
- **Accesibilidad**: Imágenes deben tener alt text apropiado (desde member.name)
- **Performance**: Imágenes deben usar next/image en futuras optimizaciones
- **Flexibilidad**: Variantes permiten diferentes contextos de uso
- **Callbacks**: Permiten personalizar acciones sin acoplar el componente

---

### 2.3 NewsCard

#### Propósito
Componente reutilizable para mostrar una noticia o artículo. Incluye imagen, fecha, título, resumen y enlace para leer más.

#### Props Interface
```typescript
import { NewsItem } from "@/lib/types"

interface NewsCardProps {
  // Datos de la noticia
  news: NewsItem
  
  // URL de navegación al detalle
  href: string
  
  // Texto del botón de acción
  actionLabel?: string
  
  // Variantes de estilo
  variant?: "default" | "featured" | "compact"
  
  // Mostrar fecha
  showDate?: boolean
  
  // Mostrar botón de acción
  showAction?: boolean
  
  // Clases CSS adicionales
  className?: string
  
  // Tamaño de imagen
  imageHeight?: "small" | "medium" | "large"
}
```

#### Ejemplo de Uso
```tsx
import { NewsCard } from "@/components/features/news-card"
import { newsItems } from "@/lib/data"
import { commonTexts } from "@/lib/content"

// Uso básico
<NewsCard 
  news={newsItems[0]} 
  href={`/noticia/${newsItems[0].id}`}
/>

// Con texto personalizado y variante destacada
<NewsCard 
  news={newsItems[0]} 
  href={`/noticia/${newsItems[0].id}`}
  variant="featured"
  actionLabel={commonTexts.buttons.readMore}
  imageHeight="large"
/>

// Compacta sin fecha
<NewsCard 
  news={newsItems[0]} 
  href={`/noticia/${newsItems[0].id}`}
  variant="compact"
  showDate={false}
/>
```

#### Responsabilidades
✅ **DEBE hacer:**
- Renderizar imagen con efectos hover
- Mostrar fecha con icono Calendar
- Renderizar título y excerpt
- Mostrar botón de acción con Link
- Aplicar estilos consistentes según variant

❌ **NO DEBE hacer:**
- Decidir qué noticias mostrar (lógica del padre)
- Formatear fechas (debe venir formateada desde datos)
- Gestionar estado de loading o errores
- Contener lógica de filtrado o categorización
- Manejar analytics o tracking (debe ser externo)

#### Notas Arquitectónicas
- **Formato de fecha**: La fecha debe venir pre-formateada desde los datos
- **Imágenes**: Debe usar next/image en futuras optimizaciones
- **SEO**: Debe usar elementos semánticos (article, time)
- **Accesibilidad**: Títulos deben ser accesibles, imágenes con alt text
- **Flexibilidad**: Variantes permiten diferentes contextos (lista, destacado, etc.)

---

## 3. Estructura de Carpetas Propuesta

```
components/
├── features/                    # ✅ Ya existe
│   ├── section-header.tsx      # ✅ Ya implementado
│   ├── service-card.tsx         # 🆕 Propuesto
│   ├── team-member-card.tsx    # 🆕 Propuesto
│   └── news-card.tsx            # 🆕 Propuesto
```

**Justificación:**
- Mantiene consistencia con `SectionHeader` existente
- Agrupa componentes de características/features reutilizables
- Separado de componentes de layout o secciones completas
- Fácil de encontrar y mantener

---

## 4. Consideraciones de Diseño

### 4.1 Consistencia Visual
- Todos los cards deben seguir el sistema de diseño existente
- Colores: navy-dark, burgundy, white según contexto
- Tipografía: font-serif para títulos, Inter para cuerpo
- Espaciado: Usar sistema de spacing de Tailwind consistente

### 4.2 Responsive Design
- Todos los cards deben ser responsive
- Grid layouts manejados por componentes padre
- Breakpoints consistentes: sm, md, lg

### 4.3 Accesibilidad
- Uso correcto de elementos semánticos (article, time, etc.)
- Alt text en todas las imágenes
- Navegación por teclado funcional
- Contraste de colores adecuado
- ARIA labels donde sea necesario

### 4.4 Performance
- Componentes deben ser ligeros (sin lógica pesada)
- Considerar lazy loading de imágenes en el futuro
- Evitar re-renders innecesarios (usar React.memo si es necesario)

---

## 5. Migración Propuesta

### Fase 1: ServiceCard
**Archivos a refactorizar:**
- `components/services.tsx` (líneas 48-65)
- `app/servicios/page.tsx` (líneas 32-44)

**Cambios:**
- Extraer lógica de renderizado a `ServiceCard`
- Mantener mapeo de iconos en componentes padre
- Pasar datos como props

### Fase 2: TeamMemberCard
**Archivos a refactorizar:**
- `components/team.tsx` (líneas 31-53)
- `app/equipo/page.tsx` (líneas 32-54)

**Cambios:**
- Extraer estructura de card a componente
- Mantener lógica de navegación (href como prop)
- Opcional: Implementar callbacks para acciones sociales

### Fase 3: NewsCard
**Archivos a refactorizar:**
- `components/news.tsx` (líneas 31-58)
- `app/novedades/page.tsx` (líneas 32-60)

**Cambios:**
- Extraer estructura de card a componente
- Mantener lógica de navegación (href como prop)
- Usar textos de `commonTexts` para botones

---

## 6. Beneficios Esperados

### 6.1 Mantenibilidad
- ✅ Código DRY (Don't Repeat Yourself)
- ✅ Cambios de diseño centralizados
- ✅ Fácil de testear componentes aislados

### 6.2 Consistencia
- ✅ Mismo look & feel en todas las instancias
- ✅ Comportamiento uniforme de hover/animaciones
- ✅ Accesibilidad consistente

### 6.3 Escalabilidad
- ✅ Fácil agregar nuevas variantes
- ✅ Reutilizable en diferentes contextos
- ✅ Base sólida para futuras mejoras

### 6.4 Developer Experience
- ✅ APIs claras y bien documentadas
- ✅ TypeScript para type safety
- ✅ Fácil de usar y entender

---

## 7. Ejemplo de Refactorización (Conceptual)

### Antes (Código Duplicado)
```tsx
// components/services.tsx
{displayedServices.map((service, index) => {
  const IconComponent = service.icon
  return (
    <div key={index} className="bg-navy-darker p-8...">
      <IconComponent className="w-12 h-12..." />
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </div>
  )
})}
```

### Después (Con ServiceCard)
```tsx
// components/services.tsx
import { ServiceCard } from "@/components/features/service-card"

{displayedServices.map((service, index) => (
  <ServiceCard
    key={service.title}
    service={service}
    icon={service.icon}
    animationDelay={index * 100}
    variant="dark"
  />
))}
```

**Beneficios:**
- Código más limpio y legible
- Lógica de presentación encapsulada
- Fácil de mantener y modificar
- Reutilizable en otros contextos

---

## 8. Notas Finales

### 8.1 Principios de Diseño
- **Single Responsibility**: Cada card tiene una responsabilidad clara
- **Composition over Configuration**: Props permiten flexibilidad sin complejidad
- **Separation of Concerns**: Lógica de negocio fuera de los cards
- **Progressive Enhancement**: Funcionalidad base, mejoras opcionales

### 8.2 Próximos Pasos (Post-Implementación)
1. Agregar tests unitarios para cada card
2. Documentar con Storybook (opcional)
3. Optimizar imágenes con next/image
4. Considerar variantes adicionales según necesidades
5. Implementar loading states si es necesario

### 8.3 Decisiones Pendientes
- ¿Implementar skeleton loaders?
- ¿Agregar animaciones más complejas?
- ¿Soporte para modo oscuro/claro?
- ¿Integración con analytics?

---

**Fin del Documento de Diseño**

