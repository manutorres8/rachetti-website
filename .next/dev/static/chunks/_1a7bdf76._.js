(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/content/common.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Textos comunes reutilizables en toda la aplicación
 */ __turbopack_context__.s([
    "commonTexts",
    ()=>commonTexts
]);
const commonTexts = {
    buttons: {
        readMore: "Leer más",
        viewAll: "Ver todos",
        viewAllServices: "Ver todos los servicios",
        viewAllTeam: "Ver todo el equipo",
        viewAllNews: "Ver todas las novedades",
        submit: "Enviar Consulta",
        contact: "Contactar",
        back: "Volver al inicio",
        backToNews: "Volver a Novedades",
        downloadCV: "Descargar CV",
        linkedin: "LinkedIn"
    },
    labels: {
        name: "Nombre completo",
        email: "Email",
        phone: "Teléfono",
        subject: "Asunto",
        message: "Mensaje",
        required: "*"
    },
    placeholders: {
        name: "Juan Pérez",
        email: "juan@email.com",
        phone: "+54 11 1234-5678",
        subject: "Consulta legal",
        message: "Cuéntenos cómo podemos ayudarle..."
    },
    messages: {
        contactSuccess: "Gracias por contactarnos. Le responderemos a la brevedad.",
        notFound: "No encontrado",
        employeeNotFound: "Empleado no encontrado"
    },
    aria: {
        whatsappButton: "Contactar por WhatsApp",
        logo: "Rachetti & Asociados Logo"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/content/navigation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Contenido de navegación
 */ __turbopack_context__.s([
    "navigationContent",
    ()=>navigationContent
]);
const navigationContent = {
    brand: {
        name: "RACHETTI & ASOCIADOS",
        logoAlt: "Rachetti & Asociados Logo"
    },
    menu: {
        inicio: "Inicio",
        nosotros: "Nosotros",
        servicios: "Servicios",
        empleados: "Empleados",
        novedades: "Novedades",
        ubicacion: "Ubicación",
        contacto: "Contacto"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/content/sections.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Contenido de las secciones principales de la página
 */ __turbopack_context__.s([
    "sectionContent",
    ()=>sectionContent
]);
const sectionContent = {
    hero: {
        title: "Ricardo Rachetti & Asociados",
        subtitle: "Excelencia jurídica al servicio de sus intereses",
        imageAlt: "Ricardo Rachetti & Asociados"
    },
    about: {
        title: "Acerca de Nosotros",
        description: {
            paragraph1: " es un estudio jurídico de reconocida trayectoria, fundado en 2015 con el compromiso de brindar servicios legales de la más alta calidad.",
            paragraph2: "Nuestro equipo multidisciplinario está compuesto por profesionales altamente calificados, especializados en diversas áreas del derecho, lo que nos permite ofrecer soluciones integrales y personalizadas a cada uno de nuestros clientes.",
            paragraph3: "Nos caracterizamos por nuestra ética profesional, compromiso con la excelencia y una atención cercana y personalizada que construye relaciones duraderas basadas en la confianza."
        },
        imageAlt: "Nuestro estudio",
        features: [
            {
                title: "Tradición Legal",
                description: "Más de 10 años de experiencia en el ejercicio del derecho"
            },
            {
                title: "Excelencia",
                description: "Reconocidos por nuestra rigurosidad y profesionalismo"
            },
            {
                title: "Compromiso",
                description: "Dedicación total a los intereses de nuestros clientes"
            }
        ]
    },
    services: {
        title: "Nuestros Servicios",
        subtitle: "Ofrecemos soluciones jurídicas especializadas en diversas áreas del derecho"
    },
    team: {
        title: "Nuestro Equipo",
        subtitle: "Profesionales comprometidos con la excelencia legal",
        fullTeamTitle: "Nuestro Equipo Completo",
        fullTeamSubtitle: "Profesionales altamente capacitados y comprometidos con la excelencia"
    },
    news: {
        title: "Novedades",
        subtitle: "Mantente informado sobre las últimas actualizaciones legales y noticias del estudio",
        allNewsTitle: "Todas las Novedades",
        allNewsSubtitle: "Últimas noticias, actualizaciones legales y eventos del estudio"
    },
    location: {
        title: "Ubicación",
        subtitle: "Visítanos en nuestras oficinas en el corazón de montevideo",
        mapTitle: "Ubicación Ricardo Rachetti & Asociados"
    },
    contact: {
        title: "Contáctenos",
        subtitle: "Envíenos su consulta y nos pondremos en contacto a la brevedad"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/content/forms.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Contenido de formularios
 */ __turbopack_context__.s([
    "formContent",
    ()=>formContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2f$common$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/content/common.ts [app-client] (ecmascript)");
;
const formContent = {
    contact: {
        labels: {
            name: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2f$common$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commonTexts"].labels.name,
            email: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2f$common$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commonTexts"].labels.email,
            phone: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2f$common$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commonTexts"].labels.phone,
            subject: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2f$common$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commonTexts"].labels.subject,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2f$common$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commonTexts"].labels.message
        },
        placeholders: {
            name: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2f$common$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commonTexts"].placeholders.name,
            email: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2f$common$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commonTexts"].placeholders.email,
            phone: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2f$common$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commonTexts"].placeholders.phone,
            subject: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2f$common$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commonTexts"].placeholders.subject,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2f$common$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commonTexts"].placeholders.message
        },
        submitButton: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2f$common$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commonTexts"].buttons.submit,
        successMessage: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2f$common$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commonTexts"].messages.contactSuccess
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/content/location.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Información de ubicación y contacto
 */ __turbopack_context__.s([
    "locationContent",
    ()=>locationContent
]);
const locationContent = {
    address: {
        street: "Plaza Cagancha 1356, apto 404",
        city: "Montevideo, Uruguay",
        full: "Plaza Cagancha 1356\nMontevideo, Uruguay",
        fullWithFloor: "Plaza Cagancha 1356, oficina 404\nMontevideo, Uruguay"
    },
    contact: {
        phones: [
            "2900 0800"
        ],
        email: "rrachetti@rachettiyasoc.com",
        hours: "Lun - Vie: 10:00 - 18:00\n"
    },
    contactInfo: [
        {
            title: "Dirección",
            content: "Plaza Cagancha 1356, oficina 404\nMontevideo, Uruguay"
        },
        {
            title: "Teléfono",
            content: "2900 0800"
        },
        {
            title: "Email",
            content: "rrachetti@rachettiyasoc.com"
        },
        {
            title: "Horario",
            content: "Lun - Vie: 10:00 - 18:00\n"
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/content/footer.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Contenido del footer
 */ __turbopack_context__.s([
    "footerContent",
    ()=>footerContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2f$location$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/content/location.ts [app-client] (ecmascript)");
;
const footerContent = {
    brand: {
        name: "Rachetti & Asociados",
        description: "Estudio jurídico especializado en soluciones legales integrales para empresas y particulares."
    },
    sections: {
        location: {
            title: "Ubicación",
            address: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2f$location$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["locationContent"].address.full
        },
        contact: {
            title: "Contacto",
            phones: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2f$location$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["locationContent"].contact.phones,
            email: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2f$location$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["locationContent"].contact.email
        }
    },
    copyright: (year)=>`© ${year} Rachetti & Asociados. Todos los derechos reservados.`
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/content/metadata.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Metadata para SEO y configuración del sitio
 */ __turbopack_context__.s([
    "metadataContent",
    ()=>metadataContent
]);
const metadataContent = {
    site: {
        name: "Rachetti & Asociados",
        title: "Rachetti & Asociados | Estudio Jurídico",
        description: "Estudio de abogados especializado en derecho corporativo, comercial y litigios. Excelencia legal a tu servicio.",
        generator: "v0.app"
    },
    pages: {
        team: {
            title: "Nuestro Equipo | Rachetti & Asociados",
            description: "Conoce a nuestro equipo de profesionales altamente capacitados y comprometidos con la excelencia legal."
        },
        services: {
            title: "Nuestros Servicios | Rachetti & Asociados",
            description: "Soluciones jurídicas integrales para todas sus necesidades legales."
        },
        news: {
            title: "Novedades | Rachetti & Asociados",
            description: "Últimas noticias, actualizaciones legales y eventos del estudio."
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/content/whatsapp.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Contenido para WhatsApp
 */ __turbopack_context__.s([
    "whatsappContent",
    ()=>whatsappContent
]);
const whatsappContent = {
    defaultMessage: `Hola, gracias por contactarte con el equipo de abogados de Rachetti y Asociados.
Estamos para ayudarte y responder tu consulta a la brevedad.
Contanos brevemente tu caso y uno de nuestros profesionales se pondrá en contacto contigo.`
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/content/pages.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Contenido específico de páginas individuales
 */ __turbopack_context__.s([
    "pageContent",
    ()=>pageContent
]);
const pageContent = {
    employee: {
        notFound: {
            title: "Empleado no encontrado",
            backLink: "Volver al inicio"
        },
        sections: {
            about: "Sobre",
            relatedNews: "Noticias Relacionadas",
            author: "Autor"
        }
    },
    news: {
        backLink: "Volver a Novedades"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/content/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * Exportaciones centralizadas de contenido
 */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2f$common$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/content/common.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/content/navigation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2f$sections$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/content/sections.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2f$forms$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/content/forms.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2f$location$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/content/location.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2f$footer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/content/footer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2f$metadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/content/metadata.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2f$whatsapp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/content/whatsapp.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2f$pages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/content/pages.ts [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/whatsapp-floating-button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WhatsAppFloatingButton",
    ()=>WhatsAppFloatingButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/content/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2f$whatsapp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/content/whatsapp.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2f$common$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/content/common.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const DEFAULT_MESSAGE = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2f$whatsapp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["whatsappContent"].defaultMessage;
function WhatsAppFloatingButton({ phoneNumber, message = DEFAULT_MESSAGE, className = "" }) {
    _s();
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleClick = ()=>{
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: handleClick,
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
        className: `fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/50 active:scale-95 ${className}`,
        "aria-label": __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2f$common$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commonTexts"].aria.whatsappButton,
        type: "button",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
            className: `h-7 w-7 transition-transform duration-300 ${isHovered ? "scale-110" : ""}`,
            strokeWidth: 2.5
        }, void 0, false, {
            fileName: "[project]/components/whatsapp-floating-button.tsx",
            lineNumber: 37,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/whatsapp-floating-button.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_s(WhatsAppFloatingButton, "FPQn8a98tPjpohC7NUYORQR8GJE=");
_c = WhatsAppFloatingButton;
var _c;
__turbopack_context__.k.register(_c, "WhatsAppFloatingButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1a7bdf76._.js.map