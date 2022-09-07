SELECT 
    nome_produto,
    preco_produto,
    tipo_produto,
    
	IF (tipo_produto = 'i',
        "Importado", 
        IF(tipo_produto = 'n',
            'Nacional',
            'Não informado')) 
    AS Retorno
   
FROM
    tb_produto;




