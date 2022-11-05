--* INICIO - USUARIOS

-- CREACION DE LA TABLA
DROP TABLE IF EXISTS usuarios;
CREATE TABLE usuarios(
    id_usuario SERIAL PRIMARY KEY,
    usuario VARCHAR(250) NOT NULL UNIQUE,
    biografia TEXT NOT NULL,
    edad SMALLINT NOT NULL DEFAULT 0,
    genero CHAR(1) NOT NULL,
    CONSTRAINT chk_genero CHECK (genero IN ('M', 'F'))
);

-- DATOS DE PRUEBA
INSERT INTO usuarios(usuario, biografia, edad, genero) VALUES
('lestherxm', 'This is the beggining',21,'M'),
('jorgedv', 'This is the beggining',21,'M'),
('arnold', 'This is the beggining',21,'M');

--* FINAL - USUARIOS