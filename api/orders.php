<?php
require_once __DIR__ . '/config.php';

$method = $_SERVER['REQUEST_METHOD'];
$input = hb_input();
$orders = hb_read_json('orders');

if ($method === 'GET') {
    hb_require_admin();

    hb_response([
        'success' => true,
        'orders' => array_values($orders)
    ]);
}

if ($method === 'POST') {
    $user = hb_require_login();

    if (($user['role'] ?? '') === 'admin') {
        hb_response(['success' => false, 'message' => 'L’admin ne peut pas passer une commande.'], 403);
    }

    $client = hb_clean_string($input['client'] ?? '');
    $telephone = hb_clean_string($input['telephone'] ?? '');
    $adresse = hb_clean_string($input['adresse'] ?? '');
    $livraison = hb_clean_string($input['livraison'] ?? '');
    $note = hb_clean_string($input['note'] ?? '');
    $panier = $input['panier'] ?? [];
    $sousTotal = (float) ($input['sousTotal'] ?? 0);
    $fraisLivraison = (float) ($input['fraisLivraison'] ?? 0);
    $total = (float) ($input['total'] ?? 0);

    if ($client === '' || $telephone === '' || $adresse === '' || $livraison === '' || !is_array($panier) || count($panier) === 0) {
        hb_response(['success' => false, 'message' => 'Informations de commande incomplètes.'], 400);
    }

    $order = [
        'id' => time() . rand(100, 999),
        'clientId' => $user['id'],
        'clientName' => $user['name'],
        'clientEmail' => $user['email'],
        'client' => $client,
        'telephone' => $telephone,
        'adresse' => $adresse,
        'livraison' => $livraison,
        'note' => $note,
        'panier' => $panier,
        'sousTotal' => $sousTotal,
        'fraisLivraison' => $fraisLivraison,
        'total' => $total,
        'statut' => 'en attente',
        'date' => date('d/m/Y'),
        'createdAt' => date('Y-m-d H:i:s')
    ];

    $orders[] = $order;
    hb_write_json('orders', $orders);

    hb_response([
        'success' => true,
        'message' => 'Commande confirmée avec succès 💖',
        'order' => $order
    ]);
}

if ($method === 'PUT') {
    hb_require_admin();

    $id = (string) ($input['id'] ?? '');
    $statut = hb_clean_string($input['statut'] ?? '');

    if ($id === '' || $statut === '') {
        hb_response(['success' => false, 'message' => 'ID ou statut manquant.'], 400);
    }

    foreach ($orders as &$order) {
        if ((string) ($order['id'] ?? '') === $id) {
            $order['statut'] = $statut;
            hb_write_json('orders', $orders);
            hb_response(['success' => true, 'message' => 'Statut modifié.']);
        }
    }

    hb_response(['success' => false, 'message' => 'Commande introuvable.'], 404);
}

hb_response(['success' => false, 'message' => 'Méthode non autorisée.'], 405);
