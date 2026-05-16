<?php
session_start();

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

define('HB_DATA_DIR', __DIR__ . '/data');

if (!is_dir(HB_DATA_DIR)) {
    mkdir(HB_DATA_DIR, 0777, true);
}

function hb_json_file(string $name): string {
    return HB_DATA_DIR . '/' . $name . '.json';
}

function hb_read_json(string $name, array $default = []): array {
    $file = hb_json_file($name);

    if (!file_exists($file)) {
        file_put_contents($file, json_encode($default, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
        return $default;
    }

    $content = file_get_contents($file);
    $data = json_decode($content, true);

    return is_array($data) ? $data : $default;
}

function hb_write_json(string $name, array $data): void {
    $file = hb_json_file($name);
    file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE), LOCK_EX);
}

function hb_input(): array {
    $raw = file_get_contents('php://input');
    $json = json_decode($raw, true);

    if (is_array($json)) {
        return $json;
    }

    return $_POST ?: [];
}

function hb_response(array $data, int $status = 200): void {
    http_response_code($status);
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
    exit;
}

function hb_current_user(): ?array {
    return $_SESSION['hb_user'] ?? null;
}

function hb_require_login(): array {
    $user = hb_current_user();

    if (!$user) {
        hb_response([
            'success' => false,
            'message' => 'Vous devez vous connecter.'
        ], 401);
    }

    return $user;
}

function hb_require_admin(): array {
    $user = hb_require_login();

    if (($user['role'] ?? '') !== 'admin') {
        hb_response([
            'success' => false,
            'message' => 'Accès réservé à l’administrateur.'
        ], 403);
    }

    return $user;
}

function hb_clean_string($value): string {
    return trim((string) $value);
}
