<?php
require_once __DIR__ . '/config.php';

$method = $_SERVER['REQUEST_METHOD'];
$input = hb_input();
$products = hb_read_json('products');

if ($method === 'GET') {
    hb_response([
        'success' => true,
        'products' => array_values($products)
    ]);
}

if ($method === 'POST') {
    hb_require_admin();

    $name = hb_clean_string($input['name'] ?? '');
    $price = (float) ($input['price'] ?? 0);
    $category = hb_clean_string($input['category'] ?? '');
    $img = hb_clean_string($input['img'] ?? '');
    $desc = hb_clean_string($input['desc'] ?? '');
    $badge = hb_clean_string($input['badge'] ?? 'New');
    $rating = hb_clean_string($input['rating'] ?? '4.8');

    if ($name === '' || $price <= 0 || $category === '' || $img === '' || $desc === '') {
        hb_response(['success' => false, 'message' => 'Veuillez remplir tous les champs du produit.'], 400);
    }

    $newProduct = [
        'id' => time() . rand(100, 999),
        'name' => $name,
        'price' => $price,
        'category' => $category,
        'img' => $img,
        'desc' => $desc,
        'badge' => $badge,
        'rating' => $rating
    ];

    $products[] = $newProduct;
    hb_write_json('products', $products);

    hb_response([
        'success' => true,
        'message' => 'Produit ajouté avec succès.',
        'product' => $newProduct
    ]);
}

if ($method === 'PUT') {
    hb_require_admin();

    $id = (string) ($input['id'] ?? '');

    if ($id === '') {
        hb_response(['success' => false, 'message' => 'ID produit manquant.'], 400);
    }

    $found = false;

    foreach ($products as &$product) {
        if ((string) ($product['id'] ?? '') === $id) {
            $product['name'] = hb_clean_string($input['name'] ?? $product['name']);
            $product['price'] = (float) ($input['price'] ?? $product['price']);
            $product['category'] = hb_clean_string($input['category'] ?? $product['category']);
            $product['img'] = hb_clean_string($input['img'] ?? $product['img']);
            $product['desc'] = hb_clean_string($input['desc'] ?? $product['desc']);
            $product['badge'] = hb_clean_string($input['badge'] ?? ($product['badge'] ?? 'New'));
            $product['rating'] = hb_clean_string($input['rating'] ?? ($product['rating'] ?? '4.8'));
            $found = true;
            break;
        }
    }

    if (!$found) {
        hb_response(['success' => false, 'message' => 'Produit introuvable.'], 404);
    }

    hb_write_json('products', $products);

    hb_response(['success' => true, 'message' => 'Produit modifié avec succès.']);
}

if ($method === 'DELETE') {
    hb_require_admin();

    $id = (string) ($_GET['id'] ?? ($input['id'] ?? ''));

    if ($id === '') {
        hb_response(['success' => false, 'message' => 'ID produit manquant.'], 400);
    }

    $before = count($products);
    $products = array_values(array_filter($products, function ($product) use ($id) {
        return (string) ($product['id'] ?? '') !== $id;
    }));

    if (count($products) === $before) {
        hb_response(['success' => false, 'message' => 'Produit introuvable.'], 404);
    }

    hb_write_json('products', $products);

    hb_response(['success' => true, 'message' => 'Produit supprimé avec succès.']);
}

hb_response(['success' => false, 'message' => 'Méthode non autorisée.'], 405);
