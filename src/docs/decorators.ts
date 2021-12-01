import { ApiHeader, ApiOperation, ApiProperty } from "@nestjs/swagger";

export const OasAppVersionHeader = () => ApiHeader({
  name: 'X-App-Version',
  description: 'A versão do aplicativo cliente que se conecta. A versão fornecida deve estar em conformidade com o padrão de versionamento semântico.'
});

export const OasAuthOperation = () => ApiOperation({
  summary: '[Autenticação] Realiza a autenticação com o Google OAuth2 API.',
  description: 'Esta API verifica se um determinado Token ID é válido e retorna um Bearer token que possa ser utilizado para realizar requisições futuras ao Seja UPE API.'
});

export const OasIdTokenProperty = () => ApiProperty({
  description: 'Token enviado pelo Google ao autenticar.',
  example: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjkzNDFhYmM0MDkyYjZmYzAzOGU0MDNjOTEwMjJkZDNlNDQ1MzliNTYiLCJ0eXAiO...'
})

export const OasRelationsProperty = () => ApiProperty({
  description: 'Customiza retorno das informações do Campus.',
  example: ['courses', 'courses.professors']
})

export const OasCourseIdProperty = () => ApiProperty({
  description: 'Referência de um curso pelo seu ID.',
  example: 2
})

export const OasValueProperty = () => ApiProperty({
  description: 'Avaliação referente a popularidade de curso.',
  example: 'like'
})

export const OasCreatedAtProperty = () => ApiProperty({
  description: 'Momento em que o objeto foi criado no banco de dados.',
  example: 1638377733776
})

export const OasUpdatedAtProperty = () => ApiProperty({
  description: 'Momento em que o objeto é atualizado no banco de dados.',
  example: 1638378459598
})

export const OasNameCampusProperty = () => ApiProperty({
  description: 'Nome de um Campus da Universidade de Pernambuco.',
  example: 'Campus Garanhuns'
})

export const OasDescriptionCampusProperty = () => ApiProperty({
  description: 'Descrição de um Campus da Universidade de Pernambuco.',
  example: 'A Universidade de Pernambuco – Campus Garanhuns foi criada pelo Dec. nº 1357 de 28/12/1966, pelo então Governador do Estado, Exmo. Sr. Dr. Paulo Guerra. Desde aquela época, o Campus Garanhuns, que ficou vinculada à Fundação de Ensino Superior de Pernambuco ­- FESP/PE – hoje Universidade de Pernambuco, foi autorizada pelo Conselho Estadual de Educação pela Resolução nº 10 de 24/05/1967.'
})

export const OasLatitudePropery = () => ApiProperty({
  description: 'Latitude referente a localicação de um Campus.',
  example: -8.88307519594599
})

export const OasLongitudePropery = () => ApiProperty({
  description: 'Longitude referente a localicação de um Campus.',
  example: -36.4964357460306
})