<?php 
class QueryBuilder {

    protected $db;

    public function __construct($db){
        $this->db = $db;
    }

    public function selectAll($table){
        $sql = "SELECT * FROM {$table}";
        $query = $this->db->prepare($sql); // misli se na privatnu varijablu $db klase QueryBuilder-a
        $query->execute();
        // return $query->fetchAll(PDO::FETCH_OBJ);
        return $query->fetchAll(PDO::FETCH_ASSOC);
    }    

    public function save($datas){
        foreach ($datas as $data) {
            $sql = "INSERT INTO users VALUES (NULL, ?, ?, ?)";
            $query = $this->db->prepare($sql);
            $query->execute([$data->name, $data->username, $data->email]);
        }
        if ($query) {
            return "Success!!!";
        } else {
            return "Error!!!";
        }
    }
}
?>