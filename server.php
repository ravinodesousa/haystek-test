<?php

if (isset($_POST['page'])) {
    // Read the JSON file 
    $json = file_get_contents('data.json');

    // Decode the JSON file
    $decoded_json_data = json_decode($json, true);

    $data = array_slice($decoded_json_data, $_POST['page'] * 3, 3);
    // Display data
    echo json_encode($data);
}
