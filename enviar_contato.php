<?php
declare(strict_types=1);

/**
 * Endpoint de envio de contato - Amanda Produtos Naturais
 * Configuracao:
 *   1. Defina o email de destino em $PARA.
 *   2. Garanta que o servidor tenha um MTA (ex.: sendmail/postfix) configurado
 *      ou use um SMTP (biblioteca PHPMailer) caso o mail() nao funcione.
 * Respostas: JSON { "status": "ok"|"erro", "message": "..." }
 */

$PARA = 'contato@amandanaturais.com.br';
$ASSUNTO = 'Novo contato pelo site - Amanda Produtos Naturais';

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['status' => 'erro', 'message' => 'Metodo nao permitido.']);
    exit;
}

function responder(int $codigo, bool $ok, string $mensagem): void {
    http_response_code($codigo);
    echo json_encode(['status' => $ok ? 'ok' : 'erro', 'message' => $mensagem], JSON_UNESCAPED_UNICODE);
    exit;
}

function comprimento(string $texto): int {
    return function_exists('mb_strlen') ? mb_strlen($texto) : strlen($texto);
}

if (isset($_SESSION['bloqueado_contato']) && time() < $_SESSION['bloqueado_contato']) {
    responder(429, false, 'Muitos envios em pouco tempo. Tente novamente em alguns segundos.');
}

if (!empty($_POST['website'])) {
    responder(200, true, 'Mensagem enviada com sucesso!');
}

if (empty($_POST['form_tempo']) || !is_numeric($_POST['form_tempo'])) {
    responder(422, false, 'Sessao de formulario invalida. Recarregue a pagina.');
}

$tempoMinimo = 3.0;
$tempoInicio = (float)$_POST['form_tempo'];
if ((microtime(true) - $tempoInicio) < $tempoMinimo) {
    responder(422, false, 'Formulario enviado rapido demais. Aguarde alguns segundos e tente novamente.');
}

$nome = trim((string)($_POST['nome'] ?? ''));
$email = trim((string)($_POST['email'] ?? ''));
$telefone = trim((string)($_POST['telefone'] ?? ''));
$mensagem = trim((string)($_POST['mensagem'] ?? ''));

if (comprimento($nome) < 3 || comprimento($nome) > 100) {
    responder(422, false, 'O nome deve ter entre 3 e 100 caracteres.');
}
if (!preg_match('/^[\p{L}\s.\'-]+$/u', $nome)) {
    responder(422, false, 'O nome contem caracteres invalidos.');
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL) || comprimento($email) > 120) {
    responder(422, false, 'Informe um email valido.');
}
$telefoneLimpo = preg_replace('/\D/', '', $telefone);
if (strlen((string)$telefoneLimpo) < 10 || strlen((string)$telefoneLimpo) > 11) {
    responder(422, false, 'O telefone deve possuir DDD.');
}
if (comprimento($mensagem) < 20 || comprimento($mensagem) > 1000) {
    responder(422, false, 'A mensagem deve ter entre 20 e 1000 caracteres.');
}

$limpar = static function (string $valor): string {
    return str_replace(["\r", "\n"], '', $valor);
};

$nome = $limpar($nome);
$email = $limpar($email);

$corpo = "Nome: $nome\n"
    . "Email: $email\n"
    . "Telefone: $telefone\n"
    . "------------------------------\n"
    . "Mensagem:\n$mensagem\n";

$headers = [
    'From: Amanda Site <no-reply@' . (string)($_SERVER['SERVER_NAME'] ?? 'localhost') . '>',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=utf-8',
    'MIME-Version: 1.0'
];

$enviado = @mail($PARA, $ASSUNTO, $corpo, implode("\r\n", $headers));

if ($enviado) {
    $_SESSION['bloqueado_contato'] = time() + 60;
    responder(200, true, 'Mensagem enviada com sucesso! Entraremos em contato em breve.');
}

responder(500, false, 'Nao foi possivel enviar a mensagem agora. Tente novamente em instantes.');