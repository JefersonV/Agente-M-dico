const sintomasEnfermedadesComunes = [
    /* Resfriado común */
    { id: 1, nombre: 'Congestión nasal y secreción nasal' },
    { id: 2, nombre: 'Dolor de garganta' },
    { id: 3, nombre: 'Tos' },
    { id: 4, nombre: 'Estornudos' },
    { id: 5, nombre: 'Fiebre baja' },
    { id: 6, nombre: 'Fatiga y debilidad' },
    { id: 7, nombre: 'Dolores musculares' },
    /* Gripe */
    { id: 8, nombre: 'Fiebre alta (generalmente superior a 38°C)' },
    { id: 9, nombre: 'Escalofríos y sudores' },
    { id: 10, nombre: 'Dolor de cabeza' },
    { id: 11, nombre: 'Dolor muscular y de cuerpo' },
    { id: 12, nombre: 'Congestión nasal' },
    { id: 13, nombre: 'Dolor de garganta'},
    { id: 14, nombre: 'Tos seca y persistente' },
    { id: 15, nombre: 'Fatiga y debilidad' },
    /* Alergias */
    { id: 16, nombre: 'Tos seca y persistente' },
    { id: 17, nombre: 'Sibilancias (ruido agudo al respirar)' },
    { id: 18, nombre: 'Opresión en el pecho' },
    { id: 19, nombre: 'Dificultad para respirar o respiración rápida y superifical' },
    { id: 20, nombre: 'Fatiga y debilidad' },
    { id: 21, nombre: 'Dificultad para hablar debido a la falta de aire' },
    /* Hipertensión arterial */
    { id: 22, nombre: 'Dolor de cabeza, especialmente en la parte posterior de la cabeza' },
    { id: 23, nombre: 'Mareo y aturdimiento' },
    { id: 24, nombre: 'Visión borrosa o doble' },
    { id: 25, nombre: 'Zumbido en los oídos' },
    { id: 26, nombre: 'Dificultad para respirar' },
    { id: 27, nombre: 'Palpitaciones cardíacas' },
    { id: 28, nombre: 'Fatiga y debilidad' },
    /* Diabetes tipo 2 */
    { id: 29, nombre: 'Sed frecuente y aumento de la micción' },
    { id: 30, nombre: 'Fatiga y debilidad' },
    { id: 31, nombre: 'Visión borrosa' },
    { id: 32, nombre: 'Entumecimiento u hormigueo en manos y pies' },
    { id: 33, nombre: 'Heridas que tardan en cicatrizar' },
    { id: 34, nombre: 'Infecciones frecuentes, especialmente de la piel y las encías' },
    { id: 35, nombre: 'Aumento de peso, especialmente en la zona abdominal' },
    /*Obesidad  */
    { id: 36, nombre: 'Aumento de peso, especialmente en la zona abdominal' },
    { id: 37, nombre: 'Dificultad para respirar o respiración superficial' },
    { id: 38, nombre: 'Sudoración excesiva' },
    { id: 39, nombre: 'Dolor en las articulaciones, especialmente en las rodillas y la espalda' },
    { id: 40, nombre: 'Problemas de sueño, como apnea del sueño' },
    { id: 41, nombre: 'Problemas de salud relacionados con la obesidad, como diabetes, hipertensión arterial y enfermedad cardíaca' },
    /* Depresión */
    { id: 42, nombre: 'Tristeza persistente o vacío emocional' },
    { id: 43, nombre: 'Pérdida de interés o placer en actividades que antes eran agradables' },
    { id: 44, nombre: 'Cambios en el apetito, como aumento o disminución del apetito' },
    { id: 45, nombre: 'Insomnio o somnolencia excesiva' },
    { id: 46, nombre: 'Fatiga y debilidad' },
    { id: 47, nombre: 'Sentimientos de inutilidad o culpa excesiva' },
    { id: 48, nombre: 'Dificultad para concentrarse o tomar decisiones' },
    { id: 49, nombre: 'Pensamientos de muerte o suicidio' },
    /* Ansiedad */
    { id: 50, nombre: 'Preocupación excesiva o constante sobre eventos futuros' },
    { id: 51, nombre: 'Sensación de tensión o nerviosismo' },
    { id: 52, nombre: 'Agitación o inquietud' },
    { id: 53, nombre: 'Fatiga y debilidad' },
    { id: 54, nombre: 'Dificultad para concentrarse o tomar decisiones' },
    { id: 55, nombre: 'Problemas de sueño, como insomnio o sueño interrumpido' },
    { id: 56, nombre: 'Síntomas físicos, como sudoración, temblores, dolores de cabeza y molestias gastrointestinales' },
    /* Acidez estomacal */
    { id: 57, nombre: 'Dolor o sensación de ardor en el pecho y/o la garganta' },
    { id: 58, nombre: 'Regurgitación de alimentos o líquidos ácidos en la boca' },
    { id: 59, nombre: 'Dificultad para tragar' },
    { id: 60, nombre: 'Náuseas y vómitos' },
    { id: 61, nombre: 'Sensación de plenitud o hinchazón abdominal después de comer' },
    { id: 62, nombre: 'Tos seca o ronquera, especialmente por la noche' },
    { id: 63, nombre: 'Dolor de garganta o sensación de tener un bulto en la garganta' },
    /* Conjuntivitis */
    { id: 64, nombre: 'Enrojecimiento del ojo' },
    { id: 65, nombre: 'Picazón, ardor o sensación de quemazón en el ojo afectado' },
    { id: 66, nombre: 'Lagrimeo excesivo' },
    { id: 67, nombre: 'Secreción oculares que pueden ser claras, amarillas o verdes' },
    { id: 68, nombre: 'Sensibilidad a la luz' },
    { id: 69, nombre: 'Visión borrosa' },
    /* Gastroenteritis */
    { id: 70, nombre: 'Náuseas y vómitos' },
    { id: 71, nombre: 'Diarrea acuosa' },
    { id: 72, nombre: 'Dolor abdominal y calambres' },
    { id: 73, nombre: 'Fiebre ' },
    { id: 74, nombre: 'Pérdida de apetito' },
    { id: 75, nombre: 'Fatiga y debilidad' },
    { id: 76, nombre: 'Dolor de cabeza y muscular' }
  ]

  sintomasEnfermedadesComunes.forEach(sintoma => {
    const primeraPalabra = sintoma.nombre.split(' ')[0];
    console.log(`La primera palabra del síntoma ${sintoma.id} es "${primeraPalabra}"`);
  });

  const sintomaCompleto = sintomasEnfermedadesComunes.map(enfermedad =>
    console.log(enfermedad.nombre)
  )

  const sintomasComunes = sintomasEnfermedadesComunes.map(enfermedad => enfermedad.nombre.split(' ')[0]);

  //Filtra no repetidos
  const repetidos = sintomasComunes.filter(word => word != word)

  console.log('repeat',repetidos)

  console.log('Array primera palabra', sintomasComunes);
  const sintomasUnicos = [...new Set(sintomasComunes)];
  console.log('Repeat',sintomasUnicos);
  
  // console.log(sintomasEnfermedadesComunes)

export { sintomasEnfermedadesComunes, sintomasComunes, sintomasUnicos, sintomaCompleto }