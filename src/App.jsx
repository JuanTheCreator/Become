import React from 'react'
import Carousel from './components/Carousel'
import Aurora from './components/Aurora';


const slidesData = [
	{
		title: 'Become GLOCAL',
		content: <p>Bienvenido a la presentación de nuestra Historia Become.</p>,
	},
	{
		title: 'Valor del proyecto',
		content: (
			<>
				<p>Aprendizaje vivencial con impacto real</p>
				<p>
					El proyecto permitió desarrollar habilidades profesionales y personales a
					través de retos colaborativos.
				</p>
				<p>Entorno diverso y multicultural</p>
				<p>
					Trabajar con personas de distintas disciplinas enriqueció la experiencia.
				</p>
			</>
		),
	},
        {
                title: 'Diversidad como fortaleza',
                content: (
                        <>
                                <p>Miradas distintas, soluciones más completas</p>
                                <p>
                                        Las diferencias de formación aportaron ideas únicas y complementarias.
                                </p>
                                <p>Diversidad como motor de creatividad</p>
                                <p>
                                        Lejos de dificultar el trabajo, nos ayudó a construir propuestas más
                                        sólidas.
                                </p>
                        </>
                ),
        },
	{
		title: 'Metodología de trabajo',
		content: (
			<>
				<p>Tareas organizadas y reuniones diarias</p>
				<p>
					Usamos cronogramas, dividimos funciones y nos reuníamos para evaluar
					avances.
				</p>
				<p>Revisión constante y mejora continua</p>
				<p>
					El trabajo fue dinámico, flexible y orientado al aprendizaje
					collaborativo.
				</p>
			</>
		),
	},
	{
		title: 'Habilidades desarrolladas',
		content: (
			<>
				<p>Liderazgo horizontal y empatía</p>
				<p>Compartimos responsabilidades y fomentamos el respeto mutuo.</p>
				<p>Escucha activa y resiliencia grupal</p>
				<p>Mantuvimos la cohesión ante desafíos, adaptándonos como equipo.</p>
			</>
		),
	},
	{
		title: 'Liderazgo intercultural',
		content: (
			<>
				<p>Comunicación efectiva en la diversidad</p>
				<p>
					Aprendimos a evitar malentendidos en equipos multiculturales.
				</p>
				<p>Liderar con sensibilidad y apertura</p>
				<p>
					Adaptarse y mediar fueron habilidades clave para colaborar con éxito.
				</p>
			</>
		),
	},
	{
		title: 'Enfoque Glocal',
		content: (
			<>
				<p>Pensar global, actuar local</p>
				<p>Creamos soluciones aplicables y sensibles al contexto.</p>
				<p>Adaptación sin perder visión estratégica</p>
				<p>Las ideas fueron contextualizadas sin sacrificar impacto.</p>
			</>
		),
	},
	{
		title: 'Competencias clave',
		content: (
			<>
				<p>Mentoría y formación en diversidad</p>
				<p>
					Reconocimos la importancia de guiar y aprender en contextos inclusivos.
				</p>
				<p>Trabajo en equipo y visión ética</p>
				<p>
					Collaboramos desde el respeto, orientados a objetivos comunes.
				</p>
			</>
		),
	},
	{
		title: 'Oportunidades de mejora',
		content: (
			<>
				<p>Mayor claridad desde el inicio</p>
				<p>
					Una guía visual al principio habría evitado confusión.
				</p>
				<p>Más retroalimentación y conexión entre equipos</p>
				<p>
					Instancias de feedback y dinámicas intergrupales habrían enriquecido el
					proceso.
				</p>
			</>
		),
	},
	{
		title: 'Conclusión',
		content: (
			<>
				<p>Experiencia transformadora</p>
				<p>
					Crecimos como profesionales con conciencia global y sentido humano.
				</p>
				<p>Listos para liderar con propósito</p>
				<p>
					El proyecto nos preparó para actuar con impacto en contextos complejos.
				</p>
			</>
		),
	},
]

function App() {
	return (
		<>
			<Aurora colorStops={["#3A29FF", "#FF94B4", "#FF3232"]} blend={0.5} amplitude={1.0} speed={0.5} />
			<Carousel slides={slidesData} />
		</>
	);
}

export default App
