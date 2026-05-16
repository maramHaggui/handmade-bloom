<?php
require_once __DIR__ . '/config.php';

const HB_ADMIN_EMAIL = 'admin@handmade.com';
const HB_ADMIN_PASSWORD = 'admin123';

$input = hb_input();
$action = $_GET['action'] ?? ($input['action'] ?? 'current');

if ($action === 'current') {
    $user = hb_current_user();
    hb_response([
        'success' => true,
        'loggedIn' => (bool) $user,
        'user' => $user
    ]);
}

if ($action === 'register') {
    $name = hb_clean_string($input['name'] ?? '');
    $email = strtolower(hb_clean_string($input['email'] ?? ''));
    $password = (string) ($input['password'] ?? '');
    $confirmPassword = (string) ($input['confirmPassword'] ?? '');

    if ($name === '' || $email === '' || $password === '' || $confirmPassword === '') {
        hb_response(['success' => false, 'message' => 'Veuillez remplir tous les champs.'], 400);
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        hb_response(['success' => false, 'message' => 'Adresse email invalide.'], 400);
    }

    if (strlen($password) < 6) {
        hb_response(['success' => false, 'message' => 'Le mot de passe doit contenir au moins 6 caractères.'], 400);
    }

    if ($password !== $confirmPassword) {
        hb_response(['success' => false, 'message' => 'Les mots de passe ne sont pas identiques.'], 400);
    }

    if ($email === HB_ADMIN_EMAIL) {
        hb_response(['success' => false, 'message' => 'Cet email est réservé à l’administrateur.'], 400);
    }

    $users = hb_read_json('users');

    foreach ($users as $user) {
        if (strtolower($user['email'] ?? '') === $email) {
            hb_response(['success' => false, 'message' => 'Cet email existe déjà.'], 409);
        }
    }

    $newUser = [
        'id' => time() . rand(100, 999),
        'name' => $name,
        'email' => $email,
        'password' => password_hash($password, PASSWORD_DEFAULT),
        'role' => 'client',
        'createdAt' => date('Y-m-d H:i:s')
    ];

    $users[] = $newUser;
    hb_write_json('users', $users);

    unset($newUser['password']);

    hb_response([
        'success' => true,
        'message' => 'Compte créé avec succès 💖',
        'user' => $newUser
    ]);
}

if ($action === 'login') {
    $email = strtolower(hb_clean_string($input['email'] ?? ''));
    $password = (string) ($input['password'] ?? '');

    if ($email === '' || $password === '') {
        hb_response(['success' => false, 'message' => 'Veuillez remplir tous les champs.'], 400);
    }

    if ($email === HB_ADMIN_EMAIL && $password === HB_ADMIN_PASSWORD) {
        $admin = [
            'id' => 1,
            'name' => 'Admin Handmade Bloom',
            'email' => HB_ADMIN_EMAIL,
            'role' => 'admin'
        ];

        $_SESSION['hb_user'] = $admin;

        hb_response([
            'success' => true,
            'message' => 'Connexion admin réussie 💖',
            'user' => $admin
        ]);
    }

    $users = hb_read_json('users');

    foreach ($users as $user) {
        if (strtolower($user['email'] ?? '') === $email && password_verify($password, $user['password'] ?? '')) {
            $safeUser = $user;
            unset($safeUser['password']);

            $_SESSION['hb_user'] = $safeUser;

            hb_response([
                'success' => true,
                'message' => 'Connexion réussie 💖',
                'user' => $safeUser
            ]);
        }
    }

    hb_response(['success' => false, 'message' => 'Email ou mot de passe incorrect.'], 401);
}

if ($action === 'logout') {
    $_SESSION = [];
    session_destroy();

    hb_response([
        'success' => true,
        'message' => 'Déconnexion réussie.'
    ]);
}

hb_response(['success' => false, 'message' => 'Action inconnue.'], 400);
