import React, { useEffect, useState } from 'react';
export default function Notes() {
	return (
		<div className="w-full mt-12">
			<div className="mb-8">
				<p className="text-sm  font-montserrat-bold print:text-black text-miluno-white">
					PROYECTO EJECUTIVO DE CONJUNTOS ARQUITECTÓNICOS (USOS
					MIXTOS)
				</p>
				<p className="text-sm  font-montserrat print:text-black text-miluno-white">
					Cuando por condiciones del proyecto, se combinen en un solo
					conjunto dos o más géneros constructivos (usos mixtos), la
					base de cálculo de Honorarios (H) deberá hacerse sumando los
					resultantes individuales de cada superficie correspondientes
					a cada género, a lo cual se deberá agregar un 10% de la suma
					de los honorarios individuales de todos los edificios que
					integren al conjunto.
				</p>
			</div>
			<div>
				<p className="text-sm  font-montserrat-bold print:text-black text-miluno-white">
					SERVICIOS NO INCLUIDOS EN LOS HONORARIOS
				</p>
				<p className="text-sm  font-montserrat print:text-black text-miluno-white">
					Los servicios de Proyecto Ejecutivo y Dirección
					Arquitectónica -en cualquiera de sus modalidades-, podrán
					requerir los servicios complementarios que a continuación se
					enumeran, mismos que causarán gastos reembolsables y
					honorarios adicionales:
				</p>
			</div>
			<ol className="list-[upper-roman] pt-4 list-inside">
				<li className="my-2 text-sm  font-montserrat print:text-black text-miluno-white">
					Generales, en cualquier etapa
					<ol className="pt-2 pl-6 list-decimal list-inside">
						<li className="my-2 text-sm  font-montserrat print:text-black text-miluno-white">
							Gastos de desplazamiento fuera del perímetro urbano
							donde se encuentre la oficina del arquitecto, así
							como viáticos y honorarios por tiempo extraordinario
							del arquitecto o sus representantes expresamente
							autorizados, causados por dichos desplazamientos.
						</li>
						<li className="my-2 text-sm  font-montserrat print:text-black text-miluno-white">
							Gastos de tramitación y derechos de licencias y
							permisos.
						</li>
						<li className="my-2 text-sm  font-montserrat print:text-black text-miluno-white">
							Copias adicionales a un juego de impresión de planos
							y un juego de copias de documentos, que se requieran
							durante la prestación de servicios básicos o
							complementarios, así como respaldo digital con los
							archivos compendiados en una USB.
						</li>
					</ol>
				</li>
				<li className="mt-6 text-sm  font-montserrat print:text-black text-miluno-white">
					Durante o después de la fase del Plan Preliminar
					<ol className="pt-2 pl-6 list-decimal list-inside">
						<li className="my-2 text-sm  font-montserrat print:text-black text-miluno-white">
							Investigaciones detalladas sobre requerimientos
							arquitectónicos, cuando el cliente no pueda
							proporcionar la información respectiva
						</li>
						<li className="my-2 text-sm  font-montserrat print:text-black text-miluno-white">
							Levantamiento topográfico, georeferenciado y
							deslindes. Información legal sobre el terreno.
						</li>
						<li className="my-2 text-sm  font-montserrat print:text-black text-miluno-white">
							Estudios geográficos, geológicos, hidrológicos,
							climáticos, edafológicos, ecológicos, ambientales y
							otros relacionados con las características naturales
							del terreno o de sus inmediaciones.
						</li>
						<li className="my-2 text-sm  font-montserrat print:text-black text-miluno-white">
							Estudios económicos y sociales relacionados con la
							zona donde se ubica el terreno, o con los usuarios
							de la obra que se proyecta
						</li>
						<li className="my-2 text-sm  font-montserrat print:text-black text-miluno-white">
							Estudios urbanísticos relacionados con la zona o la
							población donde se ubica la obr
						</li>
						<li className="my-2 text-sm  font-montserrat print:text-black text-miluno-white">
							Investigaciones sobre la capacidad de la
							infraestructura que dará servicio al terreno
						</li>
						<li className="my-2 text-sm  font-montserrat print:text-black text-miluno-white">
							Aforos y estudios de tránsito y transporte
						</li>
						<li className="my-2 text-sm  font-montserrat print:text-black text-miluno-white">
							Estudios preliminares especializados de diseño
							estructural.
						</li>
						<li className="my-2 text-sm  font-montserrat print:text-black text-miluno-white">
							Estudios de geotécnia y mecánica de suelos.
						</li>
						<li className="my-2 text-sm  font-montserrat print:text-black text-miluno-white">
							Estudios preliminares especializados de diseño de
							instalaciones.
						</li>
						<li className="my-2 text-sm  font-montserrat print:text-black text-miluno-white">
							Estudios de prefactibilidad económica de la obra en
							cuestión; valuación de inmuebles; de mercado; de
							rentabilidad; estudios financiero
						</li>
						<li className="my-2 text-sm  font-montserrat print:text-black text-miluno-white">
							Elaboración de representaciones gráficas especiales,
							perspectivas, renders, modelos digitales, recorridos
							virtuales, maquetas y audiovisuales.
						</li>
						<li className="my-2 text-sm  font-montserrat print:text-black text-miluno-white">
							Presentaciones ante otros grupos y personas a
							solicitud del cliente.
						</li>
						<li className="my-2 text-sm  font-montserrat print:text-black text-miluno-white">
							Modificaciones al anteproyecto (plan preliminar)
							después de su entrega.
						</li>
					</ol>
				</li>
				<li className="mt-6 text-sm  font-montserrat print:text-black text-miluno-white">
					Durante o después del Plan Básico y/o Edificatorio.
					<ol className="pt-2 pl-6 list-decimal list-inside">
						<li className="my-2 text-sm  font-montserrat print:text-black text-miluno-white">
							Proyectos ejecutivos de estructura o instalaciones,
							cuando éstos se excluyan de los alcances de trabajo
							del arquitecto en los términos de los distintos
							Títulos que conforman éste Arancel en sus
							entregables e Integración del Trabajo señalados en
							el Apartado 2.2.4.
						</li>
						<li className="my-2 text-sm  font-montserrat print:text-black text-miluno-white">
							Sistemas de refrigeración; Cámaras frías.
						</li>
						<li className="my-2 text-sm  font-montserrat print:text-black text-miluno-white">
							Guías mecánicas especializadas para Cocinas
							integrales, laboratorios, áreas médicas, quirófanos,
							equipos especiales, etc.
						</li>
						<li className="my-2 text-sm  font-montserrat print:text-black text-miluno-white">
							Estudios especializados de luminotecnia.
						</li>
						<li className="my-2 text-sm  font-montserrat print:text-black text-miluno-white">
							Estudios para equipos de comunicación, elevadores,
							escaleras mecánicas, bandas transportadoras.
						</li>
						<li className="my-2 text-sm  font-montserrat print:text-black text-miluno-white">
							Estudios de acústica y electroacústica. Estudios de
							vibración
						</li>
						<li className="my-2 text-sm  font-montserrat print:text-black text-miluno-white">
							Proyecto, selección y ubicación de mobiliario y sus
							accesorios. Arquitectura de interiores
						</li>
						<li className="my-2 text-sm  font-montserrat print:text-black text-miluno-white">
							Obras de arte y su ubicación y adecuación a la obra.
						</li>
						<li className="my-2 text-sm  font-montserrat print:text-black text-miluno-white">
							Señalética y diseño gráfico; Programa interno de
							Protección Civil.
						</li>
						<li className="my-2 text-sm  font-montserrat print:text-black text-miluno-white">
							Diseño Urbano, arquitectura de paisaje, fuentes y
							mobiliario urbano
						</li>
						<li className="my-2 text-sm  font-montserrat print:text-black text-miluno-white">
							Proyectos de infraestructura e ingeniería urbana.
						</li>
						<li className="my-2 text-sm  font-montserrat print:text-black text-miluno-white">
							Modificaciones solicitadas por el cliente al
							proyecto ejecutivo
						</li>
					</ol>
				</li>
				<li className="mt-6 text-sm  font-montserrat print:text-black text-miluno-white">
					Durante la Dirección Arquitectónica.
					<ol className="pt-2 pl-6 list-decimal list-inside">
						<li className="my-2 text-sm  font-montserrat print:text-black text-miluno-white">
							Visitas a la obra adicionales a las establecidas en
							su convenio.
						</li>
						<li className="my-2 text-sm  font-montserrat print:text-black text-miluno-white">
							Mantenimiento de uno o varios residentes a medio
							tiempo o tiempo completo en la obra.
						</li>
						<li className="my-2 text-sm  font-montserrat print:text-black text-miluno-white">
							Elaboración de programas detallados y “ruta crítica”
							de la obra.
						</li>
						<li className="my-2 text-sm  font-montserrat print:text-black text-miluno-white">
							Trabajo topográfico de trazo, nivelación y control
							dimensional de la obra, aparte del que realice el
							contratista, o supervisión especializada del trabajo
							topográfico realizado por éste.
						</li>
						<li className="my-2 text-sm  font-montserrat print:text-black text-miluno-white">
							Pruebas físicas y de laboratorio, radiografías.
						</li>
						<li className="my-2 text-sm  font-montserrat print:text-black text-miluno-white">
							Visitas de supervisión por parte de especialistas.
						</li>
						<li className="my-2 text-sm  font-montserrat print:text-black text-miluno-white">
							Elaboración de planos de obra terminada (“As
							Built”).
						</li>
						<li className="my-2 text-sm  font-montserrat print:text-black text-miluno-white">
							Elaboración de manuales de operación y
							mantenimiento.
						</li>
					</ol>
				</li>
				<li className="mt-6 text-sm  font-montserrat print:text-black text-miluno-white">
					Posteriormente a la Terminación de la obra.
					<ol className="pt-2 pl-6 list-decimal list-inside">
						<li className="my-2 text-sm  font-montserrat print:text-black text-miluno-white">
							Asesoría al cliente en el proceso de mantenimiento
							de la obra
						</li>
						<li className="my-2 text-sm  font-montserrat print:text-black text-miluno-white">
							Reportes de comportamiento y operación del inmueble,
							y responsivas exigidas por las autoridades.
						</li>
					</ol>
				</li>
			</ol>
		</div>
	);
}
