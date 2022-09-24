import { MdOutlineSocialDistance } from "react-icons/md";
import { MdOutlineAccountBalance } from "react-icons/md";
import { MdOutlineSportsTennis } from "react-icons/md";
import { MdOutlineScience } from "react-icons/md";
import { MdOutlineAttachMoney } from "react-icons/md";
import { MdOutlineTravelExplore } from "react-icons/md";
import { MdFastfood } from "react-icons/md";

import { RiShieldCrossLine } from "react-icons/ri";
import { RiGovernmentLine } from "react-icons/ri";
import { RiHeartAddLine } from "react-icons/ri";

import { BsHouse } from "react-icons/bs";

import { RiCommunityLine } from "react-icons/ri";
import { GoComment } from "react-icons/go";
import { GiBusStop } from "react-icons/gi";
import { GiFactory } from "react-icons/gi";
import { GiFilmSpool } from "react-icons/gi";
import { TbCross } from "react-icons/tb";
import { TbGridDots } from "react-icons/tb";

export const genders = [
  {
    icon: (
      <MdOutlineSocialDistance
        width={50}
        height={50}
        className="w-10 h-10 text-miluno-white"
      />
    ),
    gender: "Asistencia Social",
    children: [
      {
        code: "A-1",
        title: "Asilos, Orfelinatos",
        factor: 1.39,
      },
      {
        code: "A-2",
        title: "Casa de Empeño",
        factor: 1.06,
      },
      {
        code: "A-3",
        title: "Centros de Rehabilitación",
        factor: 1.55,
      },
      {
        code: "A-4",
        title: "Centros de Protección",
        factor: 1.24,
      },
      {
        code: "A-5",
        title: "Dormitorios Públicos",
        factor: 1.2,
      },
      {
        code: "A-6",
        title: "Guarderías",
        factor: 1.16,
      },
    ],
  },
  {
    icon: (
      <RiCommunityLine
        width={50}
        height={50}
        className="w-10 h-10 text-miluno-white"
      />
    ),
    gender: "Comercios y Oficinas",
    children: [
      {
        code: "B-1",
        title: "Agencias de Vehículos",
        factor: 1.45,
      },
      {
        code: "B-2",
        title: "Centros de Abasto",
        factor: 1.04,
      },
      {
        code: "B-3",
        title: "Centros Coemrciales",
        factor: 2.12,
      },
      {
        code: "B-4",
        title: "Centros de Exposiciones",
        factor: 1.86,
      },
      {
        code: "B-5",
        title: "Edificios Comerciales y de Oficinas",
        factor: 1.79,
      },
      {
        code: "B-6",
        title: "Farmacias y Droguerías",
        factor: 1.89,
      },
      {
        code: "B-7",
        title: "Ferreterías y Tlapalerías",
        factor: 1.89,
      },
      {
        code: "B-8",
        title: "Joyerías",
        factor: 2.07,
      },
      {
        code: "B-9",
        title: "Librerías",
        factor: 1.89,
      },
      {
        code: "B-10",
        title: "Mercados",
        factor: 1.04,
      },
      {
        code: "B-11",
        title: "Supermercados y Autoservicios",
        factor: 1.69,
      },
      {
        code: "B-12",
        title: "Tiendas Comerciales",
        factor: 1.66,
      },
      {
        code: "B-13",
        title: "Tiendas de Departamentos",
        factor: 1.94,
      },
      {
        code: "B-14",
        title: "Tiendas Especializadas",
        factor: 1.07,
      },
      {
        code: "B-15",
        title: "Locales Comerciales",
        factor: 1.37,
      },
      {
        code: "B-16",
        title: "Stands o Kioscos Comerciales",
        factor: 0.62,
      },
    ],
  },
  {
    icon: (
      <GoComment
        width={50}
        height={50}
        className="w-10 h-10 text-miluno-white"
      />
    ),
    gender: "Medios de Comuniciación",
    children: [
      {
        code: "C-1",
        title: "Agencias de Noticias",
        factor: 1.45,
      },
      {
        code: "C-2",
        title: "Centrales Telefónicas",
        factor: 1.55,
      },
      {
        code: "C-3",
        title: "Centros de Internet",
        factor: 1.14,
      },
      {
        code: "C-4",
        title: "Edificios de Correos",
        factor: 1.24,
      },
      {
        code: "C-5",
        title: "Edificios de Telégragos",
        factor: 1.24,
      },
      {
        code: "C-6",
        title: "Estudios de Audio y Video",
        factor: 2.28,
      },
      {
        code: "C-7",
        title: "Estudios de Cine",
        factor: 1.97,
      },
      {
        code: "C-8",
        title: "Estudios de TV",
        factor: 2.17,
      },
      {
        code: "C-9",
        title: "Paquetería y Envíos",
        factor: 1.14,
      },
      {
        code: "C-10",
        title: "Prensa",
        factor: 1.24,
      },
      {
        code: "C-11",
        title: "Radiosdifusoras",
        factor: 1.59,
      },
    ],
  },
  {
    icon: (
      <GiBusStop
        width={50}
        height={50}
        className="w-10 h-10 text-miluno-white"
      />
    ),
    gender: "Transportes",
    children: [
      {
        code: "D-1",
        title: "Aeropuertos (Terminales y Hangares)",
        factor: 2.07,
      },
      {
        code: "D-2",
        title: "Casetas de Peaje",
        factor: 1.24,
      },
      {
        code: "D-3",
        title: "Centrales de Autobuses",
        factor: 1.35,
      },
      {
        code: "D-4",
        title: "Estaciones de Ferrocarril",
        factor: 1.35,
      },
      {
        code: "D-5",
        title: "Estaciones de Transporte Colectivo",
        factor: 1.76,
      },
      {
        code: "D-6",
        title: "Edificaciones Portuarias",
        factor: 1.76,
      },
      {
        code: "D-7",
        title: "Paraderos de Autobuses",
        factor: 1.04,
      },
      {
        code: "D-8",
        title: "Talleres de Mantenimiento",
        factor: 0.58,
      },
      {
        code: "D-9",
        title: "Taquillas y Salas de Espera",
        factor: 1.04,
      },
    ],
  },
  {
    icon: (
      <MdOutlineAccountBalance
        width={50}
        height={50}
        className="w-10 h-10 text-miluno-white"
      />
    ),
    gender: "Culturales",
    children: [
      {
        code: "E-1",
        title: "Auditorios",
        factor: 1.35,
      },
      {
        code: "E-2",
        title: "Bibliotecas",
        factor: 1.45,
      },
      {
        code: "E-3",
        title: "Casa de Cultura",
        factor: 1.24,
      },
      {
        code: "E-4",
        title: "Centros de Arte",
        factor: 1.24,
      },
      {
        code: "E-5",
        title: "Editoriales",
        factor: 1.35,
      },
      {
        code: "E-6",
        title: "Galerías de Arte",
        factor: 1.55,
      },
      {
        code: "E-7",
        title: "Monumentos",
        factor: 2.48,
      },
      {
        code: "E-8",
        title: "Museos",
        factor: 1.55,
      },
      {
        code: "E-9",
        title: "Pabellones Internacionales",
        factor: 2.07,
      },
      {
        code: "E-10",
        title: "Salas de Concierto",
        factor: 2.17,
      },
      {
        code: "E-11",
        title: "Talleres de Arte",
        factor: 1.24,
      },
      {
        code: "E-12",
        title: "Teatros",
        factor: 2.07,
      },
    ],
  },
  {
    icon: (
      <MdOutlineSportsTennis
        width={50}
        height={50}
        className="w-10 h-10 text-miluno-white"
      />
    ),
    gender: "Deportivas",
    children: [
      {
        code: "F-1",
        title: "Albercas recreativas",
        factor: 3.01,
      },
      {
        code: "F-2",
        title: "Boliche",
        factor: 1.45,
      },
      {
        code: "F-3",
        title: "Canchas Descubiertas",
        factor: 0.21,
      },
      {
        code: "F-4",
        title: "Clubes Deportivos",
        factor: 1.24,
      },
      {
        code: "F-5",
        title: "Gimnasios y Canchas Cubiertas",
        factor: 0.83,
      },
      {
        code: "F-6",
        title: "Clubs de Golf (Casa Club)",
        factor: 1.24,
      },
      {
        code: "F-7",
        title: "Clubs de Tiro (Casa Club)",
        factor: 1.24,
      },
      {
        code: "F-8",
        title: "Unidades Deportivas",
        factor: 1.04,
      },
    ],
  },
  {
    icon: (
      <MdOutlineScience
        width={50}
        height={50}
        className="w-10 h-10 text-miluno-white"
      />
    ),
    gender: "Educación y Ciencia",
    children: [
      {
        code: "G-1",
        title: "Academias",
        factor: 1.08,
      },
      {
        code: "G-2",
        title: "Centros de Investigación",
        factor: 1.45,
      },
      {
        code: "G-3",
        title: "Campus de Educación Superior",
        factor: 1.35,
      },
      {
        code: "G-4",
        title: "Escuelas Preescolares",
        factor: 1.15,
      },
      {
        code: "G-5",
        title: "Escuelas Primarias",
        factor: 1.15,
      },
      {
        code: "G-6",
        title: "Escuelas Secundarias",
        factor: 1.15,
      },
      {
        code: "G-7",
        title: "Escuelas Preparatorias",
        factor: 1.39,
      },
      {
        code: "G-8",
        title: "Escuelas Vocacionales",
        factor: 1.39,
      },
      {
        code: "G-9",
        title: "Escuelas Técnicas",
        factor: 1.39,
      },
      {
        code: "G-10",
        title: "Escuelas de Educación Especial",
        factor: 1.45,
      },
      {
        code: "G-11",
        title: "Escuelas de Educación Superior",
        factor: 1.45,
      },
      {
        code: "G-12",
        title: "Internados y Viviendas Estudiantiles",
        factor: 1.24,
      },
      {
        code: "G-13",
        title: "Laboratorios",
        factor: 1.45,
      },
      {
        code: "G-14",
        title: "Laboratorios de Enseñanza",
        factor: 1.45,
      },
      {
        code: "G-15",
        title: "Normales",
        factor: 1.39,
      },
    ],
  },
  {
    icon: (
      <MdOutlineAttachMoney
        width={50}
        height={50}
        className="w-10 h-10 text-miluno-white"
      />
    ),
    gender: "Financieras y Bancarias",
    children: [
      {
        code: "H-1",
        title: "Bancos",
        factor: 1.2,
      },
      {
        code: "H-2",
        title: "Casas de Bolsa",
        factor: 1.28,
      },
      {
        code: "H-3",
        title: "Casas de Cambio",
        factor: 1.28,
      },
      {
        code: "H-4",
        title: "Oficinas Centrales y Regionales",
        factor: 1.22,
      },
      {
        code: "H-5",
        title: "Organizaciones Auxiliares",
        factor: 1.2,
      },
    ],
  },
  {
    icon: (
      <RiGovernmentLine
        width={50}
        height={50}
        className="w-10 h-10 text-miluno-white"
      />
    ),
    gender: "Gubernamentales",
    children: [
      {
        code: "I-1",
        title: "Archivos",
        factor: 1.14,
      },
      {
        code: "I-2",
        title: "Bases Militares (Edificaciones)",
        factor: 1.35,
      },
      {
        code: "I-3",
        title: "Cuarteles Militares",
        factor: 1.2,
      },
      {
        code: "I-4",
        title: "Oficinas Estatales",
        factor: 1.38,
      },
      {
        code: "I-5",
        title: "Oficinas Federales",
        factor: 1.38,
      },
      {
        code: "I-6",
        title: "Oficinas Municipales",
        factor: 1.05,
      },
      {
        code: "I-7",
        title: "Palacios de Gobierno",
        factor: 1.64,
      },
      {
        code: "I-8",
        title: "Sedes Judiciales",
        factor: 1.59,
      },
      {
        code: "I-9",
        title: "Sedes Legislativas",
        factor: 1.59,
      },
    ],
  },
  {
    icon: (
      <BsHouse width={50} height={50} className="w-10 h-10 text-miluno-white" />
    ),
    gender: "Habitacionales",
    children: [
      {
        code: "J-1",
        title: "Condominios de Interés Social",
        factor: 1.04,
      },
      {
        code: "J-2",
        title: "Condominios de Interés Medio",
        factor: 1.34,
      },
      {
        code: "J-3",
        title: "Condominios Residenciales",
        factor: 1.57,
      },
      {
        code: "J-4",
        title: "Edificios de Apartamentos",
        factor: 1.49,
      },
      {
        code: "J-5",
        title: "Vivienda Progresiva",
        factor: 0.84,
      },
      {
        code: "J-6",
        title: "Vivienda de Interés Social",
        factor: 0.9,
      },
      {
        code: "J-7",
        title: "Vivienda de Interés Social T-11 (CBM)",
        factor: 1,
      },
      {
        code: "J-8",
        title: "Vivienda de Interés Medio",
        factor: 1.14,
      },
      {
        code: "J-9",
        title: "Casa-Habitación Residencial",
        factor: 1.28,
      },
      {
        code: "J-10",
        title: "Residencial de Lujo",
        factor: 1.89,
      },
    ],
  },
  {
    icon: (
      <GiFactory
        width={50}
        height={50}
        className="w-10 h-10 text-miluno-white"
      />
    ),
    gender: "Plantas Industriales",
    children: [
      {
        code: "K-1",
        title: "Áreas Exteriores",
        factor: 0.06,
      },
      {
        code: "K-2",
        title: "Bodegas y Almacenes",
        factor: 0.55,
      },
      {
        code: "K-3",
        title: "Laboratorios",
        factor: 1.22,
      },
      {
        code: "K-4",
        title: "Naves Industriales",
        factor: 0.86,
      },
      {
        code: "K-5",
        title: "Oficinas",
        factor: 1.18,
      },
      {
        code: "K-6",
        title: "Servicios de Personal",
        factor: 1.14,
      },
      {
        code: "K-7",
        title: "Talleres",
        factor: 0.57,
      },
    ],
  },
  {
    icon: (
      <RiShieldCrossLine
        width={50}
        height={50}
        className="w-10 h-10 text-miluno-white"
      />
    ),
    gender: "Protección Social",
    children: [
      {
        code: "L-1",
        title: "Casetas de Seguridad Pública",
        factor: 1.14,
      },
      {
        code: "L-2",
        title: "Centros de Readaptación Social",
        factor: 1.18,
      },
      {
        code: "L-3",
        title: "Centros Tutelares",
        factor: 1.18,
      },
      {
        code: "L-4",
        title: "Cuarteles de Seguridad Pública",
        factor: 1.2,
      },
      {
        code: "L-5",
        title: "Estaciones de Bomberos",
        factor: 1.18,
      },
      {
        code: "L-6",
        title: "Estaciones de Policía",
        factor: 1.18,
      },
      {
        code: "L-7",
        title: "Laboratorios Especializados",
        factor: 1.22,
      },
      {
        code: "L-8",
        title: "Servicios Forenses",
        factor: 1.3,
      },
    ],
  },
  {
    icon: (
      <GiFilmSpool
        width={50}
        height={50}
        className="w-10 h-10 text-miluno-white"
      />
    ),
    gender: "Recreación y Entretenimiento",
    children: [
      {
        code: "M-1",
        title: "Arena Deportiva",
        factor: 1.3,
      },
      {
        code: "M-2",
        title: "Autódromo",
        factor: 1.86,
      },
      {
        code: "M-3",
        title: "Billares",
        factor: 1.04,
      },
      {
        code: "M-4",
        title: "Centros Nocturnos",
        factor: 1.3,
      },
      {
        code: "M-5",
        title: "Cinemas",
        factor: 1.76,
      },
      {
        code: "M-6",
        title: "Estadios",
        factor: 1.32,
      },
      {
        code: "M-7",
        title: "Hipódromo",
        factor: 1.86,
      },
      {
        code: "M-8",
        title: "Jardines (Zoológicos, Botánicos)",
        factor: 0.06,
      },
      {
        code: "M-9",
        title: "Lienzos Charros",
        factor: 1.45,
      },
      {
        code: "M-10",
        title: "Palenques",
        factor: 1.3,
      },
      {
        code: "M-12",
        title: "Planetarios",
        factor: 1.86,
      },
      {
        code: "M-14",
        title: "Plazas de Toros",
        factor: 1.41,
      },
      {
        code: "M-15",
        title: "Salones de Fiesta (Edificaciones)",
        factor: 1.55,
      },
    ],
  },
  {
    icon: (
      <TbCross width={50} height={50} className="w-10 h-10 text-miluno-white" />
    ),
    gender: "Religión",
    children: [
      {
        code: "N-1",
        title: "Basílicas y Catedrales",
        factor: 1.86,
      },
      {
        code: "N-2",
        title: "Capillas",
        factor: 1.97,
      },
      {
        code: "N-3",
        title: "Casas Patronales",
        factor: 1.3,
      },
      {
        code: "N-4",
        title: "Conventos y Monasterios",
        factor: 1.2,
      },
      {
        code: "N-5",
        title: "Iglesias",
        factor: 1.76,
      },
      {
        code: "N-6",
        title: "Sede Arzobispal",
        factor: 1.55,
      },
    ],
  },
  {
    icon: (
      <RiHeartAddLine
        width={50}
        height={50}
        className="w-10 h-10 text-miluno-white"
      />
    ),
    gender: "Salud",
    children: [
      {
        code: "O-1",
        title: "Centros de Rehabilitación Física",
        factor: 1.14,
      },
      {
        code: "O-2",
        title: "Centros de Salud",
        factor: 1.08,
      },
      {
        code: "O-3",
        title: "Clínicas",
        factor: 1.07,
      },
      {
        code: "O-4",
        title: "Consultorios",
        factor: 1.08,
      },
      {
        code: "O-5",
        title: "Dispensarios",
        factor: 1.04,
      },
      {
        code: "O-6",
        title: "Laboratorios de Analisis Clinicos",
        factor: 1.24,
      },
      {
        code: "O-7",
        title: "Laboratorios de Rayos X",
        factor: 1.24,
      },
      {
        code: "O-8",
        title: "Hospitales",
        factor: 1.92,
      },
    ],
  },
  {
    icon: (
      <MdOutlineTravelExplore
        width={50}
        height={50}
        className="w-10 h-10 text-miluno-white"
      />
    ),
    gender: "Turismo",
    children: [
      {
        code: "P-1",
        title: "Agencias de Viaje",
        factor: 1.14,
      },
      {
        code: "P-2",
        title: "Balnearios (Edificaciones)",
        factor: 1.14,
      },
      {
        code: "P-3",
        title: "Camping",
        factor: 0.05,
      },
      {
        code: "P-4",
        title: "Centros de Convenciones",
        factor: 2.01,
      },
      {
        code: "P-5",
        title: "Complejos Hoteleros",
        factor: 3.39,
      },
      {
        code: "P-6",
        title: "Complejos Y Hoteles (Obra Exterior)",
        factor: 0.06,
      },
      {
        code: "P-7",
        title: "Hoteles de 5 estrellas",
        factor: 2.82,
      },
      {
        code: "P-8",
        title: "Hoteles de 4 estrellas",
        factor: 1.94,
      },
      {
        code: "P-9",
        title: "Hoteles de 3 estrellas o menos",
        factor: 1.55,
      },
      {
        code: "P-10",
        title: "Moteles",
        factor: 1.45,
      },
      {
        code: "P-11",
        title: "Trailer Park",
        factor: 0.06,
      },
      {
        code: "P-12",
        title: "Spas",
        factor: 2.07,
      },
    ],
  },
  {
    icon: (
      <MdFastfood
        width={50}
        height={50}
        className="w-10 h-10 text-miluno-white"
      />
    ),
    gender: "Alimentos y Bebidas",
    children: [
      {
        code: "Q-1",
        title: "Bares Y Cantinas",
        factor: 1.86,
      },
      {
        code: "Q-2",
        title: "Cafeterias",
        factor: 1.45,
      },
      {
        code: "Q-3",
        title: "Cocinas Rapidas",
        factor: 1.24,
      },
      {
        code: "Q-4",
        title: "Comedores",
        factor: 1.18,
      },
      {
        code: "Q-5",
        title: "Restaurantes",
        factor: 1.76,
      },
    ],
  },
  {
    icon: <TbGridDots className="w-10 h-10 text-miluno-white" />,
    gender: "Varios",
    children: [
      {
        code: "R-1",
        title: "Baños públicos",
        factor: 1.33,
      },
      {
        code: "R-2",
        title: "Estacionamientos descubiertos",
        factor: 1,
      },
      {
        code: "R-3",
        title: "Estacionamientos cubiertos",
        factor: 1.16,
      },
      {
        code: "R-4",
        title: "Gasolineras",
        factor: 1.33,
      },
      {
        code: "R-4",
        title: "Gasolineras",
        factor: 1.33,
      },
    ],
  },
];
