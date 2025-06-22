import React from 'react'
import Carousel from './components/Carousel'
import Aurora from './components/Aurora';
import ShinyText from './TextAnimations/ShinyText/ShinyText';

const slidesData = [
	{
		title: 'Become GLOCAL',
		content: <ShinyText text="Bienvenido a la presentación de nuestra Historia Become." />,
	},
	{
		title: 'Valor del proyecto',
		content: (
			<>
				<ShinyText text="Aprendizaje vivencial con impacto real" />
				<ShinyText text="El proyecto permitió desarrollar habilidades profesionales y personales a través de retos colaborativos." />
				<ShinyText text="Entorno diverso y multicultural" />
				<ShinyText text="Trabajar con personas de distintas disciplinas enriqueció la experiencia." />
			</>
		),
	},
        {
                title: 'Diversidad como fortaleza',
                content: (
                        <>
                                <ShinyText text="Miradas distintas, soluciones más completas" />
                                <ShinyText text="Las diferencias de formación aportaron ideas únicas y complementarias." />
                                <ShinyText text="Diversidad como motor de creatividad" />
                                <ShinyText text="Lejos de dificultar el trabajo, nos ayudó a construir propuestas más sólidas." />
                        </>
                ),
        },
	{
		title: 'Metodología de trabajo',
		content: (
			<>
				<ShinyText text="Tareas organizadas y reuniones diarias" />
				<ShinyText text="Usamos cronogramas, dividimos funciones y nos reuníamos para evaluar avances." />
				<ShinyText text="Revisión constante y mejora continua" />
				<ShinyText text="El trabajo fue dinámico, flexible y orientado al aprendizaje colaborativo." />
			</>
		),
	},
	{
		title: 'Habilidades desarrolladas',
		content: (
			<>
				<ShinyText text="Liderazgo horizontal y empatía" />
				<ShinyText text="Compartimos responsabilidades y fomentamos el respeto mutuo." />
				<ShinyText text="Escucha activa y resiliencia grupal" />
				<ShinyText text="Mantuvimos la cohesión ante desafíos, adaptándonos como equipo." />
			</>
		),
	},
	{
		title: 'Liderazgo intercultural',
		content: (
			<>
				<ShinyText text="Comunicación efectiva en la diversidad" />
				<ShinyText text="Aprendimos a evitar malentendidos en equipos multiculturales." />
				<ShinyText text="Liderar con sensibilidad y apertura" />
				<ShinyText text="Adaptarse y mediar fueron habilidades clave para colaborar con éxito." />
			</>
		),
	},
	{
		title: 'Enfoque Glocal',
		content: (
			<>
				<ShinyText text="Pensar global, actuar local" />
				<ShinyText text="Creamos soluciones aplicables y sensibles al contexto." />
				<ShinyText text="Adaptación sin perder visión estratégica" />
				<ShinyText text="Las ideas fueron contextualizadas sin sacrificar impacto." />
			</>
		),
	},
	{
		title: 'Competencias clave',
		content: (
			<>
				<ShinyText text="Mentoría y formación en diversidad" />
				<ShinyText text="Reconocimos la importancia de guiar y aprender en contextos inclusivos." />
				<ShinyText text="Trabajo en equipo y visión ética" />
				<ShinyText text="Collaboramos desde el respeto, orientados a objetivos comunes." />
			</>
		),
	},
	{
		title: 'Oportunidades de mejora',
		content: (
			<>
				<ShinyText text="Mayor claridad desde el inicio" />
				<ShinyText text="Una guía visual al principio habría evitado confusión." />
				<ShinyText text="Más retroalimentación y conexión entre equipos" />
				<ShinyText text="Instancias de feedback y dinámicas intergrupales habrían enriquecido el proceso." />
			</>
		),
	},
	{
		title: 'Conclusión',
		content: (
			<>
				<ShinyText text="Experiencia transformadora" />
				<ShinyText text="Crecimos como profesionales con conciencia global y sentido humano." />
				<ShinyText text="Listos para liderar con propósito" />
				<ShinyText text="El proyecto nos preparó para actuar con impacto en contextos complejos." />
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
