const sintomasEnfermedadesComunes = [
    { id: 1, nombre: 'Congestión nasal y secreción nasal' },
    { id: 2, nombre: 'Dolor de garganta' },
    { id: 3, nombre: 'Tos' },
    { id: 4, nombre: 'Estornudos' },
    { id: 5, nombre: 'Fiebre baja' },
    { id: 6, nombre: 'Fatiga y debilidad' },
    { id: 7, nombre: 'Dolores musculares' },
    { id: 8, nombre: 'Fiebre alta (generalmente superior a 38°C)' },
    { id: 9, nombre: 'Escalofríos y sudores' },
    { id: 10, nombre: 'Dolor de cabeza' },
    { id: 11, nombre: 'Dolor muscular y de cuerpo' },
    { id: 12, nombre: 'Congestión nasal' },
    { id: 13, nombre: 'Tos seca y persistente' },
    { id: 14, nombre: 'Falta de aire o sibilancias en casos de alergias respiratorias graves' },
    { id: 15, nombre: 'Sibilancias (ruido agudo al respirar)' },
    { id: 16, nombre: 'Opresión en el pecho' },
    { id: 17, nombre: 'Dificultad para respirar o respiración rápida y superficial' },
    { id: 18, nombre: 'Dificultad para hablar debido a la falta de aire' },
    { id: 19, nombre: 'Mareo y aturdimiento' },
    { id: 20, nombre: 'Visión borrosa o doble' },
    { id: 21, nombre: 'Zumbido en los oídos' },
    { id: 22, nombre: 'Palpitaciones cardíacas' },
    { id: 23, nombre: 'Sed frecuente y aumento de la micción' },
    { id: 24, nombre: 'Visión borrosa' },
    { id: 25, nombre: 'Entumecimiento u hormigueo en manos y pies' },
    { id: 26, nombre: 'Heridas que tardan en cicatrizar' },
    { id: 27, nombre: 'Infecciones frecuentes, especialmente de la piel y las encías' },
    { id: 28, nombre: 'Aumento de peso, especialmente en la zona abdominal' },
    { id: 29, nombre: 'Dificultad para respirar o respiración superficial' },
    { id: 30, nombre: 'Sudoración excesiva' },
    { id: 31, nombre: 'Dolor en las articulaciones, especialmente en las rodillas y la espalda' },
    { id: 32, nombre: 'Problemas de sueño, como apnea del sueño' },
    { id: 33, nombre: 'Problemas de salud relacionados con la obesidad, como diabetes, hipertensión arterial y enfermedad cardíaca' },
    { id: 34, nombre: 'Tristeza persistente o vacío emocional' },
    { id: 35, nombre: 'Pérdida de interés o placer en actividades que antes eran agradables' },
    { id: 36, nombre: 'Cambios en el apetito, como aumento o disminución del apetito' },
    { id: 37, nombre: 'Insomnio o somnolencia excesiva' },
    { id: 38, nombre: 'Fatiga y debilidad' },
    { id: 39, nombre: 'Sentimientos de inutilidad o culpa excesiva' },
    { id: 40, nombre: 'Dificultad para concentrarse o tomar decisiones' },
    { id: 41, nombre: 'Pensamientos de muerte o suicidio' },
    { id: 42, nombre: 'Preocupación excesiva o constante sobre eventos futuros' },
    { id: 43, nombre: 'Sensación de tensión o nerviosismo' },
    { id: 44, nombre: 'Agitación o inquietud' },
    { id: 45, nombre: 'Fatiga y debilidad' },
    { id: 46, nombre: 'Dificultad para concentrarse o tomar decisiones' },
    { id: 47, nombre: 'Problemas de sueño, como insomnio o sueño interrumpido' },
    { id: 48, nombre: 'Síntomas físicos, como sudoración, temblores, dolores de cabeza y molestias gastrointestinales' },
    { id: 49, nombre: 'Dolor o sensación de ardor en el pecho y/o la garganta' },
    { id: 50, nombre: 'Regurgitación de alimentos o líquidos ácidos en la boca' },
    { id: 51, nombre: 'Dificultad para tragar' },
    { id: 52, nombre: 'Náuseas y vómitos' },
    { id: 53, nombre: 'Sensación de plenitud o hinchazón abdominal después de comer' },
    { id: 54, nombre: 'Tos seca o ronquera, especialmente por la noche' },
    { id: 55, nombre: 'Dolor de garganta o sensación de tener un bulto en la garganta' },
    { id: 56, nombre: 'Enrojecimiento del ojo' },
    { id: 57, nombre: 'Picazón, ardor o sensación de quemazón en el ojo afectado' },
    { id: 58, nombre: 'Lagrimeo excesivo' },
    { id: 59, nombre: 'Secreción oculares que pueden ser claras, amarillas o verdes' },
    { id: 60, nombre: 'Sensibilidad a la luz' },
    { id: 61, nombre: 'Visión borrosa' },
    { id: 62, nombre: 'Náuseas y vómitos' },
    { id: 63, nombre: 'Diarrea acuosa' },
    { id: 64, nombre: 'Dolor abdominal y calambres' },
    { id: 65, nombre: 'Fiebre ' },
    { id: 66, nombre: 'Pérdida de apetito' },
    { id: 67, nombre: 'Fatiga y debilidad' },
    { id: 68, nombre: 'Dolor de cabeza y muscular' },
  ]

  sintomasEnfermedadesComunes.forEach(sintoma => {
    const primeraPalabra = sintoma.nombre.split(' ')[0];
    console.log(`La primera palabra del síntoma ${sintoma.id} es "${primeraPalabra}"`);
  });

  const sintomas = sintomasEnfermedadesComunes.map(enfermedad => enfermedad.nombre.split(' ')[0]);

  //Filtra no repetidos
  const repetidos = sintomas.filter(word => word != word)

  console.log('repeat',repetidos)

  console.log('Array primera palabra', sintomas);
  const sintomasUnicos = [...new Set(sintomas)];
  console.log('Repeat',sintomasUnicos);
  
  // console.log(sintomasEnfermedadesComunes)

export { sintomasEnfermedadesComunes, sintomas, sintomasUnicos }