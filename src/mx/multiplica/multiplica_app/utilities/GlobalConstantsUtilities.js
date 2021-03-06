/**
 * @description Archivo que almacena constantes para ser utilizadas globalmente
 * @author Erick Hernandez <ti.solutions.erick.hdz@gmail.com>
 * @version 1.0 - 08/08/2021
 */

// PALETA DE COLORES
const RED_PRINCIPAL = '#FF3428';
const RED_PRINCIPAL_WITH_OPACITY = 'rgba(255, 52, 40, 0.7)';


const BLUE_WITH_OPACITY = 'rgba(0, 120, 255, 0.4)';
const BLUE_WITH_OPACITY_DARK = 'rgba(8, 27, 68, 0.7)';
const RED_WITH_OPACITY_BADGE = 'rgba(255, 0, 0, 0.7)';
const BLUE_TEXT = '#0078FF';
const BLUE_TEXT_WITH_OPACITY_BADGE = 'rgba(0, 120, 255, 0.8)';
const BLUE_MAIN_GRADIENT_TOP = '#001e3c';
const BLUE_MAIN_GRADIENT_TOP_WITH_OPACITY = 'rgba(0,30,60, 0.8)';
const BLUE_MAIN_GRADIENT_BOTTOM = '#011121';
const BACKGROUND_BLUE = '#001e3c';
const LIGHT_BLUE = '#00AFFF';
const BLACK_TEXT = '#1F1F1F';
const GREY_TEXT = '#5F5F5F';
const PURE_WHITE = '#FFFFFF';
const TRANSPARENT = 'transparent';
const GREY_BUTTONS = '#EFEFEF'


// OPACIDAD DE TOUCHABLES
const ACTIVE_OPACITY = 0.7;

// CONSTANTES DE NOMBRAMIENTO DE NAVEGACIONES
const INICIO_TAB = 'Home';
const PRODUCTOS_TAB = 'Products';
const SERVICIOS_TAB = 'Services';

// BORDER RADIUS GENERAL
const GENERAL_BORDER_RADIUS = 8;

// ARREGLO DE PRODUCTOS Y SERVICIOS
const PRODUCTS_ARRAY = [
    {
        id: 1,
        title: 'Estrategia',
        image: require('../resources/icons/slider-1-icon.png'),
        description: 'Decisiones estratégicas más acertadas con prioridades digitales claras'
    },
    {
        id: 2,
        title: 'Experiencias',
        image: require('../resources/icons/slider-2-icon.png'),
        description: 'Experiencias digitales más relevantes, persuasivas e inteligentes'
    },
    {
        id: 1,
        title: 'Conversiones',
        image: require('../resources/icons/slider-3-icon.png'),
        description: 'Más conversiones, ventas e ingresos seduciendo al cliente en todo su journey'
    },
    {
        id: 1,
        title: 'Automatización',
        image: require('../resources/icons/slider-4-icon.png'),
        description: 'Optimización y automatización de journeys para impactar el ciclo de vida del cliente'
    },
]

// GRUPO DE CONSTANTES
const GLOBAL_CONSTANTS = {
    RED_PRINCIPAL,
    RED_PRINCIPAL_WITH_OPACITY,
    GENERAL_BORDER_RADIUS,
    PRODUCTOS_TAB,
    SERVICIOS_TAB,
    PRODUCTS_ARRAY,
    BLUE_TEXT,
    LIGHT_BLUE,
    BLUE_MAIN_GRADIENT_TOP,
    BLUE_MAIN_GRADIENT_TOP_WITH_OPACITY,
    BLUE_MAIN_GRADIENT_BOTTOM,
    BLACK_TEXT,
    RED_WITH_OPACITY_BADGE,
    BLUE_TEXT_WITH_OPACITY_BADGE,
    GREY_TEXT,
    BACKGROUND_BLUE,
    PURE_WHITE,
    TRANSPARENT,
    GREY_BUTTONS,
    ACTIVE_OPACITY,
    BLUE_WITH_OPACITY,
    BLUE_WITH_OPACITY_DARK,
    INICIO_TAB
};

// SE EXPORTAN CONSTANTES GLOBALES
module.exports = GLOBAL_CONSTANTS;