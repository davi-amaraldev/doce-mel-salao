
# Fluxo de Desenvolvimento — Salão Doce Mel

**Projeto:** Salão Doce Mel  
**Instituição:** Centro Universitário de João Pessoa (UNIPÊ)  
**Curso:** Engenharia de Software  
**Professor:** Daniel Brandão  
**Período:** 11/11/2026 a 25/11/2026  
**Responsável pela organização:** Davi Amaral  
**Status:** Em desenvolvimento

---

## 1. Objetivo

Este documento estabelece o fluxo de desenvolvimento do projeto Salão Doce Mel, definindo as etapas, responsabilidades, prazos e critérios de conclusão das atividades.

O objetivo é garantir que o desenvolvimento aconteça de maneira organizada, colaborativa e dentro do prazo estabelecido.

O projeto será desenvolvido exclusivamente com HTML, CSS e JavaScript, sem utilização de backend, APIs ou banco de dados.

## 2. Metodologia

O projeto utilizará uma adaptação simplificada de práticas ágeis, com organização das tarefas por meio de um quadro Kanban no Jira.

O desenvolvimento será dividido em quatro etapas, com entregas específicas e revisões contínuas.

### Fluxo do Kanban

| Coluna | Descrição |
|--------|-----------|
| A fazer | Tarefas planejadas que ainda não foram iniciadas |
| Em andamento | Tarefas que estão sendo desenvolvidas |
| Em revisão | Tarefas finalizadas que precisam ser verificadas |
| Concluído | Tarefas revisadas e aprovadas |

Cada tarefa deverá conter:

- Um título objetivo.
- Uma descrição do que precisa ser realizado.
- Um responsável principal.
- Um prazo de conclusão.
- Critérios de aceitação.

As tarefas deverão ser movimentadas no Jira conforme o andamento do desenvolvimento.

## 3. Organização da equipe

| Integrante | Responsabilidade inicial |
|------------|--------------------------|
| Davi Amaral | Liderança, documentação, organização, revisão e desenvolvimento |
| Julia | UX/UI, identidade visual e prototipação no Figma |
| Jayane | Desenvolvimento front-end e colaboração na implementação |
| Vitória | Desenvolvimento front-end e colaboração na implementação |
| Melina | Desenvolvimento front-end e colaboração nos testes |

A distribuição poderá ser ajustada conforme a evolução do projeto.

Cada integrante será responsável por manter suas tarefas atualizadas no Jira e comunicar possíveis dificuldades.

O líder acompanhará o andamento das atividades, auxiliará na resolução de problemas e realizará a revisão das entregas.

---

## 4. Cronograma de desenvolvimento

O desenvolvimento acontecerá entre os dias 11 e 25 de novembro de 2026.

### Etapa 1 — Planejamento e estruturação

**Período:** 11/11 a 13/11  
**Objetivo:** Estabelecer as bases necessárias para iniciar a implementação.

#### Atividades

- [ ] Revisar o escopo do projeto.
- [ ] Definir as páginas e seções necessárias.
- [ ] Definir os conteúdos que serão utilizados.
- [ ] Organizar o repositório GitHub.
- [ ] Documentar o fluxo de desenvolvimento.
- [ ] Criar e organizar as tarefas no Jira.
- [ ] Definir a estrutura inicial dos arquivos.
- [ ] Elaborar os primeiros wireframes no Figma.
- [ ] Distribuir as atividades da próxima etapa.

#### Entregáveis

- Escopo do projeto definido.
- Quadro Kanban organizado.
- Repositório preparado para desenvolvimento.
- Estrutura inicial das páginas definida.
- Wireframes iniciais disponíveis.

#### Critérios de conclusão

A etapa será considerada concluída quando a equipe compreender o escopo do projeto, as atividades estiverem organizadas e houver uma estrutura definida para iniciar o desenvolvimento.

### Etapa 2 — Design e implementação inicial

**Período:** 14/11 a 17/11  
**Objetivo:** Transformar o planejamento em uma interface visual inicial.

#### Atividades

- [ ] Finalizar a proposta visual no Figma.
- [ ] Definir cores, tipografia e componentes.
- [ ] Estruturar as páginas utilizando HTML semântico.
- [ ] Criar os arquivos de estilização.
- [ ] Implementar cabeçalho e navegação.
- [ ] Implementar as seções principais.
- [ ] Aplicar os primeiros estilos.
- [ ] Organizar imagens e demais recursos visuais.
- [ ] Revisar a estrutura desenvolvida.

#### Entregáveis

- Protótipo visual definido.
- Páginas HTML estruturadas.
- Estilização inicial aplicada.
- Componentes principais implementados.

#### Critérios de conclusão

A etapa será considerada concluída quando as principais páginas e seções estiverem estruturadas e a interface apresentar uma identidade visual coerente com o protótipo.

### Etapa 3 — Desenvolvimento e integração

**Período:** 18/11 a 21/11  
**Objetivo:** Concluir a implementação e integrar as contribuições da equipe.

#### Atividades

- [ ] Finalizar a estilização das páginas.
- [ ] Implementar a responsividade.
- [ ] Desenvolver as interações necessárias em JavaScript.
- [ ] Verificar a navegação entre páginas e seções.
- [ ] Integrar os componentes desenvolvidos.
- [ ] Revisar o código HTML, CSS e JavaScript.
- [ ] Corrigir problemas identificados durante a integração.
- [ ] Abrir e revisar os Pull Requests.
- [ ] Consolidar uma versão funcional do site.

#### Entregáveis

- Interface funcional.
- Layout responsivo.
- Interações implementadas.
- Contribuições integradas ao projeto.

#### Critérios de conclusão

A etapa será considerada concluída quando as funcionalidades previstas no escopo estiverem implementadas, a navegação estiver funcionando e as alterações necessárias estiverem integradas.

### Etapa 4 — Testes, ajustes e entrega

**Período:** 22/11 a 25/11  
**Objetivo:** Validar o projeto e preparar sua entrega final.

#### Atividades

- [ ] Testar a navegação do site.
- [ ] Verificar o comportamento das interações.
- [ ] Testar a interface em diferentes tamanhos de tela.
- [ ] Corrigir problemas visuais.
- [ ] Verificar imagens, textos e links.
- [ ] Revisar a semântica HTML.
- [ ] Verificar possíveis erros de JavaScript.
- [ ] Atualizar o README e a documentação.
- [ ] Revisar as tarefas do Jira.
- [ ] Preparar a apresentação do projeto.
- [ ] Validar a versão final com a equipe.

#### Entregáveis

- Versão final revisada.
- Documentação atualizada.
- Quadro Jira atualizado.
- Material preparado para apresentação.

#### Critérios de conclusão

A etapa será considerada concluída quando o projeto atender aos requisitos definidos, não apresentar problemas críticos conhecidos e estiver pronto para apresentação e entrega.

---

## 5. Fluxo de trabalho no GitHub

O desenvolvimento será realizado por meio de branches individuais, evitando alterações diretas na branch principal.

### 5.1 Estrutura das branches

A branch `main` será utilizada para manter a versão principal e estável do projeto.

As demais branches deverão seguir o padrão:

`nome/tipo/descricao`

Exemplos:

- `daviamaraldev/docs/development-workflow`
- `julia/feat/header`
- `jayane/feat/services-section`
- `vitoria/style/responsive-layout`
- `melina/fix/mobile-navigation`

Esses nomes são apenas exemplos. Cada branch deverá corresponder a uma atividade real do projeto.

### 5.2 Processo de desenvolvimento

1. Atualizar a branch `main` local.
2. Criar uma branch para a tarefa.
3. Desenvolver as alterações necessárias.
4. Testar o que foi implementado.
5. Realizar os commits.
6. Enviar a branch ao GitHub.
7. Abrir um Pull Request para a `main`.
8. Solicitar a revisão.
9. Corrigir possíveis observações.
10. Integrar as alterações após aprovação.

### 5.3 Padrão de commits

Os commits deverão seguir uma convenção simplificada:

| Tipo | Utilização |
|------|------------|
| `feat` | Implementação de funcionalidades |
| `fix` | Correção de problemas |
| `docs` | Alterações na documentação |
| `style` | Alterações visuais e formatação |
| `refactor` | Reorganização do código |
| `chore` | Manutenção e organização |

Exemplos:

`feat: add services section`

`fix: correct mobile navigation`

`docs: add development workflow`

### 5.4 Revisão de Pull Requests

Antes de integrar uma alteração, deverão ser verificados:

- Se a tarefa atende ao que foi solicitado.
- Se o código está organizado.
- Se a alteração funciona corretamente.
- Se não existem arquivos desnecessários.
- Se não há conflitos com outras alterações.
- Se a interface está coerente com o restante do projeto.

O líder será responsável por coordenar as revisões, podendo solicitar a colaboração dos demais integrantes.

---

## 6. Comunicação e acompanhamento

A comunicação da equipe acontecerá principalmente pelo WhatsApp, enquanto as atividades serão registradas e acompanhadas no Jira.

O GitHub será utilizado para versionamento, revisão e integração do código.

### Regras de comunicação

- Informar quando iniciar uma tarefa.
- Comunicar dificuldades que possam comprometer o prazo.
- Evitar desenvolver a mesma atividade que outro integrante sem alinhamento.
- Avisar quando um Pull Request estiver pronto para revisão.
- Manter o status das tarefas atualizado.
- Respeitar os prazos combinados.

Não será necessário realizar reuniões diárias obrigatórias.

O acompanhamento poderá acontecer por mensagens, com revisões mais completas ao final de cada etapa.

## 7. Critérios gerais de conclusão

Uma tarefa só poderá ser considerada concluída quando:

- [ ] O que foi solicitado estiver implementado.
- [ ] O resultado tiver sido testado.
- [ ] Não houver problemas conhecidos que impeçam seu funcionamento.
- [ ] O código estiver organizado e compreensível.
- [ ] As alterações estiverem enviadas ao GitHub.
- [ ] A revisão necessária tiver sido realizada.
- [ ] O Pull Request tiver sido integrado, quando aplicável.
- [ ] A tarefa estiver atualizada no Jira.

## 8. Gestão de prazos

Os prazos definidos neste documento serão utilizados como referência para acompanhar a evolução do projeto.

Caso uma atividade apresente dificuldades, o responsável deverá comunicar a situação o quanto antes.

A equipe poderá redistribuir tarefas ou ajustar prioridades, desde que o prazo final de 25/11/2026 seja preservado.

Durante a etapa final, novas funcionalidades não deverão ser adicionadas, exceto quando forem indispensáveis para atender aos requisitos do projeto.

A prioridade será corrigir problemas, validar o funcionamento e finalizar a documentação.

## 9. Entrega final

A entrega final está prevista para **25 de novembro de 2026**.

Até essa data, o projeto deverá apresentar:

- Interface web implementada.
- Páginas e seções previstas no escopo.
- Navegação funcional.
- Layout responsivo.
- Interações em JavaScript, quando necessárias.
- Código versionado e organizado.
- Documentação atualizada.
- Repositório GitHub com a versão final.
- Material necessário para apresentação.

A validação final será realizada considerando os objetivos acadêmicos, os requisitos definidos e a qualidade geral da implementação.

---

**Documento:** Fluxo de Desenvolvimento  
**Projeto:** Salão Doce Mel  
**Versão:** 1.0  
**Data de criação:** 11/11/2026  
**Responsável:** Davi Amaral
