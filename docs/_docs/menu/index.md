---
layout: doc
title: Menu principal
id: menu_principal
order: 2
---

### Opções

- Próximas aulas;
- Grade de horários;
- Geração de grade de horários;
- Estatísticas;
- Sair.

### Regras

**1.** Sobre a opção **Próximas aulas**:

- Deve exibir os dois próximos horários de aulas, da forma:
	- Definir como vai ser feita a passagem das aulas.
- Ao selecionar uma disciplina da listagem, redirecionar o usuário para a tela de detalhes da disciplina {% link detalhes_disciplina %}.

**3.** Cada opção deve possuir um ícone informativo. Ao selecionar a informação, cada módulo deve possuir sua respectiva informação de contexto, de acordo com o seguinte mapeamento:

- Grade de horários:

| Idioma    | Texto |
| --------- | ----- |
| Português | Esta opção dá acesso a sua grade de horários, podendo ser visualizada de forma diária ou semanal. Selecione um horário específico para obter mais detalhes |
| Inglês    | This option gives access to your schedule grid, can be viewed daily or weekly. Select a specific time for more details |
| Espanhol  | Esta opción da acceso a su cuadrícula de horarios, pudiendo ser visualizada de forma diaria o semanal. Seleccione una hora específica para obtener más detalles |

- Geração de grade de horários:

| Idioma    | Texto |
| --------- | ----- |
| Português | Esta opção dá acesso a geração a grade de horários, a qual pode ser gerada a partir dos critérios padrões ou customizáveis  |
| Inglês    | This option gives access to generation the grid of schedules, which can be generated from the standard or customizable criteria |
| Espanhol  | Esta opción da acceso a generación a la cuadrícula de horarios, la cual puede ser generada a partir de los criterios estándares o personalizables |

- Estatísticas:

| Idioma    | Texto |
| --------- | ----- |
| Português | Esta opção dá acesso as estatísticas sobre a sua formação, as quais dizem respeito ao progresso do seu curso e quais matérias são sugeridas por semestre |
| Inglês    | Esta opción da acceso a las estadísticas sobre su formación, que se refieren al progreso de su curso y qué materias se sugieren por semestre |
| Espanhol  | This option gives access to the statistics about your graduation, which relate to the progress of your course and what subjects are suggested per semester |

**4.** Ao selecionar um módulo o usuário deve ser redirecionado para sua respectiva tela, conforme o seguinte mapeamento:

- **Grade de horários:** {% link grade_horarios %};
- **Geração de grade de horários:** {% link gerar_grade_horarios %};
- **Estatísticas:** . 

**5.** Ao acionar a ação **Sair**, o usuário deve ter sua seção encerrada, sendo redirecionado para a tela de login {% link login %}.

### Internacionalização

| Português                    | Inglês                  | Espanhol                     |
| ---------------------------- | ----------------------- | ---------------------------- |
| Grade de horários            | Timetable               | Horario de horarios          |
| Geração de grade de horários | Generation of time grid | Geração de grade de horários |
| Estatísticas                 | Statistics              | Estadística                  |
| Sair                         | Log out                 | Finalizar la sesión          |

### Protótipos de tela

![Horário semanal.](img/main.PNG "Protótipo 1 - Menu principal.") *Protótipo 1 - Menu principal.*

