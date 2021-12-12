import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiGoneResponse,
  ApiHeader,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiProperty,
  ApiRequestTimeoutResponse,
  ApiTags,
  ApiUnauthorizedResponse
} from "@nestjs/swagger";

import { ApiResponse } from "./types";

//#region [ SWAGGER BASE DECORATORS ]

export const OasApiResponseSchema = (schema: any) => ({ schema: { example: schema } });

export const OasApiCreatedResponse = (schema: any) => ApiCreatedResponse(OasApiResponseSchema(schema));
export const OasApiOkResponse = (schema: any) => ApiOkResponse(OasApiResponseSchema(schema));
export const OasApiForbiddenResponse = (schema: any) => ApiForbiddenResponse(OasApiResponseSchema(schema));
export const OasApiBadRequestResponse = (schema: any) => ApiBadRequestResponse(OasApiResponseSchema(schema));
export const OasApiUnauthorizedResponse = (schema: any) => ApiUnauthorizedResponse(OasApiResponseSchema(schema));
export const OasApiNotFoundResponse = (schema: any) => ApiNotFoundResponse(OasApiResponseSchema(schema));
export const OasApiGoneResponse = (schema: any) => ApiGoneResponse(OasApiResponseSchema(schema));
export const OasApiRequestTimeoutResponse = (schema: any) => ApiRequestTimeoutResponse(OasApiResponseSchema(schema));

export const OasBearerAuth = () => ApiBearerAuth();
export const OasControllerTags = (...tags: string[]) => ApiTags(...tags);
export const OasAppVersionHeader = () => ApiHeader({
  name: 'X-App-Version',
  description: 'A versão do aplicativo cliente que se conecta. A versão fornecida deve estar em conformidade com o padrão de versionamento semântico.'
});

//#endregion

//#region [ SWAGGER PARAMETERS DEFINITIONS ]

export const OasCourseIdParam = () => ApiParam({
  name: 'courseId',
  description: 'O identificador do curso no banco de dados.'
});

export const OasCampusIdParam = () => ApiParam({
  name: 'campusId',
  description: 'O identificador do campus no banco de dados.'
});

export const OasRatingNoteParam = () => ApiParam({
  name: 'note',
  description: 'A nota variando de 1 à 5 avaliando o teste vocacional.'
});

//#endregion

//#region [ SWAGGER APIS DEFINITIONS ]

export const OasAuthOperation = () => ApiOperation({
  summary: '[Autorização] Realiza a autenticação com o Google OAuth2 API.',
  description: 'Esta API verifica se um determinado Token ID é válido e retorna um Bearer token que possa ser utilizado para realizar requisições futuras ao Seja UPE API.'
});

export const OasRatingOperation = () => ApiOperation({
  summary: '[Avaliações] Realiza a avaliação das sugestões.',
  description: 'Esta API captura avaliação imposta pelo usuário pelas sugestões inferidas após realização do questionario.'
});

export const OasPopularityOperation = () => ApiOperation({
  summary: '[Avaliações] Realiza a avaliação de um curso.',
  description: 'Esta API captura avaliação imposta pelo usuário após entrar em um curso.'
});

export const OasFetchRatingOperation = () => ApiOperation({
  summary: '[Avaliações] Realiza a requisição das avaliações do Teste Vocacional.',
  description: 'Esta API retorna o número de avaliações feitas ao teste vocacional e sua média de notas.'
});

export const OasFetchPopularityOperation = () => ApiOperation({
  summary: '[Avaliações] Realiza a requisição do nível de popularidade de um curso.',
  description: 'Esta API retorna o número de likes e dislikes que um determinado curso recebeu.'
});

export const OasCampusCoursesOperation = () => ApiOperation({
  summary: '[Campus] Realiza a requisição dos Campus e seus Cursos.',
  description: 'Esta API realiza a requisição das informações dos campus da universidade e também seus cursos, não incluindo apenas os professores.'
});

export const OasCampusOperation = () => ApiOperation({
  summary: '[Campus] Realiza a requisição das infos do Campus.',
  description: 'Esta API realiza a requisição das informações dos campus da universidade, mas não entra em detalhes sobre seus cursos.'
});

export const OasCampusCourseOperation = () => ApiOperation({
  summary: '[Campus] Realiza a requisição dos cursos de um campus.',
  description: 'Esta API realiza a requisição das informações de um determinado campus da universidade, mas não entra em detalhes sobre seus cursos.'
});

export const OasCampusContactsOperation = () => ApiOperation({
  summary: '[Campus] Realiza a requisição dos contatos de um campus.',
  description: 'Esta API realiza a requisição de todos os contatos de um determinado campus.'
});

export const OasCampusEventsOperation = () => ApiOperation({
  summary: '[Campus] Realiza a requisição dos eventos de um campus.',
  description: 'Esta API realiza a requisição de todos os eventos de um determinado campus.'
});

export const OasCourseOperation = () => ApiOperation({
  summary: '[Curso] Realiza a requisição dos cursos de um campus.',
  description: 'Esta API realiza a requisição das informações dos cursos de um determinado campus.'
});

export const OasAllCoursesOperation = () => ApiOperation({
  summary: '[Curso] Realiza a requisição de todos os cursos da universidade.',
  description: 'Esta API realiza a requisição de todos os cursos da universidade que estão ativos no momento.'
});

export const OasCourseProfessorsOperation = () => ApiOperation({
  summary: '[Curso] Realiza a requisição de todos os professores de um curso.',
  description: 'Esta API realiza a requisição de todos os docentes do curso especificado.'
});

export const OasProfessorsOperation = () => ApiOperation({
  summary: '[Professores] Realiza a requisição dos docentes da universidade.',
  description: 'Esta API realiza a requisição dos professores (docentes) de toda a universidade, todos os cursos e campus.'
});

export const OasProfessorOperation = () => ApiOperation({
  summary: '[Professores] Realiza a requisição de um docente.',
  description: 'Esta API realiza a requisição de um professor (docente) em específico.'
});

//#endregion

//#region [ SWAGGER PROPERTY DEFINITIONS ]

export const OasIdTokenProperty = () => ApiProperty({
  description: 'Token enviado pelo Google ao autenticar.',
  example: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjkzNDFhYmM0MDkyYjZmYzAzOGU0MDNjOTEwMjJkZDNlNDQ1MzliNTYiLCJ0eXAiO...'
});

export const OasRelationsProperty = () => ApiProperty({
  description: 'Customiza retorno das informações do Campus.',
  example: ['courses', 'courses.professors', 'courses.ssaGrades', 'courses.sisuGrades', 'events', 'contacts', 'socialNetworks']
});

export const OasCourseIdProperty = () => ApiProperty({
  description: 'Referência de um curso pelo seu ID.',
  example: 2
});

export const OasValueProperty = () => ApiProperty({
  description: 'Avaliação referente a popularidade de curso.',
  example: 'like'
});

export const OasCreatedAtProperty = () => ApiProperty({
  description: 'Momento em que o objeto foi criado no banco de dados.',
  example: 1638377733776
});

export const OasUpdatedAtProperty = () => ApiProperty({
  description: 'Momento em que o objeto é atualizado no banco de dados.',
  example: 1638378459598
});

export const OasNameCampusProperty = () => ApiProperty({
  description: 'Nome de um Campus da Universidade de Pernambuco.',
  example: 'Campus Garanhuns'
});

export const OasDescriptionCampusProperty = () => ApiProperty({
  description: 'Descrição de um Campus da Universidade de Pernambuco.',
  example: 'A Universidade de Pernambuco – Campus Garanhuns foi criada pelo Dec. nº 1357 de 28/12/1966, pelo então Governador do Estado, Exmo. Sr. Dr. Paulo Guerra. Desde aquela época, o Campus Garanhuns, que ficou vinculada à Fundação de Ensino Superior de Pernambuco ­- FESP/PE – hoje Universidade de Pernambuco, foi autorizada pelo Conselho Estadual de Educação pela Resolução nº 10 de 24/05/1967.'
});

export const OasLatitudePropery = () => ApiProperty({
  description: 'Latitude referente a localicação de um Campus.',
  example: -8.88307519594599
});

export const OasLongitudePropery = () => ApiProperty({
  description: 'Longitude referente a localicação de um Campus.',
  example: -36.4964357460306
});

export const OasCategoryNamePropery = () => ApiProperty({
  description: 'Nome referente a área em que o contato atende.',
  example: 'Administração'
});

export const OasFieldIconPropery = () => ApiProperty({
  description: 'Ícone que define o tipo de contato podendo ser email ou telefone.',
  example: 'phone-square-alt'
});

export const OasValueContactPropery = () => ApiProperty({
  description: 'valor que define o contato podendo ser email ou telefone.',
  example: '(87) 3866-6487'
});

export const OasNameCourseProperty = () => ApiProperty({
  description: 'Nome de um curso da Universidade de Pernambuco.',
  example: 'Engenharia de Software'
});

export const OasAboutCourseProperty = () => ApiProperty({
  description: 'Descrição sobre um curso da Universidade de Pernambuco.',
  example: 'O Curso de Bacharelado em Engenharia de Software da Universidade de Pernambuco (UPE), Campus Garanhuns, foi fundado em 2018 (aprovado na Resolução CEPE Nº 018/2018, do dia 28 de março de 2018), tendo sua primeira turma ingressante no primeiro semestre do ano de 2019. O curso é vivenciado na modalidade presencial, e suas atividades ocorrem no turno diurno (predominantemente manhã, mas algumas atividades podem ser alocadas para o período da tarde). O curso, em sua configuração atual, tem uma carga horária total de 3.345 horas, integralizáveis em quatro anos (oito semestres).'
});

export const OasProfileCourseProperty = () => ApiProperty({
  description: 'Perfil de um curso da Universidade de Pernambuco.',
  example: 'O Curso de Bacharelado em Engenharia de Software da UPE tem como objetivo principal formar profissionais capazes de atuar em todas as fases que subsidiam um processo de desenvolvimento de um produto de software, desde sua concepção, perpassando pela elicitação de requisitos e arquitetura do produto, até sua construção, validação, implantação e manutenção. Ademais, a formação abrange igualmente princípios éticos e morais fundamentais para que o profissional se entenda e se reconheça como um ser social e que busque a harmonização e o equilíbrio entre as soluções tecnológicas e a sociedade. O curso de Bacharelado em Engenharia de Software deve assegurar a formação de profissionais que: Sejam capazes de compreender, projetar e desenvolver soluções para os mais variados domínios – gestão, finanças, comércio, turismo, educação, transportes, entre outros –, e para diferentes plataformas, como Desktop, Mobile, e Web utilizando ferramentas, técnicas e métodos apropriados; Tenham uma formação embasada nas áreas de Ciências da Computação, Matemática e Produção, com vistas a produzir software de qualidade, no que tange aspectos econômicos, funcionais, sociais e ambientais; Possam atuar de forma criativa e empreendedora, formulando e combinando ideias, bem como colocando-as em prática, contribuindo para o desenvolvimento da área, além de comprometido com o desenvolvimento local e regional; Entendam a necessidade do aperfeiçoamento contínuo, com vistas a acompanhar as atualizações que o mundo contemporâneo necessita, e que as tecnologias proveem; Sejam capazes de criar soluções fundamentadas em princípios éticos, humanísticos, legais e políticos; Possam harmonizar requisitos conflitantes, e exercer técnicas de comunicação, negociação, liderança, gestão, e agir com segurança e sabedoria, frente aos desafios de custo, de tempo, de sistemas e das tecnologias empregadas.'
});

export const OasHistoryCourseProperty = () => ApiProperty({
  description: 'História de um curso da Universidade de Pernambuco.',
  example: 'O termo foi criado na década de 1960 e utilizado oficialmente em 1968 na NATO Science Committee. Sua criação surgiu numa tentativa de contornar a crise do software e dar um tratamento de engenharia (mais sistemático, controlado e de qualidade mensurável) ao desenvolvimento de sistemas de software complexos. Um sistema de software complexo se caracteriza por um conjunto de componentes abstratos de software (estruturas de dados e algoritmos) encapsulados na forma de algoritmos, funções, módulos, objetos ou agentes interconectados, compondo a arquitetura do software, que deverão ser executados em sistemas computacionais.'
});

export const OasExpertiseAreasCourseProperty = () => ApiProperty({
  description: 'Possíveis áreas de trabalho de um curso da Universidade de Pernambuco.',
  example: 'É preciso deixar claro que o termo engenharia, no curso de Engenharia de Software, está relacionado ao significado de construção, criação de produtos de alta qualidade de forma sistematizada. Ela é uma disciplina de engenharia que investiga todos os aspectos relacionados à produção de software de qualidade e economicamente viável. Logo, a engenharia de software propõe métodos sistemáticos com o uso adequado de ferramentas e técnicas, que levam em consideração o problema a ser resolvido, as necessidades dos clientes e os recursos disponíveis. O curso de Bacharelado em Engenharia de Software visa abordar tanto a teoria quanto a prática em computação, considerando a aplicação de tecnologias existentes, a utilização e a criação de métodos, de tecnologias de software e da infraestrutura de sistemas. O profissional será capaz de entender, projetar, desenvolver, testar, implantar e acompanhar o uso de soluções de software para diferentes domínios de aplicação. O que o habilita tanto para trabalhar como desenvolvedor de software em empresas que tem o desenvolvimento de software como sua atividade fim, como desempenhar suas atividades em departamentos de tecnologia da informação, desenvolvendo sistemas internamente para empresas das mais diversas áreas de atuação.'
});

export const OasJobMarketCourseProperty = () => ApiProperty({
  description: 'Mercado de trabalho de um curso da Universidade de Pernambuco.',
  example: 'O mercado de desenvolvimento de software, tanto no Brasil quanto no exterior, é fonte de grandes oportunidades. No Brasil, o mercado de TI em 2016 movimentou aproximadamente US$ 40 bilhões, R$ 132 na cotação da moeda americana em 2016 (FONTE: Mercado Brasileiro de Software, Panorama e Tendências)  . Com mais de 15.000 empresas dedicadas ao desenvolvimento, distribuição e prestação de serviços, mais da metade (aproximadamente 60%) tem como atividade principal o desenvolvimento de software. No mundo, o mercado de TI movimentou mais de US$ 2 trilhões em 2016. Na América Latina, o mercado movimentou aproximadamente US$ 105 bilhões no mesmo ano. Estes dados mostram que o mercado brasileiro ainda tem muito para crescer, mas já traz grandes oportunidades para profissionais de TI. Em específico para o mercado de desenvolvimento de software, que conta com a maior parte do faturamento do setor. Em Pernambuco contamos também com um ecosistema de empresas efervescente, conhecido como Porto Digital, que abriga 339 empresas, das quais destacam-se Accenture, Avanade, Avantia, CESAR, Globo, Pitang, Serttel, Speedmais, Stefanini e Tempest, terminando 2019 com quase 12.000 profissionais empregados. A diretoria do Porto Digital prevê que sejam abertas mais 3.200 vagas de emprego apenas em 2020. Em 2019, o faturamento das empresas embarcadas no Porto Digital chegou a R$ 2,3 bilhões – valor 23,94% maior que o faturamento do ano anterior. A meta do Porto Digital é, até 2025, ter cerca de 20 mil colaboradores distribuídos em 500 a 600 empresas no parque, com faturamento anual de R$ 3,5 bilhões (FONTE: Porto Digital). O Porto Digital também conta com escritório em Caruaru, funcionando em Parceria com o Campus Caruaru da Universidade de Pernambuco. Além disso, a região de Garanhuns é um pólo comercial, de turismo e educação na região do agreste meridional do Estado de Pernambuco, apresentando assim oportunidades para empreendimento local.'
});

export const OasIngressCourseProperty = () => ApiProperty({
  description: 'Possíveis maneiras de ingressar em um curso da Universidade de Pernambuco.',
  example: 'O processo de ingresso na Universidade de Pernambuco pode ser realizado de diversas maneiras. As duas principais são o Sistema Seriado de Avaliação (SSA) e o Sistema de Seleção Unificada (Sisu) do Ministério da Educação (MEC), com base na nota obtida pelo candidato no Exame Nacional do Ensino Médio (Enem).'
});

export const OasPpcCourseProperty = () => ApiProperty({
  description: 'Projeto pedagógico de um curso da Universidade de Pernambuco.',
  example: 'http://www.upe.br/petrolina/wp-content/uploads/2019/11/PPC_ENFERMAGEM_IMPLEMENTADO_2020_2.pdf'
});

export const OasNameEventProperty = () => ApiProperty({
  description: 'Nome de um evento de um determinado Campus.',
  example: 'SECAP'
});

export const OasLinkEventProperty = () => ApiProperty({
  description: 'Link de acesso a um evento de um determinado Campus.',
  example: 'http://www.upe.br/garanhuns/semanas-cientificas-do-agreste-pernambucano/'
});

export const OasValuePopularityProperty = () => ApiProperty({
  description: 'Avaliação referente a um curso da Universidade de Pernambuco.',
  example: 'like'
});

export const OasNameProfessorProperty = () => ApiProperty({
  description: 'Nome de um docente de um curso da Universidade de Pernambuco.',
  example: 'Helaine Solange Lins Barreiros'
});

export const OasShortbioProfessorProperty = () => ApiProperty({
  description: 'Breve descrição referente a um docente de um curso da Universidade de Pernambuco.',
  example: 'Mestre em Ciência da Computação pelo Centro de Informática da UFPE (2015) com pesquisa direcionada à Computação em Nuvem. Experiência em Ciência da Computação, com ênfase em Linguagem de Programação WEB. Possui mais de 16 anos de experiência no desenvolvimento de sistemas para empresas nacionais e internacionais, predominantemente em empresas do Porto Digital do Recife. Atualmente seus trabalhos de pesquisa focam em Arquitetura de Software.'
});

export const OasEmailProfessorProperty = () => ApiProperty({
  description: 'Email de um docente de um curso da Universidade de Pernambuco.',
  example: 'helaine.barreiros@upe.br'
});

export const OasLattesProfessorProperty = () => ApiProperty({
  description: 'Link do currículo Lattes de um docente de um curso da Universidade de Pernambuco.',
  example: 'http://lattes.cnpq.br/8314520403747891'
});

export const OasPhotoProfessorProperty = () => ApiProperty({
  description: 'Fotografia para identificação de um docente de um curso da Universidade de Pernambuco.',
  example: 'https://i.imgur.com/h257qbK.jpg'
});

export const OasAreasProfessorProperty = () => ApiProperty({
  description: 'Fotografia para identificação de um docente de um curso da Universidade de Pernambuco.',
  example: ['Engenharia', 'Ciências Exatas', 'Computação']
});

export const OasRatingProperty = () => ApiProperty({
  description: 'Avaliação referente a sugestão de cursos após realizar questionário.',
  example: 4
});

export const OasYearSsaGradeProperty = () => ApiProperty({
  description: 'O ano ao qual pertencem as notas e informações de concorrência.',
  example: 2017
});

export const OasShareholderHighestSsaGradeProperty = () => ApiProperty({
  description: 'A maior nota obtida no SSA dentre os cotistas.',
  example: 42.55
});

export const OasShareholderLowestSsaGradeProperty = () => ApiProperty({
  description: 'A menor nota obtida no SSA dentre os cotistas.',
  example: 39.44
});

export const OasHighestSsaGradeProperty = () => ApiProperty({
  description: 'A maior nota obtida no SSA em ampla concorrência.',
  example: 57.44
});

export const OasLowestSsaGradeProperty = () => ApiProperty({
  description: 'A menor nota obtida no SSA em ampla concorrência.',
  example: 49.32
});

export const OasConcurrenceSsaGradeProperty = () => ApiProperty({
  description: 'O número de pessoas concorrendo por uma única vaga.',
  example: 12
});

export const OasNameSocialProperty = () => ApiProperty({
  description: 'O nome da rede social.',
  example: 'instagram'
});

export const OasValueSocialProperty = () => ApiProperty({
  description: 'A url da rede social.',
  example: 'https://www.instagram.com/upemulticampi/'
});

export const OasYearSisuGradeProperty = () => ApiProperty({
  description: 'O ano ao qual pertencem as notas e informações de concorrência.',
  example: 2017
});

export const OasShareholderHighestSisuGradeProperty = () => ApiProperty({
  description: 'A maior nota obtida no SISU dentre os cotistas.',
  example: 43.55
});

export const OasShareholderLowestSisuGradeProperty = () => ApiProperty({
  description: 'A menor nota obtida no SISU dentre os cotistas.',
  example: 39.44
});

export const OasHighestSisuGradeProperty = () => ApiProperty({
  description: 'A maior nota obtida no SISU em ampla concorrência.',
  example: 55.65
});

export const OasLowestSisuGradeProperty = () => ApiProperty({
  description: 'A menor nota obtida no SISU em ampla concorrência.',
  example: 50.34
});

//#endregion

//#region [ SWAGGER RESPONSE SCHEMAS ]

export const OasInvalidObjectResponse = () => OasApiBadRequestResponse(new ApiResponse({
  message: 'string',
  errors: [
    {
      target: 'object',
      property: 'string',
      value: 'object',
      constraints: 'object'
    }
  ]
}));

export const OasRequestTimeoutResponse = () => OasApiRequestTimeoutResponse(new ApiResponse({
  message: 'string',
  error: 'string'
}));

export const OasOutdatedVersionResponse = () => OasApiGoneResponse(new ApiResponse({
  message: 'string',
  error: 'string'
}));

export const OasForbiddenResponse = () => OasApiForbiddenResponse(new ApiResponse({
  message: 'string',
  error: 'string'
}));

export const OasAuthResponse = () => OasApiOkResponse(new ApiResponse({
  bearer: 'string',
  payload: {
    iss: 'string',
    at_hash: 'string',
    email_verified: 'boolean',
    sub: 'string',
    azp: 'string',
    email: 'string',
    profile: 'string',
    picture: 'string',
    name: 'string',
    given_name: 'string',
    family_name: 'string',
    aud: 'string',
    iat: 'number',
    exp: 'number',
    nonce: 'string',
    hd: 'string',
    locale: 'string'
  }
}));

export const OasAuthUnauthorizedResponse = () => OasApiUnauthorizedResponse(new ApiResponse({
  message: 'string',
  error: 'string'
}));

export const OasCampusResponse = () => OasApiOkResponse(new ApiResponse([{
  name: 'string',
  description: 'string',
  latitude: 'string',
  longitude: 'string',
  events: [
    {
      name: 'string',
      link: 'string'
    }
  ],
  socialNetworks: [
    {
      categoryName: 'string',
      fieldIcon: 'string',
      value: 'string'
    }
  ],
  contacts: [
    {
      name: 'string',
      value: 'string'
    }
  ]
}]));

export const OasCampusCoursesResponse = () => OasApiOkResponse(new ApiResponse([{
  name: 'string',
  description: 'string',
  latitude: 'string',
  longitude: 'string',
  events: [
    {
      name: 'string',
      link: 'string'
    }
  ],
  socialNetworks: [
    {
      categoryName: 'string',
      fieldIcon: 'string',
      value: 'string'
    }
  ],
  contacts: [
    {
      name: 'string',
      value: 'string'
    }
  ],
  courses: [
    {
      name: 'string',
      about: 'string',
      profile: 'string',
      history: 'string',
      expertiseAreas: 'string',
      jobMarket: 'string',
      ingress: 'string',
      ppcUrl: 'string',
      ssaGrades: [
        {
          year: 'number',
          shareholderHighest: 'string',
          shareholderLowest: 'string',
          highest: 'string',
          lowest: 'string',
          concurrence: 'number'
        }
      ],
      sisuGrades: [
        {
          year: 'number',
          shareholderHighest: 'string',
          shareholderLowest: 'string',
          highest: 'string',
          lowest: 'string'
        }
      ],
      professors: [
        {
          name: 'string',
          shortbio: 'string',
          email: 'string',
          lattesUrl: 'string',
          photoUrl: 'string',
          areas: 'string[]'
        }
      ]
    }
  ]
}]));

export const OasSingleCampusResponse = () => OasApiOkResponse(new ApiResponse({
  name: 'string',
  description: 'string',
  latitude: 'string',
  longitude: 'string',
  events: [
    {
      name: 'string',
      link: 'string'
    }
  ],
  socialNetworks: [
    {
      categoryName: 'string',
      fieldIcon: 'string',
      value: 'string'
    }
  ],
  contacts: [
    {
      name: 'string',
      value: 'string'
    }
  ]
}));

export const OasCampusCourseResponse = () => OasApiOkResponse(new ApiResponse([
  {
    name: 'string',
    about: 'string',
    profile: 'string',
    history: 'string',
    expertiseAreas: 'string',
    jobMarket: 'string',
    ingress: 'string',
    ppcUrl: 'string',
    ssaGrades: [
      {
        year: 'number',
        shareholderHighest: 'string',
        shareholderLowest: 'string',
        highest: 'string',
        lowest: 'string',
        concurrence: 'number'
      }
    ],
    sisuGrades: [
      {
        year: 'number',
        shareholderHighest: 'string',
        shareholderLowest: 'string',
        highest: 'string',
        lowest: 'string'
      }
    ],
    professors: [
      {
        name: 'string',
        shortbio: 'string',
        email: 'string',
        lattesUrl: 'string',
        photoUrl: 'string',
        areas: 'string[]'
      }
    ]
  }
]));

export const OasCampusEventsResponse = () => OasApiOkResponse(new ApiResponse([
  {
    name: 'string',
    link: 'string'
  }
]));

export const OasCampusContactsResponse = () => OasApiOkResponse(new ApiResponse([
  {
    name: 'string',
    value: 'string'
  }
]));

export const OasAllCoursesResponse = () => OasApiOkResponse(new ApiResponse([
  {
    name: 'string',
    about: 'string',
    profile: 'string',
    history: 'string',
    expertiseAreas: 'string',
    jobMarket: 'string',
    ingress: 'string',
    ppcUrl: 'string',
    ssaGrades: [
      {
        year: 'number',
        shareholderHighest: 'string',
        shareholderLowest: 'string',
        highest: 'string',
        lowest: 'string',
        concurrence: 'number'
      }
    ],
    sisuGrades: [
      {
        year: 'number',
        shareholderHighest: 'string',
        shareholderLowest: 'string',
        highest: 'string',
        lowest: 'string'
      }
    ],
    professors: [
      {
        name: 'string',
        shortbio: 'string',
        email: 'string',
        lattesUrl: 'string',
        photoUrl: 'string',
        areas: 'string[]'
      }
    ]
  }
]));

export const OasCoursesResponse = () => OasApiOkResponse(new ApiResponse([
  {
    name: 'string',
    about: 'string',
    profile: 'string',
    history: 'string',
    expertiseAreas: 'string',
    jobMarket: 'string',
    ingress: 'string',
    ppcUrl: 'string',
    ssaGrades: [
      {
        year: 'number',
        shareholderHighest: 'string',
        shareholderLowest: 'string',
        highest: 'string',
        lowest: 'string',
        concurrence: 'number'
      }
    ],
    sisuGrades: [
      {
        year: 'number',
        shareholderHighest: 'string',
        shareholderLowest: 'string',
        highest: 'string',
        lowest: 'string'
      }
    ],
    professors: [
      {
        name: 'string',
        shortbio: 'string',
        email: 'string',
        lattesUrl: 'string',
        photoUrl: 'string',
        areas: 'string[]'
      }
    ]
  }
]));

export const OasCourseProfessorsResponse = () => OasApiOkResponse(new ApiResponse([
  {
    name: 'string',
    shortbio: 'string',
    email: 'string',
    lattesUrl: 'string',
    photoUrl: 'string',
    areas: 'string[]'
  }
]));

export const OasRatingResponse = () => OasApiCreatedResponse(new ApiResponse({
  note: 'number'
}));

export const OasPopularityResponse = () => OasApiCreatedResponse(new ApiResponse({
  value: 'string'
}));

export const OasFetchRatingResponse = () => OasApiOkResponse(new ApiResponse([{
  note: 'number'
}]));

export const OasFetchPopularityResponse = () => OasApiOkResponse(new ApiResponse([{
  value: 'string'
}]));

export const OasProfessorsResponse = () => OasApiOkResponse(new ApiResponse([
  {
    name: 'string',
    shortbio: 'string',
    email: 'string',
    lattesUrl: 'string',
    photoUrl: 'string',
    areas: 'string[]'
  }
]));

export const OasProfessorResponse = () => OasApiOkResponse(new ApiResponse({
  name: 'string',
  shortbio: 'string',
  email: 'string',
  lattesUrl: 'string',
  photoUrl: 'string',
  areas: 'string[]'
}));

//#endregion