<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
// include database and object file
//include_once '../config/database.php';
//include_once '../objects/product.php';
 
// get database connection
//$database = new Database();
//$db = $database->getConnection();
 
// prepare product object
//$product = new Product($db);
 
// get product id
$data = json_decode(file_get_contents("php://input"));
 
// set product id to be deleted
//$product->id = $data->id;
 
// delete the product
//if($product->delete()){
if(delete()){	
 
    // set response code - 200 ok
    http_response_code(200);
 
    // tell the user
	// $data->id;
    echo json_encode(array("message" => "Product was deleted."));
} 
// if unable to delete the product
else{
 
    // set response code - 503 service unavailable
    http_response_code(503);
 
    // tell the user
    echo json_encode(array("message" => "Unable to delete product."));
}

// delete the product
function delete()
{

    // delete query
    //$query = "DELETE FROM " . $this->table_name . " WHERE id = ?";
 
    // prepare query
    //$stmt = $this->conn->prepare($query);
 
    // sanitize
    //$this->id=htmlspecialchars(strip_tags($this->id));
 
    // bind id of record to delete
    //$stmt->bindParam(1, $this->id);
 
    // execute query
    //if($stmt->execute()){
        return true;
    //}
 
    //return false;
}

?>