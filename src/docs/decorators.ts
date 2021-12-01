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
  description: 'Token enviado pelo Google ao autenticar.'
})

export const OasEmailProperty = () => ({
  description: 'Email enviado pelo Google ao autenticar.'
})

export const OasCreatedAtProperty = () => ApiProperty({
  description: 'Momento em que o objeto foi criado no banco de dados.'
})

export const OasUpdtaedAtProperty = () => ApiProperty({
  description: 'Momento em que o objeto é atualizado no banco de dados.'
})
