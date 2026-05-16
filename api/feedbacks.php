<?php
require_once __DIR__ . '/config.php';

$method = $_SERVER['REQUEST_METHOD'];
$input = hb_input();
$feedbacks = hb_read_json('feedbacks');

if ($method === 'GET') {
    hb_response([
        'success' => true,
        'feedbacks' => array_values($feedbacks)
    ]);
}

if ($method === 'POST') {
    $name = hb_clean_string($input['name'] ?? '');
    $rating = hb_clean_string($input['rating'] ?? '★★★★★');
    $text = hb_clean_string($input['text'] ?? '');

    if ($name === '' || $text === '') {
        hb_response(['success' => false, 'message' => 'Veuillez remplir le feedback.'], 400);
    }

    $feedback = [
        'id' => time() . rand(100, 999),
        'name' => $name,
        'rating' => $rating,
        'text' => $text,
        'date' => date('d/m/Y'),
        'createdAt' => date('Y-m-d H:i:s')
    ];

    $feedbacks[] = $feedback;
    hb_write_json('feedbacks', $feedbacks);

    hb_response([
        'success' => true,
        'message' => 'Feedback ajouté 💕',
        'feedback' => $feedback
    ]);
}

if ($method === 'DELETE') {
    hb_require_admin();

    $id = (string) ($_GET['id'] ?? ($input['id'] ?? ''));

    if ($id === '') {
        hb_response(['success' => false, 'message' => 'ID feedback manquant.'], 400);
    }

    $feedbacks = array_values(array_filter($feedbacks, function ($feedback) use ($id) {
        return (string) ($feedback['id'] ?? '') !== $id;
    }));

    hb_write_json('feedbacks', $feedbacks);

    hb_response(['success' => true, 'message' => 'Feedback supprimé.']);
}

hb_response(['success' => false, 'message' => 'Méthode non autorisée.'], 405);
