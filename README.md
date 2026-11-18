# Salão Doce Mel

Site institucional do Salão Doce Mel, desenvolvido para apresentar o espaço, seus serviços e canais de contato em uma interface responsiva.

**Site:** [doce-mel-salao.vercel.app](https://doce-mel-salao.vercel.app/)

## Sobre o projeto

O projeto é uma atividade acadêmica do curso de Engenharia de Software do Centro Universitário de João Pessoa (UNIPÊ). Seu objetivo é apresentar o salão, seus diferenciais, eventos, pacotes e depoimentos, além de facilitar a solicitação de orçamento.

## Tecnologias

- HTML5, CSS3 e JavaScript vanilla.
- [Tailwind CSS](https://tailwindcss.com/) para estilização.
- [Vite](https://vite.dev/) para desenvolvimento e build multipágina.
- Fontes Cormorant Garamond e Montserrat, distribuídas pelo Fontsource.

## Funcionalidades

- Página inicial e páginas institucionais: Quem Somos, Diferenciais, Eventos, Pacotes e Depoimentos.
- Navegação responsiva com menu para telas menores.
- Calendário para escolher a data desejada e encaminhá-la ao formulário de contato.
- Formulário de orçamento com validação e mensagem preparada para o WhatsApp; o envio é confirmado pelo usuário no aplicativo.
- Preservação temporária dos dados do formulário na sessão do navegador, quando o armazenamento está disponível.

O calendário não consulta disponibilidade real: a data escolhida deve ser confirmada pelo salão. O projeto não possui backend nem banco de dados.

## Estrutura do repositório

```text
.
├── README.md
├── docs/                       # Documentação, referências de design e QA
└── web/
    ├── package.json            # Dependências e scripts
    ├── package-lock.json
    ├── vite.config.js          # Configuração do build multipágina
    └── src/
        ├── index.html
        ├── quem-somos.html
        ├── diferenciais.html
        ├── eventos.html
        ├── pacotes.html
        ├── depoimentos.html
        ├── disponibilidade.html
        ├── contato.html
        ├── assets/             # Fotografias
        ├── css/                # Estilos
        └── js/                 # Menu, calendário e formulário
```

## Instalação e execução local

É necessário ter Git e Node.js `^20.19.0` ou `>=22.12.0`, conforme o `package.json`.

```bash
git clone https://github.com/davi-amaraldev/doce-mel-salao.git
cd doce-mel-salao
npm ci --prefix web
npm run dev --prefix web
```

Abra no navegador o endereço local informado pelo Vite. Para encerrar o servidor, pressione `Ctrl+C` no terminal.

## Build de produção

```bash
npm run build --prefix web
npm run preview --prefix web
```

O build gera as páginas e os recursos em `web/dist/`. O comando `preview` permite conferir localmente o resultado gerado.

## Deploy na Vercel

O site está disponível na [Vercel](https://doce-mel-salao.vercel.app/). Para configurar um deploy a partir deste repositório, utilize `web` como diretório raiz do projeto, `npm run build` como comando de build e `dist` como diretório de saída. Essas opções correspondem aos scripts e à configuração do Vite presentes no repositório.

## Equipe

| Integrante | Função | Responsabilidades |
| --- | --- | --- |
| Davi Amaral | Tech Lead e Desenvolvedor Front-end | Liderança técnica, implementação do frontend, integração das funcionalidades e organização do desenvolvimento. |
| Júlia | UX/UI Designer | Experiência do usuário, interface visual e identidade visual. |
| Jayane | Quality Assurance (QA) | Testes, identificação de bugs e validação das funcionalidades. |
| Vitória | Quality Assurance (QA) | Testes, identificação de bugs e validação das funcionalidades. |

## Contribuição e organização

O projeto utiliza GitHub Flow: cada tarefa é desenvolvida em uma branch própria e integrada à `main` por Pull Request, após testes e revisão, com Squash and Merge. As atividades são acompanhadas em um quadro Kanban no Jira.

1. Atualize a `main` local e crie uma branch para a tarefa, seguindo o padrão `nome/tipo/descricao`.
2. Implemente e teste a alteração, incluindo o build quando aplicável.
3. Faça commits com prefixos como `feat`, `fix`, `docs`, `style`, `refactor` ou `chore` e envie a branch.
4. Abra um Pull Request para `main`, solicite revisão e resolva as observações antes da integração.
5. Atualize a tarefa no quadro conforme o andamento.

Mais detalhes sobre a organização e os critérios de revisão estão em [docs/development-workflow.md](docs/development-workflow.md). A composição e as responsabilidades atuais da equipe são as descritas neste README.
