/**
 * @module legalContent (site)
 * @description Fonte ÚNICA dos Termos de Uso e da Política de Privacidade.
 *
 * CÓPIA de PratileraApp/src/constants/legalContent.ts. Os dois projetos são
 * separados e não compartilham pacote, então a sincronia é MANUAL: ao mexer
 * num, copiar para o outro. Site publicando contrato diferente do app é o
 * mesmo problema que acabamos de resolver dentro do app.
 *
 * Existia em dois lugares: as telas Termos/Privacidade tinham um texto, e o
 * modal do cadastro de negócio mostrava OUTRO (`constants/terms.ts`, de
 * 19/05/2026, sem uma linha sobre planos). A pessoa aceitava um contrato e
 * lia outro pelos links do login — dois documentos divergentes valendo ao
 * mesmo tempo é justamente o que se explora depois. Agora os três pontos leem
 * daqui.
 *
 * ⚠️ Ao mudar regra que a pessoa sente no bolso ou no perfil (preço, prazo de
 * aprovação, o que o plano grátis perde, quando o evento começa a contar),
 * volte AQUI.
 *
 * ⚠️ Toda frase afirmativa vira obrigação nossa. Prazo é estimado, não
 * garantido; não prometemos revisar tudo que é publicado; não prometemos
 * disponibilidade. O que não controlamos não entra como promessa.
 *
 * Valores NÃO aparecem: os preços mudaram três vezes em 2026, e contrato que
 * cita número desatualiza sozinho. O texto remete à tela de planos.
 */

export interface LegalItem {
  text: string;
  sub?: boolean;
}

export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  items?: LegalItem[];
}

export const LEGAL_LAST_UPDATED = '2 de agosto de 2026';

// ─── Termos de Uso ───────────────────────────────────────────────────────────

export const TERMS_INTRO =
  'O Pratilera é um aplicativo de descoberta e conexão entre consumidores e prestadores de serviços, estabelecimentos e organizadores de eventos locais, desenvolvido e operado pela Keldra Tecnologia LTDA, CNPJ nº 66.274.795/0001-34 ("Pratilera", "nós" ou "nosso").\n\n' +
  'Ao criar uma conta ou utilizar o aplicativo, você ("Usuário") declara ter lido, compreendido e concordado integralmente com estes Termos de Uso e com nossa Política de Privacidade. Caso não concorde com qualquer disposição, não utilize a Plataforma.';

export const TERMS_SECTIONS: LegalSection[] = [
  {
    heading: '1. DEFINIÇÕES',
    items: [
      { text: 'Consumidor: pessoa física que utiliza a Plataforma para buscar e acessar informações de estabelecimentos, serviços e eventos.' },
      { text: 'Anunciante: pessoa física ou jurídica que cadastra e divulga seu negócio, serviço ou evento na Plataforma.' },
      { text: 'Perfil: página pública do Anunciante exibida aos Consumidores.' },
      { text: 'Conteúdo: textos, imagens e quaisquer outras informações inseridas na Plataforma pelo Usuário.' },
      { text: 'Plano: assinatura ou contratação avulsa que libera recursos adicionais ao Anunciante, na forma da seção 8.' },
    ],
  },
  {
    heading: '2. ELEGIBILIDADE E CADASTRO',
    paragraphs: [
      '2.1. A utilização da Plataforma é permitida a pessoas com capacidade civil plena. Menores de 16 anos não podem criar conta. Entre 16 e 18 anos é necessária autorização expressa do responsável legal.',
      '2.2. O cadastro exige informações verdadeiras, precisas e atualizadas. O Usuário é responsável pela veracidade dos dados informados.',
      '2.3. É permitido apenas um cadastro de Consumidor por pessoa. Um mesmo Anunciante pode manter mais de um Perfil, desde que cada um corresponda a um negócio ou evento real e distinto. Contas ou Perfis criados para burlar regras da Plataforma serão cancelados.',
      '2.4. A conta pode ser criada por e-mail e senha ou por login do Google ou da Apple. Em qualquer caso, aplicam-se integralmente estes Termos.',
      '2.5. O Usuário é responsável pelo sigilo de suas credenciais. O Pratilera não se responsabiliza por acessos indevidos decorrentes de negligência do Usuário na guarda de sua senha.',
    ],
  },
  {
    heading: '3. NATUREZA DA PLATAFORMA',
    paragraphs: [
      '3.1. O Pratilera é uma plataforma de intermediação e não presta diretamente os serviços anunciados pelos Anunciantes. A relação contratual pelos serviços se estabelece exclusivamente entre Consumidor e Anunciante.',
      '3.2. O Pratilera não garante a qualidade, segurança ou legalidade dos serviços, produtos ou eventos divulgados, nem a veracidade das informações inseridas pelos Anunciantes.',
      '3.3. Informações como avaliações, descrições, preços e horários são de responsabilidade dos respectivos Anunciantes.',
      '3.4. Informações de utilidade pública (hospitais, escolas, creches e serviços semelhantes) são compiladas de fontes oficiais, sem qualquer vínculo, patrocínio ou endosso dos órgãos citados, e podem estar desatualizadas. Confirme sempre pelos canais oficiais.',
    ],
  },
  {
    heading: '4. CADASTRO DE ANUNCIANTE E APROVAÇÃO',
    paragraphs: [
      '4.1. O cadastro como Anunciante exige documento válido (CPF ou CNPJ) e os demais dados solicitados, e está sujeito a verificação antes da publicação do Perfil.',
      '4.2. O prazo estimado de análise é de até 72 (setenta e duas) horas, podendo variar conforme o volume de pedidos e a necessidade de informações adicionais.',
      '4.3. IMPORTANTE: a contratação de um Plano não publica o Perfil. O pagamento garante o Plano contratado; a publicação depende da aprovação prevista no item 4.1. O Anunciante pode, portanto, efetuar o pagamento e permanecer em análise até a conclusão da verificação.',
      '4.4. A recusa pode ocorrer de duas formas:',
    ],
    items: [
      { text: 'Recusa para correção: indicamos o que precisa ser ajustado, e o cadastro retorna à análise assim que o Anunciante salvar as alterações.' },
      { text: 'Recusa definitiva: o cadastro não será publicado. Havendo pagamento associado, aplica-se o item 9.3.' },
    ],
  },
  {
    heading: '',
    paragraphs: [
      '4.5. A aprovação não implica endosso, atestado de qualidade ou garantia dos serviços anunciados.',
      '4.6. O Pratilera pode analisar, aprovar, recusar ou remover qualquer Perfil ou Conteúdo que viole estes Termos.',
    ],
  },
  {
    heading: '5. PERFIS NÃO RECLAMADOS E REIVINDICAÇÃO',
    paragraphs: [
      '5.1. Para que a Plataforma seja útil desde o primeiro dia em cada cidade, o Pratilera publica Perfis de negócios montados a partir de informações comerciais publicamente disponíveis, como nome, categoria, endereço, telefone e horário de funcionamento.',
      '5.2. Esses Perfis são exibidos sem fotos próprias e sem selo de verificação, e não implicam qualquer relação, parceria ou endosso entre o negócio e o Pratilera.',
      '5.3. O responsável pelo negócio pode reivindicar o Perfil pelo próprio aplicativo, passando a administrá-lo após a verificação.',
      '5.4. O responsável pode, a qualquer momento e sem necessidade de reivindicar o Perfil, solicitar sua correção ou remoção pelos canais de contato desta Plataforma.',
    ],
  },
  {
    heading: '6. RESPONSABILIDADES DO ANUNCIANTE',
    paragraphs: [
      '6.1. O Anunciante garante possuir todas as licenças, alvarás e autorizações legais necessárias para exercer a atividade divulgada.',
      '6.2. O Anunciante é integral e exclusivamente responsável pelo Conteúdo publicado em seu Perfil, incluindo imagens, descrições, preços e dados de contato.',
      '6.3. O Anunciante compromete-se a manter seus dados atualizados e a honrar os horários, preços e condições divulgados.',
      '6.4. É vedada a publicação de informações falsas, enganosas, ofensivas, discriminatórias ou que violem direitos de terceiros.',
      '6.5. O Anunciante responde perante o Pratilera por perdas decorrentes de Conteúdo publicado em violação a estes Termos ou a direitos de terceiros.',
    ],
  },
  {
    heading: '7. AVALIAÇÕES E COMENTÁRIOS',
    paragraphs: [
      '7.1. Consumidores podem registrar avaliações e comentários sobre Anunciantes. Essas avaliações devem refletir experiências reais e honestas.',
      '7.2. São vedadas avaliações falsas, injuriosas, difamatórias ou que configurem assédio. O Pratilera pode remover avaliações que violem estas diretrizes, sem que isso implique obrigação de revisar previamente todo o Conteúdo publicado.',
      '7.3. Avaliações são opinião de quem as escreve e não representam a posição do Pratilera.',
      '7.4. É proibido ao Anunciante solicitar mediante vantagem, comprar ou manipular avaliações de qualquer forma.',
    ],
  },
  {
    heading: '8. PLANOS, PAGAMENTOS E CANCELAMENTO',
    paragraphs: [
      '8.1. O uso da Plataforma como Consumidor é gratuito.',
      '8.2. Anunciar é gratuito. Os Planos pagos são opcionais e liberam recursos adicionais. Sem Plano, o Perfil permanece publicado, pode ser editado e continua aparecendo nas buscas e listas, mas não exibe as fotos enviadas, não recebe o selo de verificação, não aparece antes dos concorrentes e não dá acesso às métricas de visitas e contatos. A divulgação de eventos, por sua natureza temporária, é exclusiva dos Planos pagos.',
      '8.3. Os valores, os ciclos disponíveis (mensal, anual e evento) e o que cada Plano inclui são exibidos na tela de planos do aplicativo no momento da contratação, e prevalecem sobre qualquer outra comunicação.',
      '8.4. Os pagamentos são processados por instituição de pagamento contratada. O Pratilera não armazena dados completos de cartão.',
      '8.5. Os Planos mensal e anual são assinaturas de renovação automática, cobradas no mesmo ciclo até que sejam canceladas pelo Anunciante.',
      '8.6. A divulgação de evento é contratação avulsa, sem renovação automática. O prazo de divulgação começa a contar a partir da confirmação do pagamento, e não da aprovação prevista na seção 4.',
      '8.7. Os valores e condições dos Planos podem ser alterados mediante aviso prévio de 30 (trinta) dias, sem afetar ciclo já pago.',
      '8.8. Em caso de inadimplência, o acesso às funcionalidades pagas é suspenso até a regularização, permanecendo o Perfil publicado na forma do item 8.2.',
    ],
  },
  {
    heading: '9. CANCELAMENTO E DEVOLUÇÃO',
    paragraphs: [
      '9.1. O Anunciante pode cancelar sua assinatura a qualquer momento pelo próprio aplicativo. O cancelamento interrompe as cobranças seguintes, e o Plano permanece ativo até o fim do período já pago.',
      '9.2. Desistência antes da publicação: enquanto o Perfil não tiver sido publicado, o Anunciante pode desistir da contratação e receber a devolução integral do valor pago, mediante solicitação pelos canais de contato. A publicação do Perfil caracteriza o início da prestação do serviço contratado.',
      '9.3. Recusa definitiva: recusado definitivamente um cadastro já pago, o valor é devolvido pelo mesmo meio de pagamento.',
      '9.4. As devoluções são processadas pela instituição de pagamento contratada, e o prazo de crédito depende do meio utilizado e da instituição financeira envolvida.',
      '9.5. Fora das hipóteses dos itens 9.2 e 9.3, não há devolução, total ou proporcional, por período em que o Perfil esteve publicado, inclusive em caso de cancelamento por iniciativa do Anunciante ou de suspensão decorrente de violação destes Termos.',
      '9.6. O Anunciante contrata a divulgação como insumo de sua atividade profissional ou empresarial, e não como destinatário final.',
    ],
  },
  {
    heading: '10. PROPRIEDADE INTELECTUAL',
    paragraphs: [
      '10.1. A marca "Pratilera", o logotipo, o design da Plataforma, os algoritmos e toda a tecnologia subjacente são de propriedade exclusiva do Pratilera e protegidos pela legislação de propriedade intelectual brasileira.',
      '10.2. O Usuário concede ao Pratilera licença não exclusiva, gratuita e mundial para usar, reproduzir e exibir o Conteúdo inserido, nos limites necessários à prestação dos serviços e à divulgação da própria Plataforma, enquanto o Conteúdo estiver publicado.',
      '10.3. O Usuário declara deter todos os direitos sobre o Conteúdo publicado e que sua publicação não infringe direitos de terceiros.',
    ],
  },
  {
    heading: '11. COMUNICAÇÕES E NOTIFICAÇÕES',
    paragraphs: [
      '11.1. O Pratilera envia avisos operacionais por e-mail e por notificação no aparelho, tais como confirmação de pagamento, resultado da verificação e vencimento de Plano. Esses avisos integram o serviço, e sua entrega depende de fatores fora do nosso controle, como filtros de mensagem e as permissões configuradas no aparelho.',
      '11.2. Comunicações promocionais podem ser desativadas a qualquer momento, sem prejuízo dos avisos do item 11.1.',
    ],
  },
  {
    heading: '12. CONDUTA PROIBIDA',
    paragraphs: ['É vedado ao Usuário:'],
    items: [
      { text: 'Utilizar a Plataforma para fins ilícitos, fraudulentos ou que violem direitos de terceiros.' },
      { text: 'Inserir Conteúdo falso, difamatório, pornográfico, racista, discriminatório ou que incite a violência.' },
      { text: 'Realizar engenharia reversa, descompilar ou modificar o aplicativo.' },
      { text: 'Utilizar robôs, scrapers ou mecanismos automáticos para acessar ou extrair dados da Plataforma.' },
      { text: 'Tentar comprometer a segurança, integridade ou disponibilidade da Plataforma.' },
      { text: 'Criar contas falsas ou personificar terceiros.' },
    ],
  },
  {
    heading: '13. ISENÇÃO E LIMITAÇÃO DE RESPONSABILIDADE',
    paragraphs: [
      '13.1. A Plataforma é disponibilizada "no estado em que se encontra". O Pratilera não garante disponibilidade ininterrupta, ausência de erros, nem qualquer resultado comercial ao Anunciante, como número de visitas, contatos, propostas ou vendas.',
      '13.2. O Pratilera pode alterar, suspender ou descontinuar funcionalidades. Descontinuado um serviço pago, os ciclos já pagos são honrados até o fim ou devolvidos proporcionalmente.',
      '13.3. O Pratilera não será responsável por danos decorrentes da relação entre Consumidores e Anunciantes ou de erros no Conteúdo inserido por Usuários.',
      '13.4. Nos limites permitidos pela legislação aplicável, a responsabilidade total do Pratilera perante o Usuário fica limitada ao valor por ele pago ao Pratilera nos 3 (três) meses anteriores ao evento que gerou o dano.',
    ],
  },
  {
    heading: '14. RESCISÃO',
    paragraphs: [
      '14.1. O Usuário pode encerrar sua conta a qualquer momento nas configurações do aplicativo.',
      '14.2. O Pratilera pode suspender ou encerrar a conta do Usuário, a qualquer tempo, em caso de violação destes Termos, conduta fraudulenta ou por determinação legal ou judicial.',
      '14.3. O encerramento de conta de Anunciante com Plano ativo mantém o acesso ao Perfil até o final do período pago.',
    ],
  },
  {
    heading: '15. ALTERAÇÕES AOS TERMOS',
    paragraphs: [
      'O Pratilera pode atualizar estes Termos a qualquer momento. Alterações relevantes serão comunicadas pelo aplicativo com antecedência mínima de 15 (quinze) dias. O uso continuado da Plataforma após a vigência das alterações implica aceitação dos novos Termos. A tolerância quanto ao descumprimento de qualquer cláusula não implica renúncia ao direito de exigi-la posteriormente.',
    ],
  },
  {
    heading: '16. LEI APLICÁVEL E FORO',
    paragraphs: [
      'Estes Termos são regidos pelas leis da República Federativa do Brasil. As partes elegem o foro da comarca de Belo Horizonte, Estado de Minas Gerais, como competente para dirimir quaisquer controvérsias, ressalvado o direito do consumidor de acionar o foro de seu domicílio.',
    ],
  },
  {
    heading: '17. CONTATO',
    paragraphs: [
      'Para dúvidas, reclamações ou solicitações relacionadas a estes Termos, entre em contato pelo e-mail: contato@pratilera.app.br',
    ],
  },
];

// ─── Política de Privacidade ─────────────────────────────────────────────────

export const PRIVACY_INTRO =
  'Esta Política de Privacidade descreve como a Keldra Tecnologia LTDA, CNPJ nº 66.274.795/0001-34 ("Pratilera"), na qualidade de controladora dos dados pessoais, coleta, trata, armazena e compartilha informações dos usuários do aplicativo Pratilera.\n\n' +
  'Estamos em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD — Lei nº 13.709/2018), o Marco Civil da Internet (Lei nº 12.965/2014) e demais legislações aplicáveis.';

export const PRIVACY_SECTIONS: LegalSection[] = [
  {
    heading: '1. DADOS QUE COLETAMOS',
    paragraphs: ['1.1. Dados fornecidos pelo Usuário:'],
    items: [
      { text: 'Nome completo, e-mail e senha ao criar conta.' },
      { text: 'Telefone e WhatsApp (quando informados no perfil).' },
      { text: 'Documentos de identificação (CPF/CNPJ) para Anunciantes, coletados para verificação de identidade.' },
      { text: 'Endereço do estabelecimento ou evento.' },
      { text: 'Imagens e fotos enviadas para o perfil ou galeria.' },
      { text: 'Avaliações e comentários publicados na Plataforma.' },
    ],
  },
  {
    heading: '',
    paragraphs: ['1.2. Dados recebidos de terceiros:'],
    items: [
      { text: 'Login social: ao entrar com Google ou Apple, recebemos o nome e o e-mail associados a essa conta. A Apple permite ocultar o e-mail real e fornecer um endereço de redirecionamento — nesse caso, é esse endereço que utilizamos.' },
      { text: 'Pagamentos: recebemos da instituição de pagamento o identificador da cobrança, o valor, a situação e o meio utilizado. Dados completos de cartão são coletados e armazenados por ela, não por nós.' },
    ],
  },
  {
    heading: '',
    paragraphs: ['1.3. Dados coletados automaticamente:'],
    items: [
      { text: 'Identificador do dispositivo e sistema operacional.' },
      { text: 'Versão do aplicativo e informações de conexão (endereço IP).' },
      { text: 'Token de notificação, necessário para enviar avisos ao seu aparelho.' },
      { text: 'Dados de uso: telas acessadas, buscas realizadas, cliques e interações. Para Anunciantes, contabilizamos visitas ao Perfil e cliques em contato, exibidos como métricas.' },
      { text: 'Localização aproximada, apenas mediante autorização expressa, e exclusivamente para identificar em qual das cidades atendidas você está e deixá-la pré-selecionada. A autorização pode ser recusada sem perda de funcionalidades, e a localização não é usada para rastrear deslocamento nem para publicidade.' },
    ],
  },
  {
    heading: '2. FINALIDADE E BASE LEGAL DO TRATAMENTO',
    items: [
      { text: 'Criar e gerenciar a conta do Usuário — Execução de contrato (Art. 7º, V, LGPD).' },
      { text: 'Exibir perfis de negócios e conectar Consumidores a Anunciantes — Execução de contrato (Art. 7º, V).' },
      { text: 'Verificar cadastros e documentos antes da publicação — Legítimo interesse (Art. 7º, IX) e cumprimento de obrigação legal.' },
      { text: 'Processar pagamentos, assinaturas e devoluções — Execução de contrato (Art. 7º, V).' },
      { text: 'Enviar notificações e avisos operacionais sobre o serviço — Execução de contrato e legítimo interesse (Art. 7º, IX).' },
      { text: 'Personalizar resultados de busca e recomendações — Legítimo interesse (Art. 7º, IX).' },
      { text: 'Análise de uso para melhoria contínua do produto — Legítimo interesse (Art. 7º, IX).' },
      { text: 'Prevenção a fraudes e segurança da Plataforma — Legítimo interesse e cumprimento de obrigação legal.' },
      { text: 'Comunicações de marketing e novidades — Consentimento (Art. 7º, I), revogável a qualquer tempo.' },
      { text: 'Pré-seleção da cidade a partir da localização — Consentimento (Art. 7º, I), revogável nos ajustes do aparelho.' },
      { text: 'Cumprimento de obrigações legais e regulatórias — Obrigação legal (Art. 7º, II).' },
    ],
  },
  {
    heading: '3. PERFIS PUBLICADOS A PARTIR DE FONTES PÚBLICAS',
    paragraphs: [
      '3.1. Para que a Plataforma seja útil desde o primeiro dia em cada cidade, publicamos perfis de negócios com informações comerciais publicamente disponíveis: nome, categoria, endereço, telefone e horário de funcionamento.',
      '3.2. Trata-se de dados de estabelecimento, de natureza comercial e já públicos, tratados com base no legítimo interesse (Art. 7º, IX, LGPD), na medida necessária à finalidade de catálogo local.',
      '3.3. O responsável pelo negócio pode reivindicar, corrigir ou solicitar a remoção do perfil a qualquer momento, pelo aplicativo ou pelo canal indicado na seção 11.',
    ],
  },
  {
    heading: '4. COMPARTILHAMENTO DE DADOS',
    paragraphs: [
      'Não vendemos dados pessoais. Compartilhamos informações apenas nas seguintes situações:\n\n4.1. Prestadores de serviços (operadores contratados), cada um limitado à sua função:',
    ],
    items: [
      { text: 'Google (Firebase): autenticação, banco de dados, armazenamento de arquivos, notificações e análise de uso.' },
      { text: 'Google (Maps): exibição de mapas e conversão de endereço em coordenadas.' },
      { text: 'Apple: quando o Usuário utiliza o Sign in with Apple.' },
      { text: 'Asaas Gestão Financeira S.A.: processamento de cobranças, assinaturas e devoluções.' },
      { text: 'Provedor de envio de e-mails transacionais.' },
    ],
  },
  {
    heading: '',
    paragraphs: ['4.2. Outras hipóteses de compartilhamento:'],
    items: [
      { text: 'Requisição legal: quando exigido por lei, ordem judicial ou autoridade competente.' },
      { text: 'Proteção de direitos: para proteger os direitos, propriedade ou segurança do Pratilera, dos Usuários ou de terceiros.' },
      { text: 'Reorganização societária: em caso de fusão, aquisição ou venda de ativos, os dados poderão ser transferidos ao sucessor, que ficará vinculado a esta Política.' },
    ],
  },
  {
    heading: '5. RETENÇÃO DE DADOS',
    items: [
      { text: 'Conta ativa: dados mantidos enquanto a conta estiver ativa.' },
      { text: 'Após exclusão de conta: dados pessoais e arquivos enviados são excluídos em até 90 (noventa) dias, salvo obrigação legal de retenção mais longa. Perfis de estabelecimento são anonimizados, para preservar o histórico de avaliações de outros usuários.' },
      { text: 'Logs de segurança e acesso: mantidos por até 6 (seis) meses.' },
      { text: 'Dados fiscais e contábeis, incluindo registros de cobrança: mantidos pelo prazo legal aplicável (até 5 anos conforme legislação tributária), exclusivamente para essa finalidade.' },
    ],
  },
  {
    heading: '6. SEUS DIREITOS COMO TITULAR (LGPD)',
    paragraphs: ['Na qualidade de titular dos dados, você tem os seguintes direitos assegurados pela LGPD (Art. 18):'],
    items: [
      { text: 'Confirmação e acesso: confirmar a existência de tratamento e acessar seus dados pessoais.' },
      { text: 'Correção: corrigir dados incompletos, inexatos ou desatualizados.' },
      { text: 'Anonimização, bloqueio ou eliminação: de dados desnecessários, excessivos ou tratados em desconformidade com a LGPD.' },
      { text: 'Portabilidade: receber seus dados em formato estruturado e interoperável.' },
      { text: 'Eliminação: excluir dados tratados com base em seu consentimento.' },
      { text: 'Informação: saber com quais terceiros seus dados foram compartilhados.' },
      { text: 'Revogação do consentimento: a qualquer tempo, sem prejuízo da legalidade dos tratamentos realizados anteriormente.' },
      { text: 'Oposição: ao tratamento realizado com fundamento em legítimo interesse, quando em desacordo com a LGPD.' },
      { text: 'Revisão de decisões automatizadas: solicitar revisão de decisões tomadas exclusivamente com base em tratamento automatizado que afetem seus interesses.' },
    ],
  },
  {
    heading: '',
    paragraphs: [
      'Para exercer seus direitos, acesse as configurações do aplicativo (seção "Meus Dados") ou entre em contato com nosso Encarregado de Proteção de Dados (DPO) pelo e-mail: privacidade@pratilera.app.br\n\nPara atender à solicitação, podemos precisar confirmar sua identidade. Responderemos em até 15 (quinze) dias úteis, conforme exigido pela LGPD.',
    ],
  },
  {
    heading: '7. SEGURANÇA DOS DADOS',
    paragraphs: [
      'Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais, incluindo:',
    ],
    items: [
      { text: 'Autenticação segura com suporte a múltiplos fatores.' },
      { text: 'Transmissão segura de dados.' },
      { text: 'Controle rigoroso de acesso ao banco de dados.' },
      { text: 'Verificação de integridade do aplicativo para prevenir acessos não autorizados.' },
      { text: 'Acesso aos dados de produção restrito a membros autorizados da equipe.' },
    ],
  },
  {
    heading: '',
    paragraphs: [
      'Nenhum sistema é totalmente imune a incidentes. Em caso de incidente de segurança que represente risco ou dano relevante aos titulares, notificaremos a Autoridade Nacional de Proteção de Dados (ANPD) e os titulares afetados dentro dos prazos legais.',
    ],
  },
  {
    heading: '8. TRANSFERÊNCIA INTERNACIONAL DE DADOS',
    paragraphs: [
      'Os serviços do Google e da Apple podem armazenar e processar dados em servidores localizados fora do Brasil, incluindo os Estados Unidos. Esses fornecedores estão sujeitos a mecanismos de transferência internacional reconhecidos (cláusulas contratuais padrão e certificações equivalentes) e atendem aos requisitos da LGPD para transferências internacionais.',
    ],
  },
  {
    heading: '9. COOKIES E TECNOLOGIAS SIMILARES',
    paragraphs: [
      'O aplicativo utiliza ferramentas de análise de uso e desempenho para:',
    ],
    items: [
      { text: 'Manter a sessão do Usuário autenticado.' },
      { text: 'Analisar o desempenho e comportamento de uso do aplicativo.' },
      { text: 'Personalizar a experiência de navegação.' },
    ],
  },
  {
    heading: '',
    paragraphs: [
      'Você pode gerenciar as permissões de rastreamento nas configurações do seu dispositivo (iOS: Ajustes > Privacidade; Android: Configurações > Privacidade).',
    ],
  },
  {
    heading: '10. MENORES DE IDADE',
    paragraphs: [
      'O Pratilera não é direcionado a menores de 16 anos e não coleta conscientemente dados pessoais de crianças sem autorização dos responsáveis legais. Caso identifiquemos tal coleta inadvertida, os dados serão excluídos imediatamente.',
    ],
  },
  {
    heading: '11. ALTERAÇÕES A ESTA POLÍTICA',
    paragraphs: [
      'Esta Política pode ser atualizada periodicamente para refletir mudanças nos nossos serviços ou na legislação. Alterações relevantes serão comunicadas pelo aplicativo com antecedência razoável. A data da última atualização está indicada no início deste documento. O uso continuado do aplicativo após as alterações implica aceitação da nova versão.',
    ],
  },
  {
    heading: '12. CONTATO E ENCARREGADO DE PROTEÇÃO DE DADOS (DPO)',
    paragraphs: [
      'Para exercer seus direitos, esclarecer dúvidas ou apresentar reclamações sobre o tratamento de seus dados pessoais, entre em contato com nosso Encarregado (DPO):\n\nE-mail: privacidade@pratilera.app.br\n\nVocê também pode apresentar reclamação diretamente à Autoridade Nacional de Proteção de Dados (ANPD): www.gov.br/anpd',
    ],
  },
];

